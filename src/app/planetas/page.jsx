'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Planetas() {
  const [planetas, setPlanetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchPlanetas = async () => {
      try {
        const response = await fetch(`${API_URL}/planetas`);
         
        
        if (!response.ok) {
          throw new Error('Erro ao carregar planetas');
        }
        
        const data = await response.json();
        setPlanetas(data);
      } catch (err) {
        setError(err.message);
        // Dados de exemplo para quando a API não estiver disponível
      } finally {
        setLoading(false);
      }
    };

    fetchPlanetas();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.planetOrbit}>
          <div className={styles.planet}></div>
          <div className={styles.loadingText}>Explorando o Universo...</div>
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
          {planetas.map((planeta) => (
            <div key={planeta.id} className={styles.planetaCard}>
              <div className={styles.cardHeader}>
                <div className={styles.planetImageContainer}>
                  <img
                    src={planeta.imageUrl}
                    alt={planeta.nome}
                    className={styles.planetImage}
                  />
                  <div className={styles.planetGlow}></div>
                </div>
                <h3 className={styles.planetName}>{planeta.nome}</h3>
              </div>
              
              <div className={styles.cardContent}>
                <p className={styles.planetDescription}>
                  {planeta.descricao}
                </p>
                
                <div className={styles.planetStats}>
                  <div className={styles.statItem}>
                     <p className={styles.statValue}> Nome: {planeta.name}</p>
                    
                      <p className={styles.statLabel}> Nível de Poder: {planeta.nivelPoder}</p>
                      
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
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