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
        <span className={`text-title h-[50%}]`}>{text}</span>
      </div>
    </span>
  );
}
