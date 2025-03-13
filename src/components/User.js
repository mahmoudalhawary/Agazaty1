import YahyaSaad from '../Images/YahyaSaad.jpg';
import '../CSS/User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Search({userRole}){

    const [employee, setEmployee] = useState([]);
    
        useEffect(()=>{
            fetch(`http://localhost:9000/employees/1`)
            .then((res)=> res.json())
            .then((data)=> setEmployee(data))
        }, [])

    return(
        <div className='d-flex gap-2 justify-content-center'>
            <Link to={'/messages'} className='d-flex rounded-circle11'>
                <FontAwesomeIcon icon={faBell} />
            </Link>
            <Link to={'/'} className='d-flex rounded-circle11'>
                <FontAwesomeIcon icon={faChevronDown} />
            </Link>

            <div>
                <h6 className='m-0'>{employee.firstName}</h6>
                <p className='m-0'>{employee.jobTitle}</p>
            </div>
            <Link to={`/profile`}>
                <img src={YahyaSaad} className="hoverOpacity rounded-circle profilePicture" alt="profilePicture" />
            </Link>
        </div>
    )
}

export default Search;