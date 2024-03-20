import { auth } from "@/app/auth"
import { getGuestbookEntries } from "@/app/db/queries"
import { SignIn, SignOut } from "@/app/guestbook/components/buttons"
import { Entries } from "@/app/guestbook/components/entries"
import Form from "@/app/guestbook/components/form"

export const metadata = {
   title: "guestbook - Oliver Cederborg",
   description:
      "Guestbook where visitors can leave a mark by signing my guestbook.",
}

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

         <Entries entries={entries} />
      </main>
   )
}
