import { VscArrowRight } from "react-icons/vsc";
import { Link } from "remix";
import { IoLogoFigma } from "react-icons/io5";
import {
  SiVim,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
} from "react-icons/si";
import { SectionHeader } from "~/components/SectionHeader";
import { SectionShell } from "~/components/SectionShell";

export default function About() {
  return (
    <SectionShell id="about">
      <SectionHeader heading="About" />

      <section className="relative mt-16 grid grid-cols-12 gap-y-10 md:ml-24 md:gap-x-8 lg:gap-x-16">
        <p className="col-span-full text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 md:col-span-6 xl:col-span-8">
          Get a brief look at who I am and what I do. <br />
          If you would like to know more about me and my interests, you can.
        </p>
        <Link
          to="/projects"
          className="group col-span-full flex items-center self-start text-3xl font-light text-dark-400 transition duration-300 ease-in-out hover:text-dark-500 dark:text-dark-200 md:col-start-7 xl:col-start-9"
        >
          More about me
          <VscArrowRight
            size={36}
            className="ml-3 rotate-45 text-dark-200 transition duration-300 ease-in-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-dark-300 dark:text-dark-400"
          />
        </Link>
      </section>

      <section className="relative mt-24 flex grid-cols-12 flex-col-reverse gap-y-10 md:ml-24 md:grid md:gap-x-8 lg:gap-x-16">
        <section className="col-span-full md:col-span-6 xl:col-span-8">
          <article>
            <h3 className="w-24 text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400">
              Who am I
            </h3>
            <p className="mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200">
              My name is Oliver Cederborg. I am 24 years old, I live in
              Copenhagen, Denmark, and I&apos;m a self-taught designer and
              developer.
              <br />
              <br />
              Digital design has been my main focus for many years, specifically
              UI/UX, but I have the past years shifted my focus to front-end
              development, which I have developed a great passion for.
              <br />
              <br />
              I enjoy the constant change in the technologies used in the area
              and love diving into new frameworks and technologies.
              <br />
              <br />I try to challenge myself by diving head-first into the
              unknown, learning the skills along the way, needed to complete the
              task.
            </p>
          </article>

          <section className="col-span-full mt-14 md:col-span-6 xl:col-span-8">
            <h3 className="w-24 text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400">
              Tech I enjoy
            </h3>
            <div className="mt-6 flex flex-wrap gap-6 text-dark-300">
              <IoLogoFigma size={28} title="Figma" />
              <SiVim size={28} title="Vim" />
              <SiTailwindcss size={28} title="TailwindCSS" />
              <SiTypescript size={28} title="TypeScript" />
              <SiReact size={28} title="React.js" />
              <SiVuedotjs size={28} title="Vue.js" />
              <SiNextdotjs size={28} title="Next.js" />
            </div>
          </section>
        </section>

        <img
          src="/assets/olivercederborg-portrait.jpg"
          alt="Portrait of Oliver Cederborg"
          className="w-2/3 md:col-span-full md:col-start-7 md:w-full xl:col-start-9"
        />
      </section>
    </SectionShell>
  );
}
