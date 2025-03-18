import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function NormalLeave() {
    const ID = localStorage.getItem("userID");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [notesFromEmployee, setNotesFromEmployee] = useState("");
    const [userID, setUserID] = useState(ID);
    const [coworker_ID, setCoworker_ID] = useState("");
    const [coworkers, setCoworkers] = useState([]);

    useEffect(()=>{
        fetch(`http://agazatyapi.runasp.net/api/Account/GetAllAvailabelCoworkers/5daf7dbb-369e-44a8-9565-02e93d75b3a6`)
        .then((res)=> res.json())
        .then((data)=> setCoworkers(data))
    }, [])
    

    const handleData = async (e) => {
        e.preventDefault();

        if (!startDate || !endDate || !notesFromEmployee || !userID || !coworker_ID) {
            Swal.fire("خطأ!", "يرجى ملء جميع الحقول المطلوبة", "error");
            return;
        }
        const leaveData = {
            startDate: startDate.toString(),
            endDate: endDate.toString(),
            notesFromEmployee: notesFromEmployee || "",  // تأكد من أنها ليست `null`
            userID: userID.toString(),
            coworker_ID: coworker_ID.toString(),
        };
        

        console.log("Sending data:", leaveData);

        try {
            const response = await fetch(
                "http://agazatyapi.runasp.net/api/NormalLeave/CreateNormalLeave",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    body: JSON.stringify(leaveData),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                console.error("API Error:", errorData);
                Swal.fire("خطأ!", `فشل إرسال الطلب: ${errorData.message || "يرجى المحاولة لاحقًا"}`, "error");
                return;
            }else {
                const errorData = await response.json();
                Swal.fire("نجحت!", `تم إرسال الطلب: ${errorData.message || "يرجى انتظار الموافقة"}`, "success");
            }
        } catch (error) {
            Swal.fire("خطأ!", "حدث خطأ أثناء إرسال الطلب", "error");
            console.error("Error:", error);
        }
    };

    return (

        <div>
            <div className="zzz d-inline-block p-3 ps-5">
                <h2 className="m-0">طلب اجازة اعتيادية</h2>
            </div>

            <form onSubmit={handleData}>
                <div className="row">
                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="startDate" className="form-label">
                            تاريخ بداية الإجازة
                        </label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="form-control"
                            id="startDate"
                            required
                        />
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="endDate" className="form-label">
                            تاريخ نهاية الإجازة
                        </label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="form-control"
                            id="endDate"
                            required
                        />
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="coworker" className="form-label">القائم بالعمل</label>
                        <select className="form-select" id="coworker" onChange={(e) => setCoworker_ID(e.target.value)} required>
                            <option value="">اختر القائم بالعمل</option>
                            {coworkers.map((coworker, index) => (
                                <option key={index} value={coworker.id}>
                                    {coworker.fullName} ({coworker.departmentName})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3">
                        <label htmlFor="notes" className="form-label">
                            الملاحظات
                        </label>
                        <textarea
                            className="form-control"
                            value={notesFromEmployee}
                            onChange={(e) => setNotesFromEmployee(e.target.value)}
                            id="notes"
                            rows="1"
                            placeholder="أكتب ملاحظاتك"
                        ></textarea>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-3">
                    <button type="submit" className="btn btn-primary w-50">
                        إرسال الطلب
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NormalLeave;














































// import { useEffect, useState } from "react";
// import Btn from "./Btn";
// import Swal from "sweetalert2";

// function NormalLeave(){
//     const [employees, setEmployees] = useState([]);
//     const [startDate, SetStartDate] = useState('لم يتم التحديد');
//     const [FinalDate, SetFinalDate] = useState('لم يتم التحديد');
//     const [coworker, SetCoworker] = useState('لم يتم التحديد');
//     const [notes, setNotes] = useState('لا يوجد');


//     useEffect(()=>{
//         fetch(`http://agazatyapi.runasp.net/api/Account/NormalLeave/CreateNormalLeave`)
//         .then((res)=> res.json())
//         .then((data)=> (data))
//     }, [])







//     useEffect(() => {
//         fetch(`http://localhost:9000/employees`)
//         .then((res)=> (res.json()))
//         .then((data)=> (setEmployees(data)))
//     }, []);

//     return(
//         <form>
//             <div className="row">
//                 <div className="col-sm-12 col-md-6 mt-3">
//                     <label htmlFor="exampleInputDate1" className="form-label">تاريخ بداية الاجازة</label>
//                     <input type="date" onChange={(e)=>SetStartDate(e.target.value)} className="form-control" id="exampleInputDate1" min={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0]} />
//                 </div>

//                 <div className="col-sm-12 col-md-6 mt-3">
//                     <label htmlFor="exampleInputDate2" className="form-label">تاريخ نهاية الاجازة</label>
//                     <input type="date" onChange={(e)=>SetFinalDate(e.target.value)} className="form-control" id="exampleInputDate2" min={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0]} />
//                 </div>

//                 <div className="col-sm-12 col-md-6 mt-3">
//                     <label htmlFor="exampleInputDeputy" className="form-label">القائم بالعمل</label>
//                     <select
//                         className="form-select"
//                         id="exampleInputDeputy"
//                         aria-label="Default select example"
//                         onChange={(e)=> SetCoworker(e.target.value)}
//                     >
//                         <option value="">اختر القائم بالعمل</option>
//                         {employees.map((employee,index) => (
//                             <option key={index} value={employee.firstName}>
//                                 {employee.firstName} {employee.secondName} ( {employee.department} )
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <div className="col-sm-12 col-md-6 mt-3">
//                     <label htmlFor="exampleFormControlTextarea1" className="form-label">الملاحظات</label>
//                     <textarea className="form-control" onChange={(e)=> setNotes(e.target.value)} id="exampleFormControlTextarea1" rows="1" placeholder="أكتب ملاحظاتك"></textarea>
//                 </div>
//             </div>

//             <div className="d-flex justify-content-center mt-3">
//                 <Btn name='إرسال الطلب' link='/' class='btn-primary w-50' />
//             </div>
//         </form>
//     )
// }

// export default NormalLeave;