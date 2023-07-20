import Section from "../section";
import RollingWord from "../rollingWord";
import GradientText from "../gradientText";
import Card from "../card";

import data from "../../data/copy.json";

type SubsectionTitleProps = {
  content: string;
  number: string;
  variant?: "mobile" | "wide";
};

const SubsectionTitleVariants = {
  mobile: "border border-solid border-border bg-bgCard rounded",
  wide: "",
};

function SubsectionTitle({
  content,
  number,
  variant = "mobile",
}: SubsectionTitleProps) {
  return (
    <div
      className={`font-bold text-white text-aboutTitle md:text-aboutTitleMd lg:text-aboutTitleLg h-[3.4rem] md:h-[5rem] xl:h-[6.5rem] flex flex-row flex-nowrap items-center justify-center ${SubsectionTitleVariants[variant]}`}
    >
      <GradientText>{number}</GradientText>
      <RollingWord text={content} />
    </div>
  );
}

export default function About() {
  const { title, sections: subsection } = data.about;

  return (
    <Section title={title} id="about">
      {/* titles visible on wider screens */}
      <div className="hidden lg:flex justify-around w-full border border-solid border-border bg-bgCard rounded mb-[1rem]">
        {Object.values(subsection).map((s, index) => {
          return (
            <div className="" key={index}>
              <SubsectionTitle
                content={s.title.content}
                number={s.title.number}
                variant="wide"
              />
            </div>
          );
        })}
      </div>
      <div className="lg:flex lg:flex-row lg:flex-nowrap lg:items-start lg:justify-center lg:bg-bgCard lg:rounded-card">
        {Object.values(subsection).map((s, index) => {
          return (
            <div className="mb-[2rem] lg:m-0" key={index}>
              {/* hide on smaller screens */}
              <span className="lg:hidden">
                <SubsectionTitle
                  content={s.title.content}
                  number={s.title.number}
                />
              </span>
              <Card styles="lg:rounded-none lg:bg-transparent text-center mt-[.5rem]">
                <p>{s.content}</p>
              </Card>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
