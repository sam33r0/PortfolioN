import { useNavigate } from "react-router-dom";

function About() {
    const navigate= useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Sameer Srivastava 👋</h1>
        <p className="text-lg max-w-xl mx-auto text-gray-700">
          A frontend developer with MERN stack experience, passionate about building modern web experiences and running my e-commerce brand trustBUZZaar.
        </p>
        <button className='bg-blue-400 p-1 rounded-md hover:cursor-pointer' onClick={()=>{
            navigate(-1)
        }}>
            Back
        </button>
      </div>
    </div>
  );
}

export default About;
