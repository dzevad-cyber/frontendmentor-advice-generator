import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from './adviceGenerator.module.scss';

const AdviceGenerator = () => {
  const [advice, setAdvice] = useState('');
  const [id, setId] = useState('');

  const handleGenerateAdvice = async () => {
    try {
      const { data } = await axios.get('https://api.adviceslip.com/advice');
      const { slip } = data;

      setAdvice(slip.advice);
      setId(slip.id);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleGenerateAdvice();
  }, []);

  console.log('advice >>> ', advice);
  console.log('id >>> ', id);
  return (
    <article className={styles.advice}>
      <h2 className={styles.title}>Advice &#x00023;{id}</h2>
      <p className={styles.text}>
        {/* {advice} */}
        &ldquo;It is easy to sit up and take notice, what&lsquo;s difficult is
        getting up and taking action.&ldquo;
      </p>
      <div className={styles.graphic}>
        <Image
          src='/images/pattern-divider-mobile.svg'
          alt='two lines divder'
          width={295}
          height={16}
        />
      </div>
      <button className={styles.button}>
        <div className={styles.iconDiceWrapper}>
          <Image
            src='/images/icon-dice.svg'
            alt='dice cuber number 5'
            width={24}
            height={24}
          />
        </div>
      </button>
    </article>
  );
};

export default AdviceGenerator;
