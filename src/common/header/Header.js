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

    const [usernameRequired, setUsernameRequired] = useState("dispNone");

    const [passwordRequired, setPasswordRequired] = useState("dispNone");

    const [emailRequired, setEmailRequired] = useState("dispNone");
    
    const [firstnameRequired, setFirstnameRequired] = useState("dispNone");

    const [lastnameRequired, setLastnameRequired] = useState("dispNone");

    const [mobileRequired, setMobileRequired] = useState("dispNone");

    const [passwordRegRequired, setPasswordRegRequired] = useState("dispNone");

    const [headerState, setHeaderState] = useState({
        modalIsOpen: false,
        password: "",
        email: "",
        firstname: "",
        lastname: "",
        mobile: "",
        passwordReg: "",
        passwordRegRequired: "dispNone",
        registrationSuccess: false,
        loggedIn: sessionStorage.getItem('access-token') == null ? false : true
    });

    const modalOpenHandler = () => {
        setHeaderState({ modalIsOpen: true })
    };

    const modalCloseHandler = () => {
        setHeaderState({ modalIsOpen: false })
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

    const inputUsernameChangeHandler = (e) => {
        
    }

    const inputPasswordChangeHandler = (e) => {
        
    }

    const inputEmailChangeHandler = (e) => {
 
    }

    const inputFirstnameChangeHandler = (e) => {
    }

    const inputLastnameChangeHandler = (e) => {
    }

    const inputMobileChangeHandler = (e) => {
    }

    const inputPasswordRegChangeHandler = (e) => {
    }
    

    return (
        <div>

            <header className="header-container">
                <img className="logo" src={logo} alt="Logo" />

                {!headerState.loggedIn ?
                    <div className="login-button">
                        <Button variant="contained" onClick={modalOpenHandler} color="default" >Login</Button>
                    </div>
                    :
                    <div className="login-button">
                        <Button variant="contained" color="default" >Logout</Button>
                    </div>}

                {props.showBookShowButton === "true" && !headerState.loggedIn ?
                    <div className="bookShow-button">
                        <Button variant="contained" color="primary" onClick={modalOpenHandler} >Book Show</Button>
                    </div> : ""}

                {props.showBookShowButton === "true" && headerState.loggedIn ?
                    <div className="bookShow-button">
                        <Link to={"/bookshow/" + props.id} />
                        <Button variant="contained" color="primary"  >Book Show</Button>
                    </div> : ""
                }
            </header>
            <Modal
                ariaHideApp={false}
                isOpen={headerState.modalIsOpen}
                contentLabel="Login"
                onRequestClose={modalCloseHandler}
                style={modalStyle}>

                <Tabs value={value} className="tabs" onChange={tabHandler}>
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>

                <TabPanel value={value} index={0}>
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
                    <Button variant="contained" color="primary" >LOGIN</Button>
                </TabPanel>


                <TabPanel value={value} index={1}>

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
                    {headerState.registrationSuccess === true &&
                        <FormControl>
                            <span className="successText"> Registration Successful. Please Login!</span>
                        </FormControl>}<br /><br />
                    <Button variant="contained" color="primary">
                        REGISTER
                    </Button>
                </TabPanel>

            </Modal>
        </div>
    )
}
