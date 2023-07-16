import Section from "../section";
import GradientText from "../gradientText";
import Card from "../card";

import data from "../../data/copy.json";

export default function Services() {
  const sections = data.services.sections;
  console.log(sections);
  return (
    <Section title="Services" id="services">
      {Object.values(sections).map(({ title, text }) => {
        return (
          <Card
            key={title}
            styles="px-[1.3rem] py-[.8rem] mb-[1rem] rounded-[.625rem]"
          >
            <GradientText bold={false}>
              <h3 className="capitalize text-[1.25rem] leadging-[150%] text-normal">
                {title}
              </h3>
            </GradientText>
            <div className="pt-[1rem] text-[.75rem] leading-[150%]">{text}</div>
          </Card>
        );
      })}
    </Section>
  );
}
