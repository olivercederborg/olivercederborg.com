import { Cards } from "@/components/cards"
import Link from "next/link"

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col">
         <h1 className="mb-1 mt-0 text-2xl font-medium dark:text-white">
            hi, I&apos;m Oliver ✌️
         </h1>

         <section className="mt-8 text-neutral-600 dark:text-neutral-400">
            <p>
               I&apos;m a developer with a passion for building beautiful and
               functional applications. I currently{" "}
               <Link
                  href={"/work"}
                  className="text-neutral-900 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300"
               >
                  <span className="text-neutral-400">/</span>work
               </Link>{" "}
               at{" "}
               <a
                  href="https://hifranklin.com"
                  className="border-orange-300 text-neutral-900 after:text-sm after:content-['_↗'] hover:border-b dark:text-neutral-50"
               >
                  Franklin
               </a>{" "}
               as a full-stack developer, building a fintech banking solution
               for e-commerce.
            </p>
         </section>

         <Cards />
      </main>
   )
}

export const revalidate = 43200 // 12 hours
