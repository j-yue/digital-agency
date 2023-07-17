import Section from "../section";
import RollingWord from "../rollingWord";
import GradientText from "../gradientText";
import Card from "../card";

import data from "../../data/copy.json";

type SubsectionTitleProps = {
  content: string;
  number: string;
};

function SubsectionTitle({ content, number }: SubsectionTitleProps) {
  return (
    <div className="font-bold text-title bg-bgCard flex flex-wrap flex-row items-center justify-center gap-[.5ch] w-full h-[4rem] text-[1.25rem] leading-[1.5rem] mb-[.5rem] border border-solid border-border rounded-[.625rem]">
      <GradientText>{number}</GradientText>
      <RollingWord text={content} />
    </div>
  );
}

export default function About() {
  const { title, sections: subsection } = data.about;

  return (
    <Section title={title} id="about">
      {Object.values(subsection).map((s, index) => {
        return (
          <div className="" key={index}>
            <SubsectionTitle
              content={s.title.content}
              number={s.title.number}
            />
            <Card styles="rounded-[.625rem] py-[1rem] px-[.75rem] mb-[2rem]">
              <div className="text-center text-[.75rem] leading-[1rem]">
                {s.content}
              </div>
            </Card>
          </div>
        );
      })}
    </Section>
  );
}
