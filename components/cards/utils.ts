const colors = {
   0: "bg-neutral-300 dark:bg-neutral-800",
   25: "bg-green-900/35 dark:bg-green-900",
   50: "bg-green-800/50 dark:bg-green-800",
   75: "bg-green-600/50 dark:bg-green-600",
   100: "bg-green-500/75 dark:bg-green-400",
}

export function getDailyContributionsColor(
   contributionsCount: number,
   maxContributions: number,
) {
   const percentage = (contributionsCount / maxContributions) * 100
   if (percentage <= 0) {
      return colors[0]
   } else if (percentage <= 25) {
      return colors[25]
   } else if (percentage <= 50) {
      return colors[50]
   } else if (percentage <= 75) {
      return colors[75]
   } else {
      return colors[100]
   }
}
