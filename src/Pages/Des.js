import React, { useEffect, useState } from "react";
import BtnLink from "../components/BtnLink";
import Search from "../components/Search";

function Des(){
    const [requestStatus, setRequestStatus] = useState('');
    const [requests, setRequests] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:9000/requests`)
        .then((res)=> res.json())
        .then((data)=> setRequests(data))
    }, [])

    console.log(requests)

    return(
        <div>
            <div className="d-flex mb-4 justify-content-between">
                <div className="zzz d-inline-block p-3 ps-5">
                    <h2 className="m-0">سجل الاجازات</h2>
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
                                        <th>{request.startDate}</th>
                                        { request.status === 'معلقة' ? <th className="text-success">{request.status}</th>
                                        : <th className="text-primary">{request.status}</th>
                                        }
                                        <th>
                                            <BtnLink id={request.id} name='عرض الاجازة' link='/leave-requests' class="btn btn-outline-primary" />
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

export default Des;