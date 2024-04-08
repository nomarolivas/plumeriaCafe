import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbarClass'>
            <nav className="navbar">
                <div className="tabLinks">
                    <Link className= "link" to="/Locations">Locations</Link>

                
                    <Link className='dropdown'>
                        <button className="menuTab">Menu</button>
                        <div className='dropdownLinks'>
                            <Link to="/Locations">Menu</Link>
                            <Link to="/Locations">Menu</Link>
                            <Link to="/Locations">Menu</Link>
                            <Link to="/Locations">Menu</Link>
                        </div>
                    </Link>
                    
                    <Link className= "logoLink" to="/"><img className="img-fluid"src={require('./Plumeria Logo.png')} alt="Plumeria Logo"/> </Link>
                

                    <Link className='dropdown'>
                        <button className="menuTab">Order Online</button>
                        <div className='dropdownLinksOnline'>
                            <Link to="/Locations">Location</Link>
                            <Link to="/Locations">Location</Link>
                            <Link to="/Locations">Location</Link>
                            <Link to="/Locations">Location</Link>
                        </div>
                    </Link>
                    <Link className= "link" to="/About">About Us</Link>

                </div>



            </nav>




        </div>
        







    );
}

export default Navbar;

