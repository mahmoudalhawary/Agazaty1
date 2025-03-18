import { Link, useLocation } from "react-router-dom";
import '../CSS/LinkSideBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function LinkSideBar(props) {
    const { items } = props;
    const location = useLocation();
    const filteredItems = items.filter(item => item.status === true);

    const userID = localStorage.getItem("userID");
    const [leavesWating, setLeavesWating] = useState([]);

    useEffect(() => {
        fetch(`http://agazatyapi.runasp.net/api/NormalLeave/WaitingByCoWorkerID/${userID}`)
            .then((res) => res.json())
            .then((data) => setLeavesWating(data))
    }, []);


    return (
        <>
            {filteredItems.map((item, index) => {
                const isActive = location.pathname === item.link; 
                return (
                    <Link to={item.link} className={`link-SideBar ${item.class}`} key={index}>
                        <li className={`link-SideBar ${item.class} ${isActive ? 'active-link' : ''} tran`}>
                            <FontAwesomeIcon icon={item.icon} className="col-sm-12 col-xl-2 pl-5" style={{ fontSize: '1.6em' }} />
                            <span className="col-md-8 col-lg-6 col-xl-8 d-none d-xl-block">{item.title}</span>
                            {item.hint &&
                                (leavesWating.length > 0 ? <span className="d-none d-xl-flex justify-content-center align-items-center text-light rounded-2 bg-danger hintSideBar" style={{fontSize:'12px'}}>{leavesWating.length}</span>
                                : null)}
                        </li>
                    </Link>
                    
                );
            })}
        </>
    );
}

export default LinkSideBar;