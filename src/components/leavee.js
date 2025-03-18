import NormalLeave from "./NormalLeave";
import SickLeave from "./SickLeave";


function Leavee() {
    return (
        <div>
            <div className="zzz d-inline-block p-3 ps-5">
                <h2 className="m-0">طلب اجازة</h2>
            </div>

            <NormalLeave/>
            <SickLeave/>
        </div>
    );
}

export default Leavee;





















// import { useEffect, useState } from "react";
// import Swal from "sweetalert2";

// function Leavee() {
//     const id="5daf7dbb-369e-44a8-9565-02e93d75b3a6";
//     const [startDate, setStartDate] = useState("");
//     const [endDate, setEndDate] = useState("");
//     const [notesFromEmployee, setNotesFromEmployee] = useState("");
//     const [userID, setUserID] = useState(id);
//     const [coworker_ID, setCoworker_ID] = useState("");
//     const [coworkers, setCoworkers] = useState("");

//     useEffect(()=>{
//         fetch(`http://agazatyapi.runasp.net/api/NormalLeave/WaitingByCoWorkerID/122e0eb2-ad19-411b-a3dd-1e96df18cc63`)
//         .then((res)=> res.json())
//         .then((data)=> console.log(data))
//     }, [])

//     useEffect(()=>{
//         fetch(`http://agazatyapi.runasp.net/api/Account/GetAllActiveUsers`)
//         .then((res)=> res.json())
//         .then((data)=> setCoworkers(data))
//     }, [])

//     const handleData = async (e) => {
//         e.preventDefault();

//         if (!startDate || !endDate || !notesFromEmployee || !userID || !coworker_ID) {
//             Swal.fire("خطأ!", "يرجى ملء جميع الحقول المطلوبة", "error");
//             return;
//         }
//         const leaveData = {
//             startDate: startDate.toString(),
//             endDate: endDate.toString(),
//             notesFromEmployee: notesFromEmployee || "",  // تأكد من أنها ليست `null`
//             userID: userID.toString(),
//             coworker_ID: coworker_ID.toString(),
//         };
        

//         console.log("Sending data:", leaveData);

//         try {
//             const response = await fetch(
//                 "http://agazatyapi.runasp.net/api/NormalLeave/CreateNormalLeave",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                         "Accept": "application/json",
//                     },
//                     body: JSON.stringify(leaveData),
//                 }
//             );

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 console.error("API Error:", errorData);
//                 Swal.fire("خطأ!", `فشل إرسال الطلب: ${errorData.message || "يرجى المحاولة لاحقًا"}`, "error");
//                 return;
//             }else {
//                 const errorData = await response.json();
//                 Swal.fire("خطأ!", `فشل إرسال الطلب: ${errorData.message || "يرجى المحاولة لاحقًا"}`, "error");
//             }
//         } catch (error) {
//             Swal.fire("خطأ!", "حدث خطأ أثناء إرسال الطلب", "error");
//             console.error("Error:", error);
//         }
//     };

//     return (
//         <div>
//             <div className="zzz d-inline-block p-3 ps-5">
//                 <h2 className="m-0">طلب اجازة</h2>
//             </div>

//             <form onSubmit={handleData}>
//                 <div className="row">
//                     <div className="col-sm-12 col-md-6 mt-3">
//                         <label htmlFor="startDate" className="form-label">
//                             تاريخ بداية الإجازة
//                         </label>
//                         <input
//                             type="date"
//                             value={startDate}
//                             onChange={(e) => setStartDate(e.target.value)}
//                             className="form-control"
//                             id="startDate"
//                             required
//                         />
//                     </div>

//                     <div className="col-sm-12 col-md-6 mt-3">
//                         <label htmlFor="endDate" className="form-label">
//                             تاريخ نهاية الإجازة
//                         </label>
//                         <input
//                             type="date"
//                             value={endDate}
//                             onChange={(e) => setEndDate(e.target.value)}
//                             className="form-control"
//                             id="endDate"
//                             required
//                         />
//                     </div>

