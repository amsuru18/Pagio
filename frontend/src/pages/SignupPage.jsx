import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import {Mail, Lock, User, BookOpen} from "lucide-react"
import toast from "react-hot-toast"

import InputField from "../components/ui/InputField.jsx"
import Button from "../components/ui/Button.jsx"
import {useAuth} from "../context/AuthContext.jsx"
import axiosInstance from "../utils/axiosInstance.js"
import { API_PATHS } from "../utils/apiPaths.js";

const SignupPage = () => {
    return <div>Signup Page</div>;
};

export default SignupPage;
