import * as yup from 'yup';

export const registerSchema=yup.object({
    name:yup
    .string()
    .required("Name is required")
    .trim()
    .lowercase()
    .test(
        "no-admin",
        "Admin is not allowed",
        (value) => value !=="admin"
    ),
    email:yup
    .string()
   
    .test(
        "check-email",
        "Email already exists",
        async value=>{
            const res=await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`)
            const data=await res.json()
            return data.length===0

        }
    ),
    password:yup.string().min(6,"Password must be at least 6 characters").required("Password is required"),
    confirmPassword:yup.string().oneOf([yup.ref("password")],"Passwords must match").required("Confirm Password is required"),
    age:yup.number().min(18,"You must be at least 18 years old").required("Age is required")
})