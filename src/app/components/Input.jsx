"use client"

import * as React from "react";
import { cn } from "../utils/cn"

function Input({ className, type, ...props }) {
    return (
        <input
            type={type}
            className={cn(
                `flex h-10 w-full border-none bg-gray-50 dark:bg-background text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           `,
                className
            )}
            {...props}
        />
    )
}

Input.displayName = "Input";

export default Input;
