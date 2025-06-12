import { useNavigate } from "react-router-dom";

function Contact() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen p-6 flex flex-col items-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-700 mb-6 text-center max-w-md">
        I'm open to new opportunities, collaborations, and freelance work. Feel free to reach out!
      </p>

      <div className="space-y-4 text-gray-800 text-center">
        <p><strong>Email:</strong> <a href="mailto:sameer@example.com" className="text-blue-600 underline">sameer@example.com</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/sameer" target="_blank" className="text-blue-600 underline">github.com/sameer</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/sameer" target="_blank" className="text-blue-600 underline">linkedin.com/in/sameer</a></p>
      </div>
      <button className='bg-blue-400 p-1 rounded-md hover:cursor-pointer' onClick={()=>{
            navigate(-1)
        }}>
            Back
        </button>
    </div>
  );
}

export default Contact;
