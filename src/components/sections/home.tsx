import Section from "../section";
import RollingWord from "../rollingWord";
import GradientText from "../gradientText";
import Button from "../button";
import Blinking from "../blinking";
import DoubleArrowDownIcon from "../Icons/doubleArrowDownIcon";

import data from "../../data/copy.json";

function HeroText() {
  return (
    <div>
      <div className="pt-navOffset"></div>
      <div className="mt-[7.45rem] md:mt-[8rem] lg:mt-[15rem] pt-navOffset flex flex-col md:flex-row flex-nowrap justify-center items-center text-heroText md:text-heroTextMd lg:text-heroTextLg">
        <span className="pt-[.8rem] md:mt-0">
          <RollingWord text="Empower Your" />
        </span>
        <GradientText>
          <span className="md:px-[.25em]">Digital</span>
        </GradientText>
        <RollingWord text="Presence" />
      </div>
    </div>
  );
}

export default function Home() {
  const { text } = data.home;

  return (
    <Section
      title="home"
      id="home"
      hideTitle={true}
      styles="pt-navOffset xl:max-w-[90%] xl:mx-auto justify-evenly"
    >
      <HeroText />
      <p className="text-center">{text}</p>
      <span className="mt-[2rem] md:mt-[3rem] lg:mt-[4rem] text-mainTextMd">
        <Button primary={true} text="Book a Consultant" />
      </span>
      <Blinking direction="down">
        <div className="h-[3rem] w-[3rem] mb-[2.5rem]">
          <DoubleArrowDownIcon />
        </div>
      </Blinking>
    </Section>
  );
}
