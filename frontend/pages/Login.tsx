import { ArrowRight } from "lucide-react";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-amber-50 dark:bg-gray-900 px-4 transition-colors">

            <div className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl">

                {/* Heading */}
                <h1 className="text-3xl font-bold text-center">
                    ☕ Wapas Aao
                </h1>
                <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                    Aapki chai abhi bhi garam hai…
                </p>

                {/* Form */}
                <form className="mt-8 space-y-5">

                    <input
                        type="email"
                        placeholder="Email ya Phone"
                        className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:border-gray-600"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:border-gray-600"
                    />

                    <button className="w-full flex items-center justify-center gap-2 rounded-full bg-amber-500 py-3 font-medium text-black hover:bg-amber-400 transition">
                        Chai Peene Aao <ArrowRight size={18} />
                    </button>

                </form>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                    Naye ho?{" "}
                    <span className="cursor-pointer text-amber-500 hover:underline">
                        Charcha Shuru Karo
                    </span>
                </p>

            </div>
        </div>
    );
};

export default Login;