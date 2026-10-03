interface SectionHeaderProps {
  title: string;
  description: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 reveal-on-scroll">
      <span className="bg-brandLime text-brandDark text-3xl sm:text-4xl font-medium px-2.5 py-1 rounded-md inline-block">
        {title}
      </span>
      <p className="text-base text-gray-700 max-w-xl">
        {description}
      </p>
    </div>
  );
}
