import styled from 'styled-components';
import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AboutImage from '../../Images/images.js';

function QuemSomos() {

    const [successMsg, setSuccessMsg] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setSuccessMsg("Obrigado pelo feedback!");
        reset();
    };

    const navigate = useNavigate();

     useEffect(() => {
    // Verificar a autenticação aqui (por exemplo, verificar se o usuário está no LocalStorage)
    const usuarioAutenticado = JSON.parse(localStorage.getItem('usuario'));

    if (!usuarioAutenticado) {
      // Se não estiver autenticado, redirecionar para a página de login
      navigate('/Login');
    }
  }, [navigate]);

    const SecAbout = styled.section`
        width:80%;
        margin:0 auto;
        height: auto;
        display: flex;
    `
    const DivTextAbout = styled.div`
        width:40%;
        margin:0 auto;
        display: inline-block;
        align-items: center;
        text-align: left;
        color: #777777;
        text-align: justify;
    `
    const Title = styled.h2`
        font-weight: 600;
        align-items: center;
        text-align: left;
        color: darkred;
        font-size:35px;
    `

    const DivSpace = styled.div` 
        width: 100%;
        height: 30px;
    `
    const DivUs = styled.div`
        justify-content: center;
        align-items: center;
        text-align:justify;
        width: 1000px;
    `


    return (
        <div>
            <DivSpace/><DivSpace/><DivSpace/>
            <SecAbout>
                <DivTextAbout>
                    <Title>Quem Somos</Title>
                    <DivSpace/>
                    <p className='textoJustificado'>
                    Somos o HealthHome, uma iniciativa dinâmica e inovadora criada pela Hapvida em colaboração com a FIAP. Nosso propósito central é ir além dos padrões convencionais de cuidados de saúde, transformando a experiência tradicional em uma jornada personalizada e centrada no bem-estar. Ao invés de focarmos apenas no tratamento de condições médicas, visamos proporcionar uma abordagem abrangente que inclui prevenção, promoção da saúde e educação.
                    </p>
                    <br/>
                    <p className='textoJustificado'>
                    No cerne da nossa existência está o compromisso com a inovação. Buscamos constantemente maneiras criativas e tecnológicas de aprimorar a saúde, proporcionando soluções que sejam acessíveis e inclusivas para todos. Acreditamos que a saúde deve ser uma experiência empoderadora, capacitando os indivíduos a tomarem decisões informadas sobre seu bem-estar cotidiano.                    </p>
                    <br/>
                    <p className='textoJustificado'>
                    No HealthHome, não somos apenas uma plataforma de saúde; somos uma comunidade dedicada a fornecer recursos abrangentes que vão além do tratamento convencional. Desenvolvemos ferramentas acessíveis que capacitam os usuários a adotarem hábitos saudáveis em seu cotidiano. Nossa equipe é composta por profissionais apaixonados, comprometidos em redefinir a experiência de cuidados de saúde.
                    </p>
                    <br/>
                    <p className='textoJustificado'>
                    Junte-se a nós nesta jornada de saúde, educação e bem-estar. Estamos aqui para transformar a maneira como você vive e compreende sua saúde, oferecendo uma abordagem única e holística que promove o cuidado integral do corpo e da mente.
                    </p>
                    <br/>

                </DivTextAbout>
                <div className='imgContato'>
                    <AboutImage/>
                </div>
            </SecAbout>
            <DivSpace/><DivSpace/><DivSpace/>
            <center><DivUs>
            <p className='textoJustificado2'>
                   Este é um projeto desenvolvido pelos alunos da Fiap em conjunto com a Notredame Intermédica:     
            </p>
            <DivSpace/>
            <p className='textoJustificado'>
            Bruno Silva Bastos  -- brunosbastos5@gmail.com    
            </p>
            <p className='textoJustificado'>
            Matheus Lucas -- matlucaas@gmail.com
            </p>
            </DivUs></center>
            <DivSpace/><DivSpace/>
        </div>
    );
  }

export default QuemSomos