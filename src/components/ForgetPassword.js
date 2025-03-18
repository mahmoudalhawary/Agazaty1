import { useState } from 'react';
import '../CSS/login.css';
import { useNavigate, useOutletContext } from 'react-router-dom';

function ForgetPassword() {
    const [email, setEmail] = useState('');
    const { handlePassword, loading, error } = useOutletContext(); // استلام props من Login

    const navegate = useNavigate();

    // const handlePassword = async (email) => {
    //     setLoading(true);
    //     setError(null);

    //     try {
    //         const response = await axios.post(`${BASE_API_URL}api/Account/Forget-Password`, {
    //             // const response = await axios.post(`http://agazatyapi.runasp.net/api/Account/UserLogin`, {
    //             userName: email,
    //         });
    //         console.log(' تم ارسال رمز التاكيد بنجاح  :', response.data);
    //         navegate('/login/otpcode')
    //     } catch (err) {
    //         console.error('حدث خطأ أثناء ارسال رمز التاكيد:', err);
    //         setError('البريد الاكتروني غير صحيح');
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('e', email);

        handlePassword(email);
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className='wordLogin'>
                <h4 className="text-center text-head">استرجاع كلمة المرور</h4>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"> البريد الإلكتروني</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}

            <button type="submit" className={`btn btn-primary w-100 ${loading ? 'disabled' : ''}`}>
                {loading ? 'جاري ارسال كود التاكيد...' : ' ارسال كود التاكيد'}
            </button>
            {/* <BtnLink name='إرسال كود التحقق' link='/login/otpcode'  class='btn-primary w-100'/> */}
        </form>
    )
}

export default ForgetPassword;