import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Grafico from '../grafico/grafico';
import GraficoSono from '../grafico/graficosono';
import { useAuth } from '../AuthContext';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FlexDiv = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
`;

const TituloBemVindo = styled.p`
    font-size: 40px;
    text-align: center;
    padding: 20px 0px;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    animation: ${fadeIn} 2s ease-in-out;
`;

const ContainerBody = styled.div`
    font-size: 24px;
    text-align: center;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    animation: ${fadeIn} 2s ease-in-out forwards;
    animation-delay: 1.5s;
`;

function Home() {
    const [isVisibleTitulo, setIsVisibleTitulo] = useState(false);
    const [isVisibleBody, setIsVisibleBody] = useState(false);
    const { user } = useAuth(); // Obtenha os dados do usuário do contexto

    useEffect(() => {
        const timeoutTitulo = setTimeout(() => {
          setIsVisibleTitulo(true);
        }, 500);
      
        const timeoutBody = setTimeout(() => {
          setIsVisibleBody(true);
        }, 2000);
      
        return () => {
          clearTimeout(timeoutTitulo);
          clearTimeout(timeoutBody);
        };
    }, []);

    return (
        <FlexDiv>
            <TituloBemVindo isVisible={isVisibleTitulo}>Bem vindo novamente,{user ? user.nome : 'Usuário'}</TituloBemVindo>
            <ContainerBody isVisible={isVisibleBody}>
                <Grafico/>
                <GraficoSono/>
            </ContainerBody>
        </FlexDiv>
    );
}

export default Home;