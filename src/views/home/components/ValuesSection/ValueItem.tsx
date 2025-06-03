export function ValueItem({
  label,
  title,
  icon,
  delay
}: {
  label: string;
  title: string;
  icon: JSX.Element;
  delay?: number;
}) {
  return (
    <div data-aos="zoom-in-up" data-aos-delay={delay} className="flex flex-col items-center gap-4 max-w-80">
      <div className="[&>svg_*]:fill-primary w-8 h-8 flex items-center justify-center">
        {icon}
      </div>

      <div className="flex flex-col gap-y-2">
        <h4 className="text-xl font-bold text-primary text-center">
          {title}
        </h4>

        <p className="max-w-2xl text-gray-600 text-sm text-center">
          {label}
        </p>
      </div>
    </div>
  );
}