//                     <div className="col-sm-12 col-md-6 mt-3">
//                         <label htmlFor="coworker" className="form-label">القائم بالعمل</label>
//                         <select className="form-select" id="coworker" onChange={(e) => setCoworker_ID(e.target.value)} required>
//                             <option value="">اختر القائم بالعمل</option>
//                             {coworkers.map((coworker, index) => (
//                                 <option key={index} value={coworker.id}>
//                                     {coworker.firstName} {coworker.secondName} ({coworker.departmentName})
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     <div className="col-sm-12 col-md-6 mt-3">
//                         <label htmlFor="notes" className="form-label">
//                             الملاحظات
//                         </label>
//                         <textarea
//                             className="form-control"
//                             value={notesFromEmployee}
//                             onChange={(e) => setNotesFromEmployee(e.target.value)}
//                             id="notes"
//                             rows="1"
//                             placeholder="أكتب ملاحظاتك"
//                         ></textarea>
//                     </div>
//                 </div>

//                 <div className="d-flex justify-content-center mt-3">
//                     <button type="submit" className="btn btn-primary w-50">
//                         إرسال الطلب
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Leavee;




























// import { useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import Btn from "./Btn";

// function Leavee() {
//     const [PermitLeaves, setPermitLeaves] = useState([]);
    
//     const [coworkersName, setCoworkersName] = useState([]);


//     const [startDate, setStartDate] = useState("");
//     const [endDate, setEndDate] = useState("");
//     const [coworkerName, setCoworkerName] = useState("");
//     const [notesFromEmployee, setNotesFromEmployee] = useState("بدون");


//     const [files, setFiles] = useState('');
//     const [numberOfDays, setNumberOfDays] = useState('لم يتم التحديد');








//     useEffect(()=>{
//         fetch(`http://agazatyapi.runasp.net/api/NormalLeave/AllNormalLeavesByUserId/5daf7dbb-369e-44a8-9565-02e93d75b3a6`)
//         .then((res)=> res.json())
//         .then((data)=> console.log(data))
//     }, [])


//     useEffect(()=>{
//         fetch(`http://agazatyapi.runasp.net/api/NormalLeave/CreateNormalLeave`)
//         .then((res)=> res.json())
//         .then((data)=> console.log(data))
//     }, [])






//     useEffect(() => {
//         fetch("http://agazatyapi.runasp.net/api/Account/GetAllActiveUsers")
//             .then((res) => res.json())
//             .then((data) => setCoworkersName(data));
//     }, []);

//     const handleData = async (e) => {
//         e.preventDefault();

//         try {
//             // جلب بيانات الموظف الحالي
//             const res = await fetch("http://localhost:9000/employees/1");
//             const employee = await res.json();

//             // تحديد ID جديد للإجازة
//             const newId = employee.leavess.length ? employee.leavess[employee.leavess.length - 1].id + 1 : 1;

//             // إنشاء كائن الإجازة الجديد
//             const newLeave = {
//                 id: newId,
//                 type: "اعتيادية", 
//                 startDate,
//                 endDate,
//                 status: "قيد المراجعة",
//                 notesFromEmployee,
//                 coworkerName
//             };
//             const updatedEmployee = {
//                 ...employee,
//                 leavess: [...employee.leavess, newLeave]
//             };

//             await fetch("http://agazatyapi.runasp.net/api/NormalLeave/CreateNormalLeave", {
//                 method: "PATCH",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(updatedEmployee)
//             });

//             Swal.fire({
//                 title: `<span style='color:#0d6efd;'>تم ارسال طلب الإجازة بنجاح.</span>`,
//                 icon: "success",
//                 confirmButtonText: "حسناً",
//                 confirmButtonColor: "#0d6efd",
//             });
//         } catch (error) {
//             console.error("Error updating leave:", error);
//             Swal.fire({
//                 title: "خطأ!",
//                 text: "حدث خطأ أثناء إضافة الإجازة",
//                 icon: "error",
//                 confirmButtonText: "إغلاق",
//             });
//         }
//     };

//     const [typeLeave, setTypeLeave] = useState("");

//     return (
//         <div>
//             <div className="zzz d-inline-block p-3 ps-5">
//                 <h2 className="m-0">طلب اجازة</h2>
//             </div>

