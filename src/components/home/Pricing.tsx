import { Check } from 'lucide-react';
import { Button } from '../ui/button';

export default function Pricing() {
    return (
        <section className="py-20">
            <div className="container px-4 mx-auto">
                <div className="max-w-2xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {`Choose the perfect plan for your needs. Always know
                            what you'll pay.`}
                    </p>
                </div>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col p-6 space-y-6 rounded-lg shadow-lg bg-card border-2 dark:border-white dark:border-2">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold">Free</h3>
                            <p className="text-muted-foreground">
                                Perfect for getting started
                            </p>
                            <span className="text-4xl font-bold">$0</span>
                            <span className="text-muted-foreground">
                                /month
                            </span>
                        </div>
                        <div className="flex-1 space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>Up to 5 blog posts</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>Basic analytics</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>Community support</span>
                                </div>
                            </div>
                        </div>
                        <Button variant="outline">Get Started</Button>
                    </div>

                    <div className="flex flex-col p-6 space-y-6 rounded-lg lg:scale-110 shadow-lg bg-primary text-primary-foreground">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold">Pro</h3>
                            <p className="text-primary-foreground/80">
                                For serious bloggers
                            </p>
                            <span className="text-4xl font-bold">$29</span>
                            <span className="text-primary-foreground/80">
                                /month
                            </span>
                        </div>
                        <div className="flex-1 space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    <span>Unlimited blog posts</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    <span>Advanced analytics</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    <span>Priority support</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    <span>Custom domain</span>
                                </div>
                            </div>
                        </div>
                        <Button variant="secondary">Subscribe Now</Button>
                    </div>

                    <div className="flex flex-col p-6 space-y-6 rounded-lg shadow-lg bg-card border dark:border-white dark:border-2">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold">Enterprise</h3>
                            <p className="text-muted-foreground">
                                For large organizations
                            </p>
                            <span className="text-4xl font-bold">$99</span>
                            <span className="text-muted-foreground">
                                /month
                            </span>
                        </div>
                        <div className="flex-1 space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>All Pro features</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>Dedicated support</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>API access</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>Custom integrations</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>SLA guarantee</span>
                                </div>
                            </div>
                        </div>
                        <Button variant="outline">Contact Sales</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
