// apply gradient fill to text passed as children

type GradientTextProps = {
  children: React.ReactNode;
};

export default function GradientText({ children }: GradientTextProps) {
  return (
    <div className="bg-gradient bg-clip-text text-transparent font-bold">
      {children}
    </div>
  );
}
