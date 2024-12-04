import HeroSection from '@/components/home/HeroSection';
import Pricing from '@/components/home/Pricing';
import Testimonials from '@/components/home/Testimonials';
import TopBlogs from '@/components/home/TopBlogs';

export default function Home() {
    return (
        <div className="w-full max-w-7xl mx-auto bg-muted/50">
            <HeroSection />
            <Pricing />
            <Testimonials />
            <TopBlogs />
        </div>
    );
}