//             <div className="row gap3 mt-3">
//                 <div className="col-12">
//                     <label htmlFor="selectTypeLeave" className="form-label">
//                         اختر نوع الاجازة
//                     </label>
//                     <select
//                         className="form-select"
//                         onChange={(e) => setTypeLeave(e.target.value)}
//                         id="selectTypeLeave"
//                         aria-label="Default select example"
//                     >
//                         <option value={""}>أختر نوع الاجازة</option>
//                         <option value={"اعتيادية"}>اعتيادية</option>
//                         <option value={"عارضة"}>عارضة</option>
//                         <option value={"مرضية"}>مرضية</option>
//                     </select>
//                 </div>
//             </div>

//             {/* {typeLeave === "اعتيادية" ? (
//                     <form onSubmit={handleData}>
//                         <div className="row">
//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="startDate" className="form-label">تاريخ بداية الإجازة</label>
//                                 <input type="date" onChange={(e) => setStartDate(e.target.value)} className="form-control" id="startDate" required />
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="endDate" className="form-label">تاريخ نهاية الإجازة</label>
//                                 <input type="date" onChange={(e) => setEndDate(e.target.value)} className="form-control" id="endDate" required />
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="coworker" className="form-label">القائم بالعمل</label>
//                                 <select className="form-select" id="coworker" onChange={(e) => setCoworkerName(e.target.value)} required>
//                                     <option value="">اختر القائم بالعمل</option>
//                                     {employees.map((employee, index) => (
//                                         <option key={index} value={employee.firstName}>
//                                             {employee.firstName} {employee.secondName} ({employee.department})
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="notes" className="form-label">الملاحظات</label>
//                                 <textarea className="form-control" onChange={(e) => setNotesFromEmployee(e.target.value)} id="notes" rows="1" placeholder="أكتب ملاحظاتك"></textarea>
//                             </div>
//                         </div>

//                         <div className="d-flex justify-content-center mt-3">
//                             <Btn name="إرسال الطلب" link="/" class="btn-primary w-50" />
//                         </div>
//                     </form>
//                 ) : typeLeave === "عارضة" ? (
//                     <form onSubmit={handleData}>
//                         <div className="row">
//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="exampleInputDate1" className="form-label">تاريخ بداية الاجازة</label>
//                                 <input type="date" onChange={(e)=>setStartDate(e.target.value)} className="form-control" id="exampleInputDate1" max={new Date(new Date().setDate(new Date().getDate()-1)).toISOString().split("T")[0]} />
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="exampleInputDeputy" className="form-label">اختر أيام الاجازة</label>
//                                 <select
//                                     className="form-select"
//                                     id="exampleInputDeputy"
//                                     aria-label="Default select example"
//                                     onChange={(e)=> setNumberOfDays(e.target.value)}
//                                 >
//                                     <option value="">عدد أيام الاجازة</option>
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
                                    
//                                 </select>
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="exampleFormControlTextarea1" className="form-label">الملاحظات</label>
//                                 <textarea className="form-control" onChange={(e)=> setNotesFromEmployee(e.target.value)} id="exampleFormControlTextarea1" rows="1" placeholder="أكتب ملاحظاتك"></textarea>
//                             </div>
//                         </div>
//                         <div className="d-flex justify-content-center mt-3">
//                             <Btn name="إرسال الطلب" link="/" class="btn-primary w-50" />
//                         </div>
//                     </form>
//                 ) : typeLeave === "مرضية" ? (
//                     <form onSubmit={handleData}>
//                         <div className="row">
//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="exampleInputDate1" className="form-label">تاريخ بداية الاجازة</label>
//                                 <input type="date" onChange={(e)=>setStartDate(e.target.value)} className="form-control" id="exampleInputDate1" min={new Date(new Date().setDate(new Date().getDate())).toISOString().split("T")[0]} />
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="exampleFormControlTextarea1" className="form-label">عنوان الإقامة</label>
//                                 <textarea className="form-control" onChange={(e)=> setNotesFromEmployee(e.target.value)} id="exampleFormControlTextarea1" rows="1" placeholder="أكتب عنوان الإقامة تفصيليًا"></textarea>
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="formFile" className="form-label">المرفقات</label>
//                                 <input className="form-control" type="file" onChange={(e)=>setFiles(e.target.value)} id="formFile"/>
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="exampleFormControlTextarea1" className="form-label">الملاحظات</label>
//                                 <textarea className="form-control" onChange={(e)=> setNotesFromEmployee(e.target.value)} id="exampleFormControlTextarea1" rows="1" placeholder="أكتب ملاحظاتك"></textarea>
//                             </div>
//                         </div>

