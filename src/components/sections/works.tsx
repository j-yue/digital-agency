import Section from "../section";
import GradientText from "../gradientText";
import Card from "../card";
import ViewProjectButton from "../viewProjectButton";
import Button from "../button";

import data from "../../data/copy.json";

export default function Works() {
  const { title, projects } = data.works;

  return (
    <Section title={title} id="works">
      {Object.values(projects).map(({ title: workTitle, text, img }) => {
        return (
          <div className="mb-[1rem]">
            <Card styles="rounded-[1.25rem] px-[1.4rem] pt-[3.5rem]">
              <img src={`src/assets/works/${img}`} className="mb-[2rem]" />
              <div>
                <GradientText bold={false}>
                  <h3 className="capitalize text-[1rem] leading-[150%] mb-[1rem]">
                    {workTitle}
                  </h3>
                </GradientText>
                <p className="text-center text-[.75rem] leading-[1rem]">
                  {text}
                </p>
                <ViewProjectButton />
              </div>
            </Card>
          </div>
        );
      })}
      <Button primary={false} text="View All" />
    </Section>
  );
}
