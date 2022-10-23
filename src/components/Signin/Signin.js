import logo from "../../imgs/logo.png"
import mail from "../../imgs/mail.svg"
import lock from "../../imgs/lock.svg"
import closeeye from "../../imgs/closeeye.svg"
import { useNavigate } from "react-router-dom";

import './signin.css';
function Signin() {
    const navigate = useNavigate();
    return ( 
        <div className="signin-frame">
            <div className="signin-logo">
                <img src={logo}></img>
            </div>
            <div className="signin-content-frame">
                <div className="signin-content">
                    <div className='signin-title-frame'>
                        <div className='signin-title'>會員登入</div>
                    </div>
                    <form className='signin-form'>
                        
                        <div className='signin-form-label'>E-mail</div>
                        <div className="signin-form-input">
                            <img src={mail}/>
                            <span>
                                <input type="text" name="mail" placeholder="XXX@XXXXX" pattern="[^@\s]+@[^@\s]+" />
                            </span>
                        </div>
            
                        <div className='signin-form-label'>密碼</div>
                        <div className="signin-form-input">
                            <img src={lock}/>
                            <span>
                                <input type="text" name="password" />
                            </span>
                        </div>
                        <div className="signin-form-toollist">
                            <span className="signin-form-remeber">
                                <input type="checkbox" name="remeber" id="remeber"/>
                                記住帳號
                            </span>
                            <span　className="signin-form-forget">
                                <button>忘記密碼？</button>
                            </span>
                        </div>
                        <br/>
                        <div className="signin-btn-frame">
                            <button type="submit">登入</button>
                        </div>
                        <div className="signin-form-tosignup">
                            <span className="signin-form-signuptext">還沒有帳號嗎？</span>
                            <button onClick={() => navigate("/Signuppage")}>立即註冊</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}

export default Signin;