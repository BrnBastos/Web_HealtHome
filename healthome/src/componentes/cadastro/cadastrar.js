import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CadastroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ce1616;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #941111;
  }
`;

const LoginPageLink = styled.div`
  margin-top: 10px;
  text-align: center;

  a {
    color: #ce1616;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Cadastrar = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [erroCadastro, setErroCadastro] = useState('');

  const verificarEmailExistente = async (email) => {
    try {
      const response = await fetch(`http://localhost:3001/cadastros?email=${email}`);
      const cadastros = await response.json();
      return cadastros.length > 0;
    } catch (error) {
      console.error('Erro ao verificar email existente:', error.message);
      return false;
    }
  };

  const handleSubmit = async () => {
    // Verifica se o email já está cadastrado
    const emailExistente = await verificarEmailExistente(email);
    if (emailExistente) {
      setErroCadastro('Email já cadastrado. Por favor, use outro.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/cadastros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          nome,
          senha,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário');
      }
  
      setEmail('');
      setNome('');
      setSenha('');
      setErroCadastro('');

      // Redirecione para a tela de login após o cadastro bem-sucedido
      window.location.href = '/login';
    } catch (error) {
      console.error('Erro ao cadastrar:', error.message);
    }
  };

  return (
    <CadastroContainer>
      <h2>Cadastre-se</h2>
      <Input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      {erroCadastro && <p style={{ color: 'red' }}>{erroCadastro}</p>}
      <Button onClick={handleSubmit}>Cadastrar</Button>
      <LoginPageLink>
        Já tem uma conta? <Link to="/login">Faça login</Link>
      </LoginPageLink>
    </CadastroContainer>
  );
};

export default Cadastrar;
