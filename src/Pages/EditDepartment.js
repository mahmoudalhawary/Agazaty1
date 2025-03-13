import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";

function EditDepartment() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [originalDepartment, setOriginalDepartment] = useState({});
    const [updatedFields, setUpdatedFields] = useState({});

    useEffect(() => {
        fetch(`http://localhost:9000/departments/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setOriginalDepartment(data);
            })
            .catch((error) => console.error("حدث خطأ أثناء جلب البيانات:", error));
    }, [id]);

    const handleChange = (e) => {
        setUpdatedFields({ ...updatedFields, [e.target.name]: e.target.value });
    };

    const updateDepartment = async (e) => {
        e.preventDefault();

        if (Object.keys(updatedFields).length === 0) {
            Swal.fire({
                title: "لم تقم بتعديل أي بيانات!",
                icon: "info",
                confirmButtonText: "حسنًا",
                confirmButtonColor: "#0d6efd",
            });
            return;
        }

        Swal.fire({
            title: `<span style='color:#0d6efd;'>هل أنت متأكد من تحديث بيانات قسم ${originalDepartment.departmentName} ؟</span>`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "نعم، تحديث",
            cancelButtonText: "إلغاء",
            confirmButtonColor: "#0d6efd",
            cancelButtonColor: "#d33",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:9000/departments/${id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(updatedFields),
                    });

                    if (response.ok) {
                        Swal.fire({
                            title: `<span style='color:#0d6efd;'>تم تحديث بيانات القسم بنجاح.</span>`,
                            icon: "success",
                            confirmButtonText: "مشاهدة الأقسام",
                            confirmButtonColor: "#0d6efd",
                        }).then(() => {
                            navigate("/departments");
                        });
                    } else {
                        Swal.fire({
                            title: "حدث خطأ!",
                            text: "لم يتم تحديث البيانات، حاول مرة أخرى.",
                            icon: "error",
                        });
                    }
                } catch (error) {
                    console.error("خطأ أثناء تحديث البيانات:", error);
                    Swal.fire({
                        title: "خطأ في الاتصال!",
                        text: "تأكد من تشغيل السيرفر وحاول مجدداً.",
                        icon: "error",
                    });
                }
            }
        });
    };

    return (
        <form className="p-3">
            <div className="row">
                <div className="d-flex mb-4 justify-content-between">
                    <h2 className="m-0">تعديل بيانات القسم</h2>
                </div>

                <div className="col-sm-12 col-md-6 mt-3">
                    <label htmlFor="departmentName" className="form-label">
                        اسم القسم
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="departmentName"
                        name="departmentName"
                        defaultValue={originalDepartment.departmentName || ""}
                        onChange={handleChange}
                        aria-label="default input example"
                    />
                </div>

                <div className="col-sm-12 col-md-6 mt-3">
                    <label htmlFor="departmentCode" className="form-label">كود القسم</label>
                    <input
                        className="form-control"
                        type="text"
                        id="departmentCode"
                        name="departmentCode"
                        defaultValue={originalDepartment.departmentCode || ""}
                        onChange={handleChange}
                        aria-label="default input example"
                    />
                </div>                                              
            </div>

            <div className="d-flex justify-content-center mt-3">
                <button onClick={updateDepartment} className="btn btn-primary w-50">تحديث</button>
            </div>
        </form>
    );
}

export default EditDepartment;
