import { auth } from "@/app/auth"
import { getGuestbookEntries } from "@/app/db/queries"
import { SignIn, SignOut } from "@/app/guestbook/buttons"
import { Entry } from "@/app/guestbook/entry"
import Form from "@/app/guestbook/form"
import { Suspense } from "react"

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
                  <Form />
                  <SignOut />
               </>
            ) : (
               <SignIn />
            )}
         </div>

         <Suspense fallback={<div>loading...</div>}>
            <div className="mt-16 flex flex-col space-y-3 border-t border-white/5 py-8">
               {entries.map((entry) => (
                  <Entry key={entry.id} entry={entry} />
               ))}
            </div>
         </Suspense>
      </main>
   )
}
