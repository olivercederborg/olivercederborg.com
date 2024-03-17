import { SignIn, SignOut } from "@/app/guestbook/buttons"
import { auth } from "@/app/auth"

export default async function GuestbookPage() {
   const session = await auth()

   const isLoggedIn = session?.user?.email

   return (
      <main className="mt-40">
         <p className="text-xl">leave a mark by signing my guestbook</p>
         <form>
            <Input />
         </form>
         Logged in: {session?.user?.name || "no"}
         {!isLoggedIn ? <SignIn /> : <SignOut />}
         <h1>Guestbook</h1>
         <p>This is the guestbook page.</p>
      </main>
   )
}
