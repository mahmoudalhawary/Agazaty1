import { useEffect, useState } from "react";
import Btn from "./Btn";
import Swal from "sweetalert2";

function NormalLeave(){
    const [employees, setEmployees] = useState([]);
    const [startDate, SetStartDate] = useState('لم يتم التحديد');
    const [FinalDate, SetFinalDate] = useState('لم يتم التحديد');
    const [coworker, SetCoworker] = useState('لم يتم التحديد');
    const [notes, setNotes] = useState('لا يوجد');

    useEffect(() => {
        fetch(`http://localhost:9000/employees`)
        .then((res)=> (res.json()))
        .then((data)=> (setEmployees(data)))
    }, []);

    return(
        <div>
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
                        onChange={(e)=> SetCoworker(e.target.value)}
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

            <div className="d-flex justify-content-center mt-3">
                <Btn name='إرسال الطلب' link='/' class='btn-primary w-50' />
            </div>
        </div>
    )
}

export default NormalLeave;