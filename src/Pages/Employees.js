import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BtnLink from "../components/BtnLink";
import { faUpDown } from "@fortawesome/free-solid-svg-icons";

function Employees(){
    
    const employees = [
        { id: 1, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'عبدالرحمن', secondName: 'احمد', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 2, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'إبراهبم', secondName: 'محمد', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'تكنولوجيا المعلومات', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 3, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'منى', secondName: 'محمود', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 4, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'عمرو', secondName: 'مصطفى', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'تكنولوجيا المعلومات', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 1, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'عبدالرحمن', secondName: 'احمد', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 2, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'إبراهبم', secondName: 'محمد', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'تكنولوجيا المعلومات', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 3, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'منى', secondName: 'محمود', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 4, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'عمرو', secondName: 'مصطفى', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'تكنولوجيا المعلومات', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 1, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'عبدالرحمن', secondName: 'احمد', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 2, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'إبراهبم', secondName: 'محمد', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'تكنولوجيا المعلومات', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 3, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'منى', secondName: 'محمود', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا' },
        { id: 4, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'عمرو', secondName: 'مصطفى', thirdName: 'عبداله', fourthName:'محمود', jobTitle: 'موظف', department: 'تكنولوجيا المعلومات', dateAppointment: '19/9/2024', address: 'قنا' },
    ];

    return(
        <div className="p-3">
            <div className="d-flex mb-4 justify-content-between">
                <h2 className="m-0">الموظفين</h2>
                <BtnLink name='إضافة موظف' link='/add-employee' class="btn btn-primary m-0"/>
            </div>
            <div className="row">
                <div>
                    <table className="m-0 table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>الاسم</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>القسم</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>تاريخ التعيين</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>رقم الهاتف</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee ,index)=>(
                                <tr key={index}>
                                    <th style={{height:'50px'}}>{employee.firstName} {employee.secondName}</th>
                                    <th style={{height:'50px'}}>{employee.department}</th>
                                    <th style={{height:'50px'}}>{employee.dateAppointment}</th>
                                    <th style={{height:'50px'}}>{employee.phoneNumber}</th>
                                </tr>  
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Employees;