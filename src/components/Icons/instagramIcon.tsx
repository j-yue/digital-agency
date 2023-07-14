import IconProps from "./iconProps";

export default function InstagramIcon({ color }: IconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0001 11.8345C13.7064 11.8345 11.8345 13.7063 11.8345 16.0001C11.8345 18.2938 13.7064 20.1657 16.0001 20.1657C18.2939 20.1657 20.1658 18.2938 20.1658 16.0001C20.1658 13.7063 18.2939 11.8345 16.0001 11.8345ZM28.4939 16.0001C28.4939 14.2751 28.5095 12.5657 28.4126 10.8438C28.3158 8.84385 27.8595 7.06885 26.397 5.60635C24.9314 4.14072 23.1595 3.6876 21.1595 3.59072C19.4345 3.49385 17.7251 3.50947 16.0033 3.50947C14.2783 3.50947 12.5689 3.49385 10.847 3.59072C8.84702 3.6876 7.07202 4.14385 5.60952 5.60635C4.1439 7.07197 3.69077 8.84385 3.5939 10.8438C3.49702 12.5688 3.51265 14.2782 3.51265 16.0001C3.51265 17.722 3.49702 19.4345 3.5939 21.1563C3.69077 23.1563 4.14702 24.9313 5.60952 26.3938C7.07515 27.8595 8.84702 28.3126 10.847 28.4095C12.572 28.5063 14.2814 28.4907 16.0033 28.4907C17.7283 28.4907 19.4376 28.5063 21.1595 28.4095C23.1595 28.3126 24.9345 27.8563 26.397 26.3938C27.8626 24.9282 28.3158 23.1563 28.4126 21.1563C28.5126 19.4345 28.4939 17.7251 28.4939 16.0001V16.0001ZM16.0001 22.4095C12.4533 22.4095 9.59077 19.547 9.59077 16.0001C9.59077 12.4532 12.4533 9.59072 16.0001 9.59072C19.547 9.59072 22.4095 12.4532 22.4095 16.0001C22.4095 19.547 19.547 22.4095 16.0001 22.4095ZM22.672 10.8251C21.8439 10.8251 21.1751 10.1563 21.1751 9.32822C21.1751 8.5001 21.8439 7.83135 22.672 7.83135C23.5001 7.83135 24.1689 8.5001 24.1689 9.32822C24.1691 9.52487 24.1306 9.71962 24.0555 9.90135C23.9803 10.0831 23.8701 10.2482 23.731 10.3872C23.592 10.5263 23.4269 10.6365 23.2451 10.7117C23.0634 10.7868 22.8687 10.8253 22.672 10.8251V10.8251Z"
        fill={color}
        fillOpacity="0.92"
      />
    </svg>
  );
}
