import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 50px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  background-color: #ce1616;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

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

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/cadastros?email=${email}&senha=${senha}`);
      const cadastros = await response.json();

      if (cadastros.length > 0) {
        console.log('Login bem-sucedido!', cadastros[0]);

        // Redireciona para a tela Home (ou outra rota desejada após o login)
        navigate('/home');
      } else {
        console.log('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao realizar o login', error);
    }
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <LoginForm>
        <StyledInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <StyledInput type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <StyledButton onClick={handleLogin}>Login</StyledButton>
      </LoginForm>
      <LoginPageLink>
        Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
      </LoginPageLink>
    </LoginContainer>
  );
};

export default Login;


