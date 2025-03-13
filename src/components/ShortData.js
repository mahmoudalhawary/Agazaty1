import { useState } from "react";
import '../CSS/LeaveBalance.css';

function ShortData(){

    const [leaves, setLeaves] = useState({
        numberLeave: {
            type: 'عدد الاجازات',
            num: 3,
        },
        departments: {
            type: 'الاقسام',
            num: 4,
        },
        employees: {
            type: 'الموظفين',
            num: 35,
        },
        acceptableLeave: {
            type: 'الاجازات المقبولة',
            num: 4,
        },
        rejectedLeaves: {
            type: 'الاجازات المرفوضة',
            num: 2,
        },
        pendingLeave: {
            type: 'الاجازات المعلقة',
            num: 5,
        },
    });

    return(
        <div>
            <div className="mt-4">
                <h4>معلومات عامة</h4>
            </div>
            <div className="d-flex row gap-3 mt-3">
                {Object.values(leaves).map((leave, index) => (
                <div className="box LeaveBalance col-md-5 col-lg-3 rounded-3 p-3" key={index}>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5>{leave.type}</h5>
                        <h4>{leave.num}</h4>
                    </div>
                </div>
                ))}   
            </div>
        </div>
    )
}

export default ShortData;