//                         <div className="d-flex justify-content-center mt-3">
//                             <Btn name="إرسال الطلب" link="/" class="btn-primary w-50" />
//                         </div>
//                     </form>
//                 ): null}
//  */}



//                 {typeLeave === "اعتيادية" ? (
//                     <form onSubmit={handleData}>
//                         <div className="row">
//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="startDate" className="form-label">تاريخ بداية الإجازة</label>
//                                 <input type="date" onChange={(e) => setStartDate(e.target.value)} className="form-control" id="startDate" required />
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="endDate" className="form-label">تاريخ نهاية الإجازة</label>
//                                 <input type="date" onChange={(e) => setEndDate(e.target.value)} className="form-control" id="endDate" required />
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="coworker" className="form-label">القائم بالعمل</label>
//                                 <select className="form-select" id="coworker" onChange={(e) => setCoworkerName(e.target.value)} required>
//                                     <option value="">اختر القائم بالعمل</option>
//                                     {coworkersName.map((coworkerName, index) => (
//                                         <option key={index} value={coworkerName.firstName}>
//                                             {coworkerName.firstName} {coworkerName.secondName} ({coworkerName.department})
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="notes" className="form-label">الملاحظات</label>
//                                 <textarea className="form-control" onChange={(e) => setNotesFromEmployee(e.target.value)} id="notes" rows="1" placeholder="أكتب ملاحظاتك"></textarea>
//                             </div>
//                         </div>

//                         <div className="d-flex justify-content-center mt-3">
//                             <Btn name="إرسال الطلب" link="/" class="btn-primary w-50" />
//                         </div>
//                     </form>
//                 ) : null}
//         </div>
//     );
// }

// export default Leavee;












// import { useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import Btn from "./Btn";

// function Leavee() {
//     const [startDate, setStartDate] = useState("");
//     const [endDate, setEndDate] = useState("");
//     const [coworker_ID, setCoworker_ID] = useState("");
//     const [notesFromEmployee, setNotesFromEmployee] = useState("");
//     const [typeLeave, setTypeLeave] = useState("");
//     const [userID, setUserID] = useState("");
    
    
//     const [coworkersName, setCoworkersName] = useState([]);
//     useEffect(()=>{
//         fetch(`http://agazatyapi.runasp.net/api/NormalLeave/AllNormalLeavesByUserId/5daf7dbb-369e-44a8-9565-02e93d75b3a6`)
//         .then((res)=> res.json())
//         .then((data)=> console.log(data))
//     }, [])

//     useEffect(() => {
//         fetch("http://agazatyapi.runasp.net/api/Account/GetAllActiveUsers")
//             .then((res) => res.json())
//             .then((data) => setCoworkersName(data))
//             .catch((error) => console.error("Error fetching coworkers:", error));
//     }, []);

//     const handleData = async (e) => {
//         e.preventDefault();

//         if (!startDate || !endDate || !coworkerName || !typeLeave) {
//             Swal.fire("خطأ!", "يرجى ملء جميع الحقول المطلوبة", "error");
//             return;
//         }

//         const leaveData = {
//             startDate,
//             endDate,
//             coworkerName,
//             notesFromEmployee,
//             typeLeave,
//         };

//         try {
//             const response = await fetch(
//                 "http://agazatyapi.runasp.net/api/NormalLeave/CreateNormalLeave",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(leaveData),
//                 }
//             );

//             if (response.ok) {
//                 Swal.fire("تم الإرسال!", "تم تقديم طلب الإجازة بنجاح", "success");
//             } else {
//                 throw new Error("فشل إرسال الطلب");
//             }
//         } catch (error) {
//             Swal.fire("خطأ!", "حدث خطأ أثناء إرسال الطلب", "error");
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             <div className="zzz d-inline-block p-3 ps-5">
//                 <h2 className="m-0">طلب اجازة</h2>
//             </div>

