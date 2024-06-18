import Reveal from "./reveal";
import StatisticItem from "./statistic-item";

export default function Statistics() {
  return (
    <section id="statictics" className="text-lg w-full mt-16 ">
      <Reveal className="w-full">
        <div className="w-full gap-4 sm:gap-0 grid grid-cols-2 sm:grid-cols-4">
          <StatisticItem title={100} suffix="+" subtitle="projects completed" />
          <StatisticItem title={70} suffix="+" subtitle="happy customers" />
          <StatisticItem title={2} suffix="M+" subtitle="words translated" />
          <StatisticItem title={7} prefix="0" subtitle="years in service" />
        </div>
      </Reveal>
    </section>
  );
}
