import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../CSS/PreviousRequests.css';
import { faPlus, faCalendarDays, faPrint } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import BtnLink from './BtnLink';
import API from "../Data" ;

function PreviousRequests({leaves}) {
    const userID = localStorage.getItem("userID");
    const [LeaveTypes, setLeaveTypes] = useState([]);
    const [leaveType, setLeaveType] = useState('اعتيادية');
    const [normalLeaves, setNormalLeaves] = useState([]);
    const [casualLeaves, setCasualLeaves] = useState([]);
    const [sickLeaves, setSickLeaves] = useState([]);

    useEffect(()=>{
        fetch(`http://agazatyapi.runasp.net/api/CasualLeave/GetAllCasualLeavesByUserId/${userID}`)
        .then((res)=> res.json())
        .then((data)=> setCasualLeaves(data))
    }, [userID])

    useEffect(()=>{
        fetch(`http://agazatyapi.runasp.net/api/SickLeave/GetAllSickLeavesByUserID/${userID}`)
        .then((res)=> res.json())
        .then((data)=> setSickLeaves(data))
    }, [userID])

    useEffect(()=>{
        fetch(`http://agazatyapi.runasp.net/api/NormalLeave/GetLeaveTypes`)
        .then((res)=> res.json())
        .then((data)=> setLeaveTypes(data))
    }, [userID])

    useEffect(()=>{
        fetch(`http://agazatyapi.runasp.net/api/NormalLeave/AllNormalLeavesByUserId/${userID}`)
        .then((res)=> res.json())
        .then((data)=> setNormalLeaves(data))
    }, [userID])

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h4>اجازاتك السابقة</h4>
                <div className='d-flex'>
                    <div className='d-flex btn btn-primary align-items-center me-2'>
                        <FontAwesomeIcon icon={faCalendarDays} className="pl-3" />
                        <select
                            className='bg-primary border-0 text-light'
                            value={leaveType || "اعتيادية"}
                            onChange={(e) => setLeaveType(e.target.value)}
                            aria-label="Default select example"
                        >
                            {LeaveTypes.map((LeaveType, index)=>{
                                return(
                                    <option key={index} value={LeaveType}>{LeaveType}</option>
                                )
                            })}
                        </select>
                    </div>
                    <Link to={'/normal-leave'} className='btn btn-primary me-2'>
                        <FontAwesomeIcon icon={faPlus} className="pl-3" />
                        <span>اجازة جديدة</span>
                    </Link>
                </div>
            </div>
            <div className='box-private mt-2'>
                {leaveType === 'اعتيادية' ? 
                    <table className="m-0 table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">نوع الاجازة</th>
                                <th scope="col">تاريخ البدء</th>
                                <th scope="col">عدد الأيام</th>
                                <th scope="col">القائم بالعمل</th>
                                <th scope="col">ملحوظات</th>
                                <th scope="col">حالة الطلب</th>
                                <th scope="col">الأرشيف</th>
                            </tr>
                        </thead>
                        <tbody>
                            {normalLeaves.map((leave, index) => (
                                    <tr key={index}>
                                        <th>اعتيادية</th>
                                        <th>{new Date(leave.startDate).toLocaleDateString()}</th>
                                        <th> {leave.days} أيام</th>
                                        <th>{leave.coworkerName}</th>
                                        <th>{leave.notesFromEmployee}</th>
                                        <th>
                                            {leave.holder === 0 ? <span className='text-primary cursor-pointer' title={leave.coworkerName}>القائم بالعمل</span>
                                            : leave.holder === 1 ? <span className='text-primary cursor-pointer' title={leave.directManagerName}>المدير المباشر</span>
                                            : leave.holder === 2 ? <span className='text-primary cursor-pointer' title={leave.generalManagerName}>المدير المختص</span>
                                            : <span title={"تمت"} className='text-primary cursor-pointer'>مقبولة</span>}
                                        </th>
                                        <td>
                                            <BtnLink id={leave.id} name='عرض الاجازة' link={`/normal-leave-request`} class="btn btn-outline-primary" />
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    : leaveType === 'عارضة' ? 
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
                            {casualLeaves.map((leave, index) => (
                                <tr key={index}>
                                    <th>عارضة</th>
                                    <th>{new Date(leave.startDate).toLocaleDateString()}</th>
                                    <th>{new Date(leave.endDate).toLocaleDateString()}</th>
                                    <th>{leave.days} أيام</th>
                                    <th>{leave.notes}</th>
                                    <th>
                                        <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                    </th>
                                    <th>
                                        <BtnLink id={leave.id} name='عرض الاجازة' link='/casual-leave-request' class="btn btn-outline-primary" />
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    : leaveType === 'مرضية' ? 
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
                            {sickLeaves.map((leave, index) => (
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
                            ))}
                        </tbody>
                    </table>
                    : null
            }
            </div>
        </div>
    );
}

export default PreviousRequests;
