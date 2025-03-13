// import { Link } from "react-router-dom";
// import '../CSS/LinkSideBar.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function LinkSideBar(props){
//     const {items} = props;
//     const filteredItems = items.filter(item => item.status === true);

//     return(
//         <>
//             {filteredItems.map((item, index) => (
//             <Link to={item.link} className={`link-SideBar ${item.class}`} key={index} >
//                 <li>
//                     <FontAwesomeIcon icon={item.icon} className="pl-5" style={{ fontSize: '1.5em' }} />
//                     <span className="col-9 d-none d-xl-block">{item.title}</span>
//                     {item.hint && <span className="text-start rounded-circle bg-danger hintSideBar"></span>}
//                 </li>
//             </Link>
//             ))} 
//         </>
//     )
// }

// export default LinkSideBar;

















import { Link, useLocation } from "react-router-dom";
import '../CSS/LinkSideBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LinkSideBar(props) {
    const { items } = props;
    const location = useLocation();
    const filteredItems = items.filter(item => item.status === true);
    const numberOfMessage = '5';

    return (
        <>
            {filteredItems.map((item, index) => {
                const isActive = location.pathname === item.link; 
                return (
                    <Link to={item.link} className={`link-SideBar ${item.class}`} key={index}>
                        <li className={`link-SideBar ${item.class} ${isActive ? 'active-link' : ''} tran`}>
                            <FontAwesomeIcon icon={item.icon} className="col-sm-12 col-xl-2 pl-5" style={{ fontSize: '1.6em' }} />
                            <span className="col-md-8 col-lg-6 col-xl-8 d-none d-xl-block">{item.title}</span>
                            {item.hint && <span className="d-none d-xl-flex justify-content-center align-items-center text-light rounded-2 bg-danger hintSideBar" style={{fontSize:'12px'}}>{numberOfMessage}</span>}
                        </li>
                    </Link>
                );
            })}
        </>
    );
}

export default LinkSideBar;













// import { Link } from "react-router-dom";
// import '../CSS/LinkSideBar.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function LinkSideBar(props){
//     const {items} = props;
//     const filteredItems = items.filter(item => item.status === true);

//     return(
//         <>
//             {filteredItems.map((item, index) => (
//             <Link to={item.link} className={`link-SideBar ${item.class}`} key={index} >
//                 <li>
//                     <FontAwesomeIcon icon={item.icon} className="pl-5" style={{ fontSize: '1.5em' }} />
//                     <span className="col-9 d-none d-xl-block">{item.title}</span>
//                     {item.hint && <span className="text-start rounded-circle bg-danger hintSideBar"></span>}
//                 </li>
//             </Link>
//             ))} 
//         </>
//     )
// }

// export default LinkSideBar;