"use client"

import * as React from "react";
import { cn } from "../utils/cn"

function Label({ className, ...props }) {
    return (
        <label
            className={cn(
                "text-sm font-medium text-text dark:text-text p-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                className
            )}
            {...props}
        />
    )
}

export default Label;