const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export const apiRequest = async (endpoint, options = {}) => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Erro na API (${endpoint}):`, error);
    throw error;
  }
};

export const personagensApi = {
  getAll: () => apiRequest('/personagens'),
  getById: (id) => apiRequest(`/personagens/${id}`),
};

export const planetasApi = {
  getAll: () => apiRequest('/planetas'),
  getById: (id) => apiRequest(`/planetas/${id}`),
};

export const racasApi = {
  getAll: () => apiRequest('/racas'),
  getById: (id) => apiRequest(`/racas/${id}`),
};

export const fallbackData = {
  personagens: [
    {
      id: 1,
      nome: 'Goku',
      raca: 'Saiyajin',
      planeta: 'Terra',
      imagem: 'https://via.placeholder.com/300x400/ff6b00/ffffff?text=Goku',
      descricao: 'O protagonista principal da série, conhecido por sua força e determinação.'
    },
    {
      id: 2,
      nome: 'Vegeta',
      raca: 'Saiyajin',
      planeta: 'Vegeta',
      imagem: 'https://via.placeholder.com/300x400/004085/ffffff?text=Vegeta',
      descricao: 'O Príncipe dos Saiyajins, orgulhoso e poderoso guerreiro.'
    },
    {
      id: 3,
      nome: 'Piccolo',
      raca: 'Namekuseijin',
      planeta: 'Nameku',
      imagem: 'https://via.placeholder.com/300x400/00ff88/000000?text=Piccolo',
      descricao: 'Guerreiro namekuseijin e mentor de Gohan.'
    },
    {
      id: 4,
      nome: 'Gohan',
      raca: 'Meio-Saiyajin',
      planeta: 'Terra',
      imagem: 'https://via.placeholder.com/300x400/ffd700/000000?text=Gohan',
      descricao: 'Filho de Goku, meio-saiyajin com grande potencial.'
    }
  ],
  planetas: [
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
    }
  ],
  racas: [
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
        'Zenkai'
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
    }
  ]
};