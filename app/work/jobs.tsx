export type Job = {
   company: string
   position: string
   introDescription: React.ReactNode
   description?: React.ReactNode
   from: string
   to: string
}

export const franklin: Job = {
   company: "Franklin",
   position: "Full-stack Developer",
   introDescription: (
      <>
         I currently work at <a href="https://hifranklin.com">Franklin</a>,
         where I help build and maintain our Next.js application.
      </>
   ),
   from: "2024",
   to: "now",
}

export const miinto: Job = {
   company: "Miinto",
   position: "Frontend Developer",
   introDescription: (
      <>
         I joined the <a href="https://miinto.dk">Miinto</a> storefront team to
         help build a new frontend and design system for the storefront.
      </>
   ),
   from: "2022",
   to: "2024",
}
