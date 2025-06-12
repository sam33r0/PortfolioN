import { useNavigate } from "react-router-dom";

function Projects() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid gap-6 max-w-5xl mx-auto md:grid-cols-2">
        {/* Project 1 */}
        <div className="p-5 rounded-2xl shadow bg-white">
          <h3 className="text-xl font-semibold mb-2">Real-time Chat App</h3>
          <p className="text-gray-700">
            Developed using the MERN stack with Socket.IO for WebSocket integration. Supports one-on-one messaging and group chats with a clean and responsive UI.
          </p>
        </div>

        {/* Project 2 */}
        <div className="p-5 rounded-2xl shadow bg-white">
          <h3 className="text-xl font-semibold mb-2">Recipe Sharing Platform</h3>
          <p className="text-gray-700">
            Built with MongoDB, Express.js, React, and Node.js. Features include authentication, personalized recipe feeds, and a rich user interface.
          </p>
        </div>

        {/* Project 3 */}
        <div className="p-5 rounded-2xl shadow bg-white">
          <h3 className="text-xl font-semibold mb-2">trustBUZZaar – Shopify Store</h3>
          <p className="text-gray-700">
            Launched and managed a dropshipping store. Designed store layout, optimized for conversions, and handled ad creatives and Facebook marketing.
          </p>
        </div>

        {/* Project 4 */}
        <div className="p-5 rounded-2xl shadow bg-white">
          <h3 className="text-xl font-semibold mb-2">Relay Race Game (Internship)</h3>
          <p className="text-gray-700">
            Built core game logic in Node.js and integrated it with frontend components. Worked on game mechanics, UI/UX, and performance optimization.
          </p>
        </div>
      </div>
      <button className='bg-blue-400 p-1 rounded-md hover:cursor-pointer' onClick={()=>{
            navigate(-1)
        }}>
            Back
        </button>
    </div>
  );
}

export default Projects;
