import React from "react";

export function Typewriter({
    words = ["Frontend Engineer", "MERN Enthusiast", "Shopify Creator"],
    typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000
}) {
    const [text, setText] = React.useState("");
    const [idx, setIdx] = React.useState(0);
    const [deleting, setDeleting] = React.useState(false);
    const [waiting, setWaiting] = React.useState(false);

    React.useEffect(() => {
        const target = words[idx];
        const timeout = setTimeout(() => {
            if (waiting) return setWaiting(false), setDeleting(true);
            if (deleting) {
                if (!text) {
                    setDeleting(false);
                    setIdx((i) => (i + 1) % words.length);
                } else setText(text.slice(0, -1));
            } else {
                if (text === target) setWaiting(true);
                else setText(target.slice(0, text.length + 1));
            }
        }, waiting ? pauseDuration : deleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timeout);
    }, [text, idx, deleting, waiting]);

    return (
        <h1 className="text-4xl font-extrabold text-center mb-4">
            <span className="text-gradient">{text}<span className="inline-block w-[2px] h-6 bg-current animate-blink"></span></span>
        </h1>
    );
}
