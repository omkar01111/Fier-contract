"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        fire: "bg-firered text-white hover:bg-firered-dark",
        fireOutline: "bg-transparent border border-white text-white hover:bg-white/10",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  iconRight?: React.ReactNode
  iconLeft?: React.ReactNode
  iconHoverShift?: boolean
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    { className, variant, size, asChild = false, iconRight, iconLeft, iconHoverShift = true, children, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button"

    // If using asChild, we need to clone the child and pass the props
    if (asChild && React.isValidElement(children)) {
      return (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
            {React.cloneElement(
              children as React.ReactElement,
              {},
              <>
                {iconLeft && (
                  <motion.span
                    className="mr-2 inline-flex"
                    initial={{ x: 0 }}
                    whileHover={iconHoverShift ? { x: -3 } : {}}
                    transition={{ duration: 0.2 }}
                  >
                    {iconLeft}
                  </motion.span>
                )}
                {(children as React.ReactElement).props.children}
                {iconRight && (
                  <motion.span
                    className="ml-2 inline-flex"
                    initial={{ x: 0 }}
                    whileHover={iconHoverShift ? { x: 3 } : {}}
                    transition={{ duration: 0.2 }}
                  >
                    {iconRight}
                  </motion.span>
                )}
              </>,
            )}
          </Comp>
        </motion.div>
      )
    }

    // Regular button rendering
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="inline-block"
      >
        <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
          {iconLeft && <span className="mr-2 inline-flex">{iconLeft}</span>}
          {children}
          {iconRight && <span className="ml-2 inline-flex">{iconRight}</span>}
        </Comp>
      </motion.div>
    )
  },
)
AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton, buttonVariants }
