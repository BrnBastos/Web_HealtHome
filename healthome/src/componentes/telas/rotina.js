import styled, { keyframes } from 'styled-components';
import React, { useEffect } from 'react';
import { useState } from 'react';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const InputLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const TaskInput = styled.input`
  width: 70%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #4CAF50;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1b631e;
  }
`;

const ClearButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #f44336;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #bb1e13;
  }
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 10px 0px;
  width: 70%;
`;

const TaskListItem = styled.li`
  margin-bottom: 10px;
  background-color: ${props => props.completed ? '#e5e5e5' : '#fff'};
  padding: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  &:hover {
    background-color: #f5f5f5;
  }
  
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  cursor: pointer;
`;

// Estilos para o calendário
const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${fadeIn} 2s ease-in-out forwards;
  animation-delay: 2.5s;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

const Day = styled.div`
  border: 1px solid #ccc;
  padding: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? '#af0d0d' : 'transparent')};
  color: ${(props) => (props.isSelected ? '#fff' : 'inherit')};
  border-radius: 4px;
  text-align: center;
`;

const EventList = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const AddButton1 = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: darkred;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgb(90, 1, 1);
  }
`;

const DivSpace = styled.div`
    width: 100%;
    height: 100px;
`

const BordaEspaco = styled.div`
    height: 1px;
    width: 60%;
    border-bottom: 2px solid #cacaca;
`

const CentralizarTitulo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    animation: ${fadeIn} 2s ease-in-out;
`

const ContainerFerramentas1 = styled.div`
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    animation: ${fadeIn} 2s ease-in-out forwards;
    animation-delay: 1.5s;
`

const HBlack = styled.h4`
    color:black;
    width:30%;
    padding: 0px 0px 20px;

`

function Rotina(){

    const [isVisibleTitulo, setIsVisibleTitulo] = useState(false);
    const [isVisibleBody1, setIsVisibleBody1] = useState(false);
    const [isVisibleBody2, setIsVisibleBody2] = useState(false);

    useEffect(() => {
        const timeoutTitulo = setTimeout(() => {
          setIsVisibleTitulo(true);
        }, 500);
      
        const timeoutBody1 = setTimeout(() => {
          setIsVisibleBody1(true);
        }, 2000);
        const timeoutBody2 = setTimeout(() => {
            setIsVisibleBody2(true);
          }, 3500);
      
        return () => {
          clearTimeout(timeoutTitulo);
          clearTimeout(timeoutBody1);
          clearTimeout(timeoutBody2);
        };
    }, []);

    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    useEffect(() => {
        const tasksData = localStorage.getItem('tasks');
        if (tasksData) {
        setTasks(JSON.parse(tasksData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = () => {
        if (taskInput.trim() !== '') {
        setTasks([...tasks, { text: taskInput, completed: false }]);
        setTaskInput('');
        }
    };

    const handleClearTasks = () => {
        setTasks([]);
    };

    const handleToggleTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    //calendario

    const [selectedDate, setSelectedDate] = useState(null);
    const [events, setEvents] = useState({});
    const [newEvent, setNewEvent] = useState('');
    const [error, setError] = useState('');

    const handleDayClick = (day) => {
        setSelectedDate(day);
    };

    const handleAddEvent = () => {
        if (!newEvent) {
        setError('Por favor, insira um evento.');
        return;
        }

        setError('');

        setEvents((prevEvents) => ({
        ...prevEvents,
        [selectedDate]: [...(prevEvents[selectedDate] || []), newEvent],
        }));

        setNewEvent('');
    };

    return (
        <div>
        <DivSpace/>
        <CenteredContainer>
        <CentralizarTitulo isVisible={isVisibleTitulo}>
        <h1> Ferramentas de rotina </h1>
        <HBlack >  Para ajudar pessoas a manter uma rotina, nós criamos estas ferramentas para controlar suas tarefas e auxiliar no seu dia a dia  </HBlack>
        </CentralizarTitulo>
        
        <BordaEspaco/>  
        
        <ContainerFerramentas1 isVisible={isVisibleBody1}>
        <h1>Lista de Tarefas</h1>
        <InputLine>
            <TaskInput
            type="text"
            placeholder="Digite uma tarefa"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            />
            <AddButton onClick={handleAddTask}>Adicionar</AddButton>
            <ClearButton onClick={handleClearTasks}>Limpar</ClearButton>
        </InputLine>
        <TaskList>
            {tasks.map((task, index) => (
            <TaskListItem
                key={index}
                completed={task.completed}
                onClick={() => handleToggleTask(index)}
            >
                {task.text}
            </TaskListItem>
            ))}
        </TaskList>
        </ContainerFerramentas1>
        </CenteredContainer>
        
        <CenteredContainer><BordaEspaco/>  </CenteredContainer>
        

        <CalendarContainer isVisible={isVisibleBody2}>
        <h1>Calendário</h1>
        <CalendarGrid>
            {[...Array(31).keys()].map((day) => (
            <Day
                key={day + 1}
                onClick={() => handleDayClick(day + 1)}
                isSelected={selectedDate === day + 1}
            >
                {day + 1}
            </Day>
            ))}
        </CalendarGrid>
        {selectedDate && (
            <div>
            <h2 style={{padding:'10px 0px 0px'}}>Eventos do Dia {selectedDate}:</h2>
            <EventList>
                {events[selectedDate] && events[selectedDate].length > 0 ? (
                <ul>
                    {events[selectedDate].map((event, index) => (
                    <li key={index}>{event}</li>
                    ))}
                </ul>
                ) : (
                <p>Nenhum evento neste dia.</p>
                )}
            </EventList>
            <div style={{padding:'10px 0px 0px'}}>
                <Label>Adicionar evento:</Label>
                <input
                type="text"
                placeholder="Evento"
                value={newEvent}
                onChange={(e) => setNewEvent(e.target.value)}
                />
                <AddButton1 onClick={handleAddEvent}>Adicionar</AddButton1>
                {error && <p>{error}</p>}
            </div>
            </div>
        )}
        </CalendarContainer>
                    
        <DivSpace/><DivSpace/><DivSpace/>
        </div>
        
    );
}

export default Rotina