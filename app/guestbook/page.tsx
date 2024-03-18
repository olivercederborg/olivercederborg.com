import { SignIn, SignOut } from "@/app/guestbook/buttons"
import { auth } from "@/app/auth"
import { Input } from "@/components/ui/input"
import { saveGuestbookEntry } from "@/app/db/actions"
import { Button } from "@/components/ui/button"
import { getGuestbookEntries } from "@/app/db/queries"
import { Suspense } from "react"
import { Entry } from "@/app/guestbook/entry"

export default async function GuestbookPage() {
   const session = await auth()

   const isLoggedIn = session?.user?.email

   const entries = await getGuestbookEntries()

   return (
      <main className="mt-40 flex flex-1 flex-col">
         <p className="text-xl">
            {isLoggedIn && <span>hi {session.user?.name} 👋 </span>}
            leave a mark by signing my guestbook
         </p>

         <div className="mt-8 space-y-2">
            {isLoggedIn ? (
               <>
                  <form
                     action={saveGuestbookEntry}
                     className="flex flex-1 gap-2"
                  >
                     <Input
                        id="entry"
                        name="entry"
                        type="text"
                        placeholder="elon was here"
                        minLength={5}
                     />
                     <Button type="submit">sign</Button>
                  </form>

                  <SignOut />
               </>
            ) : (
               <SignIn />
            )}
         </div>

         <Suspense fallback={<div>loading...</div>}>
            <div className="mb-8 mt-16 flex flex-col space-y-3">
               {entries.map((entry) => (
                  <Entry key={entry.id} entry={entry} />
               ))}
            </div>
         </Suspense>
      </main>
   )
}
