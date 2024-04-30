import logo from './logo.svg';
import './App.css';
import Usememo from './Usememo';
import Callback from './Callback';
import { Controllcomponent } from './Controllcomponent';
import { UnControllcomponent } from './UnControllcomponent';
import Form from './component/Form';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { Routes, Route } from 'react-router-dom';
import Userlist from './component/Userlist';
import Edit from './component/Edit';
import ImageUpload from './component/Image';
import SignupForm from './component/SignupForm';
import LoginForm from './component/LoginForm.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './component/Navbar.js';
import { About, Home } from './container/Home.js';
import Forms from './component/Forms.js';
import User from './component/User.js';
import Editdata from './component/Editdata.js';




function App() {
  return (
    <Provider store={store}>

      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Navbar />
        {/* <Home/> */}
        <Routes>
          {/* <Usememo /> */}
          {/* <Callback /> */}
          {/* <Controllcomponent /> */}
          {/* <UnControllcomponent /> */}
          {/* <Route path="/" element={<Form />} /> */}
          {/* <Route path="/Userlist" element={<Userlist />} />
          <Route path="/Edit/:id" element={<Edit />} />
          <Route path="/Image" element={<ImageUpload />} />
          <Route path="/Image" element={<ImageUpload />} />
          <Route path="/Signup" element={<SignupForm />} />
          <Route path="/LoginForm" element={<LoginForm />} /> */}
          <Route path="/Forms" element={<Forms />} />
          <Route path="/User" element={<User />} />
          <Route path="/Editdata/:id" element={<Editdata />} />

        </Routes>
      </>
    </Provider>
  );
}

export default App;
