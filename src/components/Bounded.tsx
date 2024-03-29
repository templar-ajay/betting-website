import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx(
        "py-[2rem] sm:py-[4rem] md:py-[6rem] lg:py-[8rem] px-4 md:px-6",
        className
      )}
      {...restProps}
    >
      <div className="mx-auto w-full md:max-w-6xl">{children}</div>
    </Comp>
  );
}
