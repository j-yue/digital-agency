//responsive icons
type IconProps = {
  children: React.ReactNode;
};

export default function Icon({ children }: IconProps) {
  return (
    <div className="h-[1.5rem] w-[1.5rem] xl:h-[2rem] xl:w-[2rem] text-inherit">
      {children}
    </div>
  );
}
