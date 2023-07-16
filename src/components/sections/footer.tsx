import YoutubeIcon from "../Icons/youtubeIcon";
import InstagramIcon from "../Icons/instagramIcon";
import FacebookIcon from "../Icons/facebookIcon";
import CopyrightIcon from "../Icons/copyrightIcon";
import Icon from "../icon";

export default function Footer() {
  // icons
  // email
  // copyright
  return (
    <footer className="text-[.875rem] leading-[1.25rem] flex flex-col flex-nowrap justify-center items-center gap-[2rem] pt-[1.75rem] pb-[.75rem]">
      <div className="text-title flex flex-row flex-nowrap gap-[2.25rem]">
        {[YoutubeIcon, InstagramIcon, FacebookIcon].map((icon) => {
          return (
            <a key={icon}>
              <Icon>{icon()}</Icon>
            </a>
          );
        })}
      </div>
      <div className="">pixelate.agency@gmail.com</div>
      <div className="flex flex-row flex-nowrap">
        <Icon>
          <CopyrightIcon />
        </Icon>
        <span className="ml-[1rem]">All rights reserved by Pixelate.</span>
      </div>
    </footer>
  );
}
