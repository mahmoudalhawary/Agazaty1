import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from 'react';
import BtnLink from "../components/BtnLink";
import { faCalendarDays, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Employees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = () => {
        fetch('http://localhost:9000/employees')
            .then((res) => res.json())
            .then((data) => setEmployees(data));
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "هل أنت متأكد؟",
            text: "لن تتمكن من استعادة بيانات هذا الموظف!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "نعم، احذفه!",
            cancelButtonText: "إلغاء",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:9000/employees/${id}`, {
                    method: "DELETE",
                }).then(() => {
                    setEmployees(employees.filter((employee) => employee.id !== id));

                    Swal.fire({
                        title: "تم الحذف!",
                        text: "تم حذف الموظف بنجاح.",
                        icon: "success",
                        confirmButtonText: "موافق",
                    });
                }).catch((error) => {
                    Swal.fire({
                        title: "خطأ!",
                        text: "حدث خطأ أثناء حذف الموظف.",
                        icon: "error",
                        confirmButtonText: "حسناً",
                    });
                });
            }
        });
    };

    return (
        <div>
            <div className="d-flex mb-4 justify-content-between">
                <div className="zzz d-inline-block p-3 ps-5">
                    <h2 className="m-0">الموظفين</h2>
                </div>
                <div className="p-3">
                    <BtnLink name='إضافة موظف' link='/add-employee' class="btn btn-primary m-0"/>
                </div>
            </div>
            <div className="row">
                <div>
                    <table className="m-0 table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" style={{ backgroundColor: '#F5F9FF' }}>الاسم</th>
                                <th scope="col" style={{ backgroundColor: '#F5F9FF' }}>القسم</th>
                                <th scope="col" style={{ backgroundColor: '#F5F9FF' }}>تاريخ التعيين</th>
                                <th scope="col" style={{ backgroundColor: '#F5F9FF' }}>رقم الهاتف</th>
                                <th scope="col" style={{ backgroundColor: '#F5F9FF' }}>المزيد</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td style={{ height: '50px' }}>{employee.firstName} {employee.secondName}</td>
                                    <td style={{ height: '50px' }}>{employee.department}</td>
                                    <td style={{ height: '50px' }}>{employee.dateAppointment}</td>
                                    <td style={{ height: '50px' }}>{employee.phoneNumber}</td>
                                    <td style={{ height: '50px' }}>
                                        <Link to={`/employee/${employee.id}/edit`}>
                                            <FontAwesomeIcon icon={faPenToSquare} color="blue" className="fontt" />
                                        </Link>
                                        <FontAwesomeIcon 
                                            icon={faTrash} 
                                            color="red" 
                                            className="fontt" 
                                            style={{ cursor: "pointer", marginLeft: "10px" }} 
                                            onClick={() => handleDelete(employee.id)} 
                                        />
                                        <Link to={`/employees`}>
                                            <FontAwesomeIcon icon={faCalendarDays} color="green" className="fontt" />
                                        </Link>
                                    </td>
                                </tr>  
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Employees;
