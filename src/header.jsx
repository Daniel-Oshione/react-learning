// import pfp from './assets/images/pfp.png'
import logo from './assets/images/logo.svg'
import { Link } from 'react-router-dom'

function Header(){
return(
        // <div className="card">
        //     <img src={pfp} alt="daniel image"/>
        //     <h2>Daniel</h2>
        //     <p>Bro majors csc 💀</p>
        // </div>

        <header>
            <nav className="navBar">
             <img src={logo} alt={logo + "company logo"} />
             <ul>
                <li><Link to="/#home">Home</Link></li>
                <li><Link to="/#new">New</Link></li>
                <li><Link to="/#popular">Popular</Link></li>
                <li><Link to="/#trending">Trending</Link></li>
                <li><Link to="/#categories">Categories</Link></li>
             </ul>
            </nav>
        </header>
);
}

export default Header
