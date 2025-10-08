'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './page.module.css';

export default function Personagens() {
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
          {personagens.map((personagem) => {
            const personagemRaca = racas.find((r) => r.id === personagem.racaId);
            const personagemPlaneta = planetas.find((p) => p.id === personagem.planetaId);
            
            return (
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
                      <span className={styles.infoLabel}>
                        Raça: {personagemRaca ? personagemRaca.name : 'Desconhecida'}
                      </span>
                    </div>
                    
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Planeta: {personagemPlaneta ? personagemPlaneta.name : 'Desconhecido'}</span>
                    </div>
                    
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>
                        Ki: {personagem.ki}
                      </span>
                    </div>
                  </div>
                  
                  <p className={styles.cardDescription}>
                    {personagem.biografia}
                  </p>
                  
                  <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>Técnicas Especiais</h4>
                    <p className={styles.tecnicasList}>{personagem.tecnicasEspeciais}</p>
                  </div>
                  
                  <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>Transformações</h4>
                    <p className={styles.transformacoesList}>{personagem.transformacoes}</p>
                  </div>
                  
                  <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>Sagas</h4>
                    <p className={styles.sagasList}>{personagem.sagas}</p>
                  </div>
                </div>
              </div>
            );
          })}
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