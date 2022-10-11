import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Context from "../../context/Context";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [userPassWord, setUserPassWord] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userCfPassword, setUserCfPassword] = useState("");
    const { initUsers } = useContext(Context)

    const handleRegister = () => {
        let isExistUser =  initUsers.some((user) => user.email === userEmail)
        if(!isExistUser) {
            
        }
        let newUser = {};
    };

    return (
        <>
            <div className="register">
                <div className="register-form">
                    <h2>Đăng Kí</h2>
                    <div className="input-row">
                        <input
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            type="text"
                            placeholder="Họ tên"
                            id="username"
                        />
                        <small>Error message</small>
                    </div>
                    <div className="input-row">
                        <input
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            type="text"
                            placeholder="Email"
                            id="email"
                        />
                        <small>Error message</small>
                    </div>
                    <div className="input-row">
                        <input
                            value={userPassWord}
                            onChange={(e) => setUserPassWord(e.target.value)}
                            type="Email"
                            placeholder="Mật khẩu"
                            id="passwork"
                        />
                        <small>Error message</small>
                    </div>
                    <div className="input-row">
                        <input
                            value={userCfPassword}
                            onChange={(e) => setUserCfPassword(e.target.value)}
                            type="Email"
                            placeholder="Nhập lại mật khẩu"
                            id="cf-passwork"
                        />
                        <small>Error message</small>
                    </div>
                    <div className="input-row">
                        <button
                            onClick={handleRegister}
                            className="btn"
                            id="btn-register"
                        >
                            ĐĂNG KÝ
                        </button>
                    </div>
                    <p>
                        <span>Bạn đã có tài khoản?</span>
                        <Link to="/login">Đăng nhập</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;
