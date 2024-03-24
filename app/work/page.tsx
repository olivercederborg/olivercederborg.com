import { JobCard } from "@/app/work/components/job-card"
import { franklin, miinto, type Job } from "@/app/work/jobs"

export const metadata = {
   title: "Work - Oliver Cederborg",
   description:
      "Learn more about my work experience and what I'm currently working on.",
}

export default async function WorkPage() {
   const jobs: Job[] = [franklin, miinto]
   return (
      <section>
         <h1 className="mb-1 mt-0 text-2xl font-medium dark:text-white">
            my work experience
         </h1>

         <div className="prose prose-neutral dark:prose-invert mt-8 space-y-16">
            <p>
               Learn more about my work experience, my focus areas, and what
               I&apos;m currently working on.
            </p>

            <div className="flex flex-col items-center">
               {jobs.map((job, index) => (
                  <>
                     {index !== 0 && (
                        <div className="h-8 w-0 border border-dashed border-neutral-300 dark:border-neutral-500/20" />
                     )}
                     <JobCard job={job} key={job.company} />
                  </>
               ))}
            </div>
         </div>
      </section>
   )
}
