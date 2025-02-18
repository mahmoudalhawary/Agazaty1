import ProfileCom from "../components/ProfileCom";
import ProfileDescription from "../components/ProfileDescription";
import BtnLink from "../components/BtnLink";

function Profile(){
    const employee = [
        { id: 1, nationalID: '30304218800000', phoneNumber: '01127471188', firstName: 'يحيى', secondName: 'سعد', jobTitle: 'موظف', department: 'علوم الحاسب', dateAppointment: '19/9/2024', address: 'قنا', leaves:[{ normal: { type: 'اعتيادي', totalBalance: 42, takenBalance: 31 }, casual: { type: 'عارضة', totalBalance: 7, takenBalance: 2 }, sick: { type: 'مرضي', totalBalance: 35, takenBalance: 3 }}]},
    ];

    return(
        <div className="p-3">
            <div className="d-flex mb-4 justify-content-between">
                <h2 className="m-0">الملف الشخصي</h2>
                <BtnLink name='تعديل المعلومات الشخصية' link='/editprofile' class='btn-primary' />
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4 col-xxl-3 mt-4">
                    <ProfileCom employee={employee} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-7 col-xl-8 col-xxl-9 mt-4">
                    <ProfileDescription employee={employee}/>
                </div>
            </div>
        </div>
    )
}

export default Profile;