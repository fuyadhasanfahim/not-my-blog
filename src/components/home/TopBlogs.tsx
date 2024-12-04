import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    author: {
        name: string;
        avatar: string;
    };
    category: string;
    readTime: string;
    image: string;
    slug: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'Getting Started with Next.js and Tailwind CSS',
        excerpt:
            'Learn how to set up a modern web development environment with Next.js and Tailwind CSS...',
        author: {
            name: 'John Doe',
            avatar: '/avatars/avatar-1.avif',
        },
        category: 'Development',
        readTime: '5 min read',
        image: '/blogs/blogs-1.avif',
        slug: 'getting-started-nextjs-tailwind',
    },
    {
        id: 2,
        title: 'Mastering TypeScript in 2024',
        excerpt:
            'Explore advanced TypeScript features and patterns for building robust applications...',
        author: {
            name: 'Sarah Smith',
            avatar: '/avatars/avatar-2.avif',
        },
        category: 'TypeScript',
        readTime: '8 min read',
        image: '/blogs/blogs-2.avif',
        slug: 'mastering-typescript-2024',
    },
    {
        id: 3,
        title: 'Building Responsive Layouts with Tailwind',
        excerpt:
            'Deep dive into creating beautiful, responsive layouts using Tailwind CSS utilities...',
        author: {
            name: 'Mike Johnson',
            avatar: '/avatars/avatar-3.avif',
        },
        category: 'Design',
        readTime: '6 min read',
        image: '/blogs/blogs-3.avif',
        slug: 'responsive-layouts-tailwind',
    },
    {
        id: 4,
        title: 'React Server Components Explained',
        excerpt:
            'Understanding the benefits and use cases of React Server Components in Next.js...',
        author: {
            name: 'Emma Davis',
            avatar: '/avatars/avatar-4.avif',
        },
        category: 'React',
        readTime: '7 min read',
        image: '/blogs/blogs-4.avif',
        slug: 'react-server-components',
    },
    {
        id: 5,
        title: 'Modern Authentication Patterns',
        excerpt:
            'Implementing secure authentication in modern web applications using Next.js...',
        author: {
            name: 'Alex Turner',
            avatar: '/avatars/avatar-5.avif',
        },
        category: 'Security',
        readTime: '10 min read',
        image: '/blogs/blogs-5.avif',
        slug: 'modern-authentication-patterns',
    },
    {
        id: 6,
        title: 'State Management in 2024',
        excerpt:
            'Comparing different state management solutions for React applications...',
        author: {
            name: 'Lisa Chen',
            avatar: '/avatars/avatar-6.avif',
        },
        category: 'React',
        readTime: '9 min read',
        image: '/blogs/blogs-6.avif',
        slug: 'state-management-2024',
    },
];

export default function TopBlogs() {
    return (
        <section className="py-20">
            <div className="container px-4 mx-auto">
                <div className="max-w-2xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Our Top Blogs
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Discover our most popular articles and stay up to date
                        with the latest trends
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <Card
                            key={post.id}
                            className="flex flex-col hover:shadow-lg transition-shadow"
                        >
                            <CardHeader className="p-0">
                                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform hover:scale-105"
                                    />
                                </div>
                            </CardHeader>

                            <CardContent className="flex-1 p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Badge variant="secondary">
                                        {post.category}
                                    </Badge>
                                    <span className="text-sm text-muted-foreground">
                                        {post.readTime}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold mb-2">
                                    <Link
                                        href={`/blogs/blogs-1.avif}`}
                                        className="hover:text-primary transition-colors"
                                    >
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-muted-foreground">
                                    {post.excerpt}
                                </p>
                            </CardContent>

                            <CardFooter className="p-6 pt-0">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-10 h-10">
                                        <Image
                                            src={post.author.avatar}
                                            alt={post.author.name}
                                            fill
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-medium">
                                            {post.author.name}
                                        </p>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button asChild>
                        <Link href="/blogs">View All Posts</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
