import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';


export default function Home() {
  return (
    <div className={styles.homepage}>
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
              <Image 
              src="/image/esfera4estrela.png" 
              alt="Energy Sphere"
              width={300}
              height={300}
              />
            </div>
          </div>
        </div>
      </section>
            
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>40+</div>
              <div className={styles.statLabel}>Anos de História</div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statNumber}>12</div>
              <div className={styles.statLabel}>Universos</div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statNumber}>700+</div>
              <div className={styles.statLabel}>Episódios</div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statNumber}>∞</div>
              <div className={styles.statLabel}>Fãs pelo Mundo</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Pronto para sua Jornada?</h2>
            <p>
              Junte-se a milhões de fãs ao redor do mundo e mergulhe no universo 
              mais épico dos animes e mangás. Sua aventura começa agora!
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/personagens" className="btn btn-primary">
                Começar Exploração
              </Link>
              <Link href="/contato" className="btn btn-secondary">
                Deixe seu Feedback
              </Link>
            </div>
          </div>
        </div>
      </section>

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
