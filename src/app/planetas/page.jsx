'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Planetas() {
  const [planetas, setPlanetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanetas = async () => {
      try {
        // Substitua pela URL da sua API
        const response = await fetch('http://localhost:3001/api/planetas');
        
        if (!response.ok) {
          throw new Error('Erro ao carregar planetas');
        }
        
        const data = await response.json();
        setPlanetas(data);
      } catch (err) {
        setError(err.message);
        // Dados de exemplo para quando a API não estiver disponível
        setPlanetas([
          {
            id: 1,
            nome: 'Terra',
            descricao: 'Planeta natal de Goku e lar de muitos personagens principais da série.',
            populacao: '7.8 bilhões',
            clima: 'Temperado variado',
            gravidade: '1x',
            imagem: 'https://via.placeholder.com/400x300/0066cc/ffffff?text=Terra',
            habitantes: ['Humanos', 'Saiyajins']
          },
          {
            id: 2,
            nome: 'Nameku',
            descricao: 'Planeta verde dos Namekuseijins, conhecido pelas Esferas do Dragão.',
            populacao: '~100',
            clima: 'Tropical úmido',
            gravidade: '1x',
            imagem: 'https://via.placeholder.com/400x300/00ff88/000000?text=Nameku',
            habitantes: ['Namekuseijins']
          },
          {
            id: 3,
            nome: 'Vegeta',
            descricao: 'Antigo planeta dos Saiyajins, destruído por Freeza.',
            populacao: 'Extinto',
            clima: 'Árido',
            gravidade: '10x',
            imagem: 'https://via.placeholder.com/400x300/ff4444/ffffff?text=Vegeta',
            habitantes: ['Saiyajins (extintos)']
          },
          {
            id: 4,
            nome: 'Kai',
            descricao: 'Planeta sagrado dos Kaioshins no reino divino.',
            populacao: 'Poucos',
            clima: 'Celestial',
            gravidade: '10x',
            imagem: 'https://via.placeholder.com/400x300/ffd700/000000?text=Kai',
            habitantes: ['Kaioshins', 'Kibito']
          }
        ]);
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
                    src={planeta.imagem}
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
                    <span className={styles.statIcon}>👥</span>
                    <div>
                      <span className={styles.statLabel}>População:</span>
                      <span className={styles.statValue}>{planeta.populacao}</span>
                    </div>
                  </div>
                  
                  <div className={styles.statItem}>
                    <span className={styles.statIcon}>🌡️</span>
                    <div>
                      <span className={styles.statLabel}>Clima:</span>
                      <span className={styles.statValue}>{planeta.clima}</span>
                    </div>
                  </div>
                  
                  <div className={styles.statItem}>
                    <span className={styles.statIcon}>⚖️</span>
                    <div>
                      <span className={styles.statLabel}>Gravidade:</span>
                      <span className={styles.statValue}>{planeta.gravidade}</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.habitantes}>
                  <h4>Habitantes:</h4>
                  <div className={styles.habitantesList}>
                    {planeta.habitantes.map((habitante, index) => (
                      <span key={index} className={styles.habitanteTag}>
                        {habitante}
                      </span>
                    ))}
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