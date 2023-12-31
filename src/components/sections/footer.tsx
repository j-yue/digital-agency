import YoutubeIcon from "../Icons/youtubeIcon";
import InstagramIcon from "../Icons/instagramIcon";
import FacebookIcon from "../Icons/facebookIcon";
import CopyrightIcon from "../Icons/copyrightIcon";
import Icon from "../icon";

export default function Footer() {
  return (
    <footer
      className="pt-footerPadding flex flex-col md:flex-row-reverse flex-nowrap items-center md:justify-between md:items-start md:py-footerPadding gap-footer mx-layoutOffsetSm px-layoutSm md:mx-layoutOffsetMd md:px-layoutMd"
      style={{ borderTop: "2px solid #24262A" }}
    >
      <div className="text-title flex flex-row flex-nowrap gap-footer xl:gap-footerXl">
        {[YoutubeIcon, InstagramIcon, FacebookIcon].map((icon, index) => {
          return (
            <a key={index}>
              <Icon>{icon()}</Icon>
            </a>
          );
        })}
      </div>
      <div className="text-mainText">pixelate.agency@gmail.com</div>
      <div className="flex flex-row flex-nowrap justify-center items-center text-mainTextXs mb-[.75rem] md:mb-0">
        <Icon>
          <CopyrightIcon />
        </Icon>
        <span className="ml-[1ch]">All rights reserved by Pixelate.</span>
      </div>
    </footer>
  );
}
