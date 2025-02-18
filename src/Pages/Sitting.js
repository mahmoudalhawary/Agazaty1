import SittingCom from "../components/SittingCom";

function Sitting(){

    return(
        <div className="p-3">
            <div>
                <h2 className="mb-4">اعدادات النظام</h2>
            </div>
            <div>
                <SittingCom/>
            </div>
        </div>
    )
}

export default Sitting;