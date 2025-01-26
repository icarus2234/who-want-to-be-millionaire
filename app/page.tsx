'use client';

import { useState } from 'react';

import { AnswerOption } from '@/modules/quiz/components/answer-option';

export default function Home() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const correctOption = 'Option 2';

  const options = ['Option 1'];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h1>Welcome to Who Wants to Be a Millionaire!</h1>
      {options.map((option) => (
        <AnswerOption
          key={option}
          option={option}
          isSelected={selectedOption === option}
          isCorrect={option === correctOption}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}
