"use client";

import CountUp from "react-countup";

export default function StatisticItem({
  title,
  prefix,
  suffix,
  subtitle,
}: {
  title: number;
  subtitle: string;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div className="flex flex-col justify-center py-4">
      <p className="text-center transition-all bg-gradient-to-r from-[#0a0f5a] from-45% to-[#375bdd] to-55% bg-clip-text text-transparent font-inter font-bold text-6xl lg:text-7xl">
        <CountUp end={title} duration={1} prefix={prefix} suffix={suffix} />
      </p>
      <p className="text-center text-sm lg:text-lg font-inter font-medium transition-all">
        {subtitle}
      </p>
    </div>
  );
}
