export function DetailsSectionCard({
  title,
  label,
  active,
  delay,
}: {
  title: string;
  label: string;
  active?: boolean;
  delay?: number;
}) {
  return (
    <div
      data-aos="fade-up"
      dataa-aos-delay={delay}
      className={`w-full col-span-1 bg-white transition-all hover:bg-primary hover:scale-105 group shadow-lg p-6 gap-y-4 flex flex-col ${
        active && "!bg-primary"
      }`}
    >
      <h4
        className={`text-xl lg:text-2xl font-bold group-hover:text-secondary transition-all ${
          active && "!text-secondary"
        }`}
      >
        {title}
      </h4>

      <p
        className={`group-hover:text-secondary text-sm lg:text-base transition-all group-hover:font-medium text-gray-600 ${
          active && "!text-secondary font-medium"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
