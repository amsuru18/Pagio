import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Plus, Book } from 'lucide-react';

import DashboardLayout from '../components/layout/DashboardLayout.jsx';
import Button from '../components/ui/Button.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import axiosInstance from '../utils/axiosInstance.js';
import { API_PATHS } from '../utils/apiPaths.js';

const DashboardPage = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [bookToDelete, setBookToDelete] = useState(null);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axiosInstance.get(
                    API_PATHS.BOOKS.GET_BOOKS
                );
                setBooks(response.data);
            } catch (error) {
                toast.error('Failed to fetch your eBooks');
            } finally {
                setIsLoading(false);
            }
        };
        fetchBooks();
    }, []);

    const handleDeleteBook = async () => {
        if (!bookToDelete) return;
    };

    const handleCreateBookClick = () => {
        setIsCreateModalOpen(true);
    };

    const handleBookCreated = (bookId) => {
        setIsCreateModalOpen(false);
        navigate(`/editor/${bookId}`);
    };

    return (
        <DashboardLayout>
            <div className="container mx-auto p-6">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-lg font-bold text-slate-900">
                            All eBooks
                        </h1>
                        <p className="text-[13px] text-slate-600 mt-1">
                            Create, edit, and manage all your AI-generated
                            eBooks.
                        </p>
                    </div>
                    <Button
                        className="whitespace-nowrap"
                        onClick={handleCreateBookClick}
                        icon={Plus}
                    >
                        Create New eBook
                    </Button>
                </div>

                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <BookCardSkeleton key={i} />
                        ))}
                    </div>
                ) : books.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed border-slate-200 rounded-xl mt-8">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                            <Book className="w-8 h-8 text-slate-400" />
                        </div>
                        <h1 className="text-lg font-medium text-slate-900 mb-2">No eBooks found</h1>
                        <p className="text-slate-900 mb-6 max-w-md">
                            You haven't created any eBooks yet. Get started by
                            creating your first one.
                        </p>
                        <Button onClick={handleCreateBookClick} icon={Plus}>
                            Create your first eBook
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"></div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default DashboardPage;
