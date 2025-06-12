import { useNavigate } from "react-router-dom";

function Resume() {
    const navigate= useNavigate();
  return (
    <div className="min-h-screen p-6 flex flex-col items-center bg-white">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <p className="text-gray-700 mb-6 text-center max-w-xl">
        I'm a frontend developer with strong MERN stack skills and a proven entrepreneurial mindset. Below is a snapshot of my background, or you can download the full resume.
      </p>
      <a
        href="/SameerSrivastava_Resume.pdf"
        download
        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Download Resume
      </a>

      {/* Optional: Inline Summary */}
      <div className="mt-10 text-left max-w-2xl w-full">
        <h3 className="text-xl font-semibold mb-2">Experience</h3>
        <ul className="list-disc ml-6 text-gray-800">
          <li><strong>Founder – trustBUZZaar</strong>: Built and managed a Shopify store, handled Facebook ads, product selection, and customer experience.</li>
          <li><strong>Intern – Future of Gaming</strong>: Developed multiplayer features, worked on Node.js-based backend logic, and contributed to game UI integration.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Education</h3>
        <p>B.Tech in Mechanical Engineering – Harcourt Butler Technical University (2020–2024)</p>
      </div>
      <button className='bg-blue-400 p-1 rounded-md hover:cursor-pointer' onClick={()=>{
            navigate(-1)
        }}>
            Back
        </button>
    </div>
  );
}

export default Resume;
