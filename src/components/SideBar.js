import { Link, useLocation } from "react-router-dom";
import '../CSS/SideBar.css';
import '../CSS/LinkSideBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faCalendarPlus, faSquarePlus, faUserPlus, faFolderOpen, faNotesMedical, faFolder, faUsers, faEnvelope, faCalendarDays, faCalendarCheck, faClipboard, faCircleQuestion, faGear, faCircleExclamation, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


function SideBar({ userRole }) {
    const location = useLocation();
    const userID = localStorage.getItem("userID");
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [showLeaveOptions, setShowLeaveOptions] = useState(false);
    const [showEmployeesOptions, setShowEmployeesOptions] = useState(false);
    const [showLeavesOptions, setShowLeavesOptions] = useState(false);
    const [leavesWating, setLeavesWating] = useState([]);
    const [leavesWatingForDirect, setLeavesWatingForDirect] = useState([]);
    const [leavesWatingForGeneral, setLeavesWatingForGeneral] = useState([]);
    const [waitingSickLeaves, setWaitingSickLeaves] = useState([]);
    const [waitingCertifiedSickLeaves, setWaitingCertifiedSickLeaves] = useState([]);

    // Fetch leave request data
    useEffect(() => {
        fetch(`http://agazatyapi.runasp.net/api/NormalLeave/WaitingByCoWorkerID/${userID}`)
            .then((res) => res.json())
            .then((data) => setLeavesWating(data))
            .catch(err => console.error("Error fetching co-worker leaves:", err));
    }, [userID]);

    useEffect(() => {
        fetch(`http://agazatyapi.runasp.net/api/NormalLeave/WaitingByDirect_ManagerID/${userID}`)
            .then((res) => res.json())
            .then((data) => setLeavesWatingForDirect(data))
            .catch(err => console.error("Error fetching direct manager leaves:", err));
    }, [userID]);

    useEffect(() => {
        fetch(`http://agazatyapi.runasp.net/api/NormalLeave/WaitingByGeneral_ManagerID/${userID}`)
            .then((res) => res.json())
            .then((data) => setLeavesWatingForGeneral(data))
            .catch(err => console.error("Error fetching general manager leaves:", err));
    }, [userID]);

    useEffect(() => {
        fetch(`http://agazatyapi.runasp.net/api/SickLeave/GetAllWaitingSickLeaves`)
            .then((res) => res.json())
            .then((data) => setWaitingSickLeaves(data))
            .catch(err => console.error("Error fetching waiting sick leaves:", err));
    }, []);

    useEffect(() => {
        fetch(`http://agazatyapi.runasp.net/api/SickLeave/GetAllWaitingCertifiedSickLeaves`)
            .then((res) => res.json())
            .then((data) => setWaitingCertifiedSickLeaves(data))
            .catch(err => console.error("Error fetching waiting certified sick leaves:", err));
    }, []);

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    const toggleLeaveOptions = () => {
        setShowLeaveOptions(!showLeaveOptions);
    };

    const toggleEmployeesOptions = () => {
        setShowEmployeesOptions(!showEmployeesOptions);
    };

    const toggleLeavesOptions = () => {
        setShowLeavesOptions(!showLeavesOptions);
    };

    const renderLink = (title, icon, link, roles, extraClass = "", hasBadge = false, badgeCount = 0) => {
        const rolesArray = roles.split(',').map(role => role.trim());
        if (!rolesArray.includes(userRole)) return null;

        return (
            <Link to={link} className={`link-SideBar ${extraClass}`} key={link}>
                <li className={`${location.pathname === link ? 'active-link' : ''} tran position-relative`}>
                    <FontAwesomeIcon icon={icon} className="col-sm-12 col-xxl-2 pl-5" style={{ fontSize: '1.6em' }} />
                    <span className={`col-xl-8 d-none d-xxl-block ${isSidebarCollapsed ? 'd-none' : ''}`}>{title}</span>
                    {/* Tooltip for small screens */}
                    <span className="tooltip-text d-block d-xxl-none">{title}</span>
                    {/* Red badge for requests */}
                    {hasBadge && badgeCount > 0 && (
                        <span className="badge bg-danger text-white rounded-circle position-absolute" style={{ top: '5px', right: '5px', fontSize: '12px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {badgeCount}
                        </span>
                    )}
                </li>
            </Link>
        );
    };

    const renderLink2 = (title, link, roles, extraClass = "") => {
        const rolesArray1 = roles.split(',').map(role => role.trim());
        if (!rolesArray1.includes(userRole)) return null;

        return (
            <Link to={link} className={`link-SideBar2 ${extraClass}`} key={link}>
                <ul className={`p-0 ${extraClass} ${location.pathname === link ? 'active-link' : ''} tran`}>
                    <li className={`d-none ${isSidebarCollapsed ? 'd-none' : 'd-xxl-block'}`}>{title}</li>
                </ul>
            </Link>
        );
    };

    const renderLink3 = (title, link, roles, extraClass = "") => {
        const rolesArray2 = roles.split(',').map(role => role.trim());
        if (!rolesArray2.includes(userRole)) return null;

        return (
            <Link to={link} className={`link-SideBar3 ${extraClass}`} key={link}>
                <ul className={`p-0 ${extraClass} ${location.pathname === link ? 'active-link' : ''} tran`}>
                    <li className={`d-none ${isSidebarCollapsed ? 'd-none' : 'd-xxl-block'}`}>{title}</li>
                </ul>
            </Link>
        );
    };

    return (
        <div className={`SideBar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                <Link to={'/about'} className="Agazaty   text-center text-primary" title="معلومات عن النظام">
                    {isSidebarCollapsed ? "أ" : "اجازاتي"}
                </Link>
                {/* <button className="sidebar-toggle btn btn-link p-0" onClick={toggleSidebar}>
                    {/* <FontAwesomeIcon icon={isSidebarCollapsed ? faCalendarPlus : faCalendarPlus} /> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-sliders" /> */}
                {/* </button> */}
            </div>

            <div className="sidebar-content">
                <ul className="list-unstyled p-0 pt-2">
                    {renderLink('الرئيسية', faHouse, '/', 'عميد الكلية, مدير الموارد البشرية, هيئة تدريس, موظف')}
                    {renderLink('الملف الشخصي', faUser, '/profile', 'عميد الكلية, مدير الموارد البشرية, هيئة تدريس, موظف')}

                    {/* Leave Request with hover select box on small screens */}
                    <div className="position-relative">
                        <div className="link-SideBar">
                            <li onClick={toggleLeaveOptions} style={{ cursor: 'pointer' }}>
                                <FontAwesomeIcon icon={faCalendarPlus} className="col-sm-12 col-xxl-2 pl-5" style={{ fontSize: '1.6em' }} />
                                <span className={`col-xl-8 d-none d-xxl-block ${isSidebarCollapsed ? 'd-none' : ''}`}>طلب إجازة</span>
                                <span className="tooltip-text d-block d-xxl-none">طلب إجازة</span>
                            </li>
                        </div>
                        {/* Select box on hover for small screens */}
                        <div className="leave-options-hover d-block d-xxl-none">
                            <ul className="list-unstyled">
                                {renderLink2('اعتيادية', '/normal-leave', 'مدير الموارد البشرية, عميد الكلية, هيئة تدريس, موظف')}
                                {renderLink2('عارضة', '/casual-leave', 'مدير الموارد البشرية, عميد الكلية, هيئة تدريس, موظف')}
                                {renderLink2('مرضية', '/sick-leave', 'مدير الموارد البشرية, عميد الكلية, هيئة تدريس, موظف')}
                            </ul>
                        </div>
                        {/* Normal dropdown for large screens */}
                        {showLeaveOptions && (
                            <ul className={`list-unstyled pl-4 ${isSidebarCollapsed ? 'd-none' : 'd-none d-xxl-block'}`}>
                                {renderLink2('اعتيادية', '/normal-leave', 'مدير الموارد البشرية, عميد الكلية, هيئة تدريس, موظف')}
                                {renderLink2('عارضة', '/casual-leave', 'مدير الموارد البشرية, عميد الكلية, هيئة تدريس, موظف')}
                                {renderLink2('مرضية', '/sick-leave', 'مدير الموارد البشرية, عميد الكلية, هيئة تدريس, موظف')}
                            </ul>
                        )}
                    </div>

                    {renderLink('القائم بالعمل', faEnvelope, '/messages', 'عميد الكلية, مدير الموارد البشرية, هيئة تدريس, موظف', '', true, leavesWating.length)}
                    {renderLink('اجازاتي', faCalendarDays, '/agazaty', 'عميد الكلية, مدير الموارد البشرية, هيئة تدريس, موظف')}
                    {renderLink('الأقسام', faSquarePlus, '/departments', 'عميد الكلية, مدير الموارد البشرية')}

                    {/* Employees with sub-options */}
                    {(userRole === "عميد الكلية" || userRole === "مدير الموارد البشرية") && (
                        <div className="position-relative">
                            <div className="link-SideBar">
                                <li onClick={toggleEmployeesOptions} style={{ cursor: 'pointer' }}>
                                    <FontAwesomeIcon icon={faUsers} className="col-sm-12 col-xxl-2 pl-5" style={{ fontSize: '1.6em' }} />
                                    <span className={`col-xl-8 d-none d-xxl-block ${isSidebarCollapsed ? 'd-none' : ''}`}>الموظفين</span>
                                    <span className="tooltip-text d-block d-xxl-none">الموظفين</span>
                                </li>
                            </div>
                            {showEmployeesOptions && (
                                <ul className={`list-unstyled pl-4 ${isSidebarCollapsed ? 'd-none' : 'd-none d-xxl-block'}`}>
                                    {renderLink2('الموظفين النشيطين', '/employees/active', 'عميد الكلية, مدير الموارد البشرية')}
                                    {renderLink2('الموظفين غير النشيطين', '/employees/inactive', 'عميد الكلية, مدير الموارد البشرية')}
                                </ul>
                            )}
                        </div>
                    )}

                    {/* Leave Records with sub-options */}
                    {(userRole === "عميد الكلية" || userRole === "مدير الموارد البشرية") && (
                        <div className="position-relative">
                            <div className="link-SideBar">
                                <li onClick={toggleLeavesOptions} style={{ cursor: 'pointer' }}>
                                    <FontAwesomeIcon icon={faFolderOpen} className="col-sm-12 col-xxl-2 pl-5" style={{ fontSize: '1.6em' }} />
                                    <span className={`col-xl-8 d-none d-xxl-block ${isSidebarCollapsed ? 'd-none' : ''}`}>سجل الاجازات</span>
                                    <span className="tooltip-text d-block d-xxl-none">سجل الاجازات</span>
                                </li>
                            </div>
                            {showLeavesOptions && (
                                <ul className={`list-unstyled pl-4 ${isSidebarCollapsed ? 'd-none' : 'd-none d-xxl-block'}`}>
                                    {renderLink3('اعتيادية', '/des-requests/normal', 'مدير الموارد البشرية, عميد الكلية')}
                                    {renderLink3('عارضة', '/des-requests/casual', 'مدير الموارد البشرية, عميد الكلية')}
                                    {renderLink3('مرضية', '/des-requests/sick', 'مدير الموارد البشرية, عميد الكلية')}
                                </ul>
                            )}
                        </div>
                    )}

                    {renderLink('طلبات الاجازات', faFolderOpen, '/leave-record', 'عميد الكلية', '', true, leavesWatingForGeneral.length)}
                    {renderLink('الاستفسارات', faCircleQuestion, '/inquiries', 'عميد الكلية, مدير الموارد البشرية, هيئة تدريس, موظف')}
                    {renderLink('الاعدادات', faGear, '/sitting', 'عميد الكلية, مدير الموارد البشرية, هيئة تدریس, موظف')}
                    {renderLink('التصريحات', faGear, '/parameter', 'مدير الموارد البشرية')}
                    {renderLink('معلومات عامة', faCircleExclamation, '/about', 'عميد الكلية, مدير الموارد البشرية, هيئة تدريس, موظف')}
                    {renderLink('سجل الاجازات المرضية', faCircleExclamation, '/sick-leaves-record', 'مدير الموارد البشرية', '', true, waitingSickLeaves.length + waitingCertifiedSickLeaves.length)}
                    {renderLink('تحديث الاجازة المرضية', faCircleExclamation, '/sick-leaves-record2', 'مدير الموارد البشرية')}
                    {renderLink('الخروج', faRightFromBracket, '/login', 'عميد الكلية, مدير الموارد البشرية, هيئة تدريس, موظف', 'text-danger hover-danger')}
                </ul>
            </div>
        </div>
    );
}

export default SideBar;