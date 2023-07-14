// container with corners that vertically stacks children

type CardProps = {
  children: React.ReactNode;
  // additional styles
  styles?: string;
};

export default function Card({ children, styles }: CardProps) {
  const cardStyles = styles ? styles : "";
  return (
    <div className={`bg-bgCard flex flex-nowrap flex-col ${cardStyles}`}>
      {children}
    </div>
  );
}
