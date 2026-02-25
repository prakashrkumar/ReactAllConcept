
import React from 'react'
import useForm from './hooks/useForm'

const LoginForm = () => {
    const initialValues = { email: "", password: "" }

    const onSubmit = (values) => {
        console.log(values)
    }

    const { values, handleChange, handleSubmit, resetForm } = useForm(initialValues, onSubmit)

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <input type="email" name="email" value={values.email} onChange={handleChange} /><br />
            <input type="password" name="password" value={values.password} onChange={handleChange} /><br />
            <button type="submit">Submit</button>
            <button type="button" onClick={resetForm}>Reset</button>
        </form>
    )
}

export default LoginForm

