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
      {Object.values(projects).map(({ title: workTitle, text, img }, index) => {
        return (
          <div className="mb-[1rem]" key={index}>
            <Card styles="rounded-[1.25rem] px-[1.4rem] pt-[3.5rem]">
              <div className="grid grid-cols-1 md:grid-cols-[45%_50%] md:grid-cols-[40%_50%] justify-between items-center">
                <img
                  src={`src/assets/works/${img}`}
                  className={`mb-[2rem] rounded-card ${
                    index == 1 ? "md:order-last" : ""
                  }`}
                />
                <div className="text-center">
                  <GradientText bold={false}>
                    <h3 className="capitalize text-[1rem] leading-[150%] mb-[1rem]">
                      {workTitle}
                    </h3>
                  </GradientText>

                  <p className="text-center">{text}</p>

                  <div className="my-[3.5rem] md:my-[4.5rem] lg:my[3.5rem]">
                    <ViewProjectButton />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );
      })}
      <Button primary={false} text="View All" />
    </Section>
  );
}
