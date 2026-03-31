import React, {useEffect, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {COZE_CN_BASE_URL, CozeAPI, RoleType} from '@coze/api';

const COZE_BOT_ID = '7610354374371622946';
let cozeClient = null;

function ensureVisitorId() {
  let visitorId = localStorage.getItem('sensing_wiki_user_id');
  if (!visitorId) {
    visitorId = 'user_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('sensing_wiki_user_id', visitorId);
  }
  return visitorId;
}

// 🚨 核心修复：更健壮的去后端要票逻辑
async function fetchCozeToken(visitorId) {
  try {
    const query = new URLSearchParams({
      visitorId,
      userId: visitorId,
    });
    // 请确保你们的网管已经将 ai-api.sensing-world.com 的 CNAME 指向了 Vercel！
    const response = await fetch(`https://ai-api.sensing-world.com/api/coze?${query.toString()}`);
    if (!response.ok) {
      console.error("Vercel HTTP 状态码错误:", response.status);
      return null;
    }
    const data = await response.json();
    
    // 兼容多种 Vercel 可能返回的 JSON 结构
    if (data?.token) return data.token;
    if (data?.access_token) return data.access_token;
    if (data?.success && data?.data?.token) return data.data.token;
    
    return null;
  } catch (error) {
    console.error('网络请求失败:', error);
    return null;
  }
}

function getCozeClient() {
  if (cozeClient) {
    return cozeClient;
  }
  const CozeAPIClass = CozeAPI;
  if (typeof CozeAPIClass !== 'function') {
    throw new Error('Coze SDK 初始化失败，请检查是否正确安装 @coze/api');
  }
  
  // 🚨 核心修复：CozeAPI 实例化的正确语法
  cozeClient = new CozeAPIClass({
    // 必须传入一个返回 Token 字符串的异步函数
    token: async () => {
      const token = await fetchCozeToken(ensureVisitorId());
      if (!token) {
        throw new Error('无法从服务器获取安全凭证 (Token)');
      }
      return token;
    },
    baseURL: COZE_CN_BASE_URL,
    // 🚨 在纯前端环境调用 CozeAPI 必须开启此选项，否则会报安全拦截错误
    allowPersonalAccessTokenInBrowser: true, 
  });
  
  return cozeClient;
}

function normalizeUrlToken(rawUrl) {
  const matched = rawUrl.match(/[),.;，。；）]+$/);
  const trailing = matched ? matched[0] : '';
  const href = trimUrlPunctuation(rawUrl);
  return {href, trailing};
}

function trimUrlPunctuation(url) {
  return url.replace(/[),.;，。；）]+$/, '');
}

function renderInlineContent(text, keyPrefix) {
  const pattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|\*\*(.+?)\*\*|`([^`]+)`|(https?:\/\/[^\s]+)/g;
  const nodes =[];
  let lastIndex = 0;
  let matchedAny = false;
  for (const match of text.matchAll(pattern)) {
    matchedAny = true;
    const matchIndex = match.index || 0;
    if (matchIndex > lastIndex) {
      nodes.push(
        <React.Fragment key={`${keyPrefix}-text-${lastIndex}`}>
          {text.slice(lastIndex, matchIndex)}
        </React.Fragment>,
      );
    }
    if (match[1] && match[2]) {
      nodes.push(
        <a
          key={`${keyPrefix}-mdlink-${matchIndex}`}
          href={trimUrlPunctuation(match[2])}
          target="_blank"
          rel="noopener noreferrer"
          style={{color: '#00a695', textDecoration: 'none', fontWeight: 'bold'}}>
          {match[1]}
        </a>,
      );
    } else if (match[3]) {
      nodes.push(
        <strong key={`${keyPrefix}-strong-${matchIndex}`} style={{fontWeight: 700, color: '#333'}}>
          {match[3]}
        </strong>,
      );
    } else if (match[4]) {
      nodes.push(
        <code
          key={`${keyPrefix}-code-${matchIndex}`}
          style={{
            background: '#f1f5f9',
            borderRadius: 6,
            padding: '0.1rem 0.35rem',
            fontSize: '0.94em',
          }}>
          {match[4]}
        </code>,
      );
    } else if (match[5]) {
      const {href, trailing} = normalizeUrlToken(match[5]);
      nodes.push(
        <a
          key={`${keyPrefix}-url-${matchIndex}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{color: '#00a695', textDecoration: 'underline'}}>
          {href}
        </a>,
      );
      if (trailing) {
        nodes.push(
          <React.Fragment key={`${keyPrefix}-trail-${matchIndex}`}>
            {trailing}
          </React.Fragment>,
        );
      }
    }
    lastIndex = matchIndex + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(
      <React.Fragment key={`${keyPrefix}-tail-${lastIndex}`}>
        {text.slice(lastIndex)}
      </React.Fragment>,
    );
  }
  if (!matchedAny) {
    return text;
  }
  return nodes;
}

