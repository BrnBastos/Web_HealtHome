import React from 'react';
import styled from 'styled-components';

const HabitosSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const Habito = styled.div`
  width: 35%;
  margin-bottom: 50px;
  padding: 20px;
  background-color: rgb(113, 19, 19);
  border-radius: 8px;
  color: white;
`;

const HabitoTitle = styled.h2`
  margin-top: 0;
`;

const HabitoText = styled.p`
  text-align: justify;
`;

const HabitosTitle = styled.h2`
    text-align: center;
    color: black;
    align-items: center;
`
const HabitosSubTitle = styled.h3`
    text-align: center;
    color: black;
    align-items: center;
`
const DivSpace = styled.div` 
        width: 100%;
        height: 30px;
    `

const Habitos = () => {
  return (
    <>
    <DivSpace/><DivSpace/>
    <HabitosTitle>Você chegou a nossa sessão de hábitos!</HabitosTitle><DivSpace/>
    <HabitosSubTitle>Aqui você encontra diversas atividades e praticas que visam melhorar a sua saúde</HabitosSubTitle><DivSpace/>
    <HabitosSection>
        
      <Habito>
        <HabitoTitle>1. Caminhadas Energizantes</HabitoTitle>
        <HabitoText>
            Uma caminhada diária é mais do que um simples exercício físico; é uma oportunidade de conectar-se com a natureza, clarear a mente e energizar o corpo. Além de melhorar a saúde cardiovascular, essa prática simples contribui para um estado mental mais positivo e equilibrado.
        </HabitoText>
      </Habito>

      <Habito>
        <HabitoTitle>2. Hidratação Consistente:</HabitoTitle>
        <HabitoText>
            Manter-se bem hidratado é essencial para o bom funcionamento do corpo. Além de saciar a sede, a água desempenha um papel fundamental na digestão, absorção de nutrientes e regulação da temperatura corporal. Cultivar o hábito de beber água ao longo do dia contribui para uma pele saudável, uma mente alerta e um sistema imunológico fortalecido.
        </HabitoText>
      </Habito>

      <Habito>
        <HabitoTitle>3. Momentos de Respiração Profunda:</HabitoTitle>
        <HabitoText>
        A prática de respiração profunda oferece benefícios significativos para o bem-estar mental e físico. Reserve alguns minutos diariamente para inspirar profundamente, enchendo os pulmões de ar fresco, e expirar lentamente. Esse hábito simples reduz o estresse, melhora a concentração e promove um estado geral de relaxamento.
        </HabitoText>
      </Habito>

      <Habito>
        <HabitoTitle>4. Alimentação Balanceada:</HabitoTitle>
        <HabitoText>
        Cultivar uma alimentação equilibrada é um hábito chave para a saúde. Inclua uma variedade de frutas, vegetais, proteínas magras e grãos integrais em suas refeições. Esse mix nutritivo fornece os nutrientes essenciais para sustentar o corpo, impulsionar a energia e fortalecer o sistema imunológico.
        </HabitoText>
      </Habito>

      <Habito>
        <HabitoTitle>5. Sessões de Alongamento:</HabitoTitle>
        <HabitoText>
          Dedicar alguns minutos diariamente para alongar os músculos é fundamental para manter a flexibilidade e prevenir lesões. Além dos benefícios físicos, o alongamento regular alivia a tensão muscular, melhora a postura e promove uma sensação geral de relaxamento.
        </HabitoText>
      </Habito>

      <Habito>
        <HabitoTitle>6. Desconexão Digital:</HabitoTitle>
        <HabitoText>
        Estabelecer momentos sem dispositivos eletrônicos ao longo do dia é crucial para o equilíbrio mental. Reserve um tempo para desconectar-se das telas, permitindo que a mente descanse e se rejuvenesça. Isso contribui para um sono mais repousante e uma maior clareza mental.
        </HabitoText>
      </Habito>

      <Habito>
        <HabitoTitle>7. Prática de Gratidão:</HabitoTitle>
        <HabitoText>
        Cultivar um mindset de gratidão é um hábito poderoso para promover a saúde mental. Diariamente, reserve um momento para refletir sobre as coisas pelas quais você é grato. Essa prática simples estimula emoções positivas, reduz o estresse e promove uma mentalidade otimista.
        </HabitoText>
      </Habito>

      <Habito>
        <HabitoTitle>8. Noites de Sono Restauradoras:</HabitoTitle>
        <HabitoText>
        Priorizar um sono adequado é fundamental para a saúde global. Estabeleça uma rotina consistente de sono, criando um ambiente propício para o descanso. Noites bem dormidas fortalecem o sistema imunológico, melhoram a memória e contribuem para um estado de alerta durante o dia.
        </HabitoText>
      </Habito>

      {/* Continue adicionando mais hábitos conforme necessário */}
    </HabitosSection>
    <DivSpace/>
    <HabitosSubTitle>Agora sinta-se a vontade para escolher os hábitos que quiser e aproveite para salva-los em nossa página de rotina!</HabitosSubTitle>
    <DivSpace/><DivSpace/>
    </>
  );
};

export default Habitos;
