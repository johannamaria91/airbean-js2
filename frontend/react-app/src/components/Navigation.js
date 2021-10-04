import { Link } from "react-router-dom";
import line from '../assets/svg/line.svg'

function Navigation () {
    
    return ( 
        <section id="navi">
            <ul>
                <li><Link to='/menu'>Meny</Link></li>
                <li><img alt="a line" src={line}/></li>
                <li><Link alt="a line" to='/about'>Vårt kaffe</Link></li>
                <li><img alt="a line" src={line}/></li>
                <li><Link to='/profile'>Min profil</Link></li>
                <li><img alt="a line" src={line}/></li>
                <li><Link to='/status'>Orderstatus</Link></li>
            </ul>
        </section>
     );
}
 
export default Navigation;