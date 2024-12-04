import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="px-4 py-10 lg:h-128 lg:space-x-8 lg:flex lg:items-center">
            <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
                <h1 className="text-3xl leading-snug text-foreground md:text-4xl">
                    A <span className="font-semibold">free repository</span> for
                    community <br className="hidden lg:block" />
                    components using{' '}
                    <span className="font-semibold underline decoration-primary">
                        Tailwind CSS
                    </span>
                </h1>

                <p className="mt-4 text-lg text-muted-foreground">
                    Open source Tailwind UI components and templates to{' '}
                    <br className="hidden lg:block" />
                    bootstrap your new apps, projects or landing sites!
                </p>
            </div>

            <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
                <Image
                    src="/images/website-designer-bro-purple.svg"
                    alt="website designer illustration"
                    width={500}
                    height={500}
                    className="w-full h-full max-w-md mx-auto"
                    priority
                />
            </div>
        </section>
    );
}
