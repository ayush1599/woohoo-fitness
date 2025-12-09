import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 bg-background">
                <div className="container mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
                            Visit / <span className="text-primary">Join</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Come feel the difference. 9000 sq ft, right in Indiranagar.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
                                <div className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-white">Address</h3>
                                        <p className="text-muted-foreground">
                                            2nd and 3rd Floor, KP Landmark,<br />
                                            7th Main, 100Ft road,<br />
                                            Indiranagar, Bangalore 560008
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="h-6 w-6 text-primary" />
                                    <div>
                                        <h3 className="font-semibold text-white">Phone</h3>
                                        <p className="text-muted-foreground">88772 21131</p>
                                    </div>
                                </div>
                            </div>

                            <div className="aspect-video bg-neutral-900 rounded-lg border border-border flex items-center justify-center">
                                <span className="text-muted-foreground">Map Placeholder</span>
                            </div>
                        </div>

                        <div className="bg-card border border-border p-8 rounded-xl space-y-6">
                            <h2 className="text-2xl font-bold text-white">Send us a message</h2>
                            <div className="grid gap-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white">First Name</label>
                                        <Input placeholder="John" className="bg-background border-border" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white">Last Name</label>
                                        <Input placeholder="Doe" className="bg-background border-border" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Email</label>
                                    <Input type="email" placeholder="john@example.com" className="bg-background border-border" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Message</label>
                                    <Textarea placeholder="I'm interested in joining..." className="bg-background border-border min-h-[150px]" />
                                </div>
                                <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold">
                                    Send Message
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
