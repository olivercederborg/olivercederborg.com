import Image from "next/image"

export function MeCard() {
   return (
      <div className="relative col-span-2 row-span-3 overflow-hidden rounded-xl">
         <Image
            alt="Oliver Cederborg"
            src="/assets/oliver-cederborg-portrait.jpg"
            height={300}
            width={300}
            className="h-full object-cover"
         />
      </div>
   )
}
