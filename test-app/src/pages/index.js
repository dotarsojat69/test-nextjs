import React, { useState, useCallback } from 'react';

const GenerateAngka = () => {
  const [count, setCount] = useState('');
  const [numbers, setNumbers] = useState([]);

  const generateRandomNumber = useCallback(() => {
    return Math.floor(Math.random() * 5) + 1;
  }, []);

  const generateNumbers = () => {
    const generatedNumbers = Array.from({ length: parseInt(count) }, generateRandomNumber);
    setNumbers(generatedNumbers);
  };

  const handleNumberClick = (index) => {
    setNumbers(prevNumbers => {
      const newNumbers = [...prevNumbers];
      newNumbers[index] = generateRandomNumber();
      return newNumbers;
    });
  };

  return (
    <div className="p-4 items-center">
      <div className="mb-4 items-center justify-center">
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          placeholder="Tuliskan jumlah angka"
          className="border p-2 mr-2"
        />
        <button
          onClick={generateNumbers}
          className="bg-slate-500 text-white px-4 py-2 rounded hover:bg-slate-800"
        >
          Generate
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {numbers.map((number, index) => (
          <div 
            key={index} 
            className="border w-16 h-16 flex items-center justify-center text-2xl cursor-pointer hover:bg-gray-100"
            onClick={() => handleNumberClick(index)}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerateAngka;