import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration:none;
    color:inherit;
`

function NavHeader(){
    const navigate = useNavigate();

    const Out = () => {
        navigate('/login')
    }

    return(
        <nav>
            <ul className='navegacaoHeader'>
                <StyledLink to="/cadastro"><li className='liNav'>Home</li></StyledLink>
                <StyledLink to="/cadastro"><li className='liNav'>Quem Somos</li></StyledLink>
                <StyledLink to="/cadastro"><li className='liNav'>Contato</li></StyledLink>
                <li className='liNavOut'><button onClick={Out} className="btnOut">Sair</button></li>
            </ul>
        </nav>
    );
}

export default NavHeader