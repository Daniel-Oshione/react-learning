// import pfp from './assets/images/pfp.png'
import logo from './assets/images/logo.svg'

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
                <li><a href="#">Home</a></li>
                <li><a href="#">New</a></li>
                <li><a href="#">Popular</a></li>
                <li><a href="#">Trending</a></li>
                <li><a href="#">Categories</a></li>
             </ul>
            </nav>
        </header>
);
}

export default Header