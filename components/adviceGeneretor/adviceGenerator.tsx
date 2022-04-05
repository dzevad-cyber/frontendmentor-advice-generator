import axios from 'axios';
import Image from 'next/image';
import { useEffect, useReducer, useState } from 'react';

import styles from './adviceGenerator.module.scss';

interface IAdvice {
  advice?: string;
  id?: string;
}

const AdviceGenerator = () => {
  const [advice, setAdvice] = useState<IAdvice>({});
  const [defaultAdvice] = useState({
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    id: '117',
  });

  const handleGenerateAdvice = async () => {
    try {
      const { data } = await axios.get('https://api.adviceslip.com/advice');
      const { slip } = data;

      setAdvice(slip);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <article className={styles.advice}>
      <h2 className={styles.title}>
        Advice &#35;{advice.id ? advice.id : defaultAdvice.id}
      </h2>
      <p className={styles.text}>
        &ldquo;{advice.advice ? advice.advice : defaultAdvice.advice}
        &rdquo;
      </p>
      <div className={styles.graphic}>
        <div className={styles.mobileSvg}>
          <Image
            src='/images/pattern-divider-mobile.svg'
            alt='two vertical lines divder'
            width={295}
            height={16}
          />
        </div>
        <div className={styles.desktopSvg}>
          <Image
            src='/images/pattern-divider-desktop.svg'
            alt='two vertical lines divder'
            width={444}
            height={16}
          />
        </div>
      </div>
      <button className={styles.button} onClick={handleGenerateAdvice}>
        <div className={styles.iconDiceWrapper}>
          <Image
            src='/images/icon-dice.svg'
            alt='dice cube number 5'
            width={24}
            height={24}
          />
        </div>
      </button>
    </article>
  );
};

export default AdviceGenerator;
