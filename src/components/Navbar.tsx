import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
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
          }} className="md:text-xl font-bold hover:cursor-pointer text-blue-600">Sameer Srivastava</h1>
        </div>
        <ul className="flex md:space-x-6 space-x-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-gray-700 hover:text-blue-600 font-medium transition ${location.pathname === link.path ? 'text-blue-600 underline underline-offset-4' : ''
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
