import React from "react";
import BtnLink from "../components/BtnLink";
import Btn from "../components/Btn";
import '../CSS/LeaveRequests.css';

function LeaveRequests(){

    const leave = { id: 1334, type: 'اعتيادية', date: '19/9/2024', status: 'معتمدة', notes: 'عايز أنام', employee: { id: 1, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'يحيى', secondName: 'سعد', thirdName: 'عبدالموجود', fourthName:'جادالرب', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' } };

    return(
        <div className="p-3">
            <div className="d-flex mb-4 justify-content-between">
                <h2 className="m-0">طلبات الاجازات</h2>
                <div>
                    <BtnLink name='إضافة اجازة' link='/add-leave' class="btn btn-primary m-0 ms-2 mb-2"/>
                    <BtnLink name='سجل الاجازات' link='/leave-record' class="btn btn-primary m-0 ms-2 mb-2"/>
                    <BtnLink name='السجل الوظيفي' link='/history' class="btn btn-primary m-0 ms-2 mb-2"/>
                </div>
            </div>
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
                    <table className="m-0 table table-striped box2">
                        <thead>
                            <tr>
                                <th scope="col" className="pb-3" style={{backgroundColor:'#F5F9FF'}}>تفاصيل الطلب</th>
                                <th scope="col"  className="text-start" style={{backgroundColor:'#F5F9FF'}}>
                                    <Btn name='معلقة' class="btn-warning text-start"  />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">اسم الموظف</th>
                                <th scope="col" className="text-start">{leave.employee.firstName} {leave.employee.secondName} {leave.employee.thirdName} {leave.employee.fourthName}</th>
                            </tr>
                            <tr>
                                <th scope="col">نوع الاجازة</th>
                                <th scope="col" className="text-start">{leave.type}</th>
                            </tr>
                            <tr>
                                <th scope="col">رقم الهاتف</th>
                                <th scope="col" className="text-start">{leave.employee.phoneNumber}</th>
                            </tr>
                            <tr>
                                <th scope="col">القسم</th>
                                <th scope="col" className="text-start">{leave.employee.department}</th>
                            </tr>
                            <tr>
                                <th scope="col">الملحوظات</th>
                                <th scope="col" className="text-start">{leave.notes}</th>
                            </tr>
                            <tr>
                                <th scope="col">المرجع</th>
                                <th scope="col" className="text-start">#{leave.employee.id}</th>
                            </tr>
                            <tr>
                                <th colSpan={2} className="text-center" style={{backgroundColor:'white'}}>
                                    <Btn name='موافقة' class='btn-success w-25 ms-2' />
                                    <Btn name='رفض' class='btn-danger w-25' />
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center mt-4">
                        <BtnLink name='السابق' class='btn-outline-primary w-50 ms-2' />
                        <BtnLink name='التالي' class='btn-outline-primary w-50 ms-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaveRequests;