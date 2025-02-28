import { useDndContext } from '@dnd-kit/core';
import { useCallback } from 'react';

export const useScheduleDrag = (tableId: string) => {
    const dndContext = useDndContext();

    const getActiveTableId = useCallback(() => {
        const activeId = dndContext.active?.id;
        if (activeId) {
            return String(activeId).split(':')[0];
        }
        return null;
    }, [dndContext.active]);

    const isActiveTable = getActiveTableId() === tableId;

    return { isActiveTable };
};
