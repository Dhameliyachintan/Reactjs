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
import ProductDetails from './component/ProductDetails.js';
import Productdetailsdata from './component/Prodectdetailsdata.js';
import BackgroundColor from '../src/BackgroundColor';
import Color from './component/Color.js';
import Textform from './component/Textform.js';
import Abouts from './component/Abouts.js';
import { useState } from 'react';
import Alert from './component/Alert.js';




function App() {
  const [darkmode, setdarkmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-success")
  }

  const togglemode = (cls) => {
    console.log(cls);
    removeBodyClasses();
    document.body.classList.add('bg-' + cls)
    if(darkmode === "light") {
      setdarkmode("dark")
      document.body.style.backgroundColor = "gray"
      document.title = "TextUtils - DarkMode"
      showAlert("Dark", "success")
    } else {
      setdarkmode("light")
      document.body.style.backgroundColor = "white"
      document.title = "TextUtils - Light mode"
      showAlert("Light", "success")
    }
  }

 
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
        <Navbar title = "TextUtils" mode = {darkmode} togglemode = {togglemode}/>
        <Alert alert={alert}/>
        <Textform heading="Enter the text" mode = {darkmode} showAlert={showAlert}/>
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
          <Route path="/Image" element={<ImageUpload />} /> */}
          {/* <Route path="/Signup" element={<SignupForm />} />
          <Route path="/LoginForm" element={<LoginForm />} /> */}
          {/* <Route path="/Forms" element={<Forms />} />
          <Route path="/User" element={<User />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/Editdata/:id" element={<Editdata />} />
          <Route path="/Productdetailsdata" element={<Productdetailsdata />} /> */}
          {/* <Route path="/Color" element={<Color />} /> */}
          {/* <Route path="/Abouts" element={<Abouts mode = {darkmode}/>} /> */}
          {/* <Route path="/Textform" element={} /> */}


        </Routes>

      </>
      <BackgroundColor />
    </Provider>
  );
}

export default App;
