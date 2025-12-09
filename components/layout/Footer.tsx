import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full border-t border-border bg-background py-12 md:py-16 lg:py-20">
            <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col gap-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold tracking-tighter text-primary">WOOHOO</span>
                        <span className="text-2xl font-bold tracking-tighter text-foreground">FITNESS</span>
                    </Link>
                    <p className="text-muted-foreground">
                        9,000 sq ft of pure energy in Indiranagar. Elite equipment, smart zones, and recovery suites.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
                    <nav className="flex flex-col gap-2">
                        <Link href="/#zones" className="text-muted-foreground hover:text-primary transition-colors">Zones</Link>
                        <Link href="/recovery" className="text-muted-foreground hover:text-primary transition-colors">Recovery</Link>
                        <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
                        <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
                    </nav>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold text-foreground">Contact</h3>
                    <address className="not-italic text-muted-foreground">
                        2nd and 3rd Floor, KP Landmark,<br />
                        7th Main, 100Ft road,<br />
                        Indiranagar, Bangalore 560008
                    </address>
                    <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Phone:</span> 88772 21131
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold text-foreground">Social</h3>
                    <nav className="flex flex-col gap-2">
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Facebook</Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</Link>
                    </nav>
                </div>
            </div>
            <div className="container mx-auto mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Woohoo Health Club. All rights reserved.
            </div>
        </footer>
    )
}
