import { Home, Ruler, Armchair } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    icon: Home,
    title: 'Constructions',
    description:
      'At Longitude Constructions, we specialize in turnkey residential projects that blend modern design with efficient space utilization. Based in Bangalore, our expert team crafts homes that reflect your lifestyle and aspirations…',
  },
  {
    id: 2,
    icon: Ruler,
    title: 'Architectural Design',
    description:
      'At Longitude Constructions, we craft architectural designs that blend innovation with functionality. Our expert team in Bangalore and in Chennai ensures every space is both practical and visually striking…',
  },
  {
    id: 3,
    icon: Armchair,
    title: 'Interiors & Products',
    description:
      'At Longitude Constructions, we offer premium interior products that combine style, quality, and durability. Each piece is handpicked to enhance the function and elegance of your space…',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-white pb-14 pt-2 sm:pb-16 sm:pt-3 md:pb-20 md:pt-4 lg:pb-24 lg:pt-4"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="rounded-2xl bg-[#786B61] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">

        {/* Heading */}
        <div className="mb-2 text-center">
          <h2
            className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl xl:text-5xl"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Home Construction Services
          </h2>

          {/* gold underline accent */}
          <div className="mx-auto mt-4 h-0.5 w-10 bg-[#b8922a]" />
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {SERVICES.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="
                group
                flex
                flex-col
                bg-white
                p-7
                shadow-md
                transition-colors
                duration-300
                hover:bg-[#786B61]
                sm:p-8
              "
            >

              {/* Icon box */}
              <div
                className="
                  mb-5
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-md
                  bg-[#786B61]
                  text-white
                  transition-colors
                  duration-300
                  group-hover:bg-white
                "
              >
                <Icon
                  size={26}
                  strokeWidth={1.7}
                  className="transition-colors duration-300 group-hover:text-[#786B61]"
                />
              </div>

              {/* Title */}
              <h3
                className="
                  mb-3
                  text-lg
                  font-bold
                  text-[#1a1a1a]
                  transition-colors
                  duration-300
                  group-hover:text-[#b8922a]
                  sm:text-xl
                "
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className="
                  mb-6
                  grow
                  text-sm
                  leading-7
                  text-slate-500
                  transition-colors
                  duration-300
                  group-hover:text-white/80
                  sm:text-[15px]
                "
              >
                {description}
              </p>

              {/* Learn More */}
              <button
                type="button"
                className="
                  w-fit
                  border-b
                  border-[#1a1a1a]
                  pb-0.5
                  text-sm
                  font-semibold
                  text-[#1a1a1a]
                  transition-colors
                  duration-300
                  group-hover:border-[#b8922a]
                  group-hover:text-[#b8922a]
                "
              >
                Learn More
              </button>

            </div>
          ))}
        </div>
        </div>

      </div>
    </section>
  );
}
