import { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

function LoginCom() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin, loading, error } = useOutletContext(); // استلام props من Login

    const onSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
    };


    return (
        <>
            <form onSubmit={onSubmit}>
                <div className='wordLogin'>
                    <h4 className="text-center text-head">تسجيل الدخول</h4>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">البريد الإلكتروني</label>
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder='yahyasaad2024@gmail.com'
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">كلمة المرور</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder='********'
                        required
                    />
                </div>

                <Link to={'/login/forgetpassword'} id="emailHelp" className="form-text text-primary forgetPassword">هل نسيت كلمة المرور؟</Link>

                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className={`btn btn-primary w-100 ${loading ? 'disabled' : ''}`}>
                    {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                </button>
            </form>
        </>
    );
}

export default LoginCom;
