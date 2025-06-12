// import { About, Contact, Projects, Resume } from "./index"

// function Home() {
//     // return (
//     //     <div className='text-white h-screen bg-red-600 flex flex-col justify-center items-center content-center'>
//     //         <div>
//     //             home
//     //         </div>
//     //         <Link className='bg-green-600 p-2' to={'/about'}>
//     //             about</Link>
//     //         <Link className='bg-green-600 p-2' to={'/projects'}>
//     //             projects</Link>
//     //         <Link className='bg-green-600 p-2' to={'/resume'}>
//     //             resume</Link>
//     //         <Link className='bg-green-600 p-2' to={'/contact'}>
//     //             contact</Link>
//     //     </div>
//     // )
//     return (
//         <>
//             <About />
//         </>
//     )
// }

// export default Home

import { Link } from "react-router-dom";
import { Typewriter } from "../components/Typewriter";

export default function Home() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-20 flex justify-center items-center flex-col">
      <div className="max-w-4xl mx-auto text-center flex justify-center items-center flex-col">
        <Typewriter
          words={["Frontend Developer", "React Enthusiast", "Shopify Store Builder"]}
        />
        <p className="text-gray-600 text-lg mt-4">
          I craft responsive, accessible websites using React, TypeScript & Tailwind.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Link
            to="/projects"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <a
            href="/SAMEER_SRIVASTAVA_RESUME.pdf"
            target="_blank"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
