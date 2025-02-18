import YahyaSaad from '../Images/YahyaSaad.jpg';
import '../CSS/ProfileCom.css';

function ProfileCom(props){
    const employee = props.employee[0]

    return(
        <div className="rounded profileCom">
            <div className='profileComTop p-3 justify-content-center text-center'>
                    <img src={YahyaSaad} className="rounded-circle" alt="profilePicture" />
                    <h5 className='mt-2'>{employee.firstName} {employee.secondName}</h5>
                    <p className='m-0'>{employee.jobTitle}</p>
            </div>
            <div className='p-3'>
                <div>
                    <p className='m-0 text-title'>الرقم القومي</p>
                    <p className='mt-1'>{employee.nationalID}</p>
                </div>
                <div>
                    <p className='m-0 text-title'>رقم الهاتف</p>
                    <p className='mt-1'>{employee.phoneNumber}</p>
                </div>
                <div>
                    <p className='m-0 text-title'>العنوان</p>
                    <p className='mt-1 mb-0'>{employee.address}</p>
                </div>
            </div>
            
        </div>
    )
}

export default ProfileCom;
