import { useState } from "react";
import EmergencyLeave from "./EmergencyLeave";
import NormalLeave from "./NormalLeave";
import SickLeave from "./SickLeave";
import BtnLink from "./BtnLink";

function Leave(props) {
    const leave = props
    const [typeLeave, setTypeLeave] = useState("");

    const employees = [
        { id: 1, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'يحيى', secondName: 'سعد', thirdName: 'عبدالموجود', fourthName:'جادالرب', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 2, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'عبدالرحمن', secondName: 'حمدي', thirdName: 'توفيق', fourthName:'شعبان', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 3, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'عمر', secondName: 'حمدي', thirdName: 'سيد', fourthName:'عبدالقادر', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 4, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'عبدالرحمن', secondName: 'احمد', thirdName: 'علي', fourthName:'عبدالقادر', jobTitle: 'موظف', department: 'تكنولوجيا المعلومات', dateAppointment: '19/9/2024', address: 'قنا' },
    ];

    const leaveTypes = [
        { value: "", label: "اختر نوع الاجازة" },
        { value: "اعتيادية", label: "اعتيادية" },
        { value: "عارضة", label: "عارضة" },
        { value: "مرضية", label: "مرضية" },
    ];

    const number = 55;

    return (
        <div>
            <div className="d-flex mb-4 justify-content-between">
                <h2 className=" m-0">{leave.titleName}</h2>
                {typeLeave !== "" && <BtnLink name={`رصيد الاجازة ال${typeLeave}: ${number}`} link='/agazaty' class='btn btn-primary m-0' />}
            </div>

            { leave.type === 'manager,hr' ? 
                <div className="row gap3 mb-4">
                    <div className="col-12">
                        <label htmlFor="selectTypeLeave" className="form-label">
                            اختر الموظف
                        </label>
                        <select
                            className="form-select"
                            onChange={(e) => setTypeLeave(e.target.value)}
                            id="selectTypeLeave"
                            aria-label="Default select example"
                        >
                            <option value="اختر الموظف">اختر الموظف</option>
                            {employees.map((employee, index)=> (
                                <option key={index} value={`${employee.firstName} ${employee.secondName}`}>
                                    {employee.firstName} {employee.secondName} ({employee.department})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                : null
            }

            <div className="row gap3">
                <div className="col-12">
                    <label htmlFor="selectTypeLeave" className="form-label">
                        اختر نوع الاجازة
                    </label>
                    <select
                        className="form-select"
                        onChange={(e) => setTypeLeave(e.target.value)}
                        id="selectTypeLeave"
                        aria-label="Default select example"
                    >
                        {leaveTypes.map((leave, index)=> (
                            <option key={index} value={leave.value}>
                                {leave.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            
            <div>
                {typeLeave === "اعتيادية" ? (
                    <NormalLeave />
                ) : typeLeave === "عارضة" ? (
                    <EmergencyLeave />
                ) : typeLeave === "مرضية" ? (
                    <SickLeave />
                ) : null}
            </div>
        </div>
    );
}

export default Leave;
