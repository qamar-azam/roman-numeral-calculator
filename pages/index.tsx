import Head from 'next/head';
import Image from 'next/image';

import styles from '@/pages/index.module.css';
import RomanNumeralCalculator from 'app/components/roman-numeral-calculator';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className={styles.title}>Roman Numeral Calculator</h1>

        <RomanNumeralCalculator />
      </main>
    </div>
  );
}
