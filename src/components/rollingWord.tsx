import { useRef, useEffect, useState } from "react";

// apply rolling animation to text, from filled text to outline text
// due to how animation styling works, only works for one line
type RollingWordProps = {
  text: string;
};

export default function RollingWord({ text }: RollingWordProps) {
  const containerRef = useRef();
  const [lineHeight, setLineHeight] = useState("");

  useEffect(() => {
    if (containerRef.current) {
      const computedLineHeight = window.getComputedStyle(
        containerRef.current
      ).lineHeight;
      return setLineHeight(computedLineHeight);
    }
  }, [containerRef]);

  return (
    <span
      className={`overflow-hidden inline-block font-bold`}
      style={{ height: lineHeight }}
    >
      <div
        className={`flex flex-nowrap flex-col animate-rollText`}
        ref={containerRef}
      >
        <span className={`text-title`}>{text}</span>
        <span className={`text-transparent rolling-text-outline `}>{text}</span>
        {/* to give the impression of an infinite loop scrolling up, 
        add third item of text that matches the first item
        when animation restarts, this last item of text will be visible 
        as keyframes shift back to start of text
          */}
        <span className={`text-title`}>{text}</span>
        <span className={`text-transparent rolling-text-outline`}>{text}</span>
      </div>
    </span>
  );
}
