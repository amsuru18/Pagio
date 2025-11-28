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
import Modal from '../ui/Modal.jsx';
import InputField from '../ui/InputField.jsx';
import SelectedField from '../ui/SelectField.jsx';
import Button from '../ui/Button.jsx';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

const CreateBookModal = ({ isOpen, onClose, onBookCreated }) => {
    const { user } = useAuth();

    const [step, setStep] = useState(1);
    const [bookTitle, setBookTitle] = useState('');
    const [numChapters, setNumChapters] = useState(5);
    const [aiTopic, setAiTopic] = useState('');
    const [aiStyle, setAiStyle] = useState('Informative');
    const [chapters, setChapters] = useState([]);
    const [isGeneralOutline, setIsGeneralOutline] = useState(false);
    const [isFinalizingBook, setIsFinalizingBook] = useState(false);
    const chaptersContainerRef = useRef(null);

    const resetModal = () => {
        setStep(1);
        setBookTitle('');
        setNumChapters('');
        setAiTopic('');
        setAiStyle('Informative');
        setChapters([]);
        setIsGeneralOutline(false);
        setIsFinalizingBook(false);
    };

    const handleGenerateOutline = async () => {};

    const handleChapterChange = (index, field, value) => {
        const updatedChapter = [...chapters];
        updatedChapters[index][field] = value;
        setChapters(updatedChapter);
    };

    const handleDeleteChapter = (index) => {
        if (chapters.length <= 1) return;
        setChapters(chapters.filter((_, i) => i !== index));
    };

    const handleAddChapter = () => {
        setChapters([
            ...chapters,
            { title: `Chapter ${chapters.length + 1}`, description: '' }
        ]);
    };

    const handleFinalizeBook = async () => {};

    useEffect(() => {
        if (step === 2 && chaptersContainerRef.current) {
            const scrollableDiv = chaptersContainerRef.current;
            scrollableDiv.scrollTo({
                top: scrollableDiv.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [chapters.length, step]);

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={() => {
                    onClose();
                    resetModal();
                }}
                title="Create New eBook"
            >
                Content Here
            </Modal>
        </div>
    );
};

export default CreateBookModal;
