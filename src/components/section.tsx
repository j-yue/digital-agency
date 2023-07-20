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
      className={`flex flex-col flex-nowrap justify-start items-center ${styles}`}
    >
      <h2
        className={`text-title text-center text-sectionTitle md:text-sectionTitleMd lg:text-sectionTitleLg font-bold capitalize pb-[3.5rem] md:pb-[2rem] lg:pb-[5rem] ${
          hideTitle ? "hidden" : ""
        }`}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
