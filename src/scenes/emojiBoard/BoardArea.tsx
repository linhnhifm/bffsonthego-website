import { useState } from 'react';
import Emoji from './Emoji';
import NoteForm from './NoteForm';


const BoardArea = () => {
    const emojiButtonStyles = "rounded-full border-2 border-primary-100 bg-primary-100 h-16 w-16 text-xl hover:bg-primary-500 hover:text-white";

    const [emojis, setEmojis] = useState<string[]>([]);

    const addEmoji = (emoji: string) => {
      setEmojis([...emojis, emoji]);
    };
  
    return (
      <div className="flex flex-row gap-24">
        <div className="flex flex-col">
            <div className="flex justify-between pb-4"> 
                <button className={emojiButtonStyles} onClick={() => addEmoji('❤️')}>❤️</button>
                <button className={emojiButtonStyles} onClick={() => addEmoji('👍')}>👍</button>
                <button className={emojiButtonStyles} onClick={() => addEmoji('🔥')}>🔥</button>
                <button className={emojiButtonStyles} onClick={() => addEmoji('💯')}>💯</button>
                <button className={emojiButtonStyles} onClick={() => addEmoji('🍁')}>🍁</button>
            </div>
            <NoteForm onSubmit={addEmoji} />
        </div>
        
        {/* Blue board */}
        <div className="relative h-full w-full">
          <div className="absolute h-32rem w-full bg-primary-300 z-10 border-8 border-primary-100" style={{ borderRadius: "20px" }}></div>
            <div className="relative z-20 designated-region" style={{ height: "32rem", width: "100%" }}>
              {emojis.map((emoji, index) => (
                <Emoji key={index} content={emoji} />
                ))}
            </div>
        </div>
      </div>
    );
}

export default BoardArea