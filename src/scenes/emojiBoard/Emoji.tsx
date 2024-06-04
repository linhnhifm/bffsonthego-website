import { useEffect, useState } from 'react';

interface Props {
    content: string;
}

const Emoji = ({ content }: Props) => {
    const [position, setPosition] = useState<{ top: string; left: string }>({ top: '0px', left: '0px' });

    useEffect(() => {
        const designatedRegion = document.querySelector('.designated-region');
        if (designatedRegion) {
            const regionHeight = designatedRegion.clientHeight;
            const regionWidth = designatedRegion.clientWidth;

            const randomTop = Math.random() * (regionHeight - 80) + 'px'; 
            const randomLeft = Math.random() * (regionWidth - 80) + 'px'; 

            setPosition({ top: randomTop, left: randomLeft });
        }
    }, []);

    return (
        <div className="text-5xl p-3 absolute" style={{ ...position }}>
            {content}
        </div>
    );
};

export default Emoji;