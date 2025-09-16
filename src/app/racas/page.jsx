'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Racas() {
  const [racas, setRacas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRacas = async () => {
      try {
        // Substitua pela URL da sua API
        const response = await fetch('http://localhost:3001/api/racas');
        
        if (!response.ok) {
          throw new Error('Erro ao carregar raças');
        }
        
        const data = await response.json();
        setRacas(data);
      } catch (err) {
        setError(err.message);
        // Dados de exemplo para quando a API não estiver disponível
        setRacas([
          {
            id: 1,
            nome: 'Saiyajin',
            descricao: 'Uma raça guerreira do planeta Vegeta, conhecida por sua força de luta e capacidade de transformação.',
            caracteristicas: [
              'Cabelo negro espetado',
              'Cauda de macaco (algumas vezes)',
              'Força sobre-humana',
              'Capacidade de transformação'
            ],
            habilidades: [
              'Super Saiyajin',
              'Kamehameha',
              'Controle de Ki',
              'Zenkai (aumento de poder após quase morrer)'
            ],
            planeta: 'Vegeta (destruído)',
            populacao: 'Quase extinta',
            imagem: 'https://via.placeholder.com/300x200/ffd700/000000?text=Saiyajin',
            nivelPoder: 'Extremamente Alto'
          },
          {
            id: 2,
            nome: 'Namekuseijin',
            descricao: 'Habitantes do planeta Nameku, uma raça pacífica com habilidades especiais e longevidade.',
            caracteristicas: [
              'Pele verde',
              'Antenas na cabeça',
              'Corpo alto e magro',
              'Longevidade extrema'
            ],
            habilidades: [
              'Regeneração',
              'Criação das Esferas do Dragão',
              'Telepatia',
              'Magia'
            ],
            planeta: 'Nameku',
            populacao: 'Baixa (~100)',
            imagem: 'https://via.placeholder.com/300x200/00ff88/000000?text=Namekuseijin',
            nivelPoder: 'Alto'
          },
          {
            id: 3,
            nome: 'Humano',
            descricao: 'Habitantes da Terra, uma das raças mais adaptáveis do universo Dragon Ball.',
            caracteristicas: [
              'Diversidade física',
              'Inteligência adaptativa',
              'Capacidade de aprendizado',
              'Criatividade'
            ],
            habilidades: [
              'Artes marciais',
              'Tecnologia avançada',
              'Manipulação de Ki',
              'Técnicas especiais únicas'
            ],
            planeta: 'Terra',
            populacao: 'Bilhões',
            imagem: 'https://via.placeholder.com/300x200/0066cc/ffffff?text=Humano',
            nivelPoder: 'Médio a Alto'
          },
          {
            id: 4,
            nome: 'Androide',
            descricao: 'Seres artificiais criados pelo Dr. Gero, combinando tecnologia e poder sobrenatural.',
            caracteristicas: [
              'Construção cibernética',
              'Energia infinita (alguns)',
              'Aparência humana',
              'Resistência extrema'
            ],
            habilidades: [
              'Energia infinita',
              'Força sobre-humana',
              'Técnicas energéticas',
              'Absorção de energia'
            ],
            planeta: 'Terra (criados)',
            populacao: 'Poucos',
            imagem: 'https://via.placeholder.com/300x200/ff4444/ffffff?text=Androide',
            nivelPoder: 'Extremamente Alto'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchRacas();
  }, []);

  const getPowerColor = (nivel) => {
    switch (nivel.toLowerCase()) {
      case 'extremamente alto':
        return '#ff4444';
      case 'alto':
        return '#ff9500';
      case 'médio a alto':
        return '#ffd700';
      default:
        return '#00ff88';
    }
  };

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
                  src={raca.imagem}
                  alt={raca.nome}
                  className={styles.racaImage}
                />
                <div className={styles.cardTitle}>
                  <h3 className={styles.racaName}>{raca.nome}</h3>
                  <div 
                    className={styles.powerLevel}
                    style={{ backgroundColor: getPowerColor(raca.nivelPoder) }}
                  >
                    {raca.nivelPoder}
                  </div>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <p className={styles.racaDescription}>
                  {raca.descricao}
                </p>
                
                <div className={styles.racaInfo}>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>🪐 Planeta de Origem:</span>
                    <span className={styles.infoValue}>{raca.planeta}</span>
                  </div>
                  
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>👥 População:</span>
                    <span className={styles.infoValue}>{raca.populacao}</span>
                  </div>
                </div>
                
                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>Características Físicas</h4>
                  <ul className={styles.caracteristicasList}>
                    {raca.caracteristicas.map((caracteristica, index) => (
                      <li key={index} className={styles.caracteristicaItem}>
                        <span className={styles.caracteristicaIcon}>🧬</span>
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>Habilidades Especiais</h4>
                  <div className={styles.habilidadesList}>
                    {raca.habilidades.map((habilidade, index) => (
                      <span key={index} className={styles.habilidadeTag}>
                        ⚡ {habilidade}
                      </span>
                    ))}
                  </div>
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