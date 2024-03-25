import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbarClass'>
            <nav className="navbar">
                <div className="tabLinks">
                    <Link className= "link" to="/Locations">Locations</Link>
                    <Link className= "link" to="/Menu">Menu</Link>
                    <Link className= "logoLink" to="/"><img className="img-fluid"src={require('./Plumeria Logo.png')} alt="Plumeria Logo"/> </Link>
                    <Link className= "link" to="/Order">Order Online</Link>
                    <Link className= "link" to="/About">About Us</Link>

                </div>

            </nav>




        </div>
        







    );
}

export default Navbar;