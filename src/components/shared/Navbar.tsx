import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import ToggleMode from './ToggleMode';

export default function Navbar() {
    return (
        <nav className="bg-background/50 shadow-lg backdrop-blur sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-2xl font-semibold text-foreground"
                        >
                            Not My Blog
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-4">
                        <Link
                            href="/"
                            className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-base font-medium"
                        >
                            About
                        </Link>
                        <Link
                            href="/blogs"
                            className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-base font-medium"
                        >
                            Blogs
                        </Link>
                        <Link
                            href="/contact"
                            className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-base font-medium"
                        >
                            Contact
                        </Link>
                        <Button variant="outline">Login</Button>
                        <ToggleMode />
                    </div>

                    <div className="md:hidden">
                        <Sheet>
                            <div className="flex items-center gap-2">
                                <ToggleMode />
                                <SheetTrigger aria-label="Open menu">
                                    <Menu className="size-6" />
                                </SheetTrigger>
                            </div>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle className="text-2xl flex items-center justify-between">
                                        <span>Not My Blog</span>
                                    </SheetTitle>
                                    <SheetDescription>
                                        <div className="flex flex-col space-y-4">
                                            <Link
                                                href="/"
                                                className="text-muted-foreground hover:text-foreground rounded-md text-base font-medium hover:underline px-2"
                                            >
                                                Home
                                            </Link>
                                            <Link
                                                href="/about"
                                                className="text-muted-foreground hover:text-foreground rounded-md text-base font-medium hover:underline px-2"
                                            >
                                                About
                                            </Link>
                                            <Link
                                                href="/blogs"
                                                className="text-muted-foreground hover:text-foreground rounded-md text-base font-medium hover:underline px-2"
                                            >
                                                Blogs
                                            </Link>
                                            <Link
                                                href="/contact"
                                                className="text-muted-foreground hover:text-foreground rounded-md text-base font-medium hover:underline px-2"
                                            >
                                                Contact
                                            </Link>
                                            <Button variant="outline">
                                                Login
                                            </Button>
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
