// apply gradient fill to text passed as children

type GradientTextProps = {
  children: React.ReactNode;
  bold?: boolean;
};

export default function GradientText({
  children,
  bold = true,
}: GradientTextProps) {
  return (
    <div
      className={`bg-gradient bg-clip-text text-transparent ${
        bold ? "font-bold" : ""
      }`}
    >
      {children}
    </div>
  );
}
