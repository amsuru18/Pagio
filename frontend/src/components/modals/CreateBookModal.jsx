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
        <Modal
            isOpen={isOpen}
            onClose={() => {
                onClose();
                resetModal();
            }}
            title="Create New eBook"
        >
            {step === 1 && (
                <div className="space-y-5">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-100 text-violet-600 text-sm font-semibold">
                            1
                        </div>
                        <div className="flex-1 h-0.5 bg-gray-200 "></div>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-400 text-sm font-semibold">
                            2
                        </div>
                    </div>

                    <InputField
                        icon={BookOpen}
                        label="Book Title"
                        placeholder="Enter your book title..."
                        value={bookTitle}
                        onChange={(e) => setBookTitle(e.target.value)}
                    />

                    <InputField
                        icon={Hash}
                        label="Number of Chapters"
                        type="number"
                        placeholder="5"
                        value={numChapters}
                        onChange={(e) =>
                            setNumChapters(parseInt(e.target.value) || 1)
                        }
                        min="1"
                        max="2"
                    />

                    <InputField
                        icon={Lightbulb}
                        label="Topic (Optional)"
                        placeholder="Specific topic for AI generation..."
                        value={aiTopic}
                        onChange={(e) => setAiTopic(e.target.value)}
                    />

                    <SelectedField
                        icon={Palette}
                        label="Writing Style"
                        value={aiStyle}
                        onChange={(e) => setAiStyle(e.target.value)}
                        options={[
                            'Informative',
                            'Story',
                            'Casula',
                            'Professional',
                            'Humorous'
                        ]}
                    />

                    <div className="flex justify-end pt-4">
                        <Button
                            onClick={handleGenerateOutline}
                            isLoading={isGeneralOutline}
                            icon={Sparkles}
                        >
                            Generate Outline with AI
                        </Button>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default CreateBookModal;
