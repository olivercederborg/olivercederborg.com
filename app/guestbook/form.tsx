"use client"

import { saveGuestbookEntry } from "@/app/db/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import * as React from "react"
import { useFormState } from "react-dom"

const initialState = {
   success: false,
   message: "",
}

export default function Form() {
   const ref = React.useRef<HTMLFormElement>(null)
   const [state, action] = useFormState(formAction, initialState)

   async function formAction(_prevState: unknown, formData: FormData) {
      const res = await saveGuestbookEntry(formData)
      ref.current?.reset()
      return res
   }

   return (
      <div className="flex w-full flex-col items-center gap-2">
         <form ref={ref} action={action} className="flex w-full flex-1 gap-2">
            <Input
               id="entry"
               name="entry"
               type="text"
               placeholder="elon was here"
               minLength={5}
               maxLength={500}
               required
               className={cn({
                  "border-red-300": !state.success && state.message,
               })}
            />
            <Button type="submit">sign</Button>
         </form>

         {state.message && (
            <p
               className={cn("text-sm", {
                  "text-green-400 dark:text-green-300": state.success,
                  "text-red-400 dark:text-red-300": !state.success,
               })}
            >
               {state.message}
            </p>
         )}
      </div>
   )
}
