import React, { useEffect, useRef } from 'react';

interface MarqueeProps {
  text: string;
  speed?: number; // Speed in pixels per second
  direction?: 'left' | 'right';
  className?: string;
}

/**
 * A Marquee component that scrolls text horizontally across the screen.
 *
 * @param {MarqueeProps} props - The props for the Marquee component.
 * @returns {JSX.Element} The rendered Marquee component.
 * @example
 * <Marquee text="Breaking News: React is awesome!" speed={50} direction="left" />
 */
const Marquee: React.FC<MarqueeProps> = ({
  text,
  speed = 50,
  direction = 'left',
  className = '',
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const marqueeElement = marqueeRef.current;
      const scrollWidth = marqueeElement.scrollWidth;
      const clientWidth = marqueeElement.clientWidth;
      const distance = scrollWidth + clientWidth;
      const duration = distance / speed;

      const keyframes = `
        @keyframes marqueeAnimation {
          from { transform: translateX(${direction === 'left' ? clientWidth : -scrollWidth}px); }
          to { transform: translateX(${direction === 'left' ? -scrollWidth : clientWidth}px); }
        }
      `;
      
      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

      marqueeElement.style.animation = `marqueeAnimation ${duration}s linear infinite`;
    }
  }, [text, speed, direction]);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} ref={marqueeRef}>
      <span className="inline-block">{text}</span>
    </div>
  );
};

export default Marquee;
