import { ArrowDown } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">

            {/* Background Video */}
            <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/src/assets/chai-tapri.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-6">
                <div className="max-w-4xl text-center text-white">

                    {/* Badge */}
                    <span className="mb-4 inline-block rounded-full bg-amber-500/20 px-4 py-1 text-sm tracking-wide">
                        ☕ Apni Tapri • Apni Charcha
                    </span>

                    {/* Heading */}
                    <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
                        Welcome to{" "}
                        <span className="text-amber-400">Chai</span>
                        <span>&</span>
                        <span className="text-amber-400">Charcha</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-6 text-lg md:text-xl text-gray-200">
                        Yahan sirf chai nahi milti,
                        <span className="text-amber-400 font-semibold"> kahaniyan banti hain.</span>
                        Ek tapri, thodi garmi, aur unlimited charcha.
                    </p>

                    {/* CTA */}
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <button className="rounded-full bg-amber-500 px-6 py-3 font-medium text-black hover:bg-amber-400 transition">
                            ☕ View Menu
                        </button>
                        <button className="rounded-full border border-white/40 px-6 py-3 hover:bg-white hover:text-black transition">
                            📖 Our Story
                        </button>
                    </div>

                    {/* Scroll hint */}
                    <div className="mt-16 flex justify-center animate-bounce">
                        <ArrowDown />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;