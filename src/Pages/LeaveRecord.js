import React, { useEffect, useState } from "react";
import BtnLink from "../components/BtnLink";
import Search from "../components/Search";

function LeaveRecord(){
    const [leavesWaiting, setLeavesWaiting] = useState([]);

    // لو هنعمل عرض الاجازات كلها بنفس الطريق دي يبقى اعمل props وخد منه الApi بتاع كل واحدة منهم بدل ما تعمل صفحة لكل واحدة لا خليها component
    useEffect(() => {
        fetch(`http://localhost:9000/requests`)
        .then((res) => res.json())
        .then((data) => setLeavesWaiting(data))
    }, [])

    console.log(leavesWaiting)

    return(
        <div>
            <div className="d-flex mb-4 justify-content-between">
                <div className="zzz d-inline-block p-3 ps-5">
                    <h2 className="m-0">طلبات الاجازات</h2>
                </div>
                <div className="p-3">
                    <div className="d-flex">
                        <Search />
                        <BtnLink name='إضافة اجازة' link='/add-leave' class="btn btn-primary m-0 me-2"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div>
                    <table className="m-0 table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>الاسم</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>القسم</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>رقم الهاتف</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>نوع الاجازة</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>تاريخ البداية</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>تاريخ النهاية</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>حالة الطلب</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>الأرشيف</th>
                            </tr>
                        </thead>
                        <tbody>

                            {leavesWaiting.map((leave, index)=>{
                                return(
                                    <tr key={index}>
                                        {
                                            leave.employee.map((item, index)=>{
                                                return(
                                                    <React.Fragment key={index}>
                                                        <th>{item.firstName} {item.secondName} {item.thirdName}</th>
                                                        <th>{item.department}</th>
                                                        <th>{item.phoneNumber}</th>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                        <th>{leave.type}</th>
                                        <th>{leave.startDate}</th>
                                        <th>{leave.endDate}</th>
                                        { leave.status === 'معلقة' ? <th className="text-success">{leave.status}</th>
                                        : <th className="text-primary">{leave.status}</th>
                                        }
                                        <th>
                                            <BtnLink id={leave.id} name='عرض الاجازة' link='/leave-requests' class="btn btn-outline-primary" />
                                        </th>
                                    </tr>
                                )})}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default LeaveRecord;