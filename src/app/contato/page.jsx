'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Feedback() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    avaliacao: '',
    categoria: '',
    mensagem: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

  const avaliacaoOptions = [
    { value: 5, emoji: '🌟', label: 'Excelente' },
    { value: 4, emoji: '😊', label: 'Muito Bom' },
    { value: 3, emoji: '😐', label: 'Regular' },
    { value: 2, emoji: '😕', label: 'Ruim' },
    { value: 1, emoji: '😤', label: 'Muito Ruim' }
  ];

  const categoriaOptions = [
    'Design do Site',
    'Conteúdo sobre Dragon Ball',
    'Navegação',
    'Performance',
    'Funcionalidades',
    'Outro'
  ];

  // Validação simplificada
  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'nome':
        if (!value.trim()) {
          newErrors.nome = 'Nome é obrigatório';
        } else {
          delete newErrors.nome;
        }
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = 'E-mail é obrigatório';
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'E-mail inválido';
        } else {
          delete newErrors.email;
        }
        break;

      case 'avaliacao':
        if (!value) {
          newErrors.avaliacao = 'Selecione uma avaliação';
        } else {
          delete newErrors.avaliacao;
        }
        break;

      case 'categoria':
        if (!value) {
          newErrors.categoria = 'Selecione uma categoria';
        } else {
          delete newErrors.categoria;
        }
        break;

      case 'mensagem':
        if (!value.trim()) {
          newErrors.mensagem = 'Mensagem é obrigatória';
        } else {
          delete newErrors.mensagem;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      avaliacao: rating
    }));

    if (touched.avaliacao) {
      validateField('avaliacao', rating);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validar todos os campos
    const fieldsToValidate = ['nome', 'email', 'avaliacao', 'categoria', 'mensagem'];
    let isValid = true;

    fieldsToValidate.forEach(field => {
      if (!validateField(field, formData[field])) {
        isValid = false;
      }
    });

    // Marcar todos os campos como tocados
    const allTouched = {};
    fieldsToValidate.forEach(field => {
      allTouched[field] = true;
    });
    setTouched(allTouched);

    if (isValid) {
      try {
        // Simular envio do feedback
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log('Feedback enviado:', formData);
        setIsSubmitted(true);
        
        // Reset após 3 segundos
        setTimeout(() => {
          setFormData({
            nome: '',
            email: '',
            avaliacao: '',
            categoria: '',
            mensagem: ''
          });
          setIsSubmitted(false);
          setTouched({});
          setErrors({});
        }, 3000);
        
      } catch (error) {
        console.error('Erro ao enviar feedback:', error);
      }
    }

    setIsSubmitting(false);
  };

  const getFieldClass = (fieldName) => {
    let className = styles.formField;
    if (errors[fieldName] && touched[fieldName]) {
      className += ` ${styles.fieldError}`;
    } else if (touched[fieldName] && !errors[fieldName]) {
      className += ` ${styles.fieldValid}`;
    }
    return className;
  };

  if (isSubmitted) {
    return (
      <div className={styles.feedbackPage}>
        <div className="container">
          <div className={styles.successContainer}>
            <div className={styles.successIcon}>🐉</div>
            <h1 className={styles.successTitle}>Feedback Recebido!</h1>
            <p className={styles.successMessage}>
              Obrigado pela sua opinião! Ela nos ajuda a melhorar sempre.
            </p>
            <div className={styles.dragonBalls}>
              <span className={styles.dragonBall}>⭐</span>
              <span className={styles.dragonBall}>⭐</span>
              <span className={styles.dragonBall}>⭐</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.feedbackPage}>
      <div className="container">
        {/* Header da página */}
        <header className={styles.pageHeader}>
          <h1>Deixe seu Feedback</h1>
          <p>Sua opinião é muito importante para nós!</p>
        </header>

        {/* Formulário de feedback */}
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.feedbackForm} noValidate>
            
            {/* Informações básicas */}
            <div className={styles.basicInfo}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="nome" className={styles.formLabel}>
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={getFieldClass('nome')}
                    placeholder="Como você se chama?"
                    required
                  />
                  {errors.nome && touched.nome && (
                    <span className={styles.errorMessage}>{errors.nome}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Seu E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={getFieldClass('email')}
                    placeholder="seu@email.com"
                    required
                  />
                  {errors.email && touched.email && (
                    <span className={styles.errorMessage}>{errors.email}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Avaliação com estrelas */}
            <div className={styles.ratingSection}>
              <h3 className={styles.sectionTitle}>
                Como você avalia nosso site?
              </h3>
              <div className={styles.ratingContainer}>
                {avaliacaoOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleRatingClick(option.value)}
                    className={`${styles.ratingButton} ${
                      formData.avaliacao === option.value ? styles.ratingActive : ''
                    }`}
                  >
                    <span className={styles.ratingEmoji}>{option.emoji}</span>
                    <span className={styles.ratingLabel}>{option.label}</span>
                  </button>
                ))}
              </div>
              {errors.avaliacao && touched.avaliacao && (
                <span className={styles.errorMessage}>{errors.avaliacao}</span>
              )}
            </div>

            {/* Categoria */}
            <div className={styles.categorySection}>
              <div className={styles.formGroup}>
                <label htmlFor="categoria" className={styles.formLabel}>
                  Sobre o que é seu feedback?
                </label>
                <select
                  id="categoria"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={getFieldClass('categoria')}
                  required
                >
                  <option value="">Selecione uma categoria</option>
                  {categoriaOptions.map((opcao) => (
                    <option key={opcao} value={opcao}>{opcao}</option>
                  ))}
                </select>
                {errors.categoria && touched.categoria && (
                  <span className={styles.errorMessage}>{errors.categoria}</span>
                )}
              </div>
            </div>

            {/* Mensagem */}
            <div className={styles.messageSection}>
              <div className={styles.formGroup}>
                <label htmlFor="mensagem" className={styles.formLabel}>
                  Conte-nos mais detalhes
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={getFieldClass('mensagem')}
                  placeholder="O que você gostou? O que podemos melhorar? Sugestões são bem-vindas!"
                  rows="4"
                  required
                ></textarea>
                {errors.mensagem && touched.mensagem && (
                  <span className={styles.errorMessage}>{errors.mensagem}</span>
                )}
              </div>
            </div>

            {/* Botão de envio */}
            <div className={styles.submitSection}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.loadingSpinner}></span>
                    Enviando...
                  </>
                ) : (
                  <>
                    <span className={styles.buttonIcon}>🚀</span>
                    Enviar Feedback
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}