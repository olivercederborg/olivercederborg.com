import { Github } from "lucide-react"

export function Footer() {
   return (
      <footer className="flex items-center justify-between border-t border-neutral-200 py-4 dark:border-neutral-900">
         <p className="font-light text-neutral-500">
            © {new Date().getFullYear()}
         </p>
         <a
            href="https://github.com/olivercederborg/olivercederborg.com"
            target="_blank"
            className="flex items-center gap-2 border-b border-transparent text-neutral-900 hover:border-orange-300 dark:text-neutral-50"
         >
            <Github size={18} /> olivercederborg.com
         </a>
      </footer>
   )
}
