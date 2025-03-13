import { useState } from "react";
import Btn from "./Btn";
import Swal from "sweetalert2";

function SickLeave(){
    const [startDate, setStartDate] = useState('لم يتم التحديد');
    const [notes, setNotes] = useState('لا يوجد');
    const [files, setFiles] = useState('');

    const swal = () => {
        Swal.fire({
            title:`<span style='color:#0d6efd;'>هل أنت متأكد من إرسال الطلب ؟</span>`,
            html: `
                <p dir='rtl'><span style='font-weight: bold;'>نوع الاجازة:</span> <span style='color:#0d6efd;'>مرضية</span></p>
                <p dir='rtl'><span style='font-weight: bold;'>تاريخ إرسال الطلب:</span> <span style='color:#0d6efd;'>${startDate}</span></p>
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
                    <input type="date" onChange={(e)=>setStartDate(e.target.value)} className="form-control" id="exampleInputDate1" min={new Date(new Date().setDate(new Date().getDate())).toISOString().split("T")[0]} />
                </div>

                <div className="col-sm-12 col-md-6 mt-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">عنوان الإقامة</label>
                    <textarea className="form-control" onChange={(e)=> setNotes(e.target.value)} id="exampleFormControlTextarea1" rows="1" placeholder="أكتب عنوان الإقامة تفصيليًا"></textarea>
                </div>

                <div className="col-sm-12 col-md-6 mt-3">
                    <label htmlFor="formFile" className="form-label">المرفقات</label>
                    <input className="form-control" type="file" onChange={(e)=>setFiles(e.target.value)} id="formFile"/>
                </div>

                <div className="col-sm-12 col-md-6 mt-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">الملاحظات</label>
                    <textarea className="form-control" onChange={(e)=> setNotes(e.target.value)} id="exampleFormControlTextarea1" rows="1" placeholder="أكتب ملاحظاتك"></textarea>
                </div>
            </div>

            <div onClick={swal} className="d-flex justify-content-center mt-3">
                <Btn name='إرسال الطلب' class='btn-primary w-50' />
            </div>
        </>
    )
}

export default SickLeave;