//             <div className="row gap3 mt-3">
//                 <div className="col-12">
//                     <label htmlFor="selectTypeLeave" className="form-label">
//                         اختر نوع الاجازة
//                     </label>
//                     <select
//                         className="form-select"
//                         onChange={(e) => setTypeLeave(e.target.value)}
//                         id="selectTypeLeave"
//                         aria-label="Default select example"
//                     >
//                         <option value="">أختر نوع الاجازة</option>
//                         <option value="اعتيادية">اعتيادية</option>
//                         <option value="عارضة">عارضة</option>
//                         <option value="مرضية">مرضية</option>
//                     </select>
//                 </div>
//             </div>

//             {typeLeave === "اعتيادية" && (
//                 <form onSubmit={handleData}>
//                     <div className="row">
//                         <div className="col-sm-12 col-md-6 mt-3">
//                             <label htmlFor="startDate" className="form-label">
//                                 تاريخ بداية الإجازة
//                             </label>
//                             <input
//                                 type="date"
//                                 onChange={(e) => setStartDate(e.target.value)}
//                                 className="form-control"
//                                 id="startDate"
//                                 required
//                             />
//                         </div>

//                         <div className="col-sm-12 col-md-6 mt-3">
//                             <label htmlFor="endDate" className="form-label">
//                                 تاريخ نهاية الإجازة
//                             </label>
//                             <input
//                                 type="date"
//                                 onChange={(e) => setEndDate(e.target.value)}
//                                 className="form-control"
//                                 id="endDate"
//                                 required
//                             />
//                         </div>

//                         <div className="col-sm-12 col-md-6 mt-3">
//                             <label htmlFor="coworker" className="form-label">
//                                 القائم بالعمل
//                             </label>
//                             <select
//                                 className="form-select"
//                                 id="coworker"
//                                 onChange={(e) => setCoworkerName(e.target.value)}
//                                 required
//                             >
//                                 <option value="">اختر القائم بالعمل</option>
//                                 {coworkersName.map((coworker, index) => (
//                                     <option key={index} value={coworker.firstName}>
//                                         {coworker.firstName} {coworker.secondName} ({coworker.department})
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>

//                         <div className="col-sm-12 col-md-6 mt-3">
//                             <label htmlFor="notes" className="form-label">
//                                 الملاحظات
//                             </label>
//                             <textarea
//                                 className="form-control"
//                                 onChange={(e) => setNotesFromEmployee(e.target.value)}
//                                 id="notes"
//                                 rows="1"
//                                 placeholder="أكتب ملاحظاتك"
//                             ></textarea>
//                         </div>
//                     </div>

//                     <div className="d-flex justify-content-center mt-3">
//                         <button type="submit" className="btn btn-primary w-50">
//                             إرسال الطلب
//                         </button>
//                     </div>
//                 </form>
//             )}
//         </div>
//     );
// }

// export default Leavee;

























// import { useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import Btn from "./Btn";

// function Leavee() {
//     const [PermitLeaves, setPermitLeaves] = useState([]);
    
//     const [coworkersName, setCoworkersName] = useState([]);


//     const [startDate, setStartDate] = useState("");
//     const [endDate, setEndDate] = useState("");
//     const [coworkerName, setCoworkerName] = useState("");
//     const [notesFromEmployee, setNotesFromEmployee] = useState("بدون");


//     const [files, setFiles] = useState('');
//     const [numberOfDays, setNumberOfDays] = useState('لم يتم التحديد');








//     useEffect(()=>{
//         fetch(`http://agazatyapi.runasp.net/api/NormalLeave/AllNormalLeavesByUserId/5daf7dbb-369e-44a8-9565-02e93d75b3a6`)
//         .then((res)=> res.json())
//         .then((data)=> console.log(data))
//     }, [])


//     useEffect(()=>{
//         fetch(`http://agazatyapi.runasp.net/api/NormalLeave/CreateNormalLeave`)
//         .then((res)=> res.json())
//         .then((data)=> console.log(data))
//     }, [])






