import {
  LayoutGrid,
  PlayCircle,
  MessageCircle,
  Globe2,
  Users,
} from 'lucide-react';

import type { StatItem } from '@/types';


const STATS: StatItem[] = [

  {
    value: '299+',
    label: 'Completed Projects',
    icon: 'projects',
  },

  {
    value: '59+',
    label: 'Ongoing Projects',
    icon: 'ongoing',
  },

  {
    value: '295+',
    label: 'Happy Customers',
    icon: 'customers',
  },

  {
    value: '9L+',
    label: 'Sq. Ft Built',
    icon: 'area',
  },

  {
    value: '35+',
    label: 'Team',
    icon: 'team',
  },

];


function StatIcon({
  type,
}: {
  type: StatItem['icon'];
}) {

  switch (type) {

    case 'projects':
      return (
        <LayoutGrid
          size={28}
          strokeWidth={1.7}
        />
      );

    case 'ongoing':
      return (
        <PlayCircle
          size={28}
          strokeWidth={1.7}
        />
      );

    case 'customers':
      return (
        <MessageCircle
          size={28}
          strokeWidth={1.7}
        />
      );

    case 'area':
      return (
        <Globe2
          size={28}
          strokeWidth={1.7}
        />
      );

    case 'team':
      return (
        <Users
          size={28}
          strokeWidth={1.7}
        />
      );

    default:
      return null;
  }

}


export default function StatsSection() {

  return (

    <section
      className="
        w-full
        bg-[#f8f6f2]
        px-4
        py-10
        sm:px-8
        sm:py-14
        md:py-16
      "
    >

      <div
        className="
          mx-auto
          grid
          max-w-[1100px]
          grid-cols-2
          justify-items-center
          gap-8
          sm:flex
          sm:flex-wrap
          sm:justify-center
          sm:gap-10
          lg:justify-between
        "
      >

        {STATS.map((stat) => (

          <div
            key={stat.label}
            className="flex flex-col items-center"
          >

            <div className="relative">

              <div
                className="
                  flex
                  h-[105px]
                  w-[105px]
                  flex-col
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#786B61]
                  text-white
                  shadow-md
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  sm:h-[125px]
                  sm:w-[125px]
                "
              >

                <StatIcon
                  type={stat.icon}
                />

                <span
                  className="
                    px-3
                    text-center
                    text-[10px]
                    font-medium
                    leading-tight
                    sm:text-xs
                  "
                >
                  {stat.label}
                </span>

              </div>


              <span
                className="
                  absolute
                  -right-1
                  -top-1
                  rounded-full
                  bg-[#b8922a]
                  px-2
                  py-0.5
                  text-[10px]
                  font-bold
                  text-white
                  shadow
                  sm:px-2.5
                  sm:py-1
                  sm:text-xs
                "
              >
                {stat.value}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}