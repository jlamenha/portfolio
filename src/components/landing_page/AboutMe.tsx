import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white px-6 py-20"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Responsive Profile Image */}
        <div className="relative rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
          <Image
            src="/me.jpg"
            alt="Lucas Lamenha"
            fill
            className="object-cover"
          />
        </div>

        {/* Bio Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I’m Lucas Lamenha — a full-stack developer with a passion for building
            intelligent, AI-powered applications. I specialize in combining robust backend systems
            with modern frontend technologies to create seamless digital experiences. Currently pursuing both a Bachelor&apos;s
            and a Master&apos;s degree in Computer Science and Artificial Intelligence at Worcester Polytechnic Institute (WPI),
             I love tackling problems at the intersection of data, design, and engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
