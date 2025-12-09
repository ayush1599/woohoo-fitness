import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          {/* Placeholder for Hero Video/Image */}
          <div className="w-full h-full bg-neutral-900 opacity-50" />
          <Image
            src="https://www.woohoofitness.com/assets/hero-placeholder.jpg"
            alt="Woohoo Gym"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white uppercase">
            9,000 sq ft of <span className="text-primary">pure energy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Elite equipment, smart zones, recovery floor, and a stunning group studio in Indiranagar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 text-lg px-8 h-14">
              Join Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black text-lg px-8 h-14">
              Book a Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Zones Section */}
      <section id="zones" className="py-20 bg-background">
        <div className="container mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
              Smart Training <span className="text-primary">Zones</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Move through the floor with intent. Everything is exactly where you need it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Cardio Zone", desc: "Treadmills, ellipticals, rowers, stair climbers, stretch & cycling machines." },
              { title: "Booty Station", desc: "Lower body & glutes — hip thrusts, abductors, and more." },
              { title: "Pull Party", desc: "Rows, pulldowns, and all things back." },
              { title: "Iron Yard", desc: "Free weights: barbells, plates, benches, racks." },
              { title: "Pec City", desc: "Presses, flyes, pec decks — chest paradise." },
              { title: "The Delt Belt", desc: "Shoulder-focused stationing and isolations." },
              { title: "Curl Corner", desc: "Biceps, triceps, wrists & forearms detail work." },
            ].map((zone, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary transition-colors group">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {i + 1} · {zone.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{zone.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-neutral-900/50 border-y border-border">
        <div className="container mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
              Equipment you’ve <span className="text-primary">dreamed of</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Curated lineup from the world’s best manufacturers.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos would go here, using text for now as placeholders if images fail */}
            <span className="text-2xl font-bold text-white">PANATTA</span>
            <span className="text-2xl font-bold text-white">NAUTILUS</span>
            <span className="text-2xl font-bold text-white">REAL LEADER</span>
            <span className="text-2xl font-bold text-white">SHUA</span>
            <span className="text-2xl font-bold text-white">BOOTY BUILDER</span>
            <span className="text-2xl font-bold text-white">NIKE</span>
          </div>
        </div>
      </section>

      {/* Recovery Section */}
      <section id="recovery" className="py-20 bg-background">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
              Active <span className="text-primary">Recovery</span> Floor
            </h2>
            <p className="text-xl text-muted-foreground">
              Dedicated men’s and women’s suites — steam, sauna, red light therapy, and ice plunge.
            </p>
            <ul className="space-y-4">
              {[
                "Heat & Chill: Pair sauna heat with an ice plunge.",
                "Red Light Room: Low-level light for skin health.",
                "Steam Suites: Unwind your way in separate rooms.",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-white">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
            <Button className="bg-primary text-black hover:bg-primary/90">
              Explore Recovery
            </Button>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden border border-border bg-neutral-900">
            {/* Placeholder for Recovery Image */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              Recovery Zone Image
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-neutral-900/30">
        <div className="container mx-auto space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-center text-white">
            Real words from <span className="text-primary">real members</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Woohoo Health Club has quickly become my favorite place to work out.",
              "The equipment is top-notch and always in great condition.",
              "The vibe here is amazing, it feels energetic but also welcoming.",
            ].map((review, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg text-white">"{review}"</p>
                  <p className="text-sm text-muted-foreground font-semibold">- Google Review</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black">
            READY TO FEEL THE ENERGY?
          </h2>
          <p className="text-xl md:text-2xl text-black/80 max-w-2xl mx-auto font-medium">
            Join the elite fitness community in Indiranagar today.
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-black/80 text-lg px-10 h-16 mt-4">
            Start Your Journey
          </Button>
        </div>
      </section>
    </div>
  );
}
