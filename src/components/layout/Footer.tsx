import logoImg from '@/assets/projects/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#4D4446] text-white">

      <div
        className="
          mx-auto
          grid
          max-w-[1200px]
          grid-cols-2
          gap-8
          px-5
          py-10
          sm:gap-10
          sm:px-8
          sm:py-14
          md:grid-cols-2
          lg:grid-cols-4
        "
      >

        {/* COMPANY */}

        <div className="col-span-2 sm:col-span-2 lg:col-span-1">

          <div className="mb-4 flex items-center gap-3">
            <img
              src={logoImg}
              alt="Akshaya Constructions Logo"
              className="h-14 w-14 object-contain"
            />
            <h3
              className="text-xl font-semibold sm:text-2xl"
              style={{
                fontFamily: 'var(--font-serif)',
              }}
            >
              Akshaya Constructions
            </h3>
          </div>

          <p className="max-w-xs text-sm leading-6 text-white/70">
            Design-first home construction with
            thoughtful architecture, quality execution
            and transparent project management.
          </p>

        </div>


        {/* QUICK LINKS */}

        <div>

          <h4 className="mb-4 font-semibold">
            Quick Links
          </h4>

          <div className="flex flex-col gap-3 text-sm text-white/70">

            <a href="#home" className="hover:text-white">
              Home
            </a>

            <a href="#company" className="hover:text-white">
              About Us
            </a>

            <a href="#projects" className="hover:text-white">
              Our Works
            </a>

            <a href="#services" className="hover:text-white">
              Services
            </a>

          </div>

        </div>


        {/* SERVICES */}

        <div>

          <h4 className="mb-4 font-semibold">
            Services
          </h4>

          <div className="flex flex-col gap-3 text-sm text-white/70">

            <a href="#services" className="hover:text-white">
              Home Construction
            </a>

            <a href="#services" className="hover:text-white">
              Architectural Design
            </a>

            <a href="#services" className="hover:text-white">
              Interior Design
            </a>

            <a href="#services" className="hover:text-white">
              Turnkey Construction
            </a>

          </div>

        </div>


        {/* CONTACT */}

        <div>

          <h4 className="mb-4 font-semibold">
            Contact
          </h4>

          <div className="space-y-3 text-sm text-white/70">

            <p>
              Bangalore, Karnataka
            </p>

            <p>
              +91 9916757151
            </p>

            <p>
              hello@yourcompany.com
            </p>

          </div>

        </div>

      </div>


      <div className="border-t border-white/10">

        <div
          className="
            mx-auto
            max-w-[1200px]
            px-5
            py-5
            text-center
            text-xs
            text-white/50
            sm:px-8
          "
        >
          © {new Date().getFullYear()} Akshaya Constructions.
          All rights reserved.
        </div>

      </div>

    </footer>
  );
}