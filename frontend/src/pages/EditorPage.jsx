import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
    Sparkles,
    FileDown,
    Save,
    Menu,
    X,
    Edit,
    NotebookText,
    ChevronDown,
    FileText
} from 'lucide-react';
import { arrayMove } from '@dnd-kit/sortable';

import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';
import Dropdown, { DropdownItem } from '../components/ui/Dropdown.jsx';
import InputField from '../components/ui/InputField.jsx';
import Button from '../components/ui/Button.jsx';
import Modal from '../components/ui/Modal.jsx';
import SelectField from '../components/ui/SelectField.jsx';

const EditorPage = () => {
    const { bookId } = useParams();
    const useNavigate = useNavigate();
    const [book, setBook] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('editor');
    const fileInputRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    //AI Modal State
    const [isOutlineModalOpen, setIsOutlineModalOpen] = useState(false);
    const [aiTopic, setAiTopic] = useState('');
    const [aiStyle, setAiStyle] = useState('Informative');
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axiosInstance.get(
                    `${API_PATHS.BOOKS.GET_BOOKS_BY_ID}/ ${bookId}`
                );
                setBook(response.data);
            } catch (error) {
                toast.error('Failed to load book details');
                navigate('/dashboard');
            } finally {
                setIsLoading(false);
            }
            fetchBook();
        };
    }, [bookId, navigate]);

    const handleBookChange = (e) => {
        const { name, value } = e.target;
        setBook((prev) => ({ ...prev, [name]: value }));
    };

    const handleChapterChange = (e) => {};

    const handleAddChapter = () => {};

    const handleDeleteChapter = (index) => {};

    const handleReorderChapters = (oldIndex, newIndex) => {};

    const handleSaveChanges = async (bookToSave = book, showToast = true) => {};

    const handleCoverImageUpload = async (e) => {};

    const handleGenerateOutline = async () => {};

    const handleGenerateChapterContent = async (index) => {};

    const handleExportPDF = async () => {};

    const handleExportDoc = async () => {};

    if (isLoading || !book) {
        return (
            <div className="flex h-screen items-center justify-center">
                <p>Loading Editor...</p>
            </div>
        );
    }

    return <div>EditorPage</div>;
};

export default EditorPage;
