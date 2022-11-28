import { useState, useEffect } from 'react';

const useScrollUp = () => {
    const [scrollTop, setScrollTop] = useState(document.documentElement.scrollTop);
    const [isScrollUp, setIsScrollUp] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScrollUp);
        return () => window.removeEventListener('scroll', handleScrollUp);
    }, [scrollTop]);

    function handleScrollUp() {
        document.documentElement.scrollTop < scrollTop ? setIsScrollUp(true) : setIsScrollUp(false);
        setScrollTop(document.documentElement.scrollTop);
    }

    return [isScrollUp, scrollTop];
};

export default useScrollUp;