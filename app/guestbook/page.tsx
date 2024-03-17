import { SignIn, SignOut } from "@/app/guestbook/buttons"
import { auth } from "@/app/auth"

export default async function GuestbookPage() {
   const session = await auth()

   const isLoggedIn = session?.user?.email

   return (
      <div className="mt-40">
         Logged in: {session?.user?.name || "no"}
         {!isLoggedIn ? <SignIn /> : <SignOut />}
         <h1>Guestbook</h1>
         <p>This is the guestbook page.</p>
      </div>
   )
}
