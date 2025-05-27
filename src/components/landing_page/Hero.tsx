export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I&apos;m <span className="text-indigo-400">Lucas Lamenha</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8">
          Full-stack Developer focused on AI-powered applications.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#about"
            className="inline-block px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white text-lg rounded-md transition"
          >
            About Me ↓
          </a>
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg rounded-md transition"
          >
            See My Work ↓
          </a>
        </div>
      </div>
    </section>
  );
}