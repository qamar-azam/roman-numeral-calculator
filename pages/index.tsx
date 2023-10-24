import Head from 'next/head';
import RomanNumeralCalculator from '../app/components/roman-numeral-calculator';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='text-center'>
        <h1 className='text-4xl mt-8 mb-8'>Roman Numeral Calculator</h1>
        <RomanNumeralCalculator />
      </main>
    </div>
  );
}
