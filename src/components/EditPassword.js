import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import YahyaSaad from '../Images/YahyaSaad.jpg';

    const navigate = useNavigate();
    const [updatedFields, setUpdatedFields] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });
    const [UserRole, setUserRole] = useState("");
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    }, [userID]);

    const handleChange = (e) => {
        setUpdatedFields({ ...updatedFields, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        }
    };

    return (
        <div>
            <div className="d-flex mb-4">
                <div className="zzz d-inline-block p-3 ps-5">
                    <h2 className="m-0">تعديل كلمة المرور</h2>
                </div>
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
                                    <h5 className='m-0 ps-5 pe-5 text-light'>{UserRole || 'جاري التحميل...'}</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-7 col-xl-8 col-xxl-9 mt-4'>
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            <div className='row'>
                                {/* Current Password */}
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3">

                                </div>

                                {/* New Password */}
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3">

                                </div>

                                {/* Confirm Password */}
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3">

                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button
                                type="submit"
                                className="btn btn-primary w-50"
                                disabled={loading}
                            >
                                {loading ? 'جاري التحديث...' : 'تحديث البيانات'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditPassword;
