import { useEffect } from 'react';

export default function usePageMeta(title, description) {
    useEffect(() => {
        const prev = document.title;
        document.title = title;

        if (description) {
            const meta = document.querySelector('meta[name="description"]');
            if (meta) meta.setAttribute('content', description);
        }

        return () => { document.title = prev; };
    }, [title, description]);
}
