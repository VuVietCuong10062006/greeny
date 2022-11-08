import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Context from "../../context/Context";
import { login } from "../../store/actions";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const { users, dispatchAuth, user } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [messageEmail, setMessageEmail] = useState("")
    const [messagePassword, setMessagePassword] = useState("")
    


    const handleLogin = () => {
        // validate
        let isValid = checkValidate();
        if (!isValid) return;

        setMessageEmail("")
        setMessagePassword("")

        // search user
        const checkUser = [...users,...user].find(
            (user) => user.email === email && user.password === password
        );

        if (!checkUser) {
            toast.error('Email hoặc password không chính xác', {
                position: toast.POSITION.TOP_CENTER
              });
            return;
        }
        toast.success('Email hoặc password không chính xác', {
            position: toast.POSITION.TOP_CENTER
          });
        // Lưu lại thông tin user đăng nhập thành công
        dispatchAuth(login(checkUser));
        navigate("/");
    };

    const checkValidate = () => {
        let isCheck = true;
        if (!email) {

            setMessageEmail("email không được để chống")
            isCheck = false;
        } else if(!validateEmail(email)) {
   
            setMessageEmail("email không đúng định dạng")
            isCheck = false;
        }

        if (!password) {
         
            setMessagePassword("email không được để chống")
            isCheck = false;
        }
        return isCheck;
    };

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    return (
        <>
            <ToastContainer />
            <div className="login">
                <div className="register-form">
                    <h2>Đăng Nhập</h2>
                    {/* <div className="input-row">
                        <input type="text" placeholder="Họ tên" id="username" />
                        <small>Error message</small>
                    </div> */}
                    <div className="input-row">
                        <input
                            type="text"
                            placeholder="Email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {messageEmail && <small>{messageEmail}</small>}
                    </div>
                    <div className="input-row">
                        <input
                            type="Email"
                            placeholder="Mật khẩu"
                            id="passwork"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {messagePassword && <small>{messagePassword}</small>}
                    </div>
                    <div className="input-row">
                        <button
                            onClick={handleLogin}
                            className="btn"
                            id="btn-register"
                        >
                            ĐĂNG NHẬP
                        </button>
                    </div>
                    <p>
                        <span>Bạn đã có tài khoản?</span>
                        <Link to="/register">Đăng Kí</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
