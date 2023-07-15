type BlinkingProps = {
  // text or icon
  children: React.ReactNode;
  // direction of animation transformation
  direction: "up" | "down" | "left" | "right";
  // reverse animation
  reverse?: boolean;
};

export default function Blinking({
  children,
  direction,
  reverse,
}: BlinkingProps) {
  // due to how tailwind works, cannot compute classnames like this, classnames must be entered in whole
  // const animationClassName = `animate-blink${direction}`;

  const styling = reverse ? { animationDelay: "-3s" } : {};

  if (direction === "right")
    return (
      <span
        className={`text-title inline-block animate-blinkRight`}
        style={styling}
      >
        {children}
      </span>
    );

  if (direction === "left")
    return (
      <span
        className={`text-title inline-block animate-blinkLeft`}
        style={styling}
      >
        {children}
      </span>
    );
  if (direction === "up")
    return (
      <span
        className={`text-title inline-block animate-blinkUp`}
        style={styling}
      >
        {children}
      </span>
    );
  if (direction === "down")
    return (
      <span
        className={`text-title inline-block animate-blinkDown`}
        style={styling}
      >
        {children}
      </span>
    );
}
