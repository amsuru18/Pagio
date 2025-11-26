import { useState, useRef, useEffect } from 'react';
import {
    Plus,
    Sparkles,
    Trash2,
    ArrowLeft,
    BookOpen,
    Hash,
    Lightbulb,
    Palette
} from 'lucide-react';
import Modal from "../ui/Modal.jsx"
import InputField from "../ui/InputField.jsx"
import SelectedField from "../ui/SelectField.jsx"
import Button from "../ui/Button.jsx"
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

const CreateBookModal = () => {
    return <div></div>;
};

export default CreateBookModal;
