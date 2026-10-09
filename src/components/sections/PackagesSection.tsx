import { MapPin } from 'lucide-react';
import logoImg from '@/assets/projects/logo.png';

const packages = [
  { name: 'Premium', price: 'Rs.1950/Sqft', location: 'Bangalore' },
  { name: 'Ultimate', price: 'Rs.2250/Sqft', location: 'Bangalore' },
  { name: 'Royal', price: 'Rs.2675/Sqft', location: 'Bangalore' },
];

export default function PackagesSection() {
  return (
    <section
      id="packages"
      className="w-full bg-white py-14 md:py-20"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <h2
          className="
            mb-10
            text-center
            text-xl
            font-semibold
            text-[#1a1a1a]
            sm:text-2xl
            md:mb-14
            md:text-3xl
          "
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Home Construction Packages in Bangalore
        </h2>

        {/* Package rows */}
        <div className="flex flex-col gap-5">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="
                group
                flex
                flex-col
                items-start
                gap-4
                rounded-2xl
                border
                border-transparent
                bg-[#f5f5f5]
                px-5
                py-5
                transition-all
                duration-300
                hover:border-[#d4a843]/40
                hover:bg-[#D3AB85]
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:px-7
                sm:py-6
              "
            >
              {/* Left — icon + text */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-sm
                  "
                >
                  <img
                    src={logoImg}
                    alt="logo"
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <div>
                  <p
                    className="
                      text-lg
                      font-bold
                      text-[#1a1a1a]
                      sm:text-xl
                    "
                  >
                    {pkg.name} - {pkg.price}
                  </p>

                  <div className="mt-1 flex items-center gap-1 text-sm text-[#666]">
                    <MapPin size={13} strokeWidth={1.8} />
                    <span>{pkg.location}</span>
                  </div>
                </div>
              </div>

              {/* Right — CTA button */}
              <button
                type="button"
                className="
                  w-full
                  rounded-full
                  bg-[#786B61]
                  px-6
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-[#62574F]
                  sm:w-auto
                "
              >
                Calculate Construction Cost
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
