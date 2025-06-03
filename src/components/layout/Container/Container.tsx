type ContainerProps = {
  className?: string;
  id?: string;
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
} & React.HTMLAttributes<HTMLElement>;

export function Container({
  className,
  children,
  id,
  as = "div",
  ...props
}: ContainerProps) {
  const Tag = as;

  return (
    <Tag
      id={id}
      {...(props as any)}
      className={`md:max-w-[560px] lg:container px-7 md:px-0 mx-auto w-full xl:max-w-[70.9375rem] ${className}`}
    >
      {children}
    </Tag>
  );
}

