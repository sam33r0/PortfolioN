import { Link } from "react-router-dom"
import About from "./About"

function Home() {
    // return (
    //     <div className='text-white h-screen bg-red-600 flex flex-col justify-center items-center content-center'>
    //         <div>
    //             home
    //         </div>
    //         <Link className='bg-green-600 p-2' to={'/about'}>
    //             about</Link>
    //         <Link className='bg-green-600 p-2' to={'/projects'}>
    //             projects</Link>
    //         <Link className='bg-green-600 p-2' to={'/resume'}>
    //             resume</Link>
    //         <Link className='bg-green-600 p-2' to={'/contact'}>
    //             contact</Link>
    //     </div>
    // )
    return (
        <About/>
    )
}

export default Home