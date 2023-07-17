import Section from "../section";
import RollingWord from "../rollingWord";
import GradientText from "../gradientText";
import Button from "../button";
import Blinking from "../blinking";
import DoubleArrowDownIcon from "../Icons/doubleArrowDownIcon";

import data from "../../data/copy.json";

export default function Home() {
  const homeData = data.home;

  return (
    <Section title="home" id="home" hideTitle={true}>
      <div className="pt-[7rem]"></div>
      <div className="flex flex-col flex-nowrap justify-center items-center text-heroText md:text-heroTextMd lg:text-heroTextLg">
        <RollingWord text="Empower Your" />
        <GradientText>Digital</GradientText>
        <RollingWord text="Presence" />
      </div>
      <section className="text-sm text-center">{homeData.text}</section>
      <Button primary={true} text="Book a Consultant" />

      <Blinking direction="down">
        <div className="h-[3rem] w-[3rem]">
          <DoubleArrowDownIcon />
        </div>
      </Blinking>
    </Section>
  );
}
