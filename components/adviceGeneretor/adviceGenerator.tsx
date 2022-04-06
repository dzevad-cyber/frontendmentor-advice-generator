import axios from 'axios';
import Image from 'next/image';

import { useAdviceApiContext } from '../../context/adviceApiContext';
import styles from './adviceGenerator.module.scss';

const AdviceGenerator = () => {
  const advice: any = useAdviceApiContext();

  const { adviceContext, setAdviceContext } = advice;

  const handleGenerateAdvice = async () => {
    try {
      const { data } = await axios.get('https://api.adviceslip.com/advice');
      const { slip } = data;

      setAdviceContext(slip);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <article className={styles.advice}>
      <h2 className={styles.title}>
        Advice &#35;{advice.id ? advice.id : adviceContext.id}
      </h2>
      <p className={styles.text}>
        &ldquo;{advice.advice ? advice.advice : adviceContext.advice}
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
