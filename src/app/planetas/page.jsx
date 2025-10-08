'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './page.module.css';

export default function Planetas() {
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
        <div className={styles.planetOrbit}>
          <div className={styles.planet}></div>
          <span className={styles.loadingText}>Explorando o Universo...</span>
        </div>
      </div>
    );
  }

  if (error && planetas.length === 0) {

    return (
      <div className={styles.errorContainer}>
        <h2>Erro ao carregar planetas</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles.planetasPage}>
      <div className="container">
        <header className={styles.pageHeader}>
          <h1>Planetas do Universo Dragon Ball</h1>
          <p>Descubra os mundos fascinantes onde as aventuras acontecem!</p>
        </header>

        <div className={styles.planetasGrid}>
          {planetas.map((planeta) => {
            return (
              <div key={planeta.id} className={styles.planetaCard}>
                <div className={styles.cardImageContainer}>
                  <img
                    src={planeta.imageUrl}
                    alt={planeta.name}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay}>
                    <span className={styles.overlayText}>Ver Detalhes</span>
                  </div>
                </div>
                
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{planeta.name}</h3>
                  
                  <div className={styles.cardInfo}>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>
                        Nível de Poder: {planeta.nivelPoder}
                      </span>
                    </div>
                  </div>
                  
                  <p className={styles.cardDescription}>
                    {planeta.descricao}
                  </p>
                  
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

        {planetas.length === 0 && (
          <div className={styles.emptyState}>
            <h3>Nenhum planeta encontrado</h3>
            <p>Verifique se a API está funcionando corretamente.</p>
          </div>
        )}
      </div>
    </div>
  );
}