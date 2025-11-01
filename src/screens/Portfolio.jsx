import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <header className="p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Nikita Dhar</h1>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2">
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </header>

        <main className="px-6 space-y-16">
          {/* Home Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold">Hi, I'm Nikita Dhar</h2>
            <p className="text-lg">MERN Stack Developer | Python Enthusiast | Problem Solver</p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">See My Work</button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-xl">Contact Me</button>
            </div>
          </section>

          {/* About Me */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p>
              I am a software developer with 2 years of experience. I specialize in MERN stack and also have hands-on experience with Python and Django. I enjoy solving real-world problems and constantly upgrading my skills.
              Currently pursuing MCA, based in Bhopal, Madhya Pradesh.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Skills & Tools</h2>
            <ul className="list-disc list-inside">
              <li>JavaScript, Python</li>
              <li>React, Node.js, Express, MongoDB</li>
              <li>Django, Next.js</li>
              <li>Postman, Git, REST APIs</li>
            </ul>
          </section>

          {/* Projects Placeholder */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <p>Projects coming soon. Stay tuned!</p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p>Email: your-email@example.com</p>
            <p>Location: Bhopal, Madhya Pradesh</p>
            <p>
              LinkedIn | GitHub (add links later)
            </p>
          </section>
        </main>

        <footer className="p-6 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Nikita Dhar
        </footer>
      </div>
    </div>
  );
}