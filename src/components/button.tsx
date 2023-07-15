type ButtonProps = {
  text: string;
  // if not declared, assume secondary button
  primary?: boolean;
  children?: React.ReactNode;
};

export default function Button({ text, primary, children }: ButtonProps) {
  const cn = primary
    ? "text-title bg-btnPrimary border-btnPrimary"
    : "text-content bg-transparent border-content";

  return (
    <button
      className={`px-button h-[3rem] border-solid border rounded font-bold ${cn}`}
    >
      <div>
        {text}
        {children}
      </div>
    </button>
  );
}
