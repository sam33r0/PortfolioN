import { Typewriter } from "../components/Typewriter";
function About() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-slate-800 via-green-200 to-slate-400">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Sameer Srivastava 👋</h1>
        <p className="text-lg max-w-xl mx-auto text-gray-700">
          <Typewriter />
          A frontend developer with MERN stack experience, passionate about building modern web experiences and running my e-commerce brand trustBUZZaar.
        </p>
      </div>
    </div>
  );
}

export default About;
