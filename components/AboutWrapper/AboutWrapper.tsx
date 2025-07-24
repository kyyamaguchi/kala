"use client"

import { usePathname } from "next/navigation"

export function AboutWrapper(
  { children }:
  Readonly<{ children: React.ReactNode }>
) {
  const pathname = usePathname()
  const isAbout = pathname === "/about"
  return (
    <body className={isAbout ? "invert" : ""}>
      {children}
    </body>
  )
}
