import { ArrowRight } from "lucide-react";

const Signup = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-amber-50 dark:bg-gray-900 px-4 transition-colors">

            <div className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl">

                {/* Heading */}
                <h1 className="text-3xl font-bold text-center">
                    ✨ Charcha Shuru Karo
                </h1>
                <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                    Ek nayi kahani, ek nayi chai ke saath.
                </p>

                {/* Form */}
                <form className="mt-8 space-y-5">

                    <input
                        type="text"
                        placeholder="Aapka Naam"
                        className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:border-gray-600"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:border-gray-600"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:border-gray-600"
                    />

                    <button className="w-full flex items-center justify-center gap-2 rounded-full bg-amber-500 py-3 font-medium text-black hover:bg-amber-400 transition">
                        Tapri Join Karo <ArrowRight size={18} />
                    </button>

                </form>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                    Pehle se member ho?{" "}
                    <span className="cursor-pointer text-amber-500 hover:underline">
                        Wapas Aao ☕
                    </span>
                </p>

            </div>
        </div>
    );
};

export default Signup;