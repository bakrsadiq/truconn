"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, Users, Bell, User, Settings } from "lucide-react"

const navItems = [
  { href: "/dashboard", icon: Home, label: "Home" },
  { href: "/dashboard", icon: Users, label: "Connect" },
  { href: "/notifications", icon: Bell, label: "Notifications", badge: 2 },
  { href: "/profile", icon: User, label: "Profile" },
  { href: "/settings", icon: Settings, label: "Settings" },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border md:hidden z-40 animate-slide-up">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center w-full h-full relative transition-colors"
            >
              <div className={`relative transition-colors ${isActive ? "text-blue-600" : "text-muted-foreground"}`}>
                <Icon className="w-6 h-6" />
                {item.badge && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-scale-in">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-xs mt-1">{item.label}</span>
              {isActive && <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 animate-slide-up" />}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
