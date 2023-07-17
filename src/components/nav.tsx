import { useState } from "react";
import CloseIcon from "./Icons/closeIcon";
import NavIcon from "./Icons/navIcon";
import LogoIcon from "./Icons/logoIcon";

type Link = [string, string];

type NavProps = {
  linkArr: Link[];
  handleClick?: () => void;
};

interface MobileNavProps extends NavProps {
  visible?: boolean;
}

type CloseButtonProps = {
  handleClick?: () => void;
};

function CloseButton({ handleClick }: CloseButtonProps) {
  return (
    <button
      className="h-[2rem] w-[2rem] absolute top-[3rem] right-[1.5rem]"
      onClick={handleClick}
    >
      <CloseIcon />
    </button>
  );
}

function NavToggleButton({ handleClick }: CloseButtonProps) {
  return (
    <button className="h-[2rem] w-[2rem] lg:hidden" onClick={handleClick}>
      <NavIcon />
    </button>
  );
}

function Logo() {
  return (
    <div className="h-[1.5rem]">
      <LogoIcon />
    </div>
  );
}

function NavList({ linkArr, handleClick }: NavProps) {
  return (
    <ul className="h-full flex flex-col flex-nowrap justify-evenly items-center lg:flex-row ">
      {linkArr.map((value: Link, index: number) => {
        const [title, url] = value;
        return (
          <li
            key={index}
            className="bg-nav h-[3rem] w-[13.5rem] flex flex-row flex-nowrap justify-center items-center"
          >
            <a href={url} onClick={handleClick}>
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function MobileNav({ linkArr, visible = true, handleClick }: MobileNavProps) {
  const _style = (visible: boolean) => {
    if (visible)
      return {
        left: "0",
      };
    if (!visible)
      return {
        left: "-200vw",
      };
  };
  return (
    <div
      className="h-screen bg-bg fixed top-0 w-full z-10 pt-[10rem] pb-[8rem]"
      style={_style(visible)}
    >
      <CloseButton handleClick={handleClick} />
      <NavList linkArr={linkArr} handleClick={handleClick} />
    </div>
  );
}

export default function Nav({ linkArr }: NavProps) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="pt-[3rem] pb-[1rem] flex flex-row flex-nowrap justify-between items-center text-title">
      <Logo />
      <NavToggleButton handleClick={handleClick} />
      <MobileNav
        linkArr={linkArr}
        visible={toggleMenu}
        handleClick={handleClick}
      />
      <div className="hidden lg:block">
        <NavList linkArr={linkArr} />
      </div>
    </nav>
  );
}
