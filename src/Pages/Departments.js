import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BtnLink from "../components/BtnLink";
import { faUpDown } from "@fortawesome/free-solid-svg-icons";

function Departments(){
    const departments = [
        {departmentName: 'علوم الحاسب', departmentCode: '26645', dateCreation : '19/9/2024', departmentManager: 'احمد محمد' },
        {departmentName: 'تكلونوجيا المعلومات', departmentCode: '26645', dateCreation : '19/9/2024', departmentManager: 'احمد محمد' },
        {departmentName: 'الذكاء الأصطناعي', departmentCode: '26645', dateCreation : '19/9/2024', departmentManager: 'احمد محمد' },
        {departmentName: 'نظم المعلومات', departmentCode: '26645', dateCreation : '19/9/2024', departmentManager: 'احمد محمد' },
    ]
    return(
        <div className="p-3">
            <div className="d-flex mb-4 justify-content-between">
                <h2 className="m-0">الأقسام</h2>
                <BtnLink name='إضافة قسم' link='/add-department' class="btn btn-primary m-0 me-2"/>
            </div>
            <div className="row">
                <div>
                    <table className="m-0 table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>اسم القسم</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>كود القسم</th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>
                                    تاريخ الإنشاء
                                    {/* <FontAwesomeIcon icon={faUpDown} className="me-2" /> */}
                                </th>
                                <th scope="col" style={{backgroundColor:'#F5F9FF'}}>مدير القسم</th>
                            </tr>
                        </thead>
                        <tbody>
                            {departments.map((department ,index)=>(
                                <tr key={index}>
                                    <th style={{height:'50px'}}>{department.departmentName}</th>
                                    <th style={{height:'50px'}}>{department.departmentCode}</th>
                                    <th style={{height:'50px'}}>{department.dateCreation}</th>
                                    <th style={{height:'50px'}}>{department.departmentManager}</th>
                                </tr>  
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Departments;