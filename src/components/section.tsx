// section of website has min height 100vh
type SectionProps = {
  title: string;
  children: React.ReactNode;
  // will be used for nav
  id: string;
  hideTitle?: boolean;
  styles?: string;
};

export default function Section({
  title,
  children,
  id,
  hideTitle = false,
  styles = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col flex-nowrap justify-between items-center ${styles}`}
    >
      <h2
        className={`text-title text-center font-bold capitalize pb-[3.5rem] ${
          hideTitle ? "hidden" : ""
        }`}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
