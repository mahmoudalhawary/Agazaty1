import React, { useEffect, useState } from "react";
import BtnLink from "../components/BtnLink";
import Btn from "../components/Btn";
import '../CSS/LeaveRequests.css';
import { useParams } from "react-router-dom";

function LeaveRequests(){
    const userID = localStorage.getItem("userID");

    const LeaveID = Number(useParams().id);
    const [leave, setLeave] = useState([]);


    useEffect(()=>{
        fetch(`http://agazatyapi.runasp.net/api/NormalLeave/AllNormalLeavesByUserId/${userID}`)
        .then((res)=> res.json())
        .then((data)=> setLeave(data))
    }, [])

    console.log(leave[0].id)
    console.log(LeaveID)

    return(
        <div>
            <div className="d-flex mb-4 justify-content-between">
                <div className="zzz d-inline-block p-3 ps-5">
                    <h2 className="m-0">{`الاجازة رقم ${`11`}`}</h2>
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
                                    <Btn name={leave.status} class="btn-warning text-start"  />
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
                                    <th scope="col" className="text-start">اعتيادية</th>
                                </tr>
                                <tr>
                                    <th scope="col">رقم الهاتف</th>
                                    <th scope="col" className="text-start">{leave.phoneNumber}</th>
                                </tr>
                                <tr>
                                    <th scope="col">القسم</th>
                                    <th scope="col" className="text-start">{leave.department}</th>
                                </tr>
                                <tr>
                                    <th scope="col">القائم بالعمل</th>
                                    <th scope="col" className="text-start">{leave.coworkerName}</th>
                                </tr>
                                <tr>
                                    <th scope="col">تاريخ بداية الاجازة</th>
                                    <th scope="col" className="text-start">{leave.startDate}</th>
                                </tr>
                                <tr>
                                    <th scope="col">تاريخ نهاية الاجازة</th>
                                    <th scope="col" className="text-start">{leave.endDate}</th>
                                </tr>
                                <tr>
                                <th scope="col">الملحوظات</th>
                                    <th scope="col" className="text-start">{leave.notesFromEmployee}</th>
                                </tr>
                                <tr>
                                    <th scope="col">المرجع</th>
                                    <th scope="col" className="text-start">#{leave.id}</th>
                                </tr>
                                <tr>
                                    <th colSpan={2} className="text-center" style={{backgroundColor:'white'}}>
                                        <Btn name='موافقة' class='btn-success w-25 ms-2' />
                                        <Btn name='رفض' class='btn-danger w-25' />
                                    </th>
                                </tr>
                            </tbody>
                    </table>
                    <div className="d-flex justify-content-center mt-4">
                        <BtnLink id={LeaveID} link='/leave-requests' name='السابق' class='btn-outline-primary w-50 ms-2' />
                        <BtnLink id={LeaveID} link='/leave-requests' name='التالي' class='btn-outline-primary w-50 ms-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaveRequests;