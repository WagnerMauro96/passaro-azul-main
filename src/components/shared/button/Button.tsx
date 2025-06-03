export function Button({
  className,
  label,
  children,
  onClick,
  type
}: {
  className?: string;
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button type={type} onClick={onClick} className={`px-4 lg:px-10 py-4 hover:brightness-75 transition-all bg-primary text-secondary rounded-xl font-medium text-sm lg:text-base ${className}`}>
      {label ? label : children}
    </button>
  );
}
