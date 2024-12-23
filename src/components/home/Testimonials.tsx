import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    comment: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Content Creator',
        company: 'TechBlog Inc',
        comment:
            "This platform has transformed how I manage my blog. The intuitive interface and powerful features make content creation a breeze. I've seen a significant increase in engagement since switching.",
        image: '/testimonials/avatar-1.avif',
    },
    {
        id: 2,
        name: 'Mike Chen',
        role: 'Tech Writer',
        company: 'DevDaily',
        comment:
            "The markdown support and code highlighting features are exactly what I needed for my technical blog. The platform's performance is outstanding, and my readers love the clean design.",
        image: '/testimonials/avatar-2.avif',
    },
    {
        id: 3,
        name: 'Emma Davis',
        role: 'Digital Marketer',
        company: 'Growth Masters',
        comment:
            "The SEO tools and analytics provided are game-changing. I can easily track my blog's performance and optimize content for better reach. The customer support is exceptional too!",
        image: '/testimonials/avatar-3.avif',
    },
];

export default function Testimonials() {
    return (
        <section className="py-20">
            <div className="container px-4 mx-auto">
                <div className="max-w-2xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        What Our Clients Say
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {`Don't just take our word for it - hear from some of our
                        satisfied clients`}
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
                    {testimonials.map((testimonial) => (
                        <Card
                            key={testimonial.id}
                            className="bg-card hover:shadow-lg transition-shadow"
                        >
                            <CardContent className="p-6">
                                <Quote className="w-10 h-10 mb-4 text-primary opacity-50" />

                                <p className="mb-6 text-base text-card-foreground">
                                    {testimonial.comment}
                                </p>

                                <div className="flex items-center">
                                    <div className="relative w-12 h-12 mr-4">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover rounded-full"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {testimonial.name}
                                        </h3>
                                        <div className="text-sm text-muted-foreground">
                                            {testimonial.role} at{' '}
                                            {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
