import { Link} from 'react-router-dom';
const NavBar=()=>{
    return(
        <div className="Navbar">
            <img src={require('./MYPROFILEPIC.jpg')} alt="pic"/>
            <h2>Gurpreet Singh</h2>
            <div className="nav-ul nav-right">
            <Link to="/home">Home</Link>
            </div>
        </div>
        )
}
export default NavBar;