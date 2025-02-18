import Leave from "../components/Leave";

function AddLeave(){
    return(
        <div className="p-3">
            <Leave titleName= 'إضافة اجازة لموظف' type='manager,hr' />
        </div>
    )
}

export default AddLeave;