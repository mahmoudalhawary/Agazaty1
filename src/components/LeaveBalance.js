import { useEffect, useState } from "react";
import '../CSS/LeaveBalance.css';

function LeaveBalance(){

    const [leaveBalances, setLeaveBalances] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:9000/employees/1`)
        .then((res)=> (res.json()))
        .then((data)=> (setLeaveBalances(data.leaves)))
    }, []);

    return(
        <div>
            <div className="mt-4">
                <h4>اجازاتي</h4>
            </div>
            <div className="d-flex gap-3 row mt-3">
                {Object.values(leaveBalances).map((leave, index) => (
                    <div className="box LeaveBalance col-sm-12 col-md-5 col-lg rounded-3 p-3" key={index}>
                        <div>
                            {leave.totalBalance !=='' ? <h3>{leave.takenBalance}/{leave.totalBalance}</h3> :
                                <h3>{leave.takenBalance}</h3>
                            }
                        </div>
                        <div>
                            <h5>{leave.type}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LeaveBalance;