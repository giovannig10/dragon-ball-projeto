'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Personagens() {
  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchPersonagens = async () => {
      try {
        const response = await fetch(`${API_URL}/personagens`);
        
        if (!response.ok) {
          throw new Error('Erro ao carregar personagens');
        }
        
        const data = await response.json();
        setPersonagens(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonagens();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.energySphere}>
          <span className={styles.loadingText}>Carregando Personagens...</span>
        </div>
      </div>
    );
  }

  if (error && personagens.length === 0) {
    return (
      <div className={styles.errorContainer}>
        <h2>Erro ao carregar personagens</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles.personagensPage}>
      <div className="container">
        <header className={styles.pageHeader}>
          <h1>Personagens de Dragon Ball</h1>
          <p>Conheça os guerreiros mais poderosos do universo!</p>
        </header>

        <div className={styles.personagensGrid}>
          {personagens.map((personagem) => (
            <div key={personagem.id} className={styles.personagemCard}>
              <div className={styles.cardImageContainer}>
                <img
                  src={personagem.imageUrl}
                  alt={personagem.name}
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}>
                  <span className={styles.overlayText}>Ver Detalhes</span>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{personagem.name}</h3>
                
                <div className={styles.cardInfo}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Raça: {personagem.raca}</span>
                    
                  </div>
                  
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Planeta: {personagem.planeta}</span>
                  </div>
                </div>
                
                <p className={styles.cardDescription}>
                  {personagem.descricao}
                </p>
                
                <div className={styles.cardActions}>
                  <button className={styles.detailsButton}>
                    Mais Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {personagens.length === 0 && (
          <div className={styles.emptyState}>
            <h3>Nenhum personagem encontrado</h3>
            <p>Verifique se a API está funcionando corretamente.</p>
          </div>
        )}
      </div>
    </div>
  );
}