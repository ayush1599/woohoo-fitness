"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const brands = [
    "PANATTA",
    "NAUTILUS",
    "REAL LEADER",
    "SHUA",
    "BOOTY BUILDER",
    "NIKE"
]

export function EquipmentCarousel() {
    return (
        <div className="w-full">
            {/* Mobile Carousel */}
            <div className="md:hidden px-12">
                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {brands.map((brand, index) => (
                            <CarouselItem key={index} className="basis-full">
                                <div className="p-1">
                                    <Card className="bg-transparent border-none shadow-none">
                                        <CardContent className="flex aspect-[3/1] items-center justify-center p-6">
                                            <span className="text-3xl font-black text-white tracking-tighter text-center">{brand}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-primary/20 hover:bg-primary text-white hover:text-black border-none" />
                    <CarouselNext className="bg-primary/20 hover:bg-primary text-white hover:text-black border-none" />
                </Carousel>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:flex flex-wrap justify-center gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {brands.map((brand, index) => (
                    <span key={index} className="text-2xl font-bold text-white">{brand}</span>
                ))}
            </div>
        </div>
    )
}
