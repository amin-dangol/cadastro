import React, { useState } from 'react'
const Registration = () => {

        const[userRegistration, setUserRegistration] = useState({
            phone: "",
            password: "",
            birthday: "",
            fullname: ""
        });

        const [records,setRecords] = useState([]);

        //event object

        const handleInput= (e) => {
            const name = e.target.name;
            const value = e.target.value;
            console.log(name, value);

            setUserRegistration({...userRegistration, [name] : value });   //dynamic data
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            const newRecord = {...userRegistration, id: new Date().getTime().toString() }
            console.log(records);
            setRecords([...records, newRecord]);

            setUserRegistration({phone:"", password:"", birthday:"", fullname:"" });
          
        }
    return(
        <>
        <div className="register">
            <div className="header-text">
                <p>Create your Aakha Account</p>
            </div>
            <div className="header-text right">
                <p>Already member? <a href="#">Login</a> here.</p>
            </div>
            <div className="register-box">
                <form method=" " action=" " onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <label>Phone Number*</label>
                            <input type="text" value= {userRegistration.phone} 
                            onChange={handleInput}
                             autoComplete="off" name="phone" id="phone" placeholder="Please enter your phone number" />
                            <label>Password*</label>
                            <input type="password" value= {userRegistration.password} 
                            onChange={handleInput}
                             autoComplete="off" name="password" id="password" placeholder="Minimum 8 characters with a number and a letter" />
                            <label>Birthday</label>
                            <input type="date" id="birthday" value= {userRegistration.birthday} 
                            onChange={handleInput}
                             autoComplete="off" name="birthday" />
                        </div>
                        <div className="col-lg-6">
                            <label>Full Name*</label>
                            <input type="text" value= {userRegistration.fullname} 
                            onChange={handleInput}
                             autoComplete="off" name="fullname" id="fullname" placeholder="Enter your full name" />
                            <label class="check-box">
                                <input type="checkbox" checked="checked" />
                                <span class="checkmark"></span>I want to receive offers and promotions from Aakha.
                            </label>
                            <div className="signup-button">
                                <button type="submit">SIGN UP</button>
                            </div>
                            <p>By clicking "SIGN UP", I agree to Aakha's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
                            <p>Or, Sign up with</p>
                            <div className="email-button">
                                <button>Sign up with Email</button>
                            </div>
                            <div className="social-button">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <button><i class="fa fa-facebook" aria-hidden="true"></i>Facebook</button>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="google-button">
                                            <button><i class="fa fa-google-plus" aria-hidden="true"></i>Google</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        {/* Display the Registration data */}


        <div>
            {
                records.map((curElem) => {
                    const{id, phone, password, birthday, fullname}=curElem;
                    return (
                        <div className="showDataStyle" key={id}>
                            <p>{fullname}</p>
                            <p>{id}</p>
                            <p>{phone}</p>
                            <p>{birthday}</p>
                            <p>{password}</p>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Registration