//     useEffect(() => {
//         fetch("http://agazatyapi.runasp.net/api/Account/GetAllActiveUsers")
//             .then((res) => res.json())
//             .then((data) => setCoworkersName(data));
//     }, []);

//     const handleData = async (e) => {
//         e.preventDefault();

//         try {
//             // جلب بيانات الموظف الحالي
//             const res = await fetch("http://localhost:9000/employees/1");
//             const employee = await res.json();

//             // تحديد ID جديد للإجازة
//             const newId = employee.leavess.length ? employee.leavess[employee.leavess.length - 1].id + 1 : 1;

//             // إنشاء كائن الإجازة الجديد
//             const newLeave = {
//                 id: newId,
//                 type: "اعتيادية", 
//                 startDate,
//                 endDate,
//                 status: "قيد المراجعة",
//                 notesFromEmployee,
//                 coworkerName
//             };
//             const updatedEmployee = {
//                 ...employee,
//                 leavess: [...employee.leavess, newLeave]
//             };

//             await fetch("http://agazatyapi.runasp.net/api/NormalLeave/CreateNormalLeave", {
//                 method: "PATCH",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(updatedEmployee)
//             });

//             Swal.fire({
//                 title: `<span style='color:#0d6efd;'>تم ارسال طلب الإجازة بنجاح.</span>`,
//                 icon: "success",
//                 confirmButtonText: "حسناً",
//                 confirmButtonColor: "#0d6efd",
//             });
//         } catch (error) {
//             console.error("Error updating leave:", error);
//             Swal.fire({
//                 title: "خطأ!",
//                 text: "حدث خطأ أثناء إضافة الإجازة",
//                 icon: "error",
//                 confirmButtonText: "إغلاق",
//             });
//         }
//     };

//     const [typeLeave, setTypeLeave] = useState("");

//     return (
//         <div>
//             <div className="zzz d-inline-block p-3 ps-5">
//                 <h2 className="m-0">طلب اجازة</h2>
//             </div>

//             <div className="row gap3 mt-3">
//                 <div className="col-12">
//                     <label htmlFor="selectTypeLeave" className="form-label">
//                         اختر نوع الاجازة
//                     </label>
//                     <select
//                         className="form-select"
//                         onChange={(e) => setTypeLeave(e.target.value)}
//                         id="selectTypeLeave"
//                         aria-label="Default select example"
//                     >
//                         <option value={""}>أختر نوع الاجازة</option>
//                         <option value={"اعتيادية"}>اعتيادية</option>
//                         <option value={"عارضة"}>عارضة</option>
//                         <option value={"مرضية"}>مرضية</option>
//                     </select>
//                 </div>
//             </div>

//             {/* {typeLeave === "اعتيادية" ? (
//                     <form onSubmit={handleData}>
//                         <div className="row">
//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="startDate" className="form-label">تاريخ بداية الإجازة</label>
//                                 <input type="date" onChange={(e) => setStartDate(e.target.value)} className="form-control" id="startDate" required />
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="endDate" className="form-label">تاريخ نهاية الإجازة</label>
//                                 <input type="date" onChange={(e) => setEndDate(e.target.value)} className="form-control" id="endDate" required />
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="coworker" className="form-label">القائم بالعمل</label>
//                                 <select className="form-select" id="coworker" onChange={(e) => setCoworkerName(e.target.value)} required>
//                                     <option value="">اختر القائم بالعمل</option>
//                                     {employees.map((employee, index) => (
//                                         <option key={index} value={employee.firstName}>
//                                             {employee.firstName} {employee.secondName} ({employee.department})
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="notes" className="form-label">الملاحظات</label>
//                                 <textarea className="form-control" onChange={(e) => setNotesFromEmployee(e.target.value)} id="notes" rows="1" placeholder="أكتب ملاحظاتك"></textarea>
//                             </div>
//                         </div>

