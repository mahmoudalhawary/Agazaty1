import YahyaSaad from '../Images/YahyaSaad.jpg';
import '../CSS/User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Search({userRole}){
    const firstName = 'يحيى سعد';

    return(
        <div className='d-flex gap-2 justify-content-center'>
            <Link to={'/messages'} className='d-flex rounded-circle11'>
                <FontAwesomeIcon icon={faBell} />
            </Link>
            <Link to={'/'} className='d-flex rounded-circle11'>
                <FontAwesomeIcon icon={faChevronDown} />
            </Link>

            <div>
                <h6 className='m-0'>{firstName}</h6>
                <p className='m-0'>{userRole}</p>
            </div>
            <Link to={`/profile`}>
                <img src={YahyaSaad} className="hoverOpacity rounded-circle profilePicture" alt="profilePicture" />
            </Link>
        </div>
    )
}

export default Search;