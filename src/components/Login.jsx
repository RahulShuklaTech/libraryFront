// import { Button, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
// import React, { useState } from 'react'

// const useStyles = makeStyles({
//     container: {
//         display: "flex",
//         flexDirection : "column",
//         gap: '1rem',
//         padding: '1rem',
//         width: "50rem",
//         margin: "10px auto"
        
//     },
//     input : {
//         display: "none"
//     }
// })


// export const Login = () => {
//     let classes = useStyles();
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");
//     //const [loading,setLoading] = useState("");

//     //const signUpUrl = 'http://localhost:3300/auth/signup';

//     // const submitForm = async (e) => {
//     //     setLoading(true);
//     //     let formData = new FormData();
//     //     formData.append("password",password)
//     //     formData.append("email",email)
//     //         // console.log(await response.text());
//     //         setLoading(false);
//     //         return;
        
//     //     // let result = await response.json();
//     //     // console.log(result);
//     //     //setLoading(false);

//     // }

// //     return (
// //         <Paper elevation ={2} className = {classes.container}>
// //             <Typography variant = "h4">Sign Up</Typography>
// //             {/* <form autoComplete = "off"> */}
// //                 <TextField value = {email} onChange = {e => setEmail(e.target.value)}label = "Email" name = "email" variant = "outlined" type = "email" />
// //                 <TextField value = {password} onChange = {e => setPassword(e.target.value)} label = "Password" type = "password" name = "password" variant ="outlined" />
               
               
// //                 <Button 
// //                     variant= "contained" 
// //                     color ="primary"
// //                     disabled = { !email || !password }
// //                     onClick = {submitForm}
// //                     >Submit</Button>

// //             {/* </form> */}
// //         </Paper>
// //     )
// // }
