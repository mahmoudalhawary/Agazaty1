import { useNavigate } from 'react-router-dom';
import Btn from '../components/Btn';
import { useEffect, useState } from 'react';
import YahyaSaad from '../Images/YahyaSaad.jpg';
import Swal from 'sweetalert2';
import API from "../Data";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function EditPassword() {
    const userID = localStorage.getItem("userID");
    const navigate = useNavigate();
    const [updatedFields, setUpdatedFields] = useState({});
    const [UserRole, setUserRole] = useState("");

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        fetch(`http://agazatyapi.runasp.net/api/Account/GetRoleOfUser/${userID}`)
            .then((res) => res.json())
            .then((data) => setUserRole(data.role));
    }, [userID]);

    const handleChange = (e) => {
        setUpdatedFields({ ...updatedFields, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (updatedFields.newPassword !== updatedFields.confirmNewPassword) {
            Swal.fire("تحذير", "كلمة المرور الجديدة وتأكيدها غير متطابقتين", "warning");
            return;
        }

        const confirmResult = await Swal.fire({
            title: 'هل أنت متأكد؟',
            text: "هل تريد تغيير كلمة المرور؟",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'نعم، تغيير',
            cancelButtonText: 'لا، إلغاء'
        });

        if (!confirmResult.isConfirmed) {
            Swal.fire("تم الإلغاء", "لم يتم تغيير كلمة المرور", "info");
            return;
        }

        const payload = {
            useId: userID,
            currentPassword: updatedFields.currentPassword,
            newPassword: updatedFields.newPassword,
            confirmNewPassword: updatedFields.confirmNewPassword
        };

        try {
            const res = await fetch("http://agazatyapi.runasp.net/api/Account/Change-Password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const result = await res.json();

            if (res.ok) {
                Swal.fire("تم بنجاح", "تم تغيير كلمة المرور", "success");
                navigate('/');
            } else {
                let errorMessage = "حدث خطأ غير متوقع";

                if (Array.isArray(result)) {
                    errorMessage = result.join("<br>");
                } else if (typeof result === 'string') {
                    errorMessage = result;
                } else if (result?.message) {
                    errorMessage = result.message;
                } else if (result?.errors) {
                    const errorList = Object.values(result.errors).flat();
                    errorMessage = errorList.join("<br>");
                }

                Swal.fire({
                    title: "خطأ",
                    html: errorMessage,
                    icon: "error"
                });
            }
        } catch (error) {
            Swal.fire("خطأ", "فشل الاتصال بالسيرفر", "error");
            console.error("Network Error:", error);
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
                                    <h5 className='m-0 ps-5 pe-5 text-light'>{UserRole}</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-7 col-xl-8 col-xxl-9 mt-4'>
                            <div className='row'>
                                {/* Current Password */}
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                    <label className="form-label">كلمة المرور الحالية</label>
                                    <div className="position-relative">
                                        <input
                                            type={showCurrentPassword ? "text" : "password"}
                                            name="currentPassword"
                                            className="form-control"
                                            onChange={handleChange}
                                            placeholder="********"
                                        />
                                        <span
                                            className="position-absolute top-50 end-0 translate-middle-y me-3"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                        >
                                            {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                </div>

                                {/* New Password */}
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                    <label className="form-label">كلمة المرور الجديدة</label>
                                    <div className="position-relative">
                                        <input
                                            type={showNewPassword ? "text" : "password"}
                                            name="newPassword"
                                            className="form-control"
                                            onChange={handleChange}
                                            placeholder="********"
                                        />
                                        <span
                                            className="position-absolute top-50 end-0 translate-middle-y me-3"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                        >
                                            {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                </div>

                                {/* Confirm Password */}
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                    <label className="form-label">تأكيد كلمة المرور</label>
                                    <div className="position-relative">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            name="confirmNewPassword"
                                            className="form-control"
                                            onChange={handleChange}
                                            placeholder="********"
                                        />
                                        <span
                                            className="position-absolute top-50 end-0 translate-middle-y me-3"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
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
    );
}

export default EditPassword;
