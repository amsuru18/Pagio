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
    return <div></div>;
};

export default ChapterSidebar;
