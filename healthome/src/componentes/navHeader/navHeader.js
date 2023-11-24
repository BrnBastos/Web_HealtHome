import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration:none;
    color:inherit;
    &:hover{
        background-color: rgb(207, 207, 207);
        border-radius: 10px;
        cursor: pointer;
    }
`

function NavHeader(){
    const navigate = useNavigate();

    const Out = () => {
        navigate('/login')
    }

    return(
        <nav>
            <ul className='navegacaoHeader'>
                <StyledLink to="/Home"><li className='liNav'>Home</li></StyledLink>
                <StyledLink to="/Habitos"><li className='liNav'>Hábitos</li></StyledLink>
                <StyledLink to="/Rotina"><li className='liNav'>Rotina</li></StyledLink>
                <StyledLink to="/QuemSomos"><li className='liNav'>Quem Somos</li></StyledLink>
                <li className='liNavOut'><button onClick={Out} className="btnOut">Sair</button></li>
            </ul>
        </nav>
    );
}

export default NavHeader