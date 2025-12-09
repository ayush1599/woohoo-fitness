"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, Phone, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Zones", href: "/#zones" },
  { name: "Recovery", href: "/recovery" },
  { name: "Pricing", href: "/pricing" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Blog", href: "/blog" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [hoveredPath, setHoveredPath] = React.useState<string | null>(null)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center">
            <span className="text-2xl font-black tracking-tighter text-primary group-hover:text-white transition-colors duration-300">WOOHOO</span>
            <span className="text-2xl font-black tracking-tighter text-white group-hover:text-primary transition-colors duration-300 ml-1">FITNESS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-1 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                onMouseEnter={() => setHoveredPath(item.href)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                <span className="relative z-10">{item.name}</span>
                {hoveredPath === item.href && (
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-full"
                    layoutId="navbar-hover"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                {pathname === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="navbar-active"
                  />
                )}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" className="gap-2 border-primary/50 text-primary hover:bg-primary hover:text-black hover:border-primary rounded-full px-6">
              <Phone className="h-4 w-4" />
              <span className="font-bold">88772 21131</span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="bg-primary text-black hover:bg-primary/90 rounded-full px-6 font-bold shadow-[0_0_15px_rgba(204,243,30,0.3)] hover:shadow-[0_0_25px_rgba(204,243,30,0.5)] transition-shadow">
              <Link href="/contact">Visit / Join</Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block text-2xl font-bold text-white hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="h-px bg-white/10 my-4" />
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full gap-2 border-primary text-primary hover:bg-primary hover:text-black rounded-full h-12 text-lg">
                  <Phone className="h-5 w-5" />
                  88772 21131
                </Button>
                <Button asChild className="w-full bg-primary text-black hover:bg-primary/90 rounded-full h-12 text-lg font-bold">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>Visit / Join</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
