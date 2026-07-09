import { useState, useEffect } from 'react';

export default function TypewriterWrapper({ texts = [], speed = 100, pause = 2000 }) {
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (!texts.length) return;
        const currentText = texts[textIndex];
        let timeout;

        if (!isDeleting && charIndex < currentText.length) {
            timeout = setTimeout(() => setCharIndex(charIndex + 1), speed);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => setCharIndex(charIndex - 1), speed / 2);
        } else if (!isDeleting && charIndex === currentText.length) {
            timeout = setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

    if (!texts.length) return null;

    return (
        <span>{texts[textIndex]?.substring(0, charIndex)}|</span>
    );
}