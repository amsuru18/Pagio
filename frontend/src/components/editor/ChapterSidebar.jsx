import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Trash2, Plus, GripVertical } from 'lucide-react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
    SortableContext,
    verticalListSortingStrategy,
    useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import Button from '../ui/Button';

//SortableItem Component
const SortableItem = ({
    chapter,
    index,
    selectedChapterIndex,
    onSelectChapter,
    onDeleteChapter,
    onGenerateChapterContent,
    isGenerating
}) => {
    return <div className=""></div>;
};

const ChapterSidebar = ({
    book,
    selectedChapterIndex,
    onSelectChapter,
    onAddChapter,
    onDeleteChapter,
    onGenerateChapterContent,
    isGenerating,
    onReorderChapters
}) => {
    const navigate = useNavigate();

    const chapterIds = book.chapters.map(
        (chapter, index) => chapter._id || `new-${index}`
    );

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            const oldIndex = chapterIds.indexOf(active.id);
            const newIndex = chapterIds.indexOf(over.id);
            onReorderChapters(oldIndex, newIndex);
        }
    };
    return <div></div>;
};

export default ChapterSidebar;
