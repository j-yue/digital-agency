// apply rolling animation to text, from filled text to outline text
// due to how animation styling works, only works for one line
type RollingWordProps = {
  text: string;
  heightValue: number;
  heightUnit: string;
};

export default function RollingWord({
  text,
  heightValue,
  heightUnit,
}: RollingWordProps) {
  const height = `${heightValue}${heightUnit}`;

  return (
    <span
      className={`overflow-hidden inline-block font-bold`}
      style={{ height: height }}
    >
      <div className={`flex flex-nowarp flex-col h-[200%] animate-rollText`}>
        <span className={`text-title h-[50%}]`}>{text}</span>
        <span className={`text-transparent rolling-text-outline h-[50%]`}>
          {text}
        </span>
        {/* to give the impression of an infinite loop scrolling up, 
        add third item of text that matches the first item
        when animation restarts, this last item of text will be visible 
        as keyframes shift back to start of text
          */}
        <span className={`text-title h-[50%}]`}>{text}</span>
      </div>
    </span>
  );
}
