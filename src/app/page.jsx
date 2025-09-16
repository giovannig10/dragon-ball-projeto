import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Bem-vindo ao Universo 
              <span className={styles.titleHighlight}> Dragon Ball</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Explore o mundo épico criado por Akira Toriyama
            </p>
            <p className={styles.heroDescription}>
              Descubra personagens lendários, planetas fascinantes e raças poderosas 
              que moldaram uma das sagas mais icônicas dos animes e mangás.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/personagens" className="btn btn-primary">
                Explorar Personagens
              </Link>
              <Link href="/planetas" className="btn btn-secondary">
                Descobrir Planetas
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.energySphere}>
              <span className={styles.dragonSymbol}>🐉</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>O que você pode explorar</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👨‍🚀</div>
              <h3>Personagens</h3>
              <p>
                Conheça guerreiros lendários como Goku, Vegeta, Piccolo e muitos outros. 
                Descubra suas histórias, poderes e transformações épicas.
              </p>
              <Link href="/personagens" className={styles.featureLink}>
                Ver Personagens →
              </Link>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🪐</div>
              <h3>Planetas</h3>
              <p>
                Explore mundos incríveis como a Terra, Nameku, Vegeta e outros planetas 
                que servem de cenário para as aventuras de Dragon Ball.
              </p>
              <Link href="/planetas" className={styles.featureLink}>
                Descobrir Planetas →
              </Link>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Raças</h3>
              <p>
                Saiba mais sobre Saiyajins, Namekuseijins, Androides e outras raças 
                fascinantes que habitam o universo de Dragon Ball.
              </p>
              <Link href="/racas" className={styles.featureLink}>
                Conhecer Raças →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutContent}>
            <h2>Sobre Dragon Ball</h2>
            <p>
              Dragon Ball é uma das franquias de anime e mangá mais influentes de todos os tempos, 
              criada pelo renomado mangaká Akira Toriyama. A história começou em 1984 e continua 
              cativando fãs ao redor do mundo com suas batalhas épicas, personagens carismáticos 
              e uma mitologia rica e complexa.
            </p>
            <p>
              Desde as aventuras iniciais de Goku criança em busca das Esferas do Dragão até 
              as batalhas cósmicas em Dragon Ball Super, esta saga nos ensina sobre amizade, 
              superação e a busca constante por se tornar mais forte.
            </p>
            <div className={styles.dragonBalls}>
              <span className={styles.dragonBall}>⭐</span>
              <span className={styles.dragonBall}>⭐</span>
              <span className={styles.dragonBall}>⭐</span>
              <span className={styles.dragonBall}>⭐</span>
              <span className={styles.dragonBall}>⭐</span>
              <span className={styles.dragonBall}>⭐</span>
              <span className={styles.dragonBall}>⭐</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
