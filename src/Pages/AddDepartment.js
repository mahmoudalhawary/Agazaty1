import { useState } from "react";
import Btn from "../components/Btn";
import Swal from "sweetalert2";

function AddDepartment(){
    const [departmentName, SetDepartmentName] = useState('');
    const [departmentCode, SetDepartmentCode] = useState('');
    const [dateCreation, SetDateCreation] = useState('');
    const [departmentManager, setDepartmentManager] = useState('');

    const employees = [
        { id: 1, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'عبدالرحمن', secondName: 'احمد', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 2, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'إبراهبم', secondName: 'محمد', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'تكنولوجيا المعلومات', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 3, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'منى', secondName: 'محمود', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 4, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'عمرو', secondName: 'مصطفى', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'تكنولوجيا المعلومات', dateAppointment: '19/9/2024', address: 'قنا' },
    ];

    const swal = () => {
        Swal.fire({
            title:`<span style='color:#0d6efd;'>هل أنت متأكد من إنشاء قسم ؟</span>`,
            html: `
                <p dir='rtl'><span style='font-weight: bold;'>اسم القسم:</span> <span style='color:#0d6efd;'>${departmentName}</span></p>
                <p dir='rtl'><span style='font-weight: bold;'>تاريخ إنشاء القسم:</span> <span style='color:#0d6efd;'>${dateCreation}</span></p>
                <p dir='rtl'><span style='font-weight: bold;'>رئيس القسم:</span> <span style='color:#0d6efd;'>${departmentManager}</span></p>
                <p dir='rtl'><span style='font-weight: bold;'>كود القسم:</span> <span style='color:#0d6efd;'>${departmentCode}</span></p>
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
    
    return(
        <form className=" p-3">
            <div className="row">
                <div className="d-flex mb-4 justify-content-between">
                    <h2 className="m-0">إضافة قسم</h2>
                </div>

                <div className="col-sm-12 col-md-6 mt-3">
                    <label htmlFor="exampleFormControlText1" className="form-label">اسم القسم</label>
                    <input className="form-control" type="text" onChange={(e)=> SetDepartmentName(e.target.value)} placeholder="علوم الحاسب" id="exampleFormControlText1" aria-label="default input example" />
                </div>

                <div className="col-sm-12 col-md-6 mt-3">
                    <label htmlFor="exampleInputDeputy" className="form-label">رئيس القسم</label>
                    <select
                        className="form-select"
                        id="exampleInputDeputy"
                        aria-label="Default select example"
                        onChange={(e)=> setDepartmentManager(e.target.value)}
                    >
                        <option value="">اختر رئيس القسم</option>
                            {employees.map((employee,index) => (
                                <option key={index} value={employee.firstName}>
                                    {employee.firstName} {employee.secondName} ( {employee.department} )
                                </option>
                            ))}
                    </select>
                </div>

                <div className="col-sm-12 col-md-6 mt-3">
                    <label htmlFor="exampleInputDate2" className="form-label">تاريخ الإنشاء</label>
                    <input type="date" onChange={(e)=> SetDateCreation(e.target.value)} className="form-control" id="exampleInputDate2" />
                </div>

                <div className="col-sm-12 col-md-6 mt-3">
                    <label htmlFor="exampleFormControlText2" className="form-label">كود القسم</label>
                    <input className="form-control" type="text" onChange={(e)=> SetDepartmentCode(e.target.value)} placeholder="CS7683" id="exampleFormControlText2" aria-label="default input example" />
                </div>
            </div>

            <div onClick={swal} className="d-flex justify-content-center mt-3">
                <Btn name='إنشاء' link='/' class='btn-primary w-50' />
            </div>
        </form>
    )
}

export default AddDepartment;