function renderAssistantContent(content) {
  const lines = content.split('\n');
  const blocks =[];
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    const trimmedLine = line.trim();
    if (!trimmedLine) {
      blocks.push(<div key={`space-${index}`} style={{height: '0.75rem'}} />);
      index += 1;
      continue;
    }
    const headingMatch = trimmedLine.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const headingStyles = {
        1: {fontSize: '1.5rem', fontWeight: 700},
        2: {fontSize: '1.3rem', fontWeight: 700},
        3: {fontSize: '1.1rem', fontWeight: 700},
        4: {fontSize: '1.05rem', fontWeight: 600},
        5: {fontSize: '1rem', fontWeight: 600},
        6: {fontSize: '0.95rem', fontWeight: 600},
      };
      blocks.push(
        <div
          key={`heading-${index}`}
          style={{
            margin: '0.8rem 0 0.4rem',
            lineHeight: 1.5,
            ...(headingStyles[level] || headingStyles[6]),
          }}>
          {renderInlineContent(headingMatch[2], `heading-${index}`)}
        </div>,
      );
      index += 1;
      continue;
    }
    if (/^[-*]\s+/.test(trimmedLine)) {
      const listItems =[];
      let listCursor = index;
      while (listCursor < lines.length && /^[-*]\s+/.test(lines[listCursor].trim())) {
        listItems.push(lines[listCursor].trim().replace(/^[-*]\s+/, ''));
        listCursor += 1;
      }
      blocks.push(
        <ul key={`list-${index}`} style={{margin: '0.5rem 0', paddingLeft: '1.5rem'}}>
          {listItems.map((itemText, itemIndex) => (
            <li key={`list-item-${index}-${itemIndex}`} style={{marginBottom: '0.3rem', lineHeight: 1.6}}>
              {renderInlineContent(itemText, `list-${index}-${itemIndex}`)}
            </li>
          ))}
        </ul>,
      );
      index = listCursor;
      continue;
    }
    blocks.push(
      <p key={`paragraph-${index}`} style={{margin: '0.3rem 0', lineHeight: 1.7}}>
        {renderInlineContent(line, `paragraph-${index}`)}
      </p>,
    );
    index += 1;
  }
  return blocks;
}

