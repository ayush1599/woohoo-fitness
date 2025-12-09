import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PricingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 bg-background">
                <div className="container mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
                            Membership <span className="text-primary">Plans</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Choose the plan that fits your goals. No hidden fees.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Monthly", price: "₹3,999", features: ["Access to all zones", "Locker access", "1 Personal Training Session"] },
                            { name: "Quarterly", price: "₹9,999", features: ["Access to all zones", "Locker access", "3 Personal Training Sessions", "Steam & Sauna Access"] },
                            { name: "Annual", price: "₹24,999", features: ["Access to all zones", "Permanent Locker", "12 Personal Training Sessions", "Unlimited Recovery Floor Access", "Guest Passes"] },
                        ].map((plan, i) => (
                            <Card key={i} className={`bg-card border-border flex flex-col ${i === 2 ? 'border-primary shadow-[0_0_20px_rgba(204,243,30,0.2)]' : ''}`}>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 space-y-6">
                                    <div className="text-4xl font-bold text-primary">{plan.price}</div>
                                    <ul className="space-y-2">
                                        {plan.features.map((feature, j) => (
                                            <li key={j} className="flex items-center gap-2 text-muted-foreground">
                                                <Check className="h-4 w-4 text-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold">
                                        Choose Plan
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
