import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import { Button, Tabs, Tab } from '@material-ui/core';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

export default function Header(props) {

    const modalStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    }

    const [value, setValue] = useState(0);

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [lastname, setLastname] = useState("");

    const [email, setEmail] = useState("");

    const [usernameRequired, setUsernameRequired] = useState("dispNone");

    const [passwordRequired, setPasswordRequired] = useState("dispNone");

    const [firstname, setFirstname] = useState("");

    const [emailRequired, setEmailRequired] = useState("dispNone");

    const [firstnameRequired, setFirstnameRequired] = useState("dispNone");

    const [lastnameRequired, setLastnameRequired] = useState("dispNone");

    const [mobile, setMobile] = useState("");

    const [passwordReg, setPasswordReg] = useState("");

    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const [mobileRequired, setMobileRequired] = useState("dispNone");

    const [passwordRegRequired, setPasswordRegRequired] = useState("dispNone");

    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('access-token') == null ? false : true)

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const modalOpenHandler = () => {
        setModalIsOpen({ modalIsOpen: true })
    };

    const modalCloseHandler = () => {
        setModalIsOpen({ modalIsOpen: false })
    }

    const tabHandler = (e, val) => {
        setValue(val);
    }

    const TabPanel = (props) => {
        const { children, value, index } = props;
        return (
            <div>
                {
                    value === index && (
                        <h1>{children}</h1>
                    )
                }
            </div>
        )
    }

    let tempUsername;
    const inputUsernameChangeHandler = (e) => {
        tempUsername = e.target.value;
    }

    let tempPassword;
    const inputPasswordChangeHandler = (e) => {
        tempPassword = e.target.value;
    }
    let tempEmail;
    const inputEmailChangeHandler = (e) => {
        tempEmail = e.target.value;
    }

    let tempFirstUsername;
    const inputFirstnameChangeHandler = (e) => {
        tempFirstUsername = e.target.value;
    }

    let tempLastName;
    const inputLastnameChangeHandler = (e) => {
        tempLastName = e.target.value;
    }
    let tempMobile;
    const inputMobileChangeHandler = (e) => {
        tempMobile = e.target.value;
    }
    let tempPasswordReg;
    const inputPasswordRegChangeHandler = (e) => {
        tempPasswordReg = e.target.value;
    }

    const loginClickHandler = () => {
        setUsername(tempUsername);
        setPassword(tempPassword);
        console.log(password);
        username === "" ? setUsernameRequired("dispBlock") : setUsernameRequired("dispNone");
        password === "" ? setPasswordRequired("dispBlock") : setPasswordRequired("dispNone");
    }

    const registerClickHandler = () => {
        setEmail(tempEmail);
        setFirstname(tempFirstUsername);
        setLastname(tempLastName);
        setMobile(tempMobile);
        setPasswordReg(tempPasswordReg);

        const submitRegisterData = async () =>{

            const response = await fetch('http://localhost:8085/api/v1/signup', {
                method: 'POST',
                body: JSON.stringify({
                        "email_address": email,
                        "first_name": firstname,
                        "last_name": lastname,
                        "mobile_number": mobile,
                        "password": passwordReg
                })
            });

            const content = await response.json();
            console.log(content);
        }

        email === "" ? setEmailRequired("dispBlock") : setEmailRequired("dispNone");
        firstname === "" ? setFirstnameRequired("dispBlock") : setFirstnameRequired("dispNone");
        lastname === "" ? setLastnameRequired("dispBlock") : setLastnameRequired("dispNone");
        mobile === "" ? setMobileRequired("dispBlock") : setMobileRequired("dispNone");
        passwordReg === "" ? setPasswordRegRequired("dispBlock") : setPasswordRegRequired("dispNone");
        if (email === "" || firstname === "" || lastname === "" || mobile === "" || passwordReg === "") { return; }
        else {submitRegisterData()}

        }


    return (
        <div>

            <header className="header-container">
                <img className="logo" src={logo} alt="Logo" />

                {!modalIsOpen.loggedIn ?
                    <div className="login-button">
                        <Button variant="contained" onClick={modalOpenHandler} color="default" >Login</Button>
                    </div>
                    :
                    <div className="login-button">
                        <Button variant="contained" color="default" >Logout</Button>
                    </div>}

                {props.showBookShowButton === "true" && !modalIsOpen.loggedIn ?
                    <div className="bookShow-button">
                        <Button variant="contained" color="primary" onClick={modalOpenHandler} >Book Show</Button>
                    </div> : ""}

                {props.showBookShowButton === "true" && modalIsOpen.loggedIn ?
                    <div className="bookShow-button">
                        <Link to={"/bookshow/" + props.id} />
                        <Button variant="contained" color="primary"  >Book Show</Button>
                    </div> : ""
                }
            </header>
            <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen.modalIsOpen}
                contentLabel="Login"
                onRequestClose={modalCloseHandler}
                style={modalStyle}>

                <Tabs value={value} className="tabs" onChange={tabHandler}>
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <div className="modalContainerStyle">
                    <FormControl required>
                        <InputLabel htmlFor="username"> Username </InputLabel>
                        <Input id="username" type="text" username={username} onChange={inputUsernameChangeHandler} />
                        <FormHelperText className={usernameRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br /><br />
                    <FormControl required>
                        <InputLabel htmlFor="password"> Password </InputLabel>
                        <Input id="password" type="password" onChange={inputPasswordChangeHandler} />
                        <FormHelperText className={passwordRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br /><br />
                    <Button variant="contained" color="primary" onClick={loginClickHandler}>LOGIN</Button>
                    </div>
                </TabPanel>


                <TabPanel value={value} index={1}>
                    <div className="modalContainerStyle">
                    <FormControl required>
                        <InputLabel htmlFor="firstname">First Name</InputLabel>
                        <Input id="firstname" onChange={inputFirstnameChangeHandler} />
                        <FormHelperText className={firstnameRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br /><br />

                    <FormControl required>
                        <InputLabel htmlFor="lastname">Last Name</InputLabel>
                        <Input id="lastname" onChange={inputLastnameChangeHandler} />
                        <FormHelperText className={lastnameRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br /><br />

                    <FormControl required>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" type="email" onChange={inputEmailChangeHandler} />
                        <FormHelperText className={emailRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br /><br />


                    <FormControl required aria-describedby="name-helper-text">
                        <InputLabel htmlFor="passwordReg">Password</InputLabel>
                        <Input type="password" id="passwordReg" onChange={inputPasswordRegChangeHandler} />
                        <FormHelperText className={passwordRegRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br /><br />

                    <FormControl required>
                        <InputLabel htmlFor="mobile">Mobile Number</InputLabel>
                        <Input id="mobile" onChange={inputMobileChangeHandler} />
                        <FormHelperText className={mobileRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br /><br />
                    {modalIsOpen.registrationSuccess === true &&
                        <FormControl>
                            <span className="successText"> Registration Successful. Please Login!</span>
                        </FormControl>}<br /><br />
                    <Button variant="contained" onClick={registerClickHandler} color="primary">
                        REGISTER
                    </Button>

                    </div>
                </TabPanel>

            </Modal>
        </div>
    )
}
