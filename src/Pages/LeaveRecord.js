import React, { useState } from "react";
import BtnLink from "../components/BtnLink";
import Search from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

function LeaveRecord(){
    const [requestStatus, setRequestStatus] = useState('');

    const requests = [
        { id: 1334, type: 'اعتيادية', date: '19/9/2024', status: 'معتمدة', notes: 'بدون', employee: [{ id: 1, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'يحيى', secondName: 'سعد', thirdName: 'عبدالموجود', fourthName:'جادالرب', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' }] },
        { id: 1276, type: 'مرضية', date: '16/9/2024', status: 'معلقة', notes: 'بدون', employee: [{ id: 2, nationalID: '30304218800000', phoneNumber: '01015652527', firstName: 'عبدالرحمن', secondName: 'حمدي', thirdName: 'توفيق', fourthName:'شعبان', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' }] },
        { id: 1202, type: 'اعتيادية', date: '13/9/2024', status: 'المدير', notes: 'بدون', employee: [{ id: 3, nationalID: '30304218800000', phoneNumber: '01021514586', firstName: 'عمر', secondName: 'حمدي', thirdName: 'سيد', fourthName:'عبدالقادر', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' }] },
        { id: 1121, type: 'اعتيادية', date: '6/9/2024', status: 'مرفوضة', notes: 'بدون', employee: [{ id: 4, nationalID: '30304218800000', phoneNumber: '01030492160', firstName: 'عبدالرحمن', secondName: 'احمد', thirdName: 'علي', fourthName:'عبدالقادر', jobTitle: 'موظف', department: 'تكنولوجيا المعلومات', dateAppointment: '19/9/2024', address: 'قنا' }] },
        { id: 1334, type: 'اعتيادية', date: '19/9/2024', status: 'معتمدة', notes: 'بدون', employee: [{ id: 1, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'يحيى', secondName: 'سعد', thirdName: 'عبدالموجود', fourthName:'جادالرب', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' }] },
        { id: 1276, type: 'مرضية', date: '16/9/2024', status: 'معلقة', notes: 'بدون', employee: [{ id: 2, nationalID: '30304218800000', phoneNumber: '01015652527', firstName: 'عبدالرحمن', secondName: 'حمدي', thirdName: 'توفيق', fourthName:'شعبان', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' }] },
        { id: 1202, type: 'اعتيادية', date: '13/9/2024', status: 'المدير', notes: 'بدون', employee: [{ id: 3, nationalID: '30304218800000', phoneNumber: '01021514586', firstName: 'عمر', secondName: 'حمدي', thirdName: 'سيد', fourthName:'عبدالقادر', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' }] },
        { id: 1121, type: 'اعتيادية', date: '6/9/2024', status: 'مرفوضة', notes: 'بدون', employee: [{ id: 4, nationalID: '30304218800000', phoneNumber: '01030492160', firstName: 'عبدالرحمن', secondName: 'احمد', thirdName: 'علي', fourthName:'عبدالقادر', jobTitle: 'موظف', department: 'تكنولوجيا المعلومات', dateAppointment: '19/9/2024', address: 'قنا' }] },
        { id: 1334, type: 'اعتيادية', date: '19/9/2024', status: 'معتمدة', notes: 'بدون', employee: [{ id: 1, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'يحيى', secondName: 'سعد', thirdName: 'عبدالموجود', fourthName:'جادالرب', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' }] },
        { id: 1276, type: 'مرضية', date: '16/9/2024', status: 'معلقة', notes: 'بدون', employee: [{ id: 2, nationalID: '30304218800000', phoneNumber: '01015652527', firstName: 'عبدالرحمن', secondName: 'حمدي', thirdName: 'توفيق', fourthName:'شعبان', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' }] },
    ];

    return(
        <div className="p-3">
            <div className="d-flex mb-4 justify-content-between">
                <h2 className="m-0">سجل الاجازات</h2>
                <div className="d-flex">
                    <Search />
                    <BtnLink name='إضافة اجازة' link='/add-leave' class="btn btn-primary m-0 me-2"/>
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
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>التاريخ</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>
                                    حالة الطلب
                                    {/* <FontAwesomeIcon icon={faSortDown} className="me-1" /> */}
                                    <select onChange={(e)=> setRequestStatus(e.target.value)} className="form-select w-75" aria-label="Default select example">
                                        <option value="الكل">الكل</option>
                                        <option value="أعتيادية">أعتيادية</option>
                                        <option value="عارضة">عارضة</option>
                                        <option value="مرضية">مرضية</option>
                                        <option value="تصريح">تصريح</option>
                                    </select>
                                </th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>الأرشيف</th>
                            </tr>
                        </thead>
                        <tbody>

                            {requests.map((request, index)=>{
                                return(
                                    <tr key={index}>
                                        {
                                            request.employee.map((item, index)=>{
                                                return(
                                                    <React.Fragment key={index}>
                                                        <th>{item.firstName} {item.secondName} {item.thirdName}</th>
                                                        <th>{item.department}</th>
                                                        <th>{item.phoneNumber}</th>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                        <th>{request.type}</th>
                                        <th>{request.date}</th>
                                        { request.status === 'معتمدة' ? <th className="text-success">{request.status}</th>
                                        : request.status === 'معلقة' ? <th className="text-warning">{request.status}</th>
                                        : request.status === 'مرفوضة' ? <th className="text-danger">{request.status}</th>
                                        : <th className="text-primary">{request.status}</th>
                                        }
                                        <th>
                                            <BtnLink id={request.id} name='عرض الاجازة' link='/leaves' class="btn btn-outline-primary" />
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