import { useEffect, useState } from "react";
import Btn from "../components/Btn";
import Swal from "sweetalert2";

function AddEmployee(){
    const [firstName, SetFirstName] = useState('');
    const [secondName, SetSecondName] = useState('');
    const [thirdName, SetThirdName] = useState('');
    const [fourthName, SetFourthName] = useState('');
    const [nationalID, SetNationalID] = useState('');
    const [phoneNumber, SetPhoneNumber] = useState('');
    const [address, SetAddress] = useState('');
    const [email, SetEmail] = useState('');
    const [dateAppointment, SetDateAppointment] = useState('');
    const [employeePicture, SetEmployeePicture] = useState('');
    const [department, SetDepartment] = useState('');
    const [jobTitle, SetJobTitle] = useState('');
    const [sex, SetSex] = useState('');
    const [password, SetPassword] = useState('');
    const [confirmPassword, SetConfirmPassword] = useState('');
    const [departments, SetDepartments] = useState([]);


    useEffect(()=>{
        fetch(`http://localhost:9000/departments`)
        .then((res)=> res.json())
        .then((data)=> SetDepartments(data))
    }, [])

    const handleData = (e) => {
        e.preventDefault();

        // التحقق من أن جميع الحقول ممتلئة
        if (!firstName || !secondName || !thirdName || !fourthName || !nationalID || !phoneNumber || 
            !address || !email || !dateAppointment || !department || !jobTitle || !sex || !password || !confirmPassword) {
            
            Swal.fire({
                title: `<span style='color:red;'>تنبيه!</span>`,
                text: "يرجى ملء جميع الحقول المطلوبة قبل الإضافة.",
                icon: "warning",
                confirmButtonColor: "#d33",
                confirmButtonText: "حسنًا",
            });
            return; // إيقاف العملية إذا كان هناك حقول فارغة
        }

        // التحقق من تطابق كلمتي المرور
        if (password !== confirmPassword) {
            Swal.fire({
                title: `<span style='color:red;'>خطأ!</span>`,
                text: "كلمة المرور غير متطابقة، يرجى التأكد.",
                icon: "error",
                confirmButtonColor: "#d33",
                confirmButtonText: "حسنًا",
            });
            return;
        }

        const newEmployee = { firstName, secondName, thirdName, fourthName, nationalID, phoneNumber, address, 
                             email, dateAppointment, employeePicture, department, jobTitle, sex, password };

        fetch("http://localhost:9000/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        })
        .then((res) => res.json())
        .then((data) => {
            Swal.fire({
                title: `<span style='color:#0d6efd;'>تمت إضافة الموظف بنجاح.</span>`,
                icon: "success",
                confirmButtonText: "مشاهدة الموظفين",
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
    };
        
    return(
        <div>
            <div className="zzz d-inline-block p-3 ps-5">
                <h2 className="m-0">إضافة موظف</h2>
            </div>
            <form onSubmit={handleData}>
                <div className="row">
                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="exampleFormControlText1" className="form-label">الاسم الأول</label>
                        <input className="form-control" type="text" onChange={(e)=> SetFirstName(e.target.value)} placeholder="يحيى" id="exampleFormControlText1" aria-label="default input example" />
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="exampleFormControlText2" className="form-label">الاسم الثاني</label>
                        <input className="form-control" type="text" onChange={(e)=> SetSecondName(e.target.value)} placeholder="سعد" id="exampleFormControlText2" aria-label="default input example" />
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="exampleFormControlText3" className="form-label">الاسم الثالث</label>
                        <input className="form-control" type="text" onChange={(e)=> SetThirdName(e.target.value)} placeholder="عبدالموجود" id="exampleFormControlText3" aria-label="default input example" />
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="exampleFormControlText4" className="form-label">الاسم الرابع</label>
                        <input className="form-control" type="text" onChange={(e)=> SetFourthName(e.target.value)} placeholder="جادالرب" id="exampleFormControlText4" aria-label="default input example" />
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="exampleFormControlNumber1" className="form-label">الرقم القومي</label>
                        <input className="form-control" type="number" onChange={(e)=> SetNationalID(e.target.value)} placeholder="30201231201212" id="exampleFormControlNumber1" aria-label="default input example" dir="rtl" />
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="exampleFormControlNumber2" className="form-label">رقم الهاتف</label>
                        <input className="form-control" type="number" onChange={(e)=> SetPhoneNumber(e.target.value)} placeholder="01127471188" id="exampleFormControlNumber2" aria-label="default input example" dir="rtl" />
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="exampleFormControlText5" className="form-label">العنوان</label>
                        <input className="form-control" type="text" onChange={(e)=> SetAddress(e.target.value)} placeholder="قنا - المحطة" id="exampleFormControlText5" aria-label="default input example" />
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">البريد الإلكتروني</label>
                        <input className="form-control" type="email" onChange={(e)=> SetEmail(e.target.value)} placeholder="yahyasaad2024@gmail.com" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="exampleInputDate2" className="form-label">تاريخ التعيين</label>
                        <input type="date" onChange={(e)=> SetDateAppointment(e.target.value)} className="form-control" id="exampleInputDate2" />
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="exampleInputEmployeePicture" className="form-label">صورة شخصية</label>
                        <input type="file" onChange={(e)=> SetEmployeePicture(e.target.value)} className="form-control" id="exampleInputEmployeePicture" />
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="exampleInputDeputy1" className="form-label">القسم</label>
                        <select
                            className="form-select"
                            id="exampleInputDeputy1"
                            aria-label="Default select example"
                            onChange={(e)=> SetDepartment(e.target.value)}
                        >
                            <option value="">اختر القسم</option>
                                {departments.map((department,index) => (
                                    <option key={index} value={department.departmentName}>
                                        {department.departmentName}
                                    </option>
                                ))}
                        </select>
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="exampleInputDeputy2" className="form-label">المسمى الوظيفي</label>
                        <select
                            className="form-select"
                            id="exampleInputDeputy2"
                            aria-label="Default select example"
                            onChange={(e)=> SetJobTitle(e.target.value)}
                        >
                            <option value="">اختر المسمى</option>
                                <option value='عامل'>عامل</option>
                                <option value='موظف'>موظف</option>
                                <option value='معيد'>معيد</option>
                                <option value='دكتور'>دكتور</option>
                                <option value='مدير قسم'>مدير قسم</option>
                        </select>
                    </div>

                    
                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="exampleInputDeputy3" className="form-label">الجنس</label>
                        <select
                            className="form-select"
                            id="exampleInputDeputy3"
                            aria-label="Default select example"
                            onChange={(e)=> SetSex(e.target.value)}
                        >
                                <option value="">اختر الجنس</option>
                                <option value='عامل'>ذكر</option>
                                <option value='موظف'>أنثى</option>
                        </select>
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3">
                        <label for="exampleInputPassword1" className="form-label">كلمة المرور</label>
                        <input type="password" className="form-control" onChange={(e)=> SetPassword(e.target.value)} placeholder="********" id="exampleInputPassword1" />
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3">
                        <label for="exampleInputPassword2" className="form-label">تأكيد كلمة المرور</label>
                        <input type="password" className="form-control" onChange={(e)=> SetConfirmPassword(e.target.value)} placeholder="********" id="exampleInputPassword2" />
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-3">
                    <Btn name='إضافة' link='/' class='btn-primary w-50' />
                </div>
            </form>
        </div>
    )
}

export default AddEmployee;
