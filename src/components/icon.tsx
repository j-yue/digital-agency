//responsive icons
type IconProps = {
  children: React.ReactNode;
};

export default function Icon({ children }: IconProps) {
  return (
    <div className="h-footerIcon w-footerIcon xl:h-footerIconXl xl:w-footerIconXl text-inherit">
      {children}
    </div>
  );
}
