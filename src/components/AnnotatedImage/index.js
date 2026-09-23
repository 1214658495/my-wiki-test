import React from 'react';
import styles from './styles.module.css';

/**
 * Image with numbered callouts rendered as an overlay, so the labels live in
 * the (per-locale) Markdown instead of being baked into the image.
 *
 * Coordinates are percentages of the image size (0-100).
 * Each item is one of:
 *   {box: [x, y, w, h], text}        highlight a region; badge at its top-left corner
 *                                    (optional `badge: [x, y]` moves the badge)
 *   {at: [x, y], label: [x, y], text} point at a small target via a leader line
 *   {at: [x, y], text}                badge placed directly on the point
 */
export default function AnnotatedImage({src, alt, items = [], maxWidth, caption}) {
  return (
    <figure className={styles.figure} style={maxWidth ? {maxWidth} : undefined}>
      <div className={styles.canvas}>
        <img src={src} alt={alt} className={styles.image} loading="lazy" />
        <svg className={styles.lines} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {items.map((item, i) =>
            item.at && item.label ? (
              <line
                key={i}
                x1={item.label[0]}
                y1={item.label[1]}
                x2={item.at[0]}
                y2={item.at[1]}
                className={styles.leader}
              />
            ) : null,
          )}
        </svg>
        {items.map((item, i) => {
          const n = i + 1;
          if (item.box) {
            const [x, y, w, h] = item.box;
            const [bx, by] = item.badge || [x, y];
            return (
              <React.Fragment key={i}>
                <span
                  className={styles.box}
                  style={{left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%`}}
                  aria-hidden="true"
                />
                <span className={styles.badge} style={{left: `${bx}%`, top: `${by}%`}} aria-hidden="true">
                  {n}
                </span>
              </React.Fragment>
            );
          }
          const [ax, ay] = item.at;
          const [bx, by] = item.label || item.at;
          return (
            <React.Fragment key={i}>
              {item.label && (
                <span className={styles.target} style={{left: `${ax}%`, top: `${ay}%`}} aria-hidden="true" />
              )}
              <span className={styles.badge} style={{left: `${bx}%`, top: `${by}%`}} aria-hidden="true">
                {n}
              </span>
            </React.Fragment>
          );
        })}
      </div>
      {(items.length > 0 || caption) && (
        <figcaption className={styles.caption}>
          {caption && <div className={styles.title}>{caption}</div>}
          {items.length > 0 && (
            <ol className={styles.legend}>
              {items.map((item, i) => (
                <li key={i}>
                  <span className={styles.legendBadge}>{i + 1}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ol>
          )}
        </figcaption>
      )}
    </figure>
  );
}
