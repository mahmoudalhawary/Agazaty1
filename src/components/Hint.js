import time from '../Images/time.png';
import '../CSS/Hint.css';
import BtnLink from './BtnLink';
import { useEffect, useState } from 'react';

function Hint() {
    const userID = localStorage.getItem("userID");
    const [leaveWating, setLeaveWating] = useState([]);

    useEffect(() => {
        fetch(`http://agazatyapi.runasp.net/api/NormalLeave/WaitingByUserID/${userID}`)
            .then((res) => res.json())
            .then((data) => setLeaveWating(data[0]))
    }, [userID]);

    console.log(leaveWating)

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
                        
                        {leaveWating.holder === 0 ? <span className='cursor-pointer text-primary' title={leaveWating.coworkerName}>القائم بالعمل</span>
                        : leaveWating.holder === 1 ? <span className='cursor-pointer text-primary' title={leaveWating.directManagerName}>المدير المباشر</span>
                        : leaveWating.holder === 2 ? <span className='cursor-pointer text-primary' title={leaveWating.generalManagerName}>المدير المختص</span>
                        : null}
                    </p>
                    <BtnLink id={leaveWating.id} name={`#${leaveWating.id}`} link='/normal-leave-request' class='btn-warning rounded-3 p-1 d-inline-block m-0' />
                </div>
                <div className='col-2 d-flex justify-content-center'>
                    <BtnLink id={leaveWating.id} name='تفاصيل الاجازة' link={`/normal-leave-request`} class="btn-primary align-self-center" />
                </div>
            </div>
        </div>
    );
}

export default Hint;
