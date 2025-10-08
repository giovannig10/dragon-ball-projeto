'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './page.module.css';

export default function Racas() {
  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [racas, setRacas] = useState([]);
  const [planetas, setPlanetas] = useState([]);

  const personagensUrl = "http://localhost:4001/personagens";
  const racaUrl = "http://localhost:4001/raca";
  const planetasUrl = "http://localhost:4001/planetas";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Buscar personagens e raças simultaneamente
        const [personagensResponse, racasResponse, planetasResponse] = await Promise.all([
          axios.get(personagensUrl),
          axios.get(racaUrl),
          axios.get(planetasUrl)
        ]);
        
        setPersonagens(personagensResponse.data);
        setRacas(racasResponse.data);
        setPlanetas(planetasResponse.data);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar dados:");
        console.error(error);
        setError(error.message);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);


  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.dnaSpiral}>
          <div className={styles.dnaStrand}></div>
          <div className={styles.dnaStrand}></div>
        </div>
        <span className={styles.loadingText}>Analisando DNA das Raças...</span>
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
          {racas.map((raca) => {
            return (
              <div key={raca.id} className={styles.racaCard}>
                <div className={styles.cardImageContainer}>
                  <img
                    src={raca.imageUrl}
                    alt={raca.name}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay}>
                    <span className={styles.overlayText}>Ver Detalhes</span>
                  </div>
                </div>
                
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{raca.name}</h3>
                  
                  <div className={styles.cardInfo}>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>
                        Nível de Poder Médio: {raca.nivelPoderMedio}
                      </span>
                    </div>
                  </div>
                  
                  <p className={styles.cardDescription}>
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
                  
                  <div className={styles.cardActions}>
                    <button className={styles.detailsButton}>
                      Mais Detalhes
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
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