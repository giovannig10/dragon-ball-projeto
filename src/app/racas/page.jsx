'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Racas() {
  const [racas, setRacas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchRacas = async () => {
      try {
        const response = await fetch(`${API_URL}/raca`);
        
        if (!response.ok) {
          throw new Error('Erro ao carregar raças');
        }
        
        const data = await response.json();
        setRacas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRacas();
  }, []);


  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.dnaSpiral}>
          <div className={styles.dnaStrand}></div>
          <div className={styles.dnaStrand}></div>
        </div>
        <div className={styles.loadingText}>Analisando DNA das Raças...</div>
      </div>
    );
  }

  if (error && racas.length === 0) {
    return (
      <div className={styles.errorContainer}>
        <h2>Erro ao carregar raças</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles.racasPage}>
      <div className="container">
        <header className={styles.pageHeader}>
          <h1>Raças do Universo Dragon Ball</h1>
          <p>Conheça as diferentes espécies que habitam o cosmos!</p>
        </header>

        <div className={styles.racasGrid}>
          {racas.map((raca) => (
            <div key={raca.id} className={styles.racaCard}>
              <div className={styles.cardHeader}>
                <img
                  src={raca.imageUrl}
                  alt={raca.nome}
                  className={styles.imageUrl}
                />
                <div className={styles.cardTitle}>
                  <h3 className={styles.racaName}>{raca.nome}</h3>
                  <div 
                    className={styles.powerLevel}
                  
                  >
                    Nível: {raca.nivelPoder}
                  </div>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <p className={styles.racaDescription}>
                  {raca.descricao}
                </p>
                
                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>Características</h4>
                  <p className={styles.caracteristicasList}>{raca.caracteristicas}</p>
               
                  
                </div>
                
                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>Habilidades Especiais</h4>
                  <p className={styles.habilidadesList}>{raca.habilidadesEspeciais}</p>
                  
                  </div>
                </div>
              </div>
          
          ))}
        </div>

        {racas.length === 0 && (
          <div className={styles.emptyState}>
            <h3>Nenhuma raça encontrada</h3>
            <p>Verifique se a API está funcionando corretamente.</p>
          </div>
        )}
      </div>
    </div>

  );
}