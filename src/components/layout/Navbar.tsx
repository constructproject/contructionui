import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Calculator,
  Home,
  Layers3,
  BriefcaseBusiness,
  Building2,
} from 'lucide-react';

import useScrolled from '@/hooks/useScrolled';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrolled = useScrolled(20);

  // Close mobile menu when user scrolls
  useEffect(() => {
    if (!mobileOpen) return;
    const close = () => setMobileOpen(false);
    window.addEventListener('scroll', close, { passive: true });
    return () => window.removeEventListener('scroll', close);
  }, [mobileOpen]);

  return (
    <header
      className={`
        fixed
        left-0
        right-0
        top-0
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? 'bg-white/95 shadow-md backdrop-blur-md'
            : 'bg-white'
        }
      `}
    >
      <nav
        className="
          mx-auto
          flex
          h-[72px]
          max-w-[1400px]
          items-center
          justify-between
          px-5
          sm:px-8
          lg:px-10
        "
      >

        {/* LOGO */}

        <a
          href="/"
          className="flex items-center gap-2"
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              border-2
              border-[#b8922a]
              text-xl
              font-semibold
              text-[#786B61]
            "
          >
            L
          </div>

          <div className="leading-none">
            <div
              className="
                text-lg
                font-semibold
                text-[#786B61]
              "
              style={{
                fontFamily: 'var(--font-serif)',
              }}
            >
              Your Company
            </div>

            <div
              className="
                mt-1
                text-[9px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#b8922a]
              "
            >
              Constructions
            </div>
          </div>
        </a>


        {/* DESKTOP NAV */}

        <div
          className="
            hidden
            items-center
            gap-7
            lg:flex
          "
        >

          <a
            href="#home"
            className="
              flex
              items-center
              gap-1.5
              text-sm
              font-medium
              text-[#786B61]
              transition
              hover:text-[#b8922a]
            "
          >
            <Home size={16} strokeWidth={1.7} />
            Home
          </a>


          <button
            type="button"
            className="
              flex
              items-center
              gap-1
              text-sm
              font-medium
              text-slate-600
              transition
              hover:text-[#786B61]
            "
          >
            <Layers3 size={16} strokeWidth={1.7} />

            Packages

            <ChevronDown size={14} />
          </button>


          <a
            href="#projects"
            className="
              flex
              items-center
              gap-1.5
              text-sm
              font-medium
              text-slate-600
              transition
              hover:text-[#786B61]
            "
          >
            <BriefcaseBusiness
              size={16}
              strokeWidth={1.7}
            />

            Our Works
          </a>


          <button
            type="button"
            className="
              flex
              items-center
              gap-1
              text-sm
              font-medium
              text-slate-600
              transition
              hover:text-[#786B61]
            "
          >
            Services

            <ChevronDown size={14} />
          </button>


          <button
            type="button"
            className="
              flex
              items-center
              gap-1
              text-sm
              font-medium
              text-slate-600
              transition
              hover:text-[#786B61]
            "
          >
            <Building2
              size={16}
              strokeWidth={1.7}
            />

            Company

            <ChevronDown size={14} />
          </button>


          {/* CALCULATE COST */}

          <button
            type="button"
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-[#786B61]
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              transition
              hover:bg-[#62574F]
            "
          >
            <Calculator size={17} />

            Calculate Cost

            <ChevronDown size={14} />
          </button>

        </div>


        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="
            rounded-lg
            p-2
            text-[#786B61]
            lg:hidden
          "
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </nav>


      {/* MOBILE MENU */}

      {mobileOpen && (
        <div
          className="
            animate-[slideDown_0.2s_ease-out]
            border-t
            border-slate-100
            bg-white
            px-5
            py-5
            shadow-lg
            lg:hidden
          "
        >
          <div className="flex flex-col gap-1">

            <a
              href="#home"
              onClick={() => setMobileOpen(false)}
              className="
                rounded-lg
                px-3
                py-3
                text-sm
                font-medium
                text-[#786B61]
                hover:bg-slate-50
              "
            >
              Home
            </a>


            <a
              href="#packages"
              onClick={() => setMobileOpen(false)}
              className="
                rounded-lg
                px-3
                py-3
                text-sm
                font-medium
                text-slate-600
                hover:bg-slate-50
              "
            >
              Packages
            </a>


            <a
              href="#projects"
              onClick={() => setMobileOpen(false)}
              className="
                rounded-lg
                px-3
                py-3
                text-sm
                font-medium
                text-slate-600
                hover:bg-slate-50
              "
            >
              Our Works
            </a>


            <a
              href="#services"
              onClick={() => setMobileOpen(false)}
              className="
                rounded-lg
                px-3
                py-3
                text-sm
                font-medium
                text-slate-600
                hover:bg-slate-50
              "
            >
              Services
            </a>


            <a
              href="#company"
              onClick={() => setMobileOpen(false)}
              className="
                rounded-lg
                px-3
                py-3
                text-sm
                font-medium
                text-slate-600
                hover:bg-slate-50
              "
            >
              Company
            </a>


            <button
              type="button"
              className="
                mt-3
                flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#786B61]
                px-5
                py-3
                text-sm
                font-semibold
                text-white
              "
            >
              <Calculator size={17} />

              Calculate Cost
            </button>

          </div>
        </div>
      )}

    </header>
  );
}