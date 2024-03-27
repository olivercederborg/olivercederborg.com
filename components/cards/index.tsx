import { getGithubStats } from "@/app/actions"
import { DribbbleCard } from "@/components/cards/dribbble"
import { GithubStatsCard } from "@/components/cards/github"
import { LinkedInCard } from "@/components/cards/linkedin"
import { LocationCard } from "@/components/cards/location"
import { MeCard } from "@/components/cards/me"
import { TimeCard } from "@/components/cards/time"
import { Motion } from "@/components/motion"

export async function Cards() {
   const { followers, stars } = await getGithubStats()

   return (
      <Motion
         asChild
         animate="visible"
         variants={{
            visible: {
               transition: { delayChildren: 0.35, staggerChildren: 0.1 },
            },
         }}
      >
         <section className="mt-8 grid grid-cols-8 grid-rows-5 gap-4 md:grid-cols-7 md:grid-rows-3">
            <MeCard />
            <GithubStatsCard followers={followers} stars={stars} />
            <DribbbleCard />
            <LocationCard />
            <LinkedInCard />
            <TimeCard />
         </section>
      </Motion>
   )
}
