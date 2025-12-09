import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RecoveryPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 bg-background">
                <div className="container mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
                            Active <span className="text-primary">Recovery</span> Floor
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Dedicated men’s and women’s suites — steam, sauna, red light therapy, and ice plunge.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">Recover Faster. Feel Incredible.</h2>
                            <p className="text-muted-foreground text-lg">
                                Recovery is just as important as the workout. Our dedicated suites allow you to unwind and rejuvenate your body.
                            </p>
                            <ul className="space-y-4">
                                <li className="p-4 bg-card border border-border rounded-lg">
                                    <h3 className="text-xl font-bold text-primary mb-2">Heat & Chill</h3>
                                    <p className="text-muted-foreground">Pair sauna heat with an ice plunge to recover faster and feel incredible.</p>
                                </li>
                                <li className="p-4 bg-card border border-border rounded-lg">
                                    <h3 className="text-xl font-bold text-primary mb-2">Red Light Room</h3>
                                    <p className="text-muted-foreground">Low-level light for skin health and post-session refresh.</p>
                                </li>
                                <li className="p-4 bg-card border border-border rounded-lg">
                                    <h3 className="text-xl font-bold text-primary mb-2">Steam Suites</h3>
                                    <p className="text-muted-foreground">Separate men’s & women’s rooms so you can unwind your way.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="grid gap-4">
                            <div className="aspect-video bg-neutral-900 rounded-lg flex items-center justify-center border border-border">
                                <span className="text-muted-foreground">Sauna Image</span>
                            </div>
                            <div className="aspect-video bg-neutral-900 rounded-lg flex items-center justify-center border border-border">
                                <span className="text-muted-foreground">Ice Plunge Image</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
