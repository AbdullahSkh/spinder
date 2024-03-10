"use client"

import React, { useState } from 'react'
import Input from '../components/Input';
import Label from '../components/Label';
import { cn } from "../utils/cn"

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to server, validate, etc.)
        console.log('Form submitted:', formData);
    };

    return (
        <div className='flex flex-col w-full h-screen items-center bg-background'>
            <div className='flex flex-col max-w-xl items-center justify-center shadow-input bg-background2 relative p-4 my-8'>
                <h1 className='font-bold p-4 text-2xl '>Signup Form</h1>

                <form onSubmit={handleSubmit} className='flex flex-col justify-center'>

                    <InputLabel>
                        <Label htmlFor="firstname"> Firstname: </Label>
                        <Input
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}

                            className='bg-transparent border-2 rounded shadow'
                        />
                    </InputLabel>
                    <InputLabel>
                        <Label htmlFor="firstname"> Lastname: </Label>
                        <Input
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}

                            className='bg-transparent border-2 rounded shadow'
                        /></InputLabel>
                    <InputLabel>
                        <Label htmlFor="firstname"> Username: </Label>
                        <Input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}

                            className='bg-transparent border-2 rounded shadow'
                        /></InputLabel>
                    <InputLabel>
                        <Label htmlFor="firstname"> Email: </Label>
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}

                            className='bg-transparent border-2 rounded shadow'
                        /></InputLabel>
                    <InputLabel>
                        <Label htmlFor="firstname"> Password: </Label>
                        <Input
                            type="password"
                            name="Password"
                            value={formData.password}
                            onChange={handleChange}

                            className='bg-transparent border-2 rounded shadow'
                        /></InputLabel>

                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium mt-4"
                        type="submit">Sign Up</button>
                    <BottomGradient />
                </form>
            </div>
        </div>
    );
};

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const InputLabel = ({ children,
    className, }) => {
    return (
        <div className={cn("flex flex-col space-y-2 p-2", className)}>
            {children}
        </div>
    );
}
export default SignUp;