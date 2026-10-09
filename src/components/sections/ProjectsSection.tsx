import { MapPin } from 'lucide-react';

import img1 from '@/assets/projects/img1.jpeg';
import img2 from '@/assets/projects/img2.jpeg';
import img3 from '@/assets/projects/img3.jpeg';
import img4 from '@/assets/projects/img4.jpeg';
import img5 from '@/assets/projects/img5.jpeg';
import img6 from '@/assets/projects/img6.jpeg';

const WHY_POINTS = [
  'Site-Sensitive Architecture',
  'Integrated Design + Build Approach',
  'Contemporary, Yet Timeless Aesthetics',
  'User-Centric Spaces',
  'Sustainability at the Core',
];

interface Project {
  id: number;
  name: string;
  location: string;
  image: string;
  bhk?: string;
  plot?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Albert Palms | FarmHouse',
    location: 'Bangalore',
    image: img1,
  },
  {
    id: 2,
    name: 'Muralitharan Residence',
    location: 'Bangalore',
    image: img2,
    bhk: 'G+2 · 6BHK',
    plot: '40×80',
  },
  {
    id: 3,
    name: 'Binu Residence',
    location: 'Bangalore',
    image: img3,
    bhk: 'G+2 · 4BHK',
    plot: '40×40',
  },
  {
    id: 4,
    name: 'Vishal Residence',
    location: 'Bangalore',
    image: img4,
    bhk: 'G+2 · 4BHK',
    plot: '40×40',
  },
  {
    id: 5,
    name: 'Sandeep Residence',
    location: 'Bangalore',
    image: img5,
    bhk: 'G+2 · 4BHK',
    plot: '60×40',
  },
  {
    id: 6,
    name: 'Manvantara Residence',
    location: 'Bangalore',
    image: img6,
    bhk: 'G+2 · 4BHK',
    plot: '40×30',
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full bg-white pb-6 pt-14 sm:pb-8 sm:pt-16 md:pb-10 md:pt-20 lg:pb-12 lg:pt-24"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">

        {/* ── TOP ROW: intro text + hero callout ── */}
        <div className="mb-10 grid grid-cols-1 items-center gap-8 sm:mb-12 md:grid-cols-2 md:gap-10 lg:gap-16">

          {/* Left: heading + bullets */}
          <div>
            <h2
              className="mb-3 text-2xl font-bold leading-tight text-[#1a1a1a] sm:text-3xl lg:text-4xl"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Our Residential Construction Projects in Bangalore
            </h2>

            <p className="mb-4 text-sm font-semibold text-[#b8922a] sm:text-base">
              299+ Homes &amp; Residential Projects Delivered
            </p>

            <p className="mb-3 text-sm font-bold text-[#1a1a1a] sm:text-base">
              Why Choose Longitude for Home Construction in Bangalore?
            </p>

            <ul className="space-y-1.5">
              {WHY_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm text-slate-600 sm:text-[15px]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: "BUILD YOUR DREAM HOME" banner */}
          <div className="relative h-[240px] overflow-hidden rounded-2xl bg-slate-100 sm:h-[280px] md:h-[300px] lg:h-[340px]">
            <img
              src={img4}
              alt="Dream home"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* subtle dark overlay */}
            <div className="absolute inset-0 bg-white/30" />

            {/* watermark-style leaf — pure CSS so no extra asset needed */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <svg viewBox="0 0 200 200" className="h-48 w-48 text-slate-600" fill="currentColor">
                <path d="M100 10 C60 40 20 80 20 130 C20 170 55 190 100 190 C145 190 180 170 180 130 C180 80 140 40 100 10Z" />
              </svg>
            </div>

            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 sm:p-8">
              <p
                className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                <span className="text-[#b8922a]">BUILD </span>
                <span className="text-[#263238]">YOUR</span>
                <br />
                <span className="text-[#b8922a]">DREAM </span>
                <span className="text-[#263238]">HOME</span>
              </p>
            </div>
          </div>

        </div>

        {/* ── BOTTOM ROW: project cards ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="
                group
                overflow-hidden
                rounded-2xl
                shadow-md
                ring-1
                ring-slate-200
                transition-all
                duration-300
                hover:shadow-xl
                hover:ring-2
                hover:ring-[#b8922a]
              "
            >

              {/* Image */}
              <div className="relative h-[200px] sm:h-[220px] lg:h-[240px]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gold decorative side bar */}
                <div className="absolute bottom-0 left-0 top-0 w-2 bg-[#b8922a]/80" />

                {/* BHK + Plot badges */}
                {(project.bhk || project.plot) && (
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    {project.bhk && (
                      <span className="rounded-full bg-[#4D4446] px-3 py-1 text-[11px] font-semibold text-white shadow">
                        {project.bhk}
                      </span>
                    )}
                    {project.plot && (
                      <span className="rounded-full bg-[#b8922a] px-3 py-1 text-[11px] font-semibold text-white shadow">
                        {project.plot}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Card info */}
              <div className="bg-white px-5 py-4 transition-colors duration-300 group-hover:bg-[#b8922a]">
                <h3
                  className="mb-2 text-lg font-bold leading-snug text-[#1a1a1a] transition-colors duration-300 group-hover:text-white"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {project.name}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-sm text-slate-500 transition-colors duration-300 group-hover:text-white/90">
                    <MapPin size={13} strokeWidth={2} />
                    {project.location}
                  </div>

                  <button
                    type="button"
                    className="text-sm font-semibold text-[#b8922a] transition-colors duration-300 group-hover:text-white"
                  >
                    Details
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ── Browse More Projects button ── */}
        <div className="mt-10 flex justify-end sm:mt-12">
          <button
            type="button"
            className="
              rounded-md
              bg-[#786B61]
              px-8
              py-3.5
              text-sm
              font-semibold
              tracking-wide
              text-white
              transition
              duration-200
              hover:bg-[#62574F]
              sm:px-10
              sm:text-base
            "
          >
            Browse More Projects
          </button>
        </div>

      </div>
    </section>
  );
}
