import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../CSS/PreviousRequests.css';
import { faPlus, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function PreviousRequests() {
    const [selectedPeriod, setSelectedPeriod] = useState('اليوم');

    const requests = [
        { id: 1334, type: 'عارضة', date: '19/9/2024', status: 'معتمد', notes: 'بدون' },
        { id: 1276, type: 'مرضية', date: '16/9/2024', status: 'معتمد', notes: 'بدون' },
        { id: 1202, type: 'مرضية', date: '13/9/2024', status: 'معتمد', notes: 'بدون' },
        { id: 1121, type: 'اعتيادية', date: '6/9/2024', status: 'معتمد', notes: 'بدون' },
    ];

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
                            <th scope="col">التاريخ</th>
                            <th scope="col">حالة الطلب</th>
                            <th scope="col">الملاحظات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request, index) => (
                            <tr key={index}>
                                <th>#{request.id}</th>
                                <td>{request.type}</td>
                                <td>{request.date}</td>
                                <td>{request.status}</td>
                                <td>{request.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PreviousRequests;
