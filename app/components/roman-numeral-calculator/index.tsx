import { useState } from 'react';
import { getRomanValue } from '../../utils';

function RomanNumeralCalculator() {
  const [input, setInput] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const convertIntToRoman = (e: React.FormEvent) => {
    e.preventDefault();

    // check input shouldn't be less then 0
    if (input < 0) {
      setError('Please enter non negative integers only.');
    }
    // check input shouldn't be greater then 1000
    else if (input > 1000) {
      setError('Please enter number between 1 to 1000.');
    } else {
      setResult(getRomanValue(input));
    }
  };

  return (
    <>
      {error && <div className='text-rose-600'>{error}</div>}
      <form onSubmit={convertIntToRoman}>
        <input
          type='text'
          role='textbox'
          value={input || ''}
          className='border-2 rounded p-2 mr-2'
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <button type='submit' className='bg-blue-500 p-2 rounded text-white'>
          Convert
        </button>
      </form>
      {result && <div className='mt-4 text-2xl'>{result}</div>}
    </>
  );
}

export default RomanNumeralCalculator;
