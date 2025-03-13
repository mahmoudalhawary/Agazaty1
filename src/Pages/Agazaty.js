import React, { useEffect, useState } from "react";
import BtnLink from "../components/BtnLink";
import Search from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

function Agazaty(){
    const [leaves, setLeaves] = useState([]);
    const [leave, setLeave] = useState('');

    useEffect(() => {
        fetch(`http://localhost:9000/employees/1`)
        .then((res)=> (res.json()))
        .then((data)=> (setLeaves(data.leavess)))
    }, []);

    return(
        <div>
            <div className="d-flex mb-4 justify-content-between">
                <div className="zzz d-inline-block p-3 ps-5">
                    <h2 className="m-0">اجازاتي</h2>
                </div>
                <div className="d-flex p-3">
                    <Search />
                    <BtnLink name='إضافة اجازة' link='/leave-request' class="btn btn-primary m-0 me-2"/>
                </div>
            </div>
            <div className="row">
                <div>
                    <table className="m-0 table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>نوع الاجازة</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>تاريخ البدء</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>تاريخ الانتهاء</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>القائم بالعمل</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>ملحوظات</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>
                                    حالة الطلب
                                    {/* <FontAwesomeIcon icon={faSortDown} className="me-1" /> */}
                                    <select onChange={(e)=> setLeave(e.target.value)} className="form-select w-75" aria-label="Default select example">
                                        <option value="الكل">الكل</option>
                                        <option value="أعتيادية">أعتيادية</option>
                                        <option value="عارضة">عارضة</option>
                                        <option value="مرضية">مرضية</option>
                                        <option value="تصريح">تصريح</option>
                                    </select>
                                </th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>طباعة</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>الأرشيف</th>
                            </tr>
                        </thead>
                        <tbody>
                        {leaves.map((leave, index)=>{
                            return(
                                <tr key={index}>
                                    <th>{leave.type}</th>
                                    <th>{leave.startDate}</th>
                                    <th>{leave.endDate}</th>
                                    <th>{leave.coworker}</th>
                                    <th>{leave.notes}</th>
                                    <th>{leave.status}</th>
                                    <th>
                                        <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                    </th>
                                    <th>
                                        <BtnLink id={leave.id} name='عرض الاجازة' link='/leave-requests' class="btn btn-outline-primary" />
                                    </th>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Agazaty;