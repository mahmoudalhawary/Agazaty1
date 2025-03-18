import time from '../Images/time.png';
import '../CSS/Hint.css';
import BtnLink from './BtnLink';
import { useEffect, useState } from 'react';

function Hint() {
    const userType = 'المدير المباشر';
    const leaveID = '#24345';

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        // fetch(`http://localhost:9000/employees/1`)
        fetch(`http://localhost:7234/employees/1`)
            .then((res) => res.json())
            .then((data) => setEmployee(data))
    }, [])

    console.log(employee)

    return (
        <div to={'/agazaty'} className='text-decoration-none'>
            <div className="d-flex row rounded-3">
                <div className='col-3 hintImage rounded-3 d-flex justify-content-center align-items-center ms-3'>
                    <img src={time} className='rounded-3' alt="hintImage" />
                </div>
                <div className='col p-1'>
                    <p>طلب الاجازة قيد الانتظار</p>
                    <p>
                        <span>تم إرسال طلب الاجازة بنجاح. حاليا في انتظار موافقة </span>
                        <span className='text-primary'>{userType}</span>
                    </p>
                    <BtnLink name={leaveID} link='/agazaty' class='btn-warning rounded-3 p-1 d-inline-block m-0' />
                </div>
                <div className='col-2 d-flex justify-content-center'>
                    <BtnLink name='تفاصيل الاجازة' link='/agazaty' class='btn-primary align-self-center' />
                </div>
            </div>
        </div>
    );
}

export default Hint;
