// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import NavBar from './components/NavBar';
// import SideBar from './components/SideBar';
// import Home from './Pages/Home';
// import About from './Pages/About';

// function App() {
//   return (
//     <div className='App' dir='rtl'>
//       <div>
//         {/* <NavBar/> */}
//       <div className='row'>
//         <div className='SideBar col-2'>
//           <SideBar/>
//         </div>
//         <div className='col-10'>
//           <Routes>
//             <Route path='/' element={<Home/>} />
//             <Route path='/about' element={<About/>} />
//           </Routes>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default App;








// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Hhome from './Pages/Hhome';
// import About from './Pages/About';
// import Login from './Pages/Login';
// import LoginCom from './components/LoginCom';
// import ForgetPassword from './components/ForgetPassword';
// import OTPCode from './components/OTPCode';
// import ResetPassword from './components/ResetPassword';
// import LeaveRequest from './Pages/LeaveRequest';
// import SideBar from './components/SideBar';
// import Home from './Pages/Home';

// function App() {
//   return (
//     <div className="App" dir="rtl">
//       <Routes>
//         <Route path="/login" element={<Login/>}>
//           <Route index element={<LoginCom />} />
//           <Route path="forgetpassword" element={<ForgetPassword />} />
//           <Route path="otpcode" element={<OTPCode />} />
//           <Route path="resetpassword" element={<ResetPassword />} />
//         </Route>

//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;













// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import About from './Pages/About';
// import Login from './Pages/Login';
// import LoginCom from './components/LoginCom';
// import ForgetPassword from './components/ForgetPassword';
// import OTPCode from './components/OTPCode';
// import ResetPassword from './components/ResetPassword';
// import LeaveRequest from './Pages/LeaveRequest';
// import SideBar from './components/SideBar';
// import Home from './Pages/Home';
// import NavBar from './components/NavBar';
// import Messages from './Pages/Messages';

// function App() {
//   return (
//     <div className="App" dir="rtl">
//       <div>
//         <Routes>
//           <Route path="/login" element={<Login/>}>
//             <Route index element={<LoginCom/>} />
//             <Route path="forgetpassword" element={<ForgetPassword/>} />
//             <Route path="otpcode" element={<OTPCode/>} />
//             <Route path="resetpassword" element={<ResetPassword/>} />
//           </Route>
//         </Routes>
//       </div>

//       <div className="row d-flex">
//         <div className="col-2 p-0">
//           <SideBar/>
//         </div>
//         <div className="col p-0">
//           <NavBar/>
//           <Routes>
//             <Route path="/" element={<Home/>} />
//             <Route path="/Leaverequest" element={<LeaveRequest/>} />
//             <Route path="/messages" element={<Messages/>} />
//             <Route path="/about" element={<About/>} />
//           </Routes>
//         </div>    
//       </div>     
//     </div>
//   );
// }

// export default App;



// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import About from './Pages/About';
// import Login from './Pages/Login'; // صفحة تسجيل الدخول الأساسية
// import LoginCom from './components/LoginCom'; // المكون الأساسي داخل تسجيل الدخول
// import ForgetPassword from './components/ForgetPassword';
// import OTPCode from './components/OTPCode';
// import ResetPassword from './components/ResetPassword';
// import LeaveRequest from './Pages/LeaveRequest';
// import SideBar from './components/SideBar';
// import Home from './Pages/Home';
// import NavBar from './components/NavBar';
// import Messages from './Pages/Messages';

// function App() {
//   return (
//     <div className="App" dir="rtl">
//       <Routes>
//         <Route path="/login" element={<Login />}>
//           <Route index element={<LoginCom />} />
//           <Route path="forgetpassword" element={<ForgetPassword />} />
//           <Route path="otpcode" element={<OTPCode />} />
//           <Route path="resetpassword" element={<ResetPassword />} />
//         </Route>

//         <Route
//           path="/"
//           element={
//             <div className="row d-flex">
//               <div className="col-2 p-0">
//                 <SideBar/>
//               </div>
//               <div className="col p-0">
//                 <NavBar/>
//                 <Routes>
//                   <Route path="/" element={<Home/>} />
//                   <Route path="/leaverequest" element={<LeaveRequest/>} />
//                   <Route path="/messages" element={<Messages/>} />
//                   <Route path="/about" element={<About/>} />
//                 </Routes>
//               </div>    
//           </div>   
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;







import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import LoginCom from './components/LoginCom';
import ForgetPassword from './components/ForgetPassword';
import OTPCode from './components/OTPCode';
import ResetPassword from './components/ResetPassword';
import About from './Pages/About';
import Messages from './Pages/Messages';
import LeaveRequest from './Pages/LeaveRequest';
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

function App() {
  const userRole = 'موظف';

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
              <div className="col-2 p-0" style={{height: "100%", overflowY: "auto"}}>
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
          <Route path="leave-request" element={<LeaveRequest />} />
          <Route path="messages" element={<Messages />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="sitting" element={<Sitting />} />
          <Route path="agazaty" element={<Agazaty />} />
          <Route path="departments" element={<Departments />} />
          <Route path="add-department" element={<AddDepartment />} />
          <Route path="employees" element={<Employees />} />
          <Route path="add-Employee" element={<AddEmployee />} />
          <Route path="leave-record" element={<LeaveRecord />} />
          <Route path="leave-requests" element={<LeaveRequests />} />
          <Route path="add-leave" element={<AddLeave />} />
          <Route path="leaves/:id" element={<Leaves />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
