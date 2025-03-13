import { useEffect } from "react";

function Test(){

    const userData = {
        fullName: "الدين علي أحمد محجوب",
        roles: ["مدير الموارد البشرية"],
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWYiOiIzMDMwMTA5MjcwM"
    };
    
    const roleName = userData.roles[0];
    
    const url = `http://agazatyapi.runasp.net/api/Account/CreateUser/${encodeURIComponent(roleName)}`;
    
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${userData.token}`
        },
        body: JSON.stringify({
            username: "testUser",
            email: "test@example.com",
            password: "Test@123"
        })
    })
    .then(response => response.json())
    .then(data => console.log("Success:", data))
    .catch(error => console.error("Error:", error));
    
    return(
        <div>
            Test
        </div>
    )
}

export default Test