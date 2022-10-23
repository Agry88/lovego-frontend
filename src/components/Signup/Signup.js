import logo from "../../imgs/logo.png"
import man from "../../imgs/Man.svg"
import mail from "../../imgs/mail.svg"
import lock from "../../imgs/lock.svg"
import closeeye from "../../imgs/closeeye.svg"
import phone from "../../imgs/phone.svg"

import './signup.css';
function Signup() {
    return ( 
        <div className="signup-frame">
            <div className="signup-logo">
                <img src={logo}></img>
            </div>
            <div className="signup-content-frame">
                <div className="signup-content">
                    <div className='signup-title-frame'>
                        <div className='signup-title'>會員註冊</div>
                    </div>
                    <form className='signup-form'>
                        <div className='signup-form-label' >姓名</div>
                    
                            <div className="signup-form-input">
                                <img src={man}/>
                                <span>
                                    <input type="text" name="name" placeholder="使用者姓名" />
                                </span>
                            </div>
            
               
                        <div className='signup-form-label'>電話</div>
                            <div className="signup-form-input">
                                <img src={phone}/>
                                <span>
                                    <input type="text" name="phone" placeholder="09XXXXXXXX"
                                    pattern="[0]{1}[9]{1}[0-9]{8}" />
                                </span>
                        </div>
                            
                       
                     
              
                        <div className='signup-form-label'>E-mail</div>
                  
                            <div className="signup-form-input">
                                <img src={mail}/>
                                <span>
                                    <input type="text" name="mail" placeholder="XXX@XXXXX" pattern="[^@\s]+@[^@\s]+" />
                                </span>
                            </div>
                            
                
           
                        <div className='signup-form-label'>設定密碼</div>
                 
                            <div className="signup-form-input">
                                <img src={lock}/>
                                <span>
                                    <input type="text" name="password" />
                                </span>
                            </div>
                
      
                        <div className='signup-form-label'>驗證密碼</div>
                        <div className="signup-form-input">
                            <img src={lock}/>
                            <span>
                                <input type="text" name="checkpw" />
                            </span>
                        </div>
                            
           
                        <br/>
                        <div className="signup-btn-frame">
                            <button type="submit" >送出</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}

export default Signup;