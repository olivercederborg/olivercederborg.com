import { Cards } from "@/components/cards"
import Link from "next/link"

export default function Home() {
   return (
      <section>
         <h1 className="mb-1 mt-0 text-2xl font-medium leading-relaxed dark:text-white">
            Hi, I&apos;m Oliver ✌️
         </h1>

         <section className="prose prose-neutral mt-8 max-w-full dark:prose-invert">
            <p>
               I&apos;m a developer with a passion for building beautiful and
               functional applications. I currently{" "}
               <Link href={"/work"}>
                  <span className="text-neutral-400">/</span>work
               </Link>{" "}
               as a full-stack developer at{" "}
               <a href="https://hifranklin.com">Franklin</a> - a fintech
               startup, building a banking solution for e-commerce.
            </p>
         </section>

         <Cards />
      </section>
   )
}

export const revalidate = 3600
