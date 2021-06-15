import { Button, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';

import React, { useState } from 'react'

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection : "column",
        gap: '1rem',
        padding: '1rem',
        width: "50rem",
        margin: "10px auto"
        
    },
    input : {
        display: "none"
    }
})


export const SignUp = () => {
    let classes = useStyles();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [image, setImage] = useState(null);
    const [loading,setLoading] = useState("");

    const signUpUrl = 'http://localhost:3300/auth/signup';

    const submitForm = async (e) => {
        setLoading(true);
        let formData = new FormData();
        formData.append("username",name)
        formData.append("password",password)
        formData.append("email",email)
        if(image !== null) formData.append("profilePic",image);
        console.log(formData)
        let response = await fetch(signUpUrl, {
            method: "POST",
            body: formData,
           
        })
        if(response.status !== 201){
            console.log(await response.text());
            setLoading(false);
            return;
        }
        let result = await response.json();
        console.log(result);
        setLoading(false);

    }

    return (
        <Paper elevation ={2} className = {classes.container}>
            <Typography variant = "h4">Sign Up</Typography>
            {/* <form autoComplete = "off"> */}
                <TextField value = {name} onChange = {e => setName(e.target.value)}label = "Name" name = "username" variant = "outlined" />
                <TextField value = {email} onChange = {e => setEmail(e.target.value)}label = "Email" name = "email" variant = "outlined" type = "email" />
                <TextField value = {password} onChange = {e => setPassword(e.target.value)} label = "Password" type = "password" name = "password" variant ="outlined" />
                <TextField value = {confirmPassword} onChange = {e => setConfirmPassword(e.target.value)} label = "Confirm Password" type = "password" variant = "outlined" />
                <input 
                    accept = "image/*"
                    className = {classes.input}
                    id ="photo"
                    type = "file"
                    name = "photo"
                    onChange = {e => setImage(e.target.files[0])}
                />
                <label htmlFor = "photo">
                    <Button variant ="contained" color = "primary" component= "span">Upload Avatar</Button>
                    {image?.name}
                    </label>    
                
                <Button 
                    variant= "contained" 
                    color ="primary"
                    disabled = {!name || !email || !password || password !== confirmPassword}
                    onClick = {submitForm}
                    >{ loading && <CircularProgress />}Submit</Button>

            {/* </form> */}
        </Paper>
    )
}


