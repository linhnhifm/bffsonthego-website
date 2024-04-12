// import {useState} from 'react';

interface Props {
  content: string;
}

const StickyNote = ({ content }: Props) => {
  // Make the emojis appear in a random position in the box area
  // const [position, ] = useState({
  //   top: Math.random() * 100 + 'vh',
  //   left: Math.random() * 100 + 'vw',
  // });

  return (
    // style={{ position: 'absolute', ...position }}
    <div className="text-5xl p-3">
      {content}
    </div>
  );
};

export default StickyNote;