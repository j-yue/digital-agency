// container with corners that vertically stacks children

type CardProps = {
  children: React.ReactNode;
  // additional styles
  styles?: string;
};

export default function Card({ children, styles }: CardProps) {
  const cardStyles = styles ? styles : "";
  return (
    <div
      className={`bg-bgCard flex flex-nowrap flex-col rounded-card 
      text-cardText md:text-cardTextMd lg:text-cardTextLg xl:text-cardTextXl
      p-[1rem] md:p-[2rem] lg:p-[2.5rem] xl:p-[1.5rem]
       ${cardStyles}`}
    >
      {children}
    </div>
  );
}
