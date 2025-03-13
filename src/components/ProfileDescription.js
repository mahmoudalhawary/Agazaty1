import { useState } from "react";
import { useEffect } from "react";

function ProfileDescription(){
    const [employee, setEmployee] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:9000/employees/1`)
        .then((res)=> res.json())
        .then((data)=> setEmployee(data))
    }, [])

    return(
        <div>
            <table className="m-0 table table-striped" style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', overflow: 'hidden'}}>
                <thead>
                    <tr>
                        <th colSpan={2} className="text-primary fw-bold" style={{backgroundColor:'#F5F9FF'}}>معلومات المستخدم</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>الاسم</th>
                        <th className="text-start">{employee.firstName} {employee.secondName}</th>
                    </tr>
                    <tr>
                        <th>المسمى الوظيفي</th>
                        <th className="text-start">{employee.jobTitle}</th>
                    </tr>
                    <tr>
                        <th>القسم</th>
                        <th className="text-start">{employee.department}</th>
                    </tr>
                    <tr>
                        <th>تاريخ التعيين</th>
                        <th className="text-start">{employee.dateAppointment}</th>
                    </tr>
                    
                </tbody>
            </table>

            <table className="m-0 mt-5 table table-striped" style={{ borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', overflow: 'hidden'}}>
                <thead>
                    <tr>
                        <th colSpan={2} className="text-primary fw-bold" style={{backgroundColor:'#F5F9FF'}}>تفاصيل الاجازات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>عدد الاجازات المتبقية هذه السنه</th>
                        <th className="text-start">{42 - 9}</th>
                    </tr>
                    <tr>
                        <th>اجازات معتمدة هذا الشهر</th>
                        <th className="text-start">3</th>
                    </tr>
                    <tr>
                        <th>اجازات قيد المراجعة</th>
                        <th className="text-start">1</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProfileDescription;