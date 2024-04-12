import React, { useState } from 'react';

interface Props {
    onSubmit: (note: string) => void;
}

interface FormErrors {
    message?: string;
}

const NoteForm = ({ onSubmit }: Props) => {
  const [noteText, setNoteText] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const isEmojiOnly = (text: string) => {
    const emojiRegex = /\p{Emoji}/gu;
    return emojiRegex.test(text);
  };

  const emojiCount = (text: string) => {
    const emojiRegex = /\p{Emoji}/gu;
    const matches = text.match(emojiRegex);
    return matches ? matches.length : 0;
  };

  const handleChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setNoteText(value);
  };

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form inputs on submission
    if (noteText.trim() === '') {
      setErrors({ message: 'This field is required.' });
      return;
    } else if (!isEmojiOnly(noteText)) {
      setErrors({ message: 'Message must contain emojis only.'});
      return;
    } else if (emojiCount(noteText) > 1) {
      setErrors({ message: 'Max length is 1 character.' });
      return;
    }

    setErrors({});
    onSubmit(noteText);
    setNoteText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="mb-8">
        <textarea
          value={noteText}
          onChange={handleChange}
          placeholder="...or enter another emoji!"
          rows={4}
          cols={50}
        />
        {errors.message && (
          <p className="text-primary-500">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="rounded-full bg-secondary-500 px-5 py-2 hover:bg-primary-500 hover:text-white"
      >
        Add Emoji
      </button>
    </form>
  );
};

export default NoteForm;