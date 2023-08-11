import { Link } from 'react-router-dom';
import Hpelogo from './images/hpelogo.png';

const Navbar = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="https://www.hpe.com/us/en/home.html">
                    <img src={Hpelogo} alt="" />
                </a>
            </div>
            <div className="links">
                <Link to="/" onClick={scrollToTop}>Home</Link>
                <Link to="/people" onClick={scrollToTop}>People</Link>
                <Link to="/strategy" onClick={scrollToTop}>Strategy</Link>
                <Link to='/credit' onClick={scrollToTop}>Credit</Link>
                <Link to='/quiz' onClick={scrollToTop} className="curved-link">Quiz</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;