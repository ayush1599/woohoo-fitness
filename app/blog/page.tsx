import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 bg-background">
                <div className="container mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
                            Fitness <span className="text-primary">Blog</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Tips, tricks, and insights from our expert trainers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <Card key={i} className="bg-card border-border hover:border-primary transition-colors cursor-pointer">
                                <div className="aspect-video bg-neutral-900 w-full" />
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-white">Top 5 Exercises for Glute Growth</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Discover the best movements to target your glutes effectively...
                                    </p>
                                    <p className="text-primary mt-4 font-medium">Read More →</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
