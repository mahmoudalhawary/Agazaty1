import React from "react";
import Btn from "../components/Btn";

function Message() {
    const messages = [
        { title: "طلب جديد ", description: "طلب إجازة جديد من الموظف عبدالرحمن حمدي في انتظار موافقتك", date: "23/2/2025" },
        { title: "طلب جديد ", description: "طلب إجازة جديد من الموظف عمر حمدي في انتظار موافقتك", date: "9/3/2025" },
        { title: "طلب جديد ", description: "طلب إجازة جديد من الموظف عمر حمدي في فترة من 15/3 إلى 18/3 انتظار موافقتك", date: "13/3/2025" },
        { title: "طلب جديد ", description: "طلب إجازة جديد من الموظف عبدالرحمن حمدي في انتظار موافقتك", date: "25/11/2024" },
        { title: "طلب جديد ", description: "طلب إجازة جديد من الموظف عمر حمدي في انتظار موافقتك", date: "18/9/2024" },
        { title: "طلب جديد ", description: "طلب إجازة جديد من الموظف عبدالرحمن حمدي في انتظار موافقتك", date: "17/9/2024" },
        { title: "طلب جديد ", description: "طلب إجازة جديد من الموظف عمر حمدي في انتظار موافقتك", date: "16/9/2024" },
    ];

    // تحويل التاريخ إلى صيغة مناسبة للمقارنة
    const parseDate = (dateString) => {
        const [day, month, year] = dateString.split("/").map(Number);
        return new Date(year, month - 1, day);
    };

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const todayMessages = [];
    const yesterdayMessages = [];
    const oldMessages = [];

    messages.forEach((message) => {
        const messageDate = parseDate(message.date);

        if (
            messageDate.getDate() === today.getDate() &&
            messageDate.getMonth() === today.getMonth() &&
            messageDate.getFullYear() === today.getFullYear()
        ) {
            todayMessages.push(message);
        } else if (
            messageDate.getDate() === yesterday.getDate() &&
            messageDate.getMonth() === yesterday.getMonth() &&
            messageDate.getFullYear() === yesterday.getFullYear()
        ) {
            yesterdayMessages.push(message);
        } else {
            oldMessages.push(message);
        }
    });

    return (
        <div className="row">
            <div className="p-0">
                <div className="zzz d-inline-block p-3 ps-5">
                    <h2 className="m-0">الرسائل</h2>
                </div>
            </div>
            <div>
                {todayMessages.length > 0 && (
                    <div className="mt-3">
                        <h4>اليوم</h4>
                        {todayMessages.map((message, index) => (
                            <div className="box mt-3 col-sm-12 col-md-10 col-lg-8" key={`today-${index}`}>
                                <h5>{message.title}</h5>
                                <p>{message.description}</p>
                                <Btn name='موافقة' class='btn-primary m-2 w-25' />
                                <Btn name='رفض' class='btn-danger' />
                            </div>
                        ))}
                    </div>
                )}

                {yesterdayMessages.length > 0 && (
                    <div className="mt-3">
                        <h4>أمس</h4>
                        {yesterdayMessages.map((message, index) => (
                            <div className="box mt-3 col-sm-12 col-md-10 col-lg-8" key={`yesterday-${index}`}>
                                <h5>{message.title}</h5>
                                <p>{message.description}</p>
                                <Btn name='موافقة' class='btn-primary m-2 w-25' />
                                <Btn name='رفض' class='btn-danger' />
                            </div>
                        ))}
                    </div>
                )}

                {oldMessages.length > 0 && (
                    <div className="mt-3">
                        <h4>قديم</h4>
                        {oldMessages.map((message, index) => (
                            <div className="box mt-3 col-sm-12 col-md-10 col-lg-8" key={`old-${index}`}>
                                <h5>{message.title}</h5>
                                <p>{message.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Message;
