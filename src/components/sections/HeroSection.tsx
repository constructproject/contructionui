import { useState } from 'react';

import {
  User,
  Smartphone,
  MapPin,
} from 'lucide-react';

import heroVideo from '@/assets/hero_vid.mp4';

import type {
  ConsultationFormData,
} from '@/types';

export default function HeroSection() {

  const [form, setForm] =
    useState<ConsultationFormData>({
      name: '',
      number: '',
      city: '',
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };


  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    console.log('Consultation request:', form);
  };


  return (
    <section
      id="home"
      className="
        relative
        mt-[72px]
        min-h-[calc(100vh-72px)]
        overflow-hidden
      "
    >

      {/* =========================
          BACKGROUND
      ========================== */}

      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />


      {/* GENERAL OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-black/25
        "
      />


      {/* LEFT GRADIENT */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/55
          via-black/20
          to-transparent
        "
      />


      {/* =========================
          CONTENT CONTAINER
      ========================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-72px)]
          w-full
          max-w-[1400px]
          items-center
          px-4
          py-10
          sm:px-6
          sm:py-14
          lg:px-12
          lg:py-16
        "
      >

        <div
          className="
            grid
            w-full
            items-center
            gap-8
            sm:gap-10
            lg:gap-12
            lg:grid-cols-[minmax(0,1fr)_420px]
            xl:grid-cols-[minmax(0,1fr)_440px]
          "
        >

          {/* =========================
              LEFT CONTENT
          ========================== */}

          <div
            className="
              max-w-[690px]
              text-white
            "
          >

            <p
              className="
                mb-4
                text-sm
                font-light
                tracking-wide
                text-white/85
                sm:mb-5
                sm:text-base
                md:text-lg
              "
            >
              Are you looking to build your dream home?
            </p>


            <h1
              className="
                mb-5
                text-[32px]
                font-semibold
                leading-[1.1]
                sm:mb-6
                sm:text-[42px]
                md:text-[52px]
                lg:text-[58px]
                xl:text-[66px]
              "
              style={{
                fontFamily: 'var(--font-serif)',
              }}
            >

              Design-First Home
              <br />

              Construction
              <br />

              Company
              <br />

              <span className="text-[#b8922a]">
                in Bangalore
              </span>

            </h1>


            <p
              className="
                max-w-[600px]
                text-sm
                leading-7
                text-white/85
                sm:text-base
                md:text-lg
              "
            >
              End-to-end architectural design,
              engineering and turnkey construction
              for independent homes, villas and
              apartments in Bangalore.
            </p>

          </div>


          {/* =========================
              CONSULTATION CARD
          ========================== */}

          <div
            className="
              w-full
              max-w-[440px]
              justify-self-center
              rounded-[18px]
              bg-[#786B61]
              p-5
              shadow-2xl
              sm:p-7
              lg:justify-self-end
              lg:p-8
          "
          >

            <h2
              className="
                mb-7
                text-center
                text-2xl
                font-semibold
                text-white
              "
              style={{
                fontFamily: 'var(--font-serif)',
              }}
            >
              Get Free Consultation
            </h2>


            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}

              <div className="relative">

                <User
                  size={19}
                  strokeWidth={1.7}
                  className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-[#786B61]
                  "
                />

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="
                    h-14
                    w-full
                    rounded-full
                    border-none
                    bg-white
                    pl-14
                    pr-5
                    text-base
                    text-slate-700
                    outline-none
                    placeholder:text-slate-400
                    focus:ring-2
                    focus:ring-[#b8922a]
                  "
                />

              </div>


              {/* NUMBER */}

              <div className="relative">

                <Smartphone
                  size={19}
                  strokeWidth={1.7}
                  className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-[#786B61]
                  "
                />

                <input
                  type="tel"
                  name="number"
                  value={form.number}
                  onChange={handleChange}
                  placeholder="Number"
                  required
                  className="
                    h-14
                    w-full
                    rounded-full
                    border-none
                    bg-white
                    pl-14
                    pr-5
                    text-base
                    text-slate-700
                    outline-none
                    placeholder:text-slate-400
                    focus:ring-2
                    focus:ring-[#b8922a]
                  "
                />

              </div>


              {/* CITY */}

              <div className="relative">

                <MapPin
                  size={19}
                  strokeWidth={1.7}
                  className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-[#786B61]
                  "
                />

                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                  className="
                    h-14
                    w-full
                    rounded-full
                    border-none
                    bg-white
                    pl-14
                    pr-5
                    text-base
                    text-slate-700
                    outline-none
                    placeholder:text-slate-400
                    focus:ring-2
                    focus:ring-[#b8922a]
                  "
                />

              </div>


              {/* BOOK APPOINTMENT */}

              <button
                type="submit"
                className="
                  h-14
                  w-full
                  rounded-full
                  bg-[#62574F]
                  text-base
                  font-semibold
                  text-white
                  transition
                  duration-200
                  hover:bg-[#D3AB85]
                "
              >
                Book Appointment
              </button>


              {/* CALCULATE */}

              <button
                type="button"
                className="
                  h-14
                  w-full
                  rounded-full
                  border
                  border-white/40
                  bg-transparent
                  text-base
                  font-semibold
                  text-white
                  transition
                  duration-200
                  hover:bg-white/10
                "
              >
                Calculate Your Construction Cost
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}