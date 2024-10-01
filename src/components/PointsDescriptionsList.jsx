import React, { useEffect, useRef, useState } from 'react';

const PointsDescriptionsList = ({ points, onFocusIndexChange }) => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  itemRefs.current = [];
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const setItemRef = (el) => {
    if (el) itemRefs.current.push(el);
  };

  useEffect(() => {
    if (
      focusedIndex >= 0 &&
      focusedIndex < itemRefs.current.length &&
      typeof onFocusIndexChange === 'function'
    ) {
      onFocusIndexChange(focusedIndex);
    }
  }, [focusedIndex, onFocusIndexChange]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    let bestIndex = -1;
    let bestVisibility = -Infinity;

    itemRefs.current.forEach((el, idx) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const top = Math.max(rect.top, containerRect.top);
      const bottom = Math.min(rect.bottom, containerRect.bottom);
      const visibleHeight = Math.max(0, bottom - top);
      if (visibleHeight > bestVisibility) {
        bestVisibility = visibleHeight;
        bestIndex = idx;
      }
    });

    if (bestIndex !== focusedIndex) {
      setFocusedIndex(bestIndex);
    }
  };

  const handleItemClick = (idx) => {
    setFocusedIndex(idx);
    const el = itemRefs.current[idx];
    if (el && typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <div className="points-descriptions" ref={containerRef} onScroll={handleScroll}>
      <p>Points</p>
      <ul className="points-list-items">
        {points.map((p, idx) => (
          <li
            key={idx}
            ref={setItemRef}
            className={`points-item${idx === focusedIndex ? ' active' : ''}`}
            onClick={() => handleItemClick(idx)}
            tabIndex={0}
            onFocus={() => setFocusedIndex(idx)}
          >
            <span className="points-item-index">{idx + 1}.</span>
            <span className="points-item-desc">{p.description || '(no description)'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PointsDescriptionsList;