//                         <div className="d-flex justify-content-center mt-3">
//                             <Btn name="إرسال الطلب" link="/" class="btn-primary w-50" />
//                         </div>
//                     </form>
//                 ) : typeLeave === "عارضة" ? (
//                     <form onSubmit={handleData}>
//                         <div className="row">
//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="exampleInputDate1" className="form-label">تاريخ بداية الاجازة</label>
//                                 <input type="date" onChange={(e)=>setStartDate(e.target.value)} className="form-control" id="exampleInputDate1" max={new Date(new Date().setDate(new Date().getDate()-1)).toISOString().split("T")[0]} />
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="exampleInputDeputy" className="form-label">اختر أيام الاجازة</label>
//                                 <select
//                                     className="form-select"
//                                     id="exampleInputDeputy"
//                                     aria-label="Default select example"
//                                     onChange={(e)=> setNumberOfDays(e.target.value)}
//                                 >
//                                     <option value="">عدد أيام الاجازة</option>
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>

//                                 </select>
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="exampleFormControlTextarea1" className="form-label">الملاحظات</label>
//                                 <textarea className="form-control" onChange={(e)=> setNotesFromEmployee(e.target.value)} id="exampleFormControlTextarea1" rows="1" placeholder="أكتب ملاحظاتك"></textarea>
//                             </div>
//                         </div>
//                         <div className="d-flex justify-content-center mt-3">
//                             <Btn name="إرسال الطلب" link="/" class="btn-primary w-50" />
//                         </div>
//                     </form>
//                 ) : typeLeave === "مرضية" ? (
//                     <form onSubmit={handleData}>
//                         <div className="row">
//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="exampleInputDate1" className="form-label">تاريخ بداية الاجازة</label>
//                                 <input type="date" onChange={(e)=>setStartDate(e.target.value)} className="form-control" id="exampleInputDate1" min={new Date(new Date().setDate(new Date().getDate())).toISOString().split("T")[0]} />
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="exampleFormControlTextarea1" className="form-label">عنوان الإقامة</label>
//                                 <textarea className="form-control" onChange={(e)=> setNotesFromEmployee(e.target.value)} id="exampleFormControlTextarea1" rows="1" placeholder="أكتب عنوان الإقامة تفصيليًا"></textarea>
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="formFile" className="form-label">المرفقات</label>
//                                 <input className="form-control" type="file" onChange={(e)=>setFiles(e.target.value)} id="formFile"/>
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="exampleFormControlTextarea1" className="form-label">الملاحظات</label>
//                                 <textarea className="form-control" onChange={(e)=> setNotesFromEmployee(e.target.value)} id="exampleFormControlTextarea1" rows="1" placeholder="أكتب ملاحظاتك"></textarea>
//                             </div>
//                         </div>

//                         <div className="d-flex justify-content-center mt-3">
//                             <Btn name="إرسال الطلب" link="/" class="btn-primary w-50" />
//                         </div>
//                     </form>
//                 ): null}
//  */}



//                 {typeLeave === "اعتيادية" ? (
//                     <form onSubmit={handleData}>
//                         <div className="row">
//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="startDate" className="form-label">تاريخ بداية الإجازة</label>
//                                 <input type="date" onChange={(e) => setStartDate(e.target.value)} className="form-control" id="startDate" required />
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="endDate" className="form-label">تاريخ نهاية الإجازة</label>
//                                 <input type="date" onChange={(e) => setEndDate(e.target.value)} className="form-control" id="endDate" required />
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="coworker" className="form-label">القائم بالعمل</label>
//                                 <select className="form-select" id="coworker" onChange={(e) => setCoworkerName(e.target.value)} required>
//                                     <option value="">اختر القائم بالعمل</option>
//                                     {coworkersName.map((coworkerName, index) => (
//                                         <option key={index} value={coworkerName.firstName}>
//                                             {coworkerName.firstName} {coworkerName.secondName} ({coworkerName.department})
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>

//                             <div className="col-sm-12 col-md-6 mt-3">
//                                 <label htmlFor="notes" className="form-label">الملاحظات</label>
//                                 <textarea className="form-control" onChange={(e) => setNotesFromEmployee(e.target.value)} id="notes" rows="1" placeholder="أكتب ملاحظاتك"></textarea>
//                             </div>
//                         </div>

//                         <div className="d-flex justify-content-center mt-3">
//                             <Btn name="إرسال الطلب" link="/" class="btn-primary w-50" />
//                         </div>
//                     </form>
//                 ) : null}
//         </div>
//     );
// }

// export default Leavee;