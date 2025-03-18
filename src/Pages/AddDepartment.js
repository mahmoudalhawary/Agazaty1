import { useEffect, useState } from "react";
import Btn from "../components/Btn";
import Swal from "sweetalert2";

function AddDepartment(){
    const [name, SetName] = useState('');
    const [code, SetCode] = useState('');
    const [createDate, SetCreateDate] = useState('');
    const [managerId, setManagerId] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch(`http://agazatyapi.runasp.net/api/Account/GetAllActiveUsers`)
        .then((res)=> res.json())
        .then((data)=> setUsers(data))
    }, [])

    console.log(users)

    const swal = () => {
        Swal.fire({
            title:`<span style='color:#0d6efd;'>هل أنت متأكد من إنشاء قسم ؟</span>`,
            html: `
                <p dir='rtl'><span style='font-weight: bold;'>اسم القسم:</span> <span style='color:#0d6efd;'>${name}</span></p>
                <p dir='rtl'><span style='font-weight: bold;'>تاريخ إنشاء القسم:</span> <span style='color:#0d6efd;'>${createDate}</span></p>
                <p dir='rtl'><span style='font-weight: bold;'>رئيس القسم:</span> <span style='color:#0d6efd;'>${managerId}</span></p>
                <p dir='rtl'><span style='font-weight: bold;'>كود القسم:</span> <span style='color:#0d6efd;'>${code}</span></p>
            `,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "نعم",
            cancelButtonText: "لا",
            confirmButtonColor: "#0d6efd",
            cancelButtonColor: "#d33",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title:`<span style='color:#0d6efd;' dir="rtl">تم إنشاء القسم بنجاح.</span>`,
                icon: "success",
                confirmButtonText: "مشاهدة الأقسام",
                confirmButtonColor: "#0d6efd",
                });
            }
            });
        }

        const handleData = (e) =>{
            e.preventDefault();

            const newDepartment = {name, managerId, code, createDate};
            
            fetch("http://agazatyapi.runasp.net/api/Department/CreateDepartment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newDepartment)
            })
            .then((res) => res.json())
            .then((data) => {
                Swal.fire({
                    title: `<span style='color:#0d6efd;'>تمت إضافة القسم بنجاح.</span>`,
                    icon: "success",
                    confirmButtonText: "مشاهدة الأقسام",
                    confirmButtonColor: "#0d6efd",
                });
            })
            .catch((error) => {
                Swal.fire({
                    title: `<span style='color:red;'>خطأ في الإضافة</span>`,
                    text: "حدث خطأ أثناء حفظ البيانات. حاول مرة أخرى.",
                    icon: "error",
                    confirmButtonColor: "#d33",
                });
            });
        }
    
    return(
        <div>
            <div>
                <div className="zzz d-inline-block p-3 ps-5">
                    <h2 className="m-0">إضافة قسم</h2>
                </div>
            </div>
            <form onSubmit={handleData}>
                <div className="row">
                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="exampleFormControlText1" className="form-label">اسم القسم</label>
                        <input className="form-control" type="text" onChange={(e)=> SetName(e.target.value)} placeholder="علوم الحاسب" id="exampleFormControlText1" aria-label="default input example" />
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="manager" className="form-label">رئيس القسم</label>
                        <select className="form-select" id="manager" onChange={(e) => setManagerId(e.target.value)} required>
                            <option value="">أختر رئيس القسم</option>
                            {users.map((user, index) => (
                                <option key={index} value={user.id}>
                                    {user.fullName} ({user.departmentName})
                                </option>
                            ))}
                        </select>
                    </div>


                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="exampleInputDate2" className="form-label">تاريخ الإنشاء</label>
                        <input type="date" onChange={(e)=> SetCreateDate(e.target.value)} className="form-control" id="exampleInputDate2" />
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="exampleFormControlText2" className="form-label">كود القسم</label>
                        <input className="form-control" type="text" onChange={(e)=> SetCode(e.target.value)} placeholder="CS7683" id="exampleFormControlText2" aria-label="default input example" />
                    </div>
                </div>

                <div onClick={swal} className="d-flex justify-content-center mt-3">
                    <Btn name='إنشاء' link='/' class='btn-primary w-50' />
                </div>
            </form>
        </div>
    )
}

export default AddDepartment;