import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Dragon Ball Universe</h4>
            <p>
              Explore o universo épico criado por Akira Toriyama. 
              Descubra personagens, planetas e raças incríveis!
            </p>
          
          </div>
          
          <div className={styles.footerSection}>
            <h4>Navegação</h4>
            <ul className={styles.footerLinks}>
              <li><a href="/">Home</a></li>
              <li><a href="/personagens">Personagens</a></li>
              <li><a href="/planetas">Planetas</a></li>
              <li><a href="/racas">Raças</a></li>
              <li><a href="/contato">Feedback</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Sobre o Projeto</h4>
            <p>
              Frontend desenvolvido em React/Next.js com CSS puro, 
              consumindo uma API personalizada de Dragon Ball.
            </p>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Dragon Ball Universe. Projeto educacional inspirado na obra de Akira Toriyama.</p>
        </div>
      </div>
    </footer>
  );
}