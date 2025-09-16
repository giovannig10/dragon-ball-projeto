import styles from './Loading.module.css';

export default function Loading({ message = "Carregando...", type = "default" }) {
  return (
    <div className={styles.loadingContainer}>
      <div className={`${styles.loader} ${styles[type]}`}>
        {type === 'energy' && (
          <div className={styles.energySphere}>
            <span className={styles.dragonSymbol}>🐉</span>
          </div>
        )}
        
        {type === 'planet' && (
          <div className={styles.planetOrbit}>
            <div className={styles.planet}></div>
          </div>
        )}
        
        {type === 'dna' && (
          <div className={styles.dnaSpiral}>
            <div className={styles.dnaStrand}></div>
            <div className={styles.dnaStrand}></div>
          </div>
        )}
        
        {type === 'default' && (
          <div className={styles.defaultSpinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
      
      <div className={styles.loadingText}>{message}</div>
    </div>
  );
}