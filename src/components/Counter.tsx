import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface CounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, label, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          gsap.to({ value: 0 }, {
            duration: duration,
            value: end,
            ease: "power2.out",
            onUpdate: function() {
              setCount(Math.round(this.targets()[0].value));
            }
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-accent font-heading">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-textMuted text-sm md:text-base mt-2">{label}</div>
    </div>
  );
};

export default Counter;