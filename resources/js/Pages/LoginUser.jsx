import React from "react";
import LeftImage from "@/Components/Login/LeftImage"; 
import LoginForm from "@/Components/Login/LoginForm"; 

const LoginUsers = () => {
    return (
        <div className="w-full h-screen flex bg-white relative">
            <LeftImage />
            <LoginForm />
        </div>
    );
};

export default LoginUsers;
