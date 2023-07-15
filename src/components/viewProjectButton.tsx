import Blinking from "./blinking";
import Icon from "./icon";
import DoubleArrowRightIcon from "./Icons/doubleArrowRightIcon";

export default function ViewProjectButton() {
  return (
    <a
      href="/"
      className="flex flex-nowrap flex-row justify-center items-center gap-[1ch] h-[3rem]"
    >
      <Blinking direction="left">View Project</Blinking>
      <Blinking direction="right" reverse={true}>
        <Icon>
          <DoubleArrowRightIcon />
        </Icon>
      </Blinking>
    </a>
  );
}
