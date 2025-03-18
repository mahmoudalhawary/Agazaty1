import React, { useEffect, useState } from "react";
import BtnLink from "../components/BtnLink";
import Btn from "../components/Btn";
import '../CSS/LeaveRequests.css';
import { useParams } from "react-router-dom";

function CasualLeaveRequest(){
    const LeaveID = Number(useParams().id);
    const [leave, setLeave] = useState([]);
    const [user, setUser] = useState([]);

    console.log(LeaveID)

    useEffect(()=>{
        fetch(`http://agazatyapi.runasp.net/api/CasualLeave/GetCasualLeaveById/${LeaveID}`)
        .then((res)=> res.json())
        .then((data)=> setLeave(data))
    }, [])

    useEffect(()=>{
        fetch(`http://agazatyapi.runasp.net/api/Account/GetUserById/${leave.userId}`)
        .then((res)=> res.json())
        .then((data)=> setUser(data))
    }, [leave])


    const handleClick = (link) => {
        window.location.href = link;
        setTimeout(() => {
            window.location.reload();
        }, 100);
    };


    return(
        <div>
            <div className="d-flex mb-4 justify-content-between">
                <div className="zzz d-inline-block p-3 ps-5">
                    <h2 className="m-0">{`الاجازة رقم #${LeaveID}`}</h2>
                </div>
                <div className="p-3">
                    <BtnLink name='إضافة اجازة' link='/add-leave' class="btn btn-primary m-0 ms-2 mb-2"/>
                    <BtnLink name='سجل الاجازات' link='/leave-record' class="btn btn-primary m-0 ms-2 mb-2"/>
                </div>
            </div>
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
                    <table className="m-0 table table-striped box2">
                        <thead>
                            <tr>
                                <th scope="col" className="pb-3" style={{backgroundColor:'#F5F9FF'}}>حالة الطلب</th>
                                <th scope="col"  className="text-start" style={{backgroundColor:'#F5F9FF'}}>
                                    <Btn name="مُنفذة" class="btn-warning text-start"/>
                                </th>
                            </tr>
                        </thead>
                                <tbody>
                                <tr>
                                    <th scope="col">اسم الموظف</th>
                                    <th scope="col" className="text-start">{leave.userName}</th>
                                </tr>
                                <tr>
                                    <th scope="col">نوع الاجازة</th>
                                    <th scope="col" className="text-start">عارضة</th>
                                </tr>
                                <tr>
                                    <th scope="col">رقم الهاتف</th>
                                    <th scope="col" className="text-start">{user.phoneNumber}</th>
                                </tr>
                                <tr>
                                    <th scope="col">القسم</th>
                                    <th scope="col" className="text-start">{user.departmentName}</th>
                                </tr>
                                <tr>
                                    <th scope="col">تاريخ بداية الاجازة</th>
                                    <th scope="col" className="text-start">{new Date(leave.startDate).toLocaleDateString()}</th>
                                </tr>
                                <tr>
                                    <th scope="col">تاريخ نهاية الاجازة</th>
                                    <th scope="col" className="text-start">{new Date(leave.endDate).toLocaleDateString()}</th>
                                </tr>
                                <tr>
                                <th scope="col">الملحوظات</th>
                                    <th scope="col" className="text-start">{leave.notes}</th>
                                </tr>
                                <tr>
                                    <th scope="col">المرجع</th>
                                    <th scope="col" className="text-start">#{leave.id}</th>
                                </tr>
                            </tbody>
                    </table>
                    <div className="d-flex justify-content-center mt-4">
                        {LeaveID > 1 && <BtnLink onClick={() => handleClick(`/casual-leave-request/${LeaveID - 1}`)} id={LeaveID-1} link='/casual-leave-request' name='السابق' class='btn-outline-primary w-50 ms-2' />}
                        <BtnLink onClick={() => handleClick(`/casual-leave-request/${LeaveID + 1}`)} id={LeaveID+1} link='/casual-leave-request' name='التالي' class='btn-outline-primary w-50 ms-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CasualLeaveRequest;