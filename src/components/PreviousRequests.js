import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../CSS/PreviousRequests.css';
import { faPlus, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import BtnLink from './BtnLink';

function PreviousRequests() {
    const [selectedPeriod, setSelectedPeriod] = useState('اليوم');
    const [leaves, setLeaves] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9000/employees/1`)
        .then((res)=> (res.json()))
        .then((data)=> (setLeaves(data.leavess)))
    }, []);

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h4>الطلبات السابقة</h4>
                <div className='d-flex'>
                    <div className='d-flex btn btn-primary align-items-center me-2'>
                        <FontAwesomeIcon icon={faCalendarDays} className="pl-3" />
                        <select
                            className='bg-primary border-0 text-light'
                            value={selectedPeriod}
                            onChange={(e) => setSelectedPeriod(e.target.value)}
                            aria-label="Default select example"
                        >
                            <option value="اليوم">اليوم</option>
                            <option value="الأسبوع">الأسبوع</option>
                            <option value="الشهر">الشهر</option>
                            <option value="السنة">السنة</option>
                        </select>
                    </div>
                    <Link to={'/leave-request'} className='btn btn-primary me-2'>
                        <FontAwesomeIcon icon={faPlus} className="pl-3" />
                        <span>اجازة جديدة</span>
                    </Link>
                </div>
            </div>
            <div className='box-private mt-2'>
                <table className="m-0 table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">المعرف</th>
                            <th scope="col">النوع</th>
                            <th scope="col">تاريخ البدء</th>
                            <th scope="col">حالة الطلب</th>
                            <th scope="col">الملاحظات</th>
                            <th scope="col">الأرشيف</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaves
                        .filter((leave) => leave.id <= 5)
                        .map((leave, index) => (
                            <tr key={index}>
                                <th>#{leave.id}</th>
                                <td>{leave.type}</td>
                                <td>{leave.endDate}</td>
                                <td>{leave.status}</td>
                                <td>{leave.notes}</td>
                                <td>
                                    <BtnLink id={leave.id} name='عرض الاجازة' link={`/leave-requests`} class="btn btn-outline-primary" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PreviousRequests;
