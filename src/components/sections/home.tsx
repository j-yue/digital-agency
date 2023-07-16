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
      <div className="text-base flex flex-col flex-nowrap justify-center items-center text-[2rem] leading-[2.7rem]">
        <RollingWord text="Empower Your" heightValue={2.7} heightUnit="rem" />
        <GradientText>Digital</GradientText>
        <RollingWord text="Presence" heightValue={2.7} heightUnit="rem" />
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
