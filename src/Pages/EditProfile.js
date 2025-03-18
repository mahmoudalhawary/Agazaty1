import { useNavigate } from 'react-router-dom';
import Btn from '../components/Btn';
import '../CSS/EditProfile.css';
import { useEffect, useState } from 'react';
import YahyaSaad from '../Images/YahyaSaad.jpg';
import Swal from 'sweetalert2';

function EditProfile(){
    const navigate = useNavigate();
    const [employee, setEmployee]= useState('1');
    const [id, setId]= useState('1');
    const [email, setEmail]= useState('yahyasaad2024@gmail.com');
    const [phoneNumber, setPhoneNumber]= useState('01127471188');
    const [jobTitle, setJobTitle]= useState('موظف');
    const [updatedFields, setUpdatedFields] = useState({});
    const [user, setUser] = useState([]);

    useEffect(()=>{
        fetch(`http://agazatyapi.runasp.net/api/NormalLeave/GetAllNormalLeaves`)
        .then((res)=> res.json())
        .then((data)=> console.log(data))
    }, [])

    useEffect(()=>{
        fetch(`http://localhost:9000/employees/${id}`)
        .then((res)=> res.json())
        .then((data)=> setEmployee(data))
    }, [])

    const handleChange = (e) => {
        setUpdatedFields({ ...updatedFields, [e.target.name]: e.target.value });
    };

    const updateDepartment = async (e) => {
        e.preventDefault();

        if (Object.keys(updatedFields).length === 0) {
            Swal.fire({
                title: "لم تقم بتعديل أي بيانات!",
                icon: "info",
                confirmButtonText: "حسنًا",
                confirmButtonColor: "#0d6efd",
            });
            return;
        }

        Swal.fire({
            title: `<span style='color:#0d6efd;'>هل أنت متأكد من تحديث بيانات قسم  ؟</span>`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "نعم، تحديث",
            cancelButtonText: "إلغاء",
            confirmButtonColor: "#0d6efd",
            cancelButtonColor: "#d33",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:9000/departments/${id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(updatedFields),
                    });

                    if (response.ok) {
                        Swal.fire({
                            title: `<span style='color:#0d6efd;'>تم تحديث بيانات القسم بنجاح.</span>`,
                            icon: "success",
                            confirmButtonText: "مشاهدة الأقسام",
                            confirmButtonColor: "#0d6efd",
                        }).then(() => {
                            navigate("/departments");
                        });
                    } else {
                        Swal.fire({
                            title: "حدث خطأ!",
                            text: "لم يتم تحديث البيانات، حاول مرة أخرى.",
                            icon: "error",
                        });
                    }
                } catch (error) {
                    console.error("خطأ أثناء تحديث البيانات:", error);
                    Swal.fire({
                        title: "خطأ في الاتصال!",
                        text: "تأكد من تشغيل السيرفر وحاول مجدداً.",
                        icon: "error",
                    });
                }
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        navigate('/');
    };



    return(
        <div>
            <div className="d-flex mb-4">
                <div className="zzz d-inline-block p-3 ps-5">
                    <h2 className="m-0">تعديل الملف الشخصي</h2>
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
                                    <h5 className='m-0 ps-5 pe-5 text-light'>{jobTitle}</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-7 col-xl-8 col-xxl-9 mt-4'>
                            <div className='row'>
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">البريد الإلكتروني</label>
                                    <input type="email" className="form-control" onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={employee.email} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                    <label htmlFor="exampleInputAddress" className="form-label">العنوان</label>
                                    <input type="text" className="form-control" onChange={handleChange} id="exampleInputAddress" aria-describedby="addressHelp" defaultValue={employee.address} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                    <label htmlFor="exampleInputPhoneNumber" className="form-label">رقم الهاتف</label>
                                    <input type="tel" className="form-control" onChange={handleChange} id="exampleInputPhoneNumber" aria-describedby="phoneNumberHelp" dir='rtl' defaultValue={employee.phoneNumber} />
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