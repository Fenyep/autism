export default function ServiceCard({
  icon,
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
  icon?: JSX.Element;
}) {
  return (
    <div className="border bg-white hover:border-orange-300 transition-all duration-300 ease-in-out px-4 flex flex-col items-center justify-center w-[400px] h-[250px]">
      {icon}
      <p className="font-inter font-bold text-center text-2xl">{title}</p>
      <p className="font-inter font-light text-center text-base mt-4">{subtitle}</p>
    </div>
  );
}
