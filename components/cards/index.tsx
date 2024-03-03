import { DribbbleCard } from "@/components/cards/dribbble"
import { GithubStatsCard } from "@/components/cards/github"
import { LinkedInCard } from "@/components/cards/linkedin"
import { LocationCard } from "@/components/cards/location"
import { MeCard } from "@/components/cards/me"
import { TimeCard } from "@/components/cards/time"

export function Cards() {
   return (
      <section className="mt-8 grid grid-cols-5 grid-rows-3 gap-4 md:grid-cols-7">
         <MeCard />
         <GithubStatsCard />
         <DribbbleCard />
         <LocationCard />
         <LinkedInCard />
         <TimeCard />
      </section>
   )
}
