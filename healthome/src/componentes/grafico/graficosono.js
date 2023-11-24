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
`

const ChartContainer = styled.div`
  display: flex;
  padding: 20px 0px 0px;
  width: 705px;
  height: 352px;
  justify-content: center;
  flex: 1;
`;

function GraficoSono(){
    const data = {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        datasets: [
            {
                label: 'Sono Leve (horas)',
                data: [3,2,3, 4, 2, 1, 4],
                backgroundColor: '#9839e3',
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 7,
            },
            {
                label: 'Sono Pesado (horas)',
                data: [4,5,3, 3, 5, 5, 1],
                backgroundColor: '#11bae1',
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 7,
            }
        ]
    }

    const options = {

    }
    return(
    <FlexDiv>
        <ChartContainer>
            <Bar
                data={data}
                options={options}
            />
        </ChartContainer>
    </FlexDiv>
    );
}

export default GraficoSono