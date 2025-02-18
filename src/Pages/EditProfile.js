import { useNavigate } from 'react-router-dom';
import Btn from '../components/Btn';
import '../CSS/EditProfile.css';
import { useState } from 'react';
import YahyaSaad from '../Images/YahyaSaad.jpg';

function EditProfile(){
    const [id, setId]= useState('1');
    const [userName, setUserName]= useState('yahyasaad');
    const [email, setEmail]= useState('yahyasaad2024@gmail.com');
    const [password, setPassword]= useState('YS1188');
    const [resetpassword, setResetPassword]= useState('YS1188');
    const [nationalID, setNationalID]= useState('30304218800000');
    const [phoneNumber, setPhoneNumber]= useState('01127471188');
    const [firstName, setFirsName]= useState('يحيى');
    const [secondNAme, setSecondName]= useState('سعد');
    const [jobTitle, setJobTitle]= useState('موظف');
    const [department, setDepartment]= useState('علوم الحاسب');
    const [dateAppointment, setDateAppointment]= useState('19/9/2024');
    const [address, setAddress]= useState('قنا');
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        navigate('/');
    };

    return(
        <div className='p-3'>
            <div className="d-flex mb-4">
                <h2>تعديل الملف الشخصي</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex row align-items-center'>
                        <div className='col-sm-12 col-md-12 col-lg-5 col-xl-4 col-xxl-3 mt-4'>
                            <div className='p-3 justify-content-center text-center'>
                                <img src={YahyaSaad} className="rounded-circle w-50 img-responsive" alt="profilePicture" />
                            </div>
                            <div className='d-flex justify-content-center'>
                                <div className='bg-info p-2 d-inline-block rounded-3'>
                                    <h5 className='m-0 ps-5 pe-5 text-light'>{jobTitle}</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-7 col-xl-8 col-xxl-9 mt-4'>
                            <div className='row'>
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                    <label htmlFor="exampleInputUserName" className="form-label">اسم المستخدم</label>
                                    <input type="text" className="form-control" onChange={(e)=> setUserName(e.target.value)} id="exampleInputUserName" aria-describedby="userNameHelp" value={userName} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">البريد الإلكتروني</label>
                                    <input type="email" className="form-control" onChange={(e)=> setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" value={email} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                    <label htmlFor="exampleInputAddress" className="form-label">العنوان</label>
                                    <input type="text" className="form-control" onChange={(e)=> setAddress(e.target.value)} id="exampleInputAddress" aria-describedby="addressHelp" value={address} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                    <label htmlFor="exampleInputPhoneNumber" className="form-label">رقم الهاتف</label>
                                    <input type="tel" className="form-control" onChange={(e)=> setPhoneNumber(e.target.value)} id="exampleInputPhoneNumber" aria-describedby="phoneNumberHelp" dir='rtl' value={phoneNumber} />
                                </div>
                                
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">كلمة المرور الجديدة</label>
                                    <input type="password" className="form-control" onChange={(e)=> setPassword(e.target.value)} id="exampleInputPassword1" />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                    <label htmlFor="exampleInputResetPassword1" className="form-label">تأكيد كلمة المرور</label>
                                    <input type="password" className="form-control" onChange={(e)=> setResetPassword(e.target.value)} id="exampleInputResetPassword1" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <Btn name='تحديث البيانات' class='btn-primary w-50' />
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default EditProfile;