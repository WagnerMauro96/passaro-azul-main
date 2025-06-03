export function ServiceItem({
  icon,
  title,
  label,
  delay
}: {
  icon: JSX.Element;
  title: string;
  label: string;
  delay?: number;
}) {
  return (
    <div data-aos="zoom-in" data-aos-delay={delay} className="flex flex-col items-start gap-y-4">
      <div className="w-8 h-8 flex items-center justify-center [&>svg_*]:fill-primary transition-all]">
        {icon}
      </div>

      <div className="flex flex-col gap-y-4">
        <h4 className={`text-xl font-bold text-primary transition-all`}>
          {title}
        </h4>
        <p
          className={`group-hover:text-secondary transition-all group-hover:font-medium text-gray-600`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
