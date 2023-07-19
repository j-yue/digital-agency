import Section from "../section";
import GradientText from "../gradientText";
import Card from "../card";

import data from "../../data/copy.json";

export default function Services() {
  const sections = data.services.sections;

  return (
    <Section title="Services" id="services">
      <div className="flex flex-col gap-[1rem] md:gap-[2.5rem] lg:grid lg:grid-cols-2 lg:gap-[5em]">
        {Object.values(sections).map(({ title, text }) => {
          return (
            <Card key={title}>
              <GradientText bold={false}>
                <h3
                  className="
              text-cardTitle md:text-cardTitleMd xl:text-cardTitleXl
              mb-[1rem]
              "
                >
                  {title}
                </h3>
              </GradientText>
              <div className="">{text}</div>
            </Card>
          );
        })}{" "}
      </div>
    </Section>
  );
}
