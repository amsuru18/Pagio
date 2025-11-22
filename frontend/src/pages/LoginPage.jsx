import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, BookOpen } from 'lucide-react';
import toast from 'react-hot-toast';

import InputField from '../components/ui/InputField';
import Button from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

const LoginPage = () => {
    return <div className=""></div>;
};

export default LoginPage;
