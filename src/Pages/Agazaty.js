import React, { useEffect, useState } from "react";
import BtnLink from "../components/BtnLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faPrint } from "@fortawesome/free-solid-svg-icons";

function Agazaty(){
    const userID = localStorage.getItem("userID");
    const [NormalLeaves, setNormalLeaves] = useState([]);
    const [CasualLeaves, setCasualLeaves] = useState([]);
    const [SickLeaves, setSickLeaves] = useState([]);
    const [leaveHolder, setLeaveHolder] = useState('0');
    const [LeaveTypes, setLeaveTypes] = useState([]);
    const [type, setType] = useState('اعتيادية');
    
    const [acceptedLeaves, setAcceptedLeaves] = useState([]);
    const [rejectedLeaves, setRejectedLeaves] = useState([]);
    const [waitingLeaves, setWaitingLeaves] = useState([]);




    
    useEffect(()=>{
        fetch(`http://agazatyapi.runasp.net/api/CasualLeave/GetAllCasualLeavesByUserId/${userID}`)
        .then((res)=> res.json())
        .then((data)=> setCasualLeaves(data))
    }, [])
    
    useEffect(()=>{
        fetch(`http://agazatyapi.runasp.net/api/SickLeave/GetAllSickLeavesByUserID/${userID}`)
        .then((res)=> res.json())
        .then((data)=> setSickLeaves(data))
    }, [])
    
    useEffect(()=>{
        fetch(`http://agazatyapi.runasp.net/api/NormalLeave/GetLeaveTypes`)
        .then((res)=> res.json())
        .then((data)=> setLeaveTypes(data))
    }, [])
    
    
    const [filteredLeaves, setFilteredLeaves] = useState([]);
    useEffect(() => {
        let leaves = [];
    
        if (leaveHolder === "0") {
            leaves = NormalLeaves; // عرض كل الطلبات
        } else if (leaveHolder === "1") {
            leaves = waitingLeaves; // المعلقة
        } else if (leaveHolder === "2") {
            leaves = acceptedLeaves; // المقبولة
        } else if (leaveHolder === "3") {
            leaves = rejectedLeaves; // المرفوضة
        }
    
        setFilteredLeaves(leaves);
    }, [leaveHolder, NormalLeaves, waitingLeaves, acceptedLeaves, rejectedLeaves]);


        // الكل
        useEffect(()=>{
            fetch(`http://agazatyapi.runasp.net/api/NormalLeave/AllNormalLeavesByUserId/${userID}`) 
            .then((res)=> res.json())
            .then((data)=> setNormalLeaves(data))
        }, [])
        


    // المقبولة
    useEffect(()=>{
        fetch(`http://agazatyapi.runasp.net/api/NormalLeave/AcceptedByUserId/${userID}`)
        .then((res)=> res.json())
        .then((data)=> setAcceptedLeaves(data))
    }, [userID])

    // المرفوضة
    useEffect(()=>{
        fetch(`http://agazatyapi.runasp.net/api/NormalLeave/RejectedByUserId/${userID}`)
        .then((res)=> res.json())
        .then((data)=> setRejectedLeaves(data))
    }, [userID])

    // المعلقة
    useEffect(()=>{
        fetch(`http://agazatyapi.runasp.net/api/NormalLeave/WaitingByUserId/${userID}`)
        .then((res)=> res.json())
        .then((data)=> setWaitingLeaves(data))
    }, [userID])

    console.log(SickLeaves)


    return(
        <div>
            <div className="d-flex mb-4 justify-content-between">
                <div className="zzz d-inline-block p-3 ps-5">
                    <h2 className="m-0">اجازاتي</h2>
                </div>
                <div className="d-flex p-3">
                    <BtnLink name='إضافة اجازة' link='/leave-request' class="btn btn-primary m-0 me-2"/>
                </div>
            </div>

            <div>
                {LeaveTypes.map((LeaveType, index) => {
                    return (
                        <div onClick={() => {console.log(LeaveType);setType(LeaveType);}} key={index} className="btn btn-outline-primary ms-2 me-2">
                            {LeaveType}
                        </div>
                    );
                })}
            </div>


            <div className="row">
                <div>
                    {type === "اعتيادية" ?
                        <table className="m-0 table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col" style={{backgroundColor:'#F5F9FF'}}>نوع الاجازة</th>
                                    <th scope="col" style={{backgroundColor:'#F5F9FF'}}>تاريخ البدء</th>
                                    <th scope="col" style={{backgroundColor:'#F5F9FF'}}>تاريخ الانتهاء</th>
                                    <th scope="col" style={{backgroundColor:'#F5F9FF'}}>عدد الأيام</th>
                                    <th scope="col" style={{backgroundColor:'#F5F9FF'}}>القائم بالعمل</th>
                                    <th scope="col" style={{backgroundColor:'#F5F9FF'}}>ملحوظات</th>
                                    <th scope="col" style={{backgroundColor:'#F5F9FF'}}>
                                        حالة الطلب
                                        {/* <FontAwesomeIcon icon={faSortDown} className="me-1" /> */}
                                        <select onChange={(e)=> setLeaveHolder(e.target.value)} className="form-select w-75" aria-label="Default select example">
                                            <option index value="0">الكل</option>
                                            <option value="1">معلقة</option>
                                            <option value="2">مقبولة</option>
                                            <option value="3">مرفوضة</option>
                                        </select>
                                    </th>
                                    <th scope="col" style={{backgroundColor:'#F5F9FF'}}>طباعة</th>
                                    <th scope="col" style={{backgroundColor:'#F5F9FF'}}>الأرشيف</th>
                                </tr>
                            </thead>
                            <tbody>
                            {filteredLeaves.map((leave, index)=>{
                                return(
                                    <tr key={index}>
                                        <th>اعتيادية</th>
                                        <th>{new Date(leave.startDate).toLocaleDateString()}</th>
                                        <th>{new Date(leave.endDate).toLocaleDateString()}</th>
                                        <th> {leave.days} أيام</th>
                                        <th>{leave.coworkerName}</th>
                                        <th>{leave.notesFromEmployee}</th>
                                        {leave.leaveStatus === 0 ? <th>"معلقة"</th>
                                        : leave.leaveStatus === 1 ? <th>"مقبولة"</th>
                                        : <th>"مرفوضة"</th>
                                        }

                                        <th>
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                        </th>
                                        <th>
                                            <BtnLink id={leave.id} name='عرض الاجازة' link='/normal-leave-request' class="btn btn-outline-primary" />
                                        </th>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    : type === "عارضة" ?
                    <table className="m-0 table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>نوع الاجازة</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>تاريخ البدء</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>تاريخ الانتهاء</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>عدد الأيام</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>ملحوظة</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>طباعة</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>الأرشيف</th>
                            </tr>
                        </thead>
                        <tbody>
                        {CasualLeaves.map((leave, index)=>{
                            return(
                                <tr key={index}>
                                    <th>عارضة</th>
                                    <th>{new Date(leave.startDate).toLocaleDateString()}</th>
                                    <th>{new Date(leave.endDate).toLocaleDateString()}</th>
                                    <th> {leave.days} أيام</th>
                                    <th>{leave.notes}</th>
                                    <th>
                                        <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                    </th>
                                    <th>
                                        <BtnLink id={leave.id} name='عرض الاجازة' link='/casual-leave-request' class="btn btn-outline-primary" />
                                    </th>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    : type === "مرضية" ?
                    <table className="m-0 table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>نوع الاجازة</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>تاريخ البدء</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>تاريخ الانتهاء</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>عدد الأيام</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>حالة الطلب</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>طباعة</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>الأرشيف</th>
                            </tr>
                        </thead>
                        <tbody>
                        {SickLeaves.map((leave, index)=>{
                            return(
                                <tr key={index}>
                                    <th>مرضية</th>
                                    <th>{new Date(leave.startDate).toLocaleDateString()}</th>
                                    <th>{new Date(leave.endDate).toLocaleDateString()}</th>
                                    <th> {leave.days} أيام</th>
                                    {leave.respononseDone === true ? <th>مقبولة</th>
                                    : leave.respononseDone === false ? <th>مرفوضة</th>
                                    : <th>معلقة</th>
                                    }
                                    <th>
                                        <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                    </th>
                                    <th>
                                        <BtnLink id={leave.id} name='عرض الاجازة' link='/sick-leave-request' class="btn btn-outline-primary" />
                                    </th>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Agazaty;