import IconProps from "./iconProps";

export default function DoubleArrowRightIcon({ color }: IconProps) {
  return (
    <svg
      width="42"
      height="36"
      viewBox="0 0 42 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.3333 34.6666L41 18L24.3333 1.33329M1 34.6666L17.6667 18L0.999999 1.33329"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
