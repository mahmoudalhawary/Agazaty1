import { Link, useLocation } from "react-router-dom";
import '../CSS/SideBar.css';
import '../CSS/LinkSideBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faCalendarPlus, faSquarePlus, faUserPlus, faFolderOpen, faNotesMedical, faFolder, faUsers, faEnvelope, faCalendarDays, faCalendarCheck, faClipboard, faCircleQuestion, faGear, faCircleExclamation, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function SideBar({ userRole }) {
    const location = useLocation();
    const [showLeaveOptions, setShowLeaveOptions] = useState(false);
    const [showEmployeesOptions, setShowEmployeesOptions] = useState(false);
    const [showLeavesOptions, setShowLeavesOptions] = useState(false);

    const toggleLeaveOptions = () => {
        setShowLeaveOptions(!showLeaveOptions);
    };

    const toggleEmployeesOptions = () => {
        setShowEmployeesOptions(!showEmployeesOptions);
    };

    const toggleLeavesOptions = () => {
        setShowLeavesOptions(!showLeavesOptions);
    };

    const renderLink = (title, icon, link, roles, extraClass = "") => {
        const rolesArray = roles.split(',').map(role => role.trim());
        if (!rolesArray.includes(userRole)) return null;

        return (
            <Link to={link} className={`link-SideBar ${extraClass}`} key={link}>
                <li className={`link-SideBar ${extraClass} ${location.pathname === link ? 'active-link' : ''} tran`}>
                    <FontAwesomeIcon icon={icon} className="col-sm-12 col-xxl-2 pl-5" style={{ fontSize: '1.6em' }} />
                    <span className="col-xl-8 d-none d-xxl-block">{title}</span>
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
                    <li className="d-none d-xxl-block">{title}</li>
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
                    <li className="d-none d-xxl-block">{title}</li>
                </ul>
            </Link>
        );
    };

    return (
        <div className="pt-3 SideBar">
            <div>
                <Link to={'/about'} className="Agazaty d-flex text-center text-primary" title="معلومات عن النظام">اجازاتي</Link>
            </div>
            <div>
                <ul className="list-unstyled p-0 pt-2">
                    {renderLink('الرئيسية', faHouse, '/', 'عميد الكلية, مدير الموارد البشرية, هيئة تدريس, موظف')}
                    {renderLink('الملف الشخصي', faUser, '/profile', 'عميد الكلية, مدير الموارد البشرية, هيئة تدريس, موظف')}
                    
                    <Link className="link-SideBar">
                        <li className="link-SideBar" onClick={toggleLeaveOptions} style={{ cursor: 'pointer' }}>
                            <FontAwesomeIcon icon={faCalendarPlus} className="col-sm-12 col-xxl-2 pl-5" style={{ fontSize: '1.6em' }} />
                            <span className="col-xl-8 d-none d-xxl-block">طلب إجازة</span>
                        </li>
                    </Link>
                    {showLeaveOptions && (
                        <ul className="list-unstyled pl-4">
                            {renderLink2('اعتيادية', '/normal-leave', 'مدير الموارد البشرية, عميد الكلية, هيئة تدريس, موظف')}
                            {renderLink2('عارضة', '/casual-leave', 'مدير الموارد البشرية, عميد الكلية, هيئة تدريس, موظف')}
                            {renderLink2('مرضية', '/sick-leave', 'مدير الموارد البشرية, عميد الكلية, هيئة تدريس, موظف')}
                        </ul>
                    )}

                    {renderLink('القائم بالعمل', faEnvelope, '/messages', 'عميد الكلية, مدير الموارد البشرية, هيئة تدريس, موظف')}
                    {renderLink('اجازاتي', faCalendarDays, '/agazaty', 'عميد الكلية, مدير الموارد البشرية, هيئة تدريس, موظف')}
                    

{/* 
                    <Link className="link-SideBar">
                        <li className="link-SideBar" onClick={toggleLeaveOptions} style={{ cursor: 'pointer' }}>
                            <FontAwesomeIcon icon={faCalendarPlus} className="col-sm-12 col-xxl-2 pl-5" style={{ fontSize: '1.6em' }} />
                            <span className="col-xl-8 d-none d-xxl-block">اجازاتي</span>
                        </li>
                    </Link>
                    {showLeaveOptions && (
                        <ul className="list-unstyled pl-4">
                            {renderLink2('اعتيادية', '/normal-leave', 'hr, عميد الكلية, هيئة تدريس, موظف')}
                            {renderLink2('عارضة', '/casual-leave', 'hr, عميد الكلية, هيئة تدريس, موظف')}
                            {renderLink2('مرضية', '/sick-leave', 'hr, عميد الكلية, هيئة تدريس, موظف')}
                        </ul>
                    )} */}



                    
                    {renderLink('الأقسام', faSquarePlus, '/departments', 'عميد الكلية, مدير الموارد البشرية')}

                    {/* الموظفين مع قائمة فرعية */}
                    { (userRole === "عميد الكلية" || userRole === "مدير الموارد البشرية")   &&
                        <Link className="link-SideBar">
                            <li className="link-SideBar" onClick={toggleEmployeesOptions} style={{ cursor: 'pointer' }}>
                                <FontAwesomeIcon icon={faUsers} className="col-sm-12 col-xxl-2 pl-5" style={{ fontSize: '1.6em' }} />
                                <span className="col-xl-8 d-none d-xxl-block">الموظفين</span>
                            </li>
                        </Link>
                    }
                    {showEmployeesOptions && (
                        <ul className="list-unstyled pl-4">
                            {renderLink2('الموظفين النشيطين', '/employees/active', 'عميد الكلية, مدير الموارد البشرية')}
                            {renderLink2('الموظفين غير النشيطين', '/employees/inactive', 'عميد الكلية, مدير الموارد البشرية')}
                        </ul>
                    )}


                    { (userRole === "عميد الكلية" || userRole === "مدير الموارد البشرية")   &&
                        <Link className="link-SideBar">
                            <li className="link-SideBar" onClick={toggleLeavesOptions} style={{ cursor: 'pointer' }}>
                                <FontAwesomeIcon icon={faFolderOpen} className="col-sm-12 col-xxl-2 pl-5" style={{ fontSize: '1.6em' }} />
                                <span className="col-xl-8 d-none d-xxl-block">سجل الاجازات</span>
                            </li>
                        </Link>
                    }
                    {showLeavesOptions && (
                        <ul className="list-unstyled pl-4">
                            {renderLink3('اعتيادية', '/des-requests/normal', 'مدير الموارد البشرية, عميد الكلية')}
                            {renderLink3('عارضة', '/des-requests/casual', 'مدير الموارد البشرية, عميد الكلية')}
                            {renderLink3('مرضية', '/des-requests/sick', 'مدير الموارد البشرية, عميد الكلية')}
                        </ul>
                    )}

                    {/* {renderLink('اجازة استثنائية', faNotesMedical, '/exceptional-leave', 'عميد الكلية, مدير الموارد البشرية')} */}
                    {/* {renderLink('سجل الاجازات', faFolderOpen, '/des-requests', 'عميد الكلية, مدير الموارد البشرية')} */}
                    {renderLink('طلبات الاجازات', faFolderOpen, '/leave-record', 'عميد الكلية')}
                    {renderLink('الاستفسارات', faCircleQuestion, '/inquiries', 'عميد الكلية, مدير الموارد البشرية, هيئة تدريس, موظف')}
                    {renderLink('الاعدادات', faGear, '/sitting', 'عميد الكلية, مدير الموارد البشرية, هيئة تدريس, موظف')}
                    {renderLink('التصريحات', faGear, '/parameter', 'مدير الموارد البشرية')}
                    {renderLink('معلومات عامة', faCircleExclamation, '/about', 'عميد الكلية, مدير الموارد البشرية, هيئة تدريس, موظف')}
                    {renderLink('سجل الاجازات المرضية', faCircleExclamation, '/sick-leaves-record', 'مدير الموارد البشرية')}
                    {renderLink('تحديث الاجازة المرضية', faCircleExclamation, '/sick-leaves-record2', 'مدير الموارد البشرية')}
                    {/* {renderLink('الأرشيف', faCircleExclamation, '/archives', 'مدير الموارد البشرية')} */}
                    {renderLink('الخروج', faRightFromBracket, '/login', 'عميد الكلية, مدير الموارد البشرية, هيئة تدريس, موظف', 'text-danger hover-danger')}
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
