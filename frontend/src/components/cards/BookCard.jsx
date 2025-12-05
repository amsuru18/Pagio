import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/apiPaths';
import { Edit, Trash2 } from 'lucide-react';

const BookCard = ({ book, onDelete }) => {
    const navigate = useNavigate();

    let coverImageUrl = null;

    if (book.coverImage) {
        let cleanPath = book.coverImage.replace(/\\/g, '/'); // Fix Windows slashes

        // Case 1: Backend already returns full URL
        if (cleanPath.startsWith('http')) {
            coverImageUrl = cleanPath;
        }

        // Case 2: Backend returns "/uploads/file.jpg"
        else if (cleanPath.startsWith('/uploads')) {
            coverImageUrl = `${BASE_URL}${cleanPath}`;
        }

        // Case 3: Backend returns "uploads/file.jpg"
        else if (cleanPath.startsWith('uploads')) {
            coverImageUrl = `${BASE_URL}/${cleanPath}`;
        }

        // Invalid case → do not use it
        else {
            coverImageUrl = null;
        }
    }

    return (
        <div
            className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 
            hover:border-gray-100 transition-all duration-300 hover:shadow-gray-100/50 
            hover:-translate-y-1 cursor-pointer"
            onClick={() => navigate(`/view-book/${book._id}`)}
        >
            <div className="relative overflow-hidden bg-linear-to-br from-gray-50 to-gray-100">

                {/* IMAGE BLOCK — SAFE RENDERING */}
                {coverImageUrl ? (
                    <img
                        src={coverImageUrl}
                        alt={book.title}
                        className="w-full aspect-16/25 object-cover 
                        transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                            // hide broken images
                            e.target.style.display = "none";
                        }}
                    />
                ) : (
                    // Placeholder when image is missing
                    <div className="w-full aspect-16/25 flex items-center justify-center 
                        bg-gray-200 text-gray-500 text-sm">
                        No Cover
                    </div>
                )}

                {/* EDIT / DELETE ACTION BUTTONS */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-200 flex gap-2">

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/editor/${book._id}`);
                        }}
                        className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex 
                        items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer"
                    >
                        <Edit className="w-4 h-4 text-gray-700" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(book._id);
                        }}
                        className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex 
                        items-center justify-center shadow-lg hover:bg-red-50 transition-colors cursor-pointer"
                    >
                        <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                </div>
            </div>

            {/* BOOK DETAILS OVERLAY */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="absolute inset-0 bg-linear-to-br from-black/80 to-transparent backdrop-blur-xs"></div>

                <div className="relative">
                    <h3 className="font-semibold text-white text-sm leading-tight line-clamp-2 mb-1">
                        {book.title}
                    </h3>
                    <p className="text-[13px] text-gray-300 font-medium">
                        {book.author}
                    </p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-linear-to-br 
                from-orange-500 via-amber-500 to-rose-500 opacity-0 group-hover:opacity-100 
                transition-opacity duration-300" 
            />
        </div>
    );
};

export default BookCard;
