import '../CSS/login.css';
import { Link } from 'react-router-dom';
import BtnLink from "./BtnLink";
import { useState } from 'react';

function LoginCom(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <>
            <form>
                <div className='wordLogin'>
                    <h4 className="text-center text-head">تسجيل الدخول</h4>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">البريد الإلكتروني</label>
                    <input type="email"  onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='yahyasaad2024@gmail.com' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">كلمة المرور</label>
                    <input type="password"  onChange={(e)=> setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='********' />
                    <Link to={'/login/forgetpassword'} id="emailHelp" className="form-text text-primary forgetPassword">هل نسيت كلمة المرور؟</Link>
                </div>
                <div className="d-flex justify-content-cente">
                    <BtnLink name='تسجيل الدخول' link='/' class='btn-primary w-100' />
                </div>
            </form>
        </>
    )
}

export default LoginCom;