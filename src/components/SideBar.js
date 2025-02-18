import { Link } from "react-router-dom";
import LinkSideBar from "./SideBarLink";
import '../CSS/SideBar.css';
import { faHouse, faUser, faCalendarPlus, faSquarePlus, faUserPlus, faFolderOpen, faNotesMedical, faFolder, faUsers, faEnvelope, faCalendarDays, faCalendarCheck, faClipboard, faCircleQuestion, faGear, faCircleExclamation, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function SideBar({ userRole }) {

    const items = [
        { title: 'الرئيسية', icon: faHouse, link: '/', status: true, role: 'manager, hr, user, موظف' },
        { title: 'الملف الشخصي', icon: faUser, link: '/profile', status: true, role: 'manager, hr, user, موظف' },
        { title: 'طلب اجازة', icon: faCalendarPlus, link: '/leave-request', status: true, role: 'hr, user, موظف' },
        { title: 'الرسائل', icon: faEnvelope, link: '/messages', status: true, hint: true, role: 'manager, hr, user, موظف' },
        { title: 'اجازاتي', icon: faCalendarDays, link: '/agazaty', status: true, hint: true, role: 'manager, hr, user, موظف' },
        { title: 'الأقسام', icon: faSquarePlus, link: '/departments', status: true, role: 'manager, hr' },
        { title: 'إضافة قسم', icon: faSquarePlus, link: '/add-department', status: true, role: 'hr' },
        { title: 'الموظفين', icon: faUsers, link: '/employees', status: true, role: 'manager, hr' },
        { title: 'إضافة موظف', icon: faUserPlus, link: '/add-Employee', status: true, role: 'hr' },
        { title: 'إضافة اجازة', icon: faNotesMedical, link: '/add-leave', status: true, role: 'manager, hr' },
        { title: 'سجل الاجازات', icon: faFolder, link: '/leave-record', status: true, role: 'manager, hr' },
        { title: 'طلبات الاجازات', icon: faFolderOpen, link: '/leave-requests', status: true, role: 'manager' },
        { title: 'الاجازات', icon: faCalendarCheck, link: '/leaves', status: true, role: 'manager, hr, user, موظف' },
        { title: 'السجل الوظيفي', icon: faClipboard, link: '/history', status: true, role: 'manager, hr, user, موظف' },
        { title: 'الاستفسارات', icon: faCircleQuestion, link: '/inquiries', status: true, role: 'manager, hr, user, موظف' },
        { title: 'الاعدادات', icon: faGear, link: '/sitting', status: true, hint: true, role: 'manager, hr, user, موظف' },
        { title: 'معلومات عامة', icon: faCircleExclamation, link: '/about', status: true, hint: true, role: 'manager, hr, user, موظف' },
        { title: 'الخروج', icon: faRightFromBracket, link: '/login', status: true, role: 'manager, hr, user, موظف', class: 'text-danger hover-danger' },
    ];

    // تصفية العناصر بناءً على الدور
    const filteredItems = items.filter((item) => {
        // التحقق مما إذا كان الـ userRole موجوداً في قائمة الأدوار الخاصة بكل عنصر
        const roles = item.role.split(',').map(role => role.trim());
        return item.status === true && roles.includes(userRole);
    });

    return (
        <div className="p-2 pt-3 SideBar">
            <div>
                <Link to={'/about'} className="Agazaty d-flex text-center text-primary">اجازاتي</Link>
            </div>
            <div>
                <ul className="list-unstyled p-0 pt-2">
                    <LinkSideBar items={filteredItems} />
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
