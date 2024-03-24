import { auth } from "@/app/auth"
import { getGuestbookEntries } from "@/app/db/queries"
import { SignIn, SignOut } from "@/app/guestbook/components/buttons"
import { Entries } from "@/app/guestbook/components/entries"
import Form, { FormShell } from "@/app/guestbook/components/form"
import { Heading } from "@/app/guestbook/components/heading"

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
      <section>
         <Heading>
            {isLoggedIn && <span>hi {session.user?.name} 👋 </span>}
            leave a mark by signing my guestbook
         </Heading>

         <FormShell>
            {isLoggedIn ? (
               <>
                  <Form />
                  <SignOut />
               </>
            ) : (
               <SignIn />
            )}
         </FormShell>

         <Entries entries={entries} />
      </section>
   )
}
