import { SignIn, SignOut } from "@/app/guestbook/buttons"
import { auth } from "@/app/auth"
import { Input } from "@/components/ui/input"
import { saveGuestbookEntry } from "@/app/db/actions"
import { Button } from "@/components/ui/button"
import { getGuestbookEntries } from "@/app/db/queries"
import { Suspense } from "react"

export default async function GuestbookPage() {
   const session = await auth()

   const isLoggedIn = session?.user?.email

   const entries = await getGuestbookEntries()

   return (
      <main className="mt-40">
         <p className="text-xl">
            {isLoggedIn && <span>hi {session.user?.name} 👋 </span>}
            leave a mark by signing my guestbook
         </p>
         <div className="mt-8 space-y-2">
            <div className="flex w-full gap-2">
               <form action={saveGuestbookEntry} className="flex-1">
                  <Input
                     id="entry"
                     name="entry"
                     type="text"
                     placeholder="elon was here"
                     minLength={5}
                  />
                  <Button type="submit">sign</Button>
               </form>
            </div>
            <SignOut />
         </div>
         <div className="mt-10">
            <Suspense fallback={<div>loading...</div>}>
               {entries.map((entry) => (
                  <div key={entry.id} className="mb-4">
                     <p>
                        <span className="text-neutral-400">
                           {entry.displayName}
                        </span>
                        : {entry.body}
                     </p>
                  </div>
               ))}
            </Suspense>
         </div>
      </main>
   )
}
