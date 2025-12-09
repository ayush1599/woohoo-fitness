"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroButtons() {
    return (
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button asChild size="lg" className="w-48 h-14 bg-primary text-black hover:bg-primary/90 text-lg rounded-full font-bold shadow-[0_0_20px_rgba(204,243,30,0.3)] hover:shadow-[0_0_30px_rgba(204,243,30,0.5)] transition-all duration-300">
                    <Link href="/contact">
                        Join Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button asChild size="lg" variant="outline" className="w-48 h-14 bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-black hover:border-white text-lg rounded-full font-bold backdrop-blur-sm transition-all duration-300">
                    <Link href="/contact">
                        Book a Tour
                    </Link>
                </Button>
            </motion.div>
        </div>
    )
}
