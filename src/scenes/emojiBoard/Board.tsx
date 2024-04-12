import { useState } from 'react';
import StickyNote from './StickyNote';
import NoteForm from './NoteForm';


const Board = () => {
    const emojiButtonStyles = "rounded-full border-2 border-secondary-500 bg-primary-100 h-16 w-16 text-xl hover:bg-primary-500 hover:text-white";

    const [notes, setNotes] = useState<string[]>([]);

    const addNote = (note: string) => {
      setNotes([...notes, note]);
    };
  
    return (
      <div className="flex flex-row gap-24">
        <div className="flex flex-col">
            <div className="flex justify-between pb-4"> 
                <button className={emojiButtonStyles} onClick={() => addNote('❤️')}>❤️</button>
                <button className={emojiButtonStyles} onClick={() => addNote('👍')}>👍</button>
                <button className={emojiButtonStyles} onClick={() => addNote('🔥')}>🔥</button>
                <button className={emojiButtonStyles} onClick={() => addNote('💯')}>💯</button>
                <button className={emojiButtonStyles} onClick={() => addNote('🍁')}>🍁</button>
            </div>
            <NoteForm onSubmit={addNote} />
        </div>
        <div className="relative h-full w-full">
          <div className="absolute h-32rem w-full bg-primary-500 z-10" style={{ borderRadius: "20px" }}></div>
          <div className="relative z-20">
            {notes.map((note, index) => (
              <StickyNote key={index} content={note} />
              ))}
          </div>
        </div>
      </div>
    );
}

export default Board