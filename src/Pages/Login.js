import Door from '../Images/Door.jpg';
import '../CSS/login.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import LogoUniversity from '../Images/LogoUniversity.jpg';
import { useState } from 'react';
import axios from 'axios';
import BASE_API_URL from '../server/serves';
function Login() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleLogin = async (email, password) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(`${BASE_API_URL}api/Account/UserLogin`, {
                // const response = await axios.post(`http://agazatyapi.runasp.net/api/Account/UserLogin`, {
                userName: email,
                password: password,
            });
            console.log('تم تسجيل الدخول بنجاح:', response.data);
            navigate('/')
            //set user name and token to local storage
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userID', response.data.id);
            //print userid form local storage
            console.log('userid from local storage:', localStorage.getItem('userID'));
        } catch (err) {
            console.error('حدث خطأ أثناء تسجيل الدخول:', err);
            setError('اسم المستخدم أو كلمة المرور غير صحيحة.');
        } finally {
            setLoading(false);
        }
    };

    const handlePassword = async (emailForget) => {
        setLoading(true);
        setError(null);
        console.log('e', emailForget);

        try {
            const response = await axios.post(`${BASE_API_URL}api/Account/Send-OTP`, {
                email: emailForget,
            });
            if (response.data.message === "account not found.") {
                setError('البريد الالكتروني غير موجود');
            } else {
                console.log('تم ارسال رمز التاكيد بنجاح:', response.data);
                navigate('/login/otpcode');
            }
        } catch (err) {
            console.error('حدث خطأ أثناء ارسال رمز التاكيد:', err);
            setError('البريد الالكتروني غير صحيح');
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="container login">
            <div className="row">
                <div className="col-12 col-md-4 xxxx">
                    <div className='container-1'>
                        <div className="d-flex headForm text-primary">
                            <h4>اجازاتي</h4>
                            <p></p>
                            <h6>جامعة جنوب الوادي</h6>
                            <img src={LogoUniversity} alt="LogoUniversity" />
                        </div>
                        {/* تمرير props إلى LoginCom */}
                        <Outlet context={{ handleLogin, handlePassword, loading, error }} />
                        <div className="wordBottom">
                            <Link to={'./'} id="emailHelp" className="form-text text-color">سياسة الخصوصية. </Link>
                            <Link to={'./'} id="emailHelp" className="form-text text-color">الدليل الشامل للأسئلة الشائعة</Link>
                        </div>
                    </div>
                </div>
                <div className="col d-none d-md-block">
                    <img className="rounded img-fluid" src={Door} alt="Door" />
                </div>
            </div>
        </div>
    );
}

export default Login;


























// import Door from '../Images/Door.jpg';
// import '../CSS/login.css';
// import { Link, Outlet } from 'react-router-dom';
// import LogoUniversity from '../Images/LogoUniversity.jpg';
// import LoginCom from '../components/LoginCom';
// function Login() {

//     return (
//         <div className="container login">
//             <div className="row">
//                 <div className="col-12 col-md-4 xxxx">
//                     <div className='container-1'>
//                         <form>
//                             <div className="d-flex headForm text-primary">
//                                 <h4>اجازاتي</h4>
//                                 <p></p>
//                                 <h6>جامعة جنوب الوادي</h6>
//                                 <img src={LogoUniversity} alt="LogoUniversity" />
//                             </div>
//                             <LoginCom />
//                             <div className="wordBottom">
//                                 <Link to={'./'} id="emailHelp" className="form-text text-color">سياسة الخصوصية. </Link>
//                                 <Link to={'./'} id="emailHelp" className="form-text text-color">الدليل الشامل للأسئلة الشائعة</Link>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//                 <div className="col d-none d-md-block">
//                     <img className="rounded img-fluid" src={Door} alt="Door" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login;















// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Door from '../Images/Door.jpg';
// import LogoUniversity from '../Images/LogoUniversity.jpg';
// import '../CSS/login.css';

// function Login() {
//     const [UserName, setUserName] = useState('');
//     const [Password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const loginData = {
//             UserName: UserName,
//             Password: Password
//         };
//         try {
//             const response = await fetch('http://agazatyapi.runasp.net/api/Account/UserLogin', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(loginData)
//             });

//             if (!response.ok) {
//                 throw new Error('فشل تسجيل الدخول');
//             }

//             const data = await response.json();
//             console.log('تم تسجيل الدخول بنجاح:', data);

//         } catch (err) {
//             setError('فشل تسجيل الدخول، يرجى التحقق من البيانات المدخلة');
//             console.error(err);
//         }
//     };

//     return (
//         <div className="container login">
//             <div className="row">
//                 <div className="col-12 col-md-4 xxxx">
//                     <div className='container-1'>
//                         <form onSubmit={handleSubmit}>
//                             <div className="d-flex headForm text-primary">
//                                 <h4>اجازاتي</h4>
//                                 <h6>جامعة جنوب الوادي</h6>
//                                 <img src={LogoUniversity} alt="LogoUniversity" />
//                             </div>

//                             <div className="mb-3">
//                                 <label htmlFor="text" className="form-label">البريد الإلكتروني</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="text"
//                                     value={UserName}
//                                     onChange={(e) => setUserName(e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             <div className="mb-3">
//                                 <label htmlFor="password" className="form-label">كلمة المرور</label>
//                                 <input
//                                     type="password"
//                                     className="form-control"
//                                     id="password"
//                                     value={Password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             {error && <p className="text-danger">{error}</p>}

//                             <button type="submit" className="btn btn-primary w-100">تسجيل الدخول</button>

//                             <div className="wordBottom">
//                                 <Link to={'./'} id="emailHelp" className="form-text text-color">سياسة الخصوصية</Link>
//                                 <Link to={'./'} id="emailHelp" className="form-text text-color">الدليل الشامل للأسئلة الشائعة</Link>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//                 <div className="col d-none d-md-block">
//                     <img className="rounded img-fluid" src={Door} alt="Door" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;