export default function AIHomePanel() {
  const {siteConfig} = useDocusaurusContext();
  const[prompt, setPrompt] = useState('');
  const [conversationId, setConversationId] = useState('');
  const[isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState([]);
  
  const quickQuestions =[
    'Key features of GMSL2 cameras?',
    'Jetson platform setup guide?',
    'Guide for acquiring intrinsic parameters?',
    'Camera trigger synchronization framework?',
  ];

  const sendMessage = async (content) => {
    if (!content || isSending) {
      return;
    }
    setMessages((prev) => [...prev, {role: 'user', content}]);
    setPrompt('');
    setIsSending(true);
    
    try {
      const client = getCozeClient();
      const response = await client.chat.createAndPoll({
        bot_id: COZE_BOT_ID,
        user_id: ensureVisitorId(),
        conversation_id: conversationId || undefined,
        additional_messages:[{role: RoleType.User, content: content, content_type: 'text'}],
      });
      
      if (response?.chat?.conversation_id) {
        setConversationId(response.chat.conversation_id);
      }
      
      const answer = (response?.messages ||[])
        .filter((item) => item.role === RoleType.Assistant && item.type === 'answer' && item.content)
        .map((item) => item.content)
        .join('\n\n')
        .trim();
        
      setMessages((prev) =>[
        ...prev,
        {role: 'assistant', content: answer || 'I am sorry, but I could not retrieve an answer.'},
      ]);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Request failed.';
      setMessages((prev) =>[...prev, {role: 'assistant', content: `⚠️ Error: ${errorMessage}`}]);
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await sendMessage(prompt.trim());
  };

  const handleNewChat = () => {
    if (messages.length === 0 || isSending) {
      return;
    }
    setMessages([]);
    setPrompt('');
    setConversationId('');
  };

  const hasStartedChat = messages.length > 0 || isSending;
  const canCreateNewChat = messages.length > 0 && !isSending;

  useEffect(() => {
    document.body.classList.add('ai-home-page');
    return () => {
      document.body.classList.remove('ai-home-page');
    };
  },[]);
return (
    <>
      <section
        style={{
          width: '100%',
          padding: '0.5rem 0 1rem',
          backgroundColor: '#ffffff'
        }}>
        <style>
          {`
            body.ai-home-page .theme-doc-breadcrumbs,
            body.ai-home-page nav[aria-label='Breadcrumbs'],
            body.ai-home-page[class*='breadcrumbsContainer'],
            body.ai-home-page [class*='breadcrumbs'],
            body.ai-home-page .theme-edit-this-page,
            body.ai-home-page .pagination-nav,
            body.ai-home-page .theme-doc-footer,
            body.ai-home-page footer.footer {
              display: none !important;
            }
            body.ai-home-page .container.padding-top--md {
              max-width: 100% !important;
              padding-top: 0 !important;
            }
            body.ai-home-page article {
              max-width: 100% !important;
            }
            body.ai-home-page main[class*='docMainContainer'] {
              width: 100% !important;
            }
            /* 输入框光标颜色 */
            .sensing-ai-input:focus {
              outline: none;
            }
            .sensing-ai-dots {
              display: inline-flex;
              align-items: center;
              margin-left: 2px;
            }
            .sensing-ai-dots span {
              opacity: 0.2;
              animation: sensing-ai-dot-fade 1.2s infinite;
            }
            .sensing-ai-dots span:nth-child(2) {
              animation-delay: 0.2s;
            }
            .sensing-ai-dots span:nth-child(3) {
              animation-delay: 0.4s;
            }
            @keyframes sensing-ai-dot-fade {
              0%, 20% {
                opacity: 0.2;
              }
              50% {
                opacity: 1;
              }
              100% {
                opacity: 0.2;
              }
            }
          `}
        </style>
        <div
          style={{
            maxWidth: 1020,
            margin: '0 auto',
            minHeight: 'calc(100vh - 130px)',
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: '1rem',
          }}>
          {!hasStartedChat ? (
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 0 6.5rem',
              }}>
              <h1 style={{fontSize: '3.5rem', marginBottom: '1rem', color: '#1c1e21', fontWeight: 700, display: 'flex', alignItems: 'center'}}>
                Wiki <span style={{color: '#00a695', marginLeft: '12px'}}>AI</span>
                <span style={{
                  fontSize: '1rem',          // 字体调小
                  backgroundColor: '#f0f0f0', // 浅灰色背景
                  color: '#666',             // 深灰色文字
                  padding: '4px 8px',        // 内边距
                  borderRadius: '6px',       // 圆角
                  marginLeft: '16px',        // 与 AI 的间距
                  fontWeight: 500,           // 字重稍微减弱
                  verticalAlign: 'middle',   // 垂直居中
                  lineHeight: '1'
                }}>
                  BETA
                </span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2.5rem' }}>
                Wiki AI is currently in Beta. Responses may be inaccurate.
                {/* Your Ultimate Technical Expert & Data Center */}
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.7rem',
                  justifyContent: 'center',
                  maxWidth: 760,
                }}>
                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => sendMessage(question)}
                    disabled={isSending}
                    style={{
                      border: '1px solid #e5e7eb',
                      background: '#ffffff',
                      borderRadius: 999,
                      padding: '0.62rem 1.2rem',
                      color: '#4b5563',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      transition: 'all 0.2s',
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.borderColor = '#00a695'; e.currentTarget.style.color = '#00a695'; }}
                    onMouseOut={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#4b5563'; }}
                    >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                textAlign: 'left',
                padding: '1.5rem 0 6.5rem',
              }}>
              <h1 style={{fontSize: '2rem', marginBottom: '2rem', textAlign: 'center'}}>Wiki AI<span style={{
                  fontSize: '1rem',          // 字体调小
                  backgroundColor: '#f0f0f0', // 浅灰色背景
                  color: '#666',             // 深灰色文字
                  padding: '4px 8px',        // 内边距
                  borderRadius: '6px',       // 圆角
                  marginLeft: '16px',        // 与 AI 的间距
                  fontWeight: 500,           // 字重稍微减弱
                  verticalAlign: 'middle',   // 垂直居中
                  lineHeight: '1'
                }}>
                  BETA
                </span>
                </h1>
              {messages.map((item, index) => (
                <div
                  key={`${item.role}-${index}`}
                  style={{
                    display: 'flex',
                    justifyContent: item.role === 'user' ? 'flex-end' : 'flex-start',
                    marginBottom: '1.5rem',
                  }}>
                  <div
                    style={{
                      maxWidth: item.role === 'user' ? '72%' : '82%',
                      borderRadius: item.role === 'user' ? '18px 18px 0 18px' : '0 18px 18px 18px',
                      padding: item.role === 'user' ? '0.8rem 1.2rem' : '0.5rem 1rem',
                      whiteSpace: 'pre-wrap',
                      lineHeight: 1.6,
                      fontSize: '1.05rem',
                      background: item.role === 'user' ? '#f3f4f6' : '#ffffff',
                      boxShadow: item.role === 'assistant' ? '0 2px 12px rgba(0,0,0,0.04)' : 'none',
                      color: '#111827',
                    }}>
                    {item.role === 'assistant' ? renderAssistantContent(item.content) : item.content}
                  </div>
                </div>
              ))}
              {isSending ? (
                <div style={{display: 'flex', justifyContent: 'flex-start', marginBottom: '1.5rem'}}>
                  <div style={{ padding: '0.5rem 1rem', color: '#6b7280', fontSize: '0.95rem', fontStyle: 'italic' }}>
                    Generating response
                    <span className="sensing-ai-dots">
                      <span>.</span>
                      <span>.</span>
                      <span>.</span>
                    </span>
                  </div>
                </div>
              ) : null}
            </div>
          )}
          <div
            style={{
              display: 'flex',
              gap: '0.65rem',
              alignItems: 'center',
              position: 'sticky',
              bottom: 16,
              width: '100%',
              zIndex: 30,
            }}>
            <button
              type="button"
              onClick={handleNewChat}
              disabled={!canCreateNewChat}
              aria-label="New chat"
              style={{
                border: canCreateNewChat ? '1px solid #b2f0eb' : '1px solid #e5e7eb',
                background: canCreateNewChat ? '#e6fcfb' : '#f3f4f6',
                borderRadius: 999,
                width: 46,
                height: 46,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: canCreateNewChat ? 'pointer' : 'not-allowed',
                flexShrink: 0,
                color: canCreateNewChat ? '#00a695' : '#9ca3af',
                boxShadow: canCreateNewChat ? '0 2px 8px rgba(0, 210, 193, 0.2)' : 'none',
              }}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
                <path d="M6.2 6.5h8.3a2.2 2.2 0 0 1 2.2 2.2v5a2.2 2.2 0 0 1-2.2 2.2H9.7l-2.4 2.1v-2.1H6.2A2.2 2.2 0 0 1 4 13.7v-5a2.2 2.2 0 0 1 2.2-2.2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.6 10.1h5.6M7.6 12.4h4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="17.6" cy="6.8" r="3.2" fill={canCreateNewChat ? '#00D2C1' : '#9ca3af'} />
                <path d="M17.6 5.6v2.4M16.4 6.8h2.4" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" />
              </svg>
            </button>
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                gap: '0.8rem',
                alignItems: 'center',
                padding: '0.6rem 0.8rem',
                border: '1px solid #e5e7eb',
                borderRadius: 26,
                background: '#fff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                width: '100%',
              }}>
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder='Ask about specs, setups, troubleshooting...'
              className="sensing-ai-input"
              style={{
                flex: 1,
                border: 'none',
                background: 'transparent',
                padding: '0.5rem 0.8rem',
                fontSize: '1.05rem',
              }}
            />
            <button
              type="submit"
              disabled={isSending}
              style={{
                borderRadius: 999, 
                padding: '0.65rem 1.4rem', 
                backgroundColor: isSending ? '#9ca3af' : '#00a695', 
                color: 'white', 
                border: 'none', 
                fontWeight: 'bold',
                cursor: isSending ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.2s'
              }}>
              {isSending ? '...' : 'Send'}
            </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
