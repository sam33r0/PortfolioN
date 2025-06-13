import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'About', path: '/about', color:'hover:text-amber-300' },
  { name: 'Projects', path: '/projects', color:'hover:text-lime-300' },
  { name: 'Resume', path: '/resume', color:'hover:text-blue-300' },
  { name: 'Contact', path: '/contact', color:'hover:text-rose-300' },
];
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900 border-b border-white/20 shadow " >
      <div className="max-w-screen mx-auto px-4 py-3 flex justify-between items-center">
        <div className='flex flex-row justify-between items-center'>
          <span className={`${location.pathname === '/' 
          // || location.pathname === '/about' 
          ? 'hidden' : ''} hover:cursor-pointer bg-gray-600 text-white p-1 mx-3 rounded-md`} onClick={() => {
            navigate(-1)
          }}>Back</span>
          <h1 onClick={() => {
            console.log('test1');
            navigate('/')
          }} className="md:text-xl font-bold hover:bg-gradient-to-r hover:from-teal-400 hover:via-gray-200 hover:to-yellow-200 hover:inline-block hover:text-transparent hover:bg-clip-text hover:cursor-pointer tracking-wide text-white">Sameer Srivastava</h1>
        </div>
        <ul className="flex md:space-x-6 space-x-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-white ${link.color} font-medium transition ${location.pathname === link.path ? 'text-blue-600 underline underline-offset-4' : ''
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
