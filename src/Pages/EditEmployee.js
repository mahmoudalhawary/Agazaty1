import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Btn from "../components/Btn";
import Swal from "sweetalert2";

function EditEmployee() {
    const id = useParams().id;
    const [employee, setEmployee] = useState({});
    const [updatedData, setUpdatedData] = useState({});
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9000/employees/${id}`)
            .then(res => res.json())
            .then(data => setEmployee(data));
    }, [id]);

    useEffect(() => {
        fetch(`http://localhost:9000/departments`)
            .then(res => res.json())
            .then(data => setDepartments(data));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData(prev => ({ ...prev, [name]: value }));
    };

    const handleData = (e) => {
        e.preventDefault();
        const finalData = { ...employee, ...updatedData };

        fetch(`http://localhost:9000/employees/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(finalData),
        })
            .then(res => res.json())
            Swal.fire({
                title:`<span style='color:#0d6efd;'>هل أنت متأكد من تحديث بيانات ${employee.firstName} ${employee.secondName} ؟</span>`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "نعم",
                cancelButtonText: "لا",
                confirmButtonColor: "#0d6efd",
                cancelButtonColor: "#d33",
            })
            .then(() => {
                Swal.fire({
                    title: `<span style='color:#0d6efd;'>تم تحديث بيانات الموظف بنجاح.</span>`,
                    icon: "success",
                    confirmButtonText: "مشاهدة الموظفين",
                    confirmButtonColor: "#0d6efd",
                });
            });
    };

    return (
        <div className="p-3">
            <h2 className="m-0">تعديل بيانات {employee.firstName} {employee.secondName}</h2>
            <form onSubmit={handleData}>
                <div className="row">
                    {[
                        { label: "الاسم الأول", key: "firstName" },
                        { label: "الاسم الثاني", key: "secondName" },
                        { label: "الاسم الثالث", key: "thirdName" },
                        { label: "الاسم الرابع", key: "fourthName" },
                        { label: "رقم الهاتف", key: "phoneNumber", type: "number" },
                        { label: "العنوان", key: "address" },
                        { label: "البريد الإلكتروني", key: "email", type: "email" },
                    ].map(({ label, key, type = "text" }) => (
                        <div className="col-sm-12 col-md-6 mt-3" key={key}>
                            <label className="form-label">{label}</label>
                            <input className="form-control" type={type} name={key} onChange={handleChange} defaultValue={employee[key] || ''} />
                        </div>
                    ))}
                    <div className="col-sm-12 col-md-6 mt-3">
                        <label className="form-label">القسم</label>
                        <select className="form-select" name="department" onChange={handleChange} defaultValue={employee.department || ''}>
                            <option value="">اختر القسم</option>
                            {departments.map((dept, index) => (
                                <option key={index} value={dept.departmentName}>{dept.departmentName}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-sm-12 col-md-6 mt-3">
                        <label className="form-label">المسمى الوظيفي</label>
                        <select className="form-select" name="jobTitle" onChange={handleChange} defaultValue={employee.jobTitle || ''}>
                            <option value="">اختر المسمى</option>
                            <option value='عامل'>عامل</option>
                            <option value='موظف'>موظف</option>
                            <option value='معيد'>معيد</option>
                            <option value='دكتور'>دكتور</option>
                            <option value='مدير قسم'>مدير قسم</option>
                        </select>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <Btn name='تحديث' link='/' class='btn-primary w-50' />
                </div>
            </form>
        </div>
    );
}

export default EditEmployee;



// import { useParams } from "react-router-dom";
// import { useState, useEffect } from 'react';
// import Btn from "../components/Btn";
// import Swal from "sweetalert2";

// function EditEmployee(){
//         const id = useParams().id;

//         const [employee, setEmployee] = useState([]);
//         const [firstName, SetFirstName] = useState('');
//         const [secondName, SetSecondName] = useState('');
//         const [thirdName, SetThirdName] = useState('');
//         const [fourthName, SetFourthName] = useState('');
//         const [nationalID, SetNationalID] = useState('');
//         const [phoneNumber, SetPhoneNumber] = useState('');
//         const [address, SetAddress] = useState('');
//         const [email, SetEmail] = useState('');
//         const [dateAppointment, SetDateAppointment] = useState('');
//         const [employeePicture, SetEmployeePicture] = useState('');
//         const [department, SetDepartment] = useState('');
//         const [jobTitle, SetJobTitle] = useState('');
//         const [sex, SetSex] = useState('');
//         const [password, SetPassword] = useState('');
//         const [confirmPassword, SetConfirmPassword] = useState('');
//         const [departments, SetDepartments] = useState([]);

//         useEffect(() => {
//             fetch(`http://localhost:9000/employees/${id}`)
//             .then((res)=> (res.json()))
//             .then((data)=> (setEmployee(data)))
//         }, []);

//         console.log(employee)

//         useEffect(() => {
//             fetch(`http://localhost:9000/departments`)
//             .then((res)=> (res.json()))
//             .then((data)=> (SetDepartments(data)))
//         }, []);

//         const handleData = (e) => {
//             e.preventDefault();
//             console.log(firstName);
//             console.log(secondName);
//         };

//         const swal = () => {
//             Swal.fire({
//                 title:`<span style='color:#0d6efd;'>هل أنت متأكد من تحديث بيانات ${employee.firstName} ${employee.secondName} ؟</span>`,
//                 icon: "warning",
//                 showCancelButton: true,
//                 confirmButtonText: "نعم",
//                 cancelButtonText: "لا",
//                 confirmButtonColor: "#0d6efd",
//                 cancelButtonColor: "#d33",
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     Swal.fire({
//                     title:`<span style='color:#0d6efd;' dir="rtl">تمت إضافة الموظف بنجاح.</span>`,
//                     icon: "success",
//                     confirmButtonText: "مشاهدة الموظفين",
//                     confirmButtonColor: "#0d6efd",
//                     });
//                 }
//                 });
//             }

//     return(
//         <div className="p-3">
//             <h2 className="m-0">تعديل بيانات {employee.firstName} {employee.secondName}</h2>
        
        
//             <form onSubmit={handleData}>
//                 <div className="row">
//                     <div className="col-sm-12 col-md-6 mt-3">
//                         <label htmlFor="exampleFormControlText1" className="form-label">الاسم الأول</label>
//                         <input className="form-control" type="text" onChange={(e)=> SetFirstName(e.target.value)} defaultValue={employee.firstName} id="exampleFormControlText1" aria-label="default input example" />
//                     </div>

//                     <div className="col-sm-12 col-md-6 mt-3">
//                         <label htmlFor="exampleFormControlText2" className="form-label">الاسم الثاني</label>
//                         <input className="form-control" type="text" onChange={(e)=> SetSecondName(e.target.value)} defaultValue={employee.secondName} id="exampleFormControlText2" aria-label="default input example" />
//                     </div>

//                     <div className="col-sm-12 col-md-6 mt-3">
//                         <label htmlFor="exampleFormControlText3" className="form-label">الاسم الثالث</label>
//                         <input className="form-control" type="text" onChange={(e)=> SetThirdName(e.target.value)} defaultValue={employee.thirdName} id="exampleFormControlText3" aria-label="default input example" />
//                     </div>

//                     <div className="col-sm-12 col-md-6 mt-3">
//                         <label htmlFor="exampleFormControlText4" className="form-label">الاسم الرابع</label>
//                         <input className="form-control" type="text" onChange={(e)=> SetFourthName(e.target.value)} defaultValue={employee.fourthName} id="exampleFormControlText4" aria-label="default input example" />
//                     </div>

//                     <div className="col-sm-12 col-md-6 mt-3">
//                         <label htmlFor="exampleFormControlNumber1" className="form-label">الرقم القومي</label>
//                         <input className="form-control" type="number" onChange={(e)=> SetNationalID(e.target.value)} defaultValue={employee.nationalID} id="exampleFormControlNumber1" aria-label="default input example" dir="rtl" />
//                     </div>

//                     <div className="col-sm-12 col-md-6 mt-3">
//                         <label htmlFor="exampleFormControlNumber2" className="form-label">رقم الهاتف</label>
//                         <input className="form-control" type="number" onChange={(e)=> SetPhoneNumber(e.target.value)} defaultValue={employee.phoneNumber} id="exampleFormControlNumber2" aria-label="default input example" dir="rtl" />
//                     </div>

//                     <div className="col-sm-12 col-md-6 mt-3">
//                         <label htmlFor="exampleFormControlText5" className="form-label">العنوان</label>
//                         <input className="form-control" type="text" onChange={(e)=> SetAddress(e.target.value)} defaultValue={employee.address} id="exampleFormControlText5" aria-label="default input example" />
//                     </div>

//                     <div className="col-sm-12 col-md-6 mt-3">
//                         <label htmlFor="exampleInputEmail1" className="form-label">البريد الإلكتروني</label>
//                         <input className="form-control" type="email" onChange={(e)=> SetEmail(e.target.value)} defaultValue={employee.email} id="exampleInputEmail1" aria-describedby="emailHelp" />
//                     </div>

//                     <div className="col-sm-12 col-md-6 mt-3">
//                         <label htmlFor="exampleInputEmployeePicture" className="form-label">صورة شخصية</label>
//                         <input type="file" onChange={(e)=> SetEmployeePicture(e.target.value)} className="form-control" id="exampleInputEmployeePicture" />
//                     </div>

//                     <div className="col-sm-12 col-md-6 mt-3">
//                         <label htmlFor="exampleInputDeputy1" className="form-label">القسم</label>
//                         <select
//                             className="form-select"
//                             id="exampleInputDeputy1"
//                             aria-label="Default select example"
//                             onChange={(e)=> SetDepartment(e.target.value)}
//                         >
//                             <option value="">اختر القسم</option>
//                                 {departments.map((department,index) => (
//                                     <option key={index} value={department.departmentName}>
//                                         {department.departmentName}
//                                     </option>
//                                 ))}
//                         </select>
//                     </div>

//                     <div className="col-sm-12 col-md-6 mt-3">
//                         <label htmlFor="exampleInputDeputy2" className="form-label">المسمى الوظيفي</label>
//                         <select
//                             className="form-select"
//                             id="exampleInputDeputy2"
//                             aria-label="Default select example"
//                             onChange={(e)=> SetJobTitle(e.target.value)}
//                         >
//                             <option value="">اختر المسمى</option>
//                                 <option value='عامل'>عامل</option>
//                                 <option value='موظف'>موظف</option>
//                                 <option value='معيد'>معيد</option>
//                                 <option value='دكتور'>دكتور</option>
//                                 <option value='مدير قسم'>مدير قسم</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div onClick={swal} className="d-flex justify-content-center mt-3">
//                     <Btn name='تحديث' link='/' class='btn-primary w-50' />
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default EditEmployee;




















