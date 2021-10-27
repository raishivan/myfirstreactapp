import {Link} from 'react-router-dom';
function Nav(){

    return (
        <div>
            <Link to = "/">Home</Link>
            <br/>
            <Link to = "/About">About</Link>
            <br/>
            <Link to = "/Contacts">Contacts</Link>

        </div>
    )
}
export default Nav;