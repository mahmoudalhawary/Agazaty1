import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import LoginCom from './components/LoginCom';
import ForgetPassword from './components/ForgetPassword';
import OTPCode from './components/OTPCode';
import ResetPassword from './components/ResetPassword';
import About from './Pages/About';
import Messages from './Pages/Messages';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import EditProfile from './Pages/EditProfile';
import Sitting from './Pages/Sitting';
import Agazaty from './Pages/Agazaty';
import AddDepartment from './Pages/AddDepartment';
import Departments from './Pages/Departments';
import Employees from './Pages/Employees';
import AddEmployee from './Pages/AddEmployee';
import LeaveRequests from './Pages/LeaveRequests';
import AddLeave from './Pages/AddLeave';

import React, { useEffect } from 'react';

import LeaveRecord from './Pages/LeaveRecord';
import Leaves from './Pages/Leaves';
import EditEmployee from './Pages/EditEmployee';
import EditDepartment from './Pages/EditDepartment';
import Leavee from './components/leavee';
import Inquiries from './Pages/Inquiries';
import Des from './Pages/Des';
import Test from './Pages/Test';
import LeaveRequestsForUser from './Pages/LeaveRequestsForUser';
import NormalLeave from './components/NormalLeave';
import SickLeave from './components/SickLeave';
import CasualLeave from './components/CasualLeave';
import CasualLeaveRequest from './components/CasualLeaveRequest';
import NormalLeaveRequest from './Pages/NormalLeaveRequest';
import SickLeaveRequest from './components/SickLeaveRequest';
import EditPassword from './components/EditPassword';
import Archives from './Pages/Archives';

function App() {
  const userRole = 'hr';
  const userID = "ec12a929-46ea-4c7e-8b69-bef0f9886386"; // يحيى
  // const userID = "5daf7dbb-369e-44a8-9565-02e93d75b3a6"; // سارة
  // const userID = "122e0eb2-ad19-411b-a3dd-1e96df18cc63"; // أمال
  localStorage.setItem("userID", userID);

  return (
    <div className="App" dir="rtl">
      <Routes>
        <Route path="/login" element={<Login />}>
          <Route index element={<LoginCom />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="otpcode" element={<OTPCode />} />
          <Route path="resetpassword" element={<ResetPassword />} />
        </Route>

        <Route
          path="/"
          element={
            <div className="row d-flex" style={{ height: "100vh" }}>
              <div className="col-2 sidebar p-0" style={{height: "100%", overflowY: "auto"}}>
                <SideBar userRole={userRole} />
              </div>        

              <div className="col p-0" style={{height: "100%", overflowY: "auto"}}>
                <NavBar userRole={userRole} />
                <Outlet />
              </div>
            </div>
          }
        >
          <Route index element={<Home userRole={userRole} />} />
          {/* <Route path="leave-request" element={<LeaveRequest />} /> */}
          {/* <Route path="leave-request" element={<Leavee />} /> */}
          <Route path="normal-leave" element={<NormalLeave />} />
          <Route path="casual-leave" element={<CasualLeave />} />
          <Route path="sick-leave" element={<SickLeave />} />
          <Route path="messages" element={<Messages />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="agazaty" element={<Agazaty />} />
          <Route path="sitting" element={<Sitting />} />
          <Route path="normal-leave-request/:id" element={<NormalLeaveRequest />} />
          <Route path="casual-leave-request/:id" element={<CasualLeaveRequest />} />
          <Route path="sick-leave-request/:id" element={<SickLeaveRequest />} />
          <Route path="inquiries" element={<Inquiries />} />
          <Route path="edit-password" element={<EditPassword />} />


          <Route path="departments" element={<Departments />} />
          <Route path="add-department" element={<AddDepartment />} />
          <Route path="department/:id/edit" element={<EditDepartment />} />
          <Route path="employees" element={<Employees />} />
          <Route path="archives" element={<Archives />} />
          <Route path="add-Employee" element={<AddEmployee />} />
          




          <Route path="employee/:id/edit" element={<EditEmployee />} />
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="leave-record" element={<LeaveRecord />} />
          <Route path="des-requests" element={<Des />} />
          <Route path="leave-requests/:id" element={<LeaveRequests />} />
          <Route path="add-leave" element={<AddLeave />} />
          <Route path="leaves/:id" element={<Leaves />} />

          <Route path="test" element={<Test />} />


          <Route path="leave-request/:id" element={<LeaveRequestsForUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

