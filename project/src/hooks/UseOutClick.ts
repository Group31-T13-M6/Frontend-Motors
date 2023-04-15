import { useEffect, useRef } from 'react';

const useOutClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutClick = (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as HTMLElement)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleOutClick);

        return () => {
            document.removeEventListener('mousedown', handleOutClick);
        };
    }, []);

    return ref;
};

export default useOutClick;
