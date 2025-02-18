import { useState } from "react";
import Btn from "./Btn";
import Swal from "sweetalert2";

function NormalLeave(){
    const [startDate, SetStartDate] = useState('لم يتم التحديد');
    const [FinalDate, SetFinalDate] = useState('لم يتم التحديد');
    const [employee, SetEmployee] = useState('لم يتم التحديد');
    const [notes, setNotes] = useState('لا يوجد');

    const employees = [
        { id: 1, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'عبدالرحمن', secondName: 'احمد', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 2, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'إبراهبم', secondName: 'محمد', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'تكنولوجيا المعلومات', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 3, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'منى', secondName: 'محمود', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 4, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'عمرو', secondName: 'مصطفى', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'تكنولوجيا المعلومات', dateAppointment: '19/9/2024', address: 'قنا' },
    ];

    const swal = () => {
        Swal.fire({
            title:`<span style='color:#0d6efd;'>هل أنت متأكد من إرسال الطلب ؟</span>`,
            html: `
                <p dir='rtl'><span style='font-weight: bold;'>نوع الاجازة:</span> <span style='color:#0d6efd;'>اعتيادي</span></p>
                <p dir='rtl'><span style='font-weight: bold;'>تاريخ بداية الإجازة:</span> <span style='color:#0d6efd;'>${startDate}</span></p>
                <p dir='rtl'><span style='font-weight: bold;'>تاريخ نهاية الإجازة:</span> <span style='color:#0d6efd;'>${FinalDate}</span></p>
                <p dir='rtl'><span style='font-weight: bold;'>الزميل القائم بالعمل:</span> <span style='color:#0d6efd;'>${employee}</span></p>
                <p dir='rtl'><span style='font-weight: bold;'>ملحوظاتك:</span> <span style='color:#0d6efd;'>${notes}</span></p>
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
                title:`<span style='color:#0d6efd;' dir="rtl">تم إرسال الطلب بنجاح.</span>`,
                text: "سيتم الرد عليك قريبا",
                icon: "success",
                confirmButtonText: "تتبع الاجازات",
                confirmButtonColor: "#0d6efd",
                });
            }
            });
        }
    
    return(
        <>
            <div className="row">
                <div className="col-sm-12 col-md-6 mt-3">
                    <label htmlFor="exampleInputDate1" className="form-label">تاريخ بداية الاجازة</label>
                    <input type="date" onChange={(e)=>SetStartDate(e.target.value)} className="form-control" id="exampleInputDate1" min={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0]} />
                </div>

                <div className="col-sm-12 col-md-6 mt-3">
                    <label htmlFor="exampleInputDate2" className="form-label">تاريخ نهاية الاجازة</label>
                    <input type="date" onChange={(e)=>SetFinalDate(e.target.value)} className="form-control" id="exampleInputDate2" min={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0]} />
                </div>

                <div className="col-sm-12 col-md-6 mt-3">
                    <label htmlFor="exampleInputDeputy" className="form-label">القائم بالعمل</label>
                    <select
                        className="form-select"
                        id="exampleInputDeputy"
                        aria-label="Default select example"
                        onChange={(e)=> SetEmployee(e.target.value)}
                    >
                        <option value="">اختر القائم بالعمل</option>
                        {employees.map((employee,index) => (
                            <option key={index} value={employee.firstName}>
                                {employee.firstName} {employee.secondName} ( {employee.department} )
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-sm-12 col-md-6 mt-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">الملاحظات</label>
                    <textarea className="form-control" onChange={(e)=> setNotes(e.target.value)} id="exampleFormControlTextarea1" rows="1" placeholder="أكتب ملاحظاتك"></textarea>
                </div>
            </div>

            <div onClick={swal} className="d-flex justify-content-center mt-3">
                <Btn name='إرسال الطلب' link='/' class='btn-primary w-50' />
            </div>
        </>
    )
}

export default NormalLeave;