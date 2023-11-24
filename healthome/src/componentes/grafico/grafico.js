import React, { useState } from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar  } from 'react-chartjs-2';
import styled from 'styled-components';
import Aside from '../aside/aside';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ChartContainer = styled.div`
  flex: 1;
`;

const InputContainer = styled.div`
  margin-left: 20px;
  width: 215px;
  background-color: #f0f0f0;
  border-radius: 10px;
  @media (max-width: 1200px) {
    display:flex;
    flex-direction: row;
  }
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 20px;
`;

const Input = styled.input`
  width: 60px;
  font-size: 20px;
  border-radius: 3px;
  background-color: #cccccc;
`;

const DivInput = styled.div`
    padding: 16px 0px;
    border-radius: 10px;
    background-color: #f0f0f0;
`


function Grafico(){

    const [caloriasLastValue, setCaloriasLastValue] = useState(0);
    const [proteinasLastValue, setProteinasLastValue] = useState(0);
    const [carboidratosLastValue, setCarboidratosLastValue] = useState(0);

    const data = {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        datasets: [
            {
                label: 'Calorias',
                data: [2000,2100,1900, 2050, 1930, 2010, caloriasLastValue],
                backgroundColor: 'red',
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 7,
            },
            {
                label: 'Proteínas',
                data: [120,130,110, 115, 112, 130, proteinasLastValue],
                backgroundColor: 'green',
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 7,
            },
            {
                label: 'Carboidratos',
                data: [580,600,605, 603, 553, 579, carboidratosLastValue],
                backgroundColor: 'blue',
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 7,
            }
        ]
    }

    const options = {

    }

    const handleCaloriasInputChange = (e) => {
        const newValue = parseInt(e.target.value, 10) || 0;
        setCaloriasLastValue(newValue);
    };

    const handleProteinasInputChange = (e) => {
        const newValue = parseInt(e.target.value, 10) || 0;
        setProteinasLastValue(newValue);
    };

    const handleCarboidratosInputChange = (e) => {
        const newValue = parseInt(e.target.value, 10) || 0;
        setCarboidratosLastValue(newValue);
    };

    return(
        <FlexDiv>
            <Aside/>
            <ChartContainer>
                <Bar
                    data={data}
                    options={options}
                />
            </ChartContainer>
            <InputContainer>
                <DivInput>
                    <InputLabel>Calorias hoje:</InputLabel>
                    <Input type="number" value={caloriasLastValue} onChange={handleCaloriasInputChange} />
                </DivInput>
                <DivInput>
                    <InputLabel>Proteínas(g) hoje:</InputLabel>
                    <Input type="number" value={proteinasLastValue} onChange={handleProteinasInputChange} />
                </DivInput>
                <DivInput>
                    <InputLabel>Carboidratos(g) hoje:</InputLabel>
                    <Input type="number" value={carboidratosLastValue} onChange={handleCarboidratosInputChange} />
                </DivInput>
            </InputContainer>
        </FlexDiv>
    );
}

export default Grafico