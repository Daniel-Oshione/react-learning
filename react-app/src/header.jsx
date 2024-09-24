import pfp from './assets/pfp.png'

function Header(){
return(
        <div className="card">
            <img src={pfp} alt="daniel image"/>
            <h2>Daniel</h2>
            <p>Bro majors csc 💀</p>
        </div>
);
}

export default Header