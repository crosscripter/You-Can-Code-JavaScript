import styles from './Display.module.css';

const Display = ({ value }) => {
  return <input type="text" className={styles.display} value={value} disabled />;
};

export default Display;
