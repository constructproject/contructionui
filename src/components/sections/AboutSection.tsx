import { Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import founderImage from '@/assets/projects/founder.jpeg';
import projectImage from '@/assets/img2.jpeg';

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-white py-10 md:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-0 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-stretch gap-0 sm:gap-5 md:grid-cols-[1fr_2fr_1fr] md:gap-6 lg:gap-7">

          {/* ── Founder image ── */}
          <div className="relative h-[280px] overflow-hidden bg-slate-100 sm:h-[380px] sm:rounded-3xl md:h-auto md:rounded-l-[2.5rem] md:rounded-r-none">
            <img
              src={founderImage}
              alt="Mr. Mukesh Kumar, Founder"
              className="h-full w-full object-cover object-top md:absolute md:inset-0"
            />

            {/* Name badge with gold cap */}
            <div className="absolute bottom-4 right-4 md:bottom-5 md:right-0 lg:bottom-6">
              <div className="h-4 rounded-t-2xl bg-[#b8924d]" />
              <div className="rounded-2xl rounded-t-none bg-[#786B61] px-5 py-3 text-left">
                <p className="text-lg font-semibold leading-tight text-white md:text-xl">
                  Mr. Mukesh Kumar
                </p>
                <p className="text-sm text-white/80">Founder</p>
              </div>
            </div>
          </div>

          {/* ── About text ── */}
          <div className="flex flex-col justify-center bg-[#b8924d] px-5 py-8 sm:px-10 sm:py-10 md:min-h-[560px] md:px-10 lg:min-h-[660px] lg:px-16">
            <h2
              className="mb-4 text-xl font-semibold leading-tight text-white sm:text-2xl sm:text-3xl lg:text-4xl"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Build Your Dream Home with Longitude Constructions
            </h2>

            <p className="mb-6 text-sm leading-7 text-white/95 sm:mb-8 lg:text-base lg:leading-8">
              Longitude Constructions is a trusted design and build firm with
              over 18+ years of experience. Known for its quality, innovation,
              and client-first approach, Longitude delivers end-to-end
              services—from architectural design to execution—ensuring a
              seamless and transparent construction journey.
            </p>

            <p className="mb-7 text-sm font-medium italic leading-7 text-[##4D4446] sm:mb-10 lg:text-base lg:leading-8">
              With a legacy built on trust and excellence, Longitude doesn't
              just build homes—it builds lasting relationships.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              <Link
                to="/company"
                className="rounded-full border-2 border-white px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#b8924d] sm:px-6 sm:py-3"
              >
                Get to know us
              </Link>
              <Link
                to="/services"
                className="text-sm font-semibold text-white transition hover:text-white/80"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* ── Project image ── */}
          <div className="relative h-[260px] overflow-hidden bg-slate-100 sm:h-[360px] sm:rounded-3xl md:h-auto md:rounded-l-none md:rounded-r-[2.5rem]">
            <img
              src={projectImage}
              alt="Longitude Constructions project"
              className="h-full w-full object-cover md:absolute md:inset-0"
            />

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-[#786B61] px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:opacity-90"
            >
              <Camera size={17} />
              follow-us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
