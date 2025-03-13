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
import React from 'react';
import LeaveRecord from './Pages/LeaveRecord';
import Leaves from './Pages/Leaves';
import EditEmployee from './Pages/EditEmployee';
import EditDepartment from './Pages/EditDepartment';
import Leavee from './components/leavee';
import Inquiries from './Pages/Inquiries';
import Des from './Pages/Des';
import Test from './Pages/Test';

function App() {
  const userRole = 'hr';

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
                <React.Fragment style={{position:'fixed'}}>
                  <NavBar userRole={userRole} />
                  <Outlet />
                </React.Fragment>
              </div>
            </div>
          }
        >
          <Route index element={<Home userRole={userRole} />} />
          {/* <Route path="leave-request" element={<LeaveRequest />} /> */}
          <Route path="leave-request" element={<Leavee />} />
          <Route path="messages" element={<Messages />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="sitting" element={<Sitting />} />
          <Route path="agazaty" element={<Agazaty />} />
          <Route path="departments" element={<Departments />} />
          <Route path="add-department" element={<AddDepartment />} />
          <Route path="department/:id/edit" element={<EditDepartment />} />
          <Route path="employees" element={<Employees />} />
          <Route path="add-Employee" element={<AddEmployee />} />
          <Route path="employee/:id/edit" element={<EditEmployee />} />
          <Route path="leave-record" element={<LeaveRecord />} />
          <Route path="des-requests" element={<Des />} />
          <Route path="leave-requests/:id" element={<LeaveRequests />} />
          <Route path="add-leave" element={<AddLeave />} />
          <Route path="leaves/:id" element={<Leaves />} />
          <Route path="inquiries" element={<Inquiries />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
