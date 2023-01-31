import { Box, Button, Grid, Link, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import './Sobre.css';
import Carol from './imagens/Carol.png';
import Daniel from './imagens/Daniel.png';
import Murilo from './imagens/Murilo.png';
import Nicole from './imagens/Nicole.png';
import Maycon from './imagens/Maycon.png';
import Hugo from './imagens/Hugo.png';
import Jean from './imagens/Jean.png';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import useLocalStorage from 'react-use-localstorage';

function Sobre() {
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  )

  const [email, setEmail] = useLocalStorage('email');

  useEffect(() => {
    if (token == "") {
      setEmail('')
    }
  }, [token])


  return (
    <>
      <Grid container justifyContent="center" className='g_container alignItems-center'>
        <Grid item xs={12} md={6} className='left'>
          <Typography variant="h5" gutterBottom color="textPrimary" component="h3" align="center" className='titulo-l'>Quem Somos?</Typography>
        </Grid>
        <Grid item xs={10} md={5} className='right'>
          <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Somos um e-commerce criado para facilitar a comunicação e comércio entre Agricultores Familiares e Associações de comunidades carentes do estado do RJ. </Typography>
        </Grid>
        <Grid item xs={12} md={6} className='left'>
          <Typography variant="h5" gutterBottom color="textPrimary" component="h3" align="center" className='titulo-l'>Missão</Typography>
        </Grid>
        <Grid item xs={10} md={5} className='right'>
          <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>A plataforma foi desenvolvida alinhada com a cartilha de Objetivos de Desenvolvimento Sustentável da ONU, mais especificamente com a ODS 2 - Fome Zero e Agricultura Sustentável. Desta forma, visa acessibilizar a alimentação orgânica para comunidades carentes e fomentar a economia local. </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary" component="h3" align="center" className='titulo-l'>Nossos Colaboradores</Typography>
          <br />
        </Grid>
        <Grid item xs={12} className='m_centralize'>
          <Box display='flex' flexWrap='wrap' justifyContent='center'>
            <a href='https://www.linkedin.com/in/caroline-barcelos-valente-42091a15a/' target='_blank'>
              <img src={Carol} alt="photo" className='width-photo' />
            </a>

            <a href='https://www.linkedin.com/in/danielcorrea5/' target='_blank'>
              <img src={Daniel} alt="photo" className='width-photo' />
            </a>

            <a href='https://www.linkedin.com/in/maycon-silva-4673ba234/' target='_blank'>
              <img src={Maycon} alt="photo" className='width-photo' />
            </a>

            <a href='https://www.linkedin.com/in/nicole-moreira-da-silva-4aa171234/' target='_blank'>
              <img src={Nicole} alt="photo" className='width-photo' />
            </a>

            <a href='https://www.linkedin.com/in/murilo-nascimento-0388b4249/' target='_blank'>
              <img src={Murilo} alt="photo" className='width-photo' />
            </a>

            <a href='https://www.linkedin.com/in/hugo-ramos-84a76924a/' target='_blank'>
              <img src={Hugo} alt="" className='width-photo' />
            </a>
            
            <a href='https://www.linkedin.com/in/jeangs/' target='_blank'>
              <img src={Jean} alt="" className='width-photo' />
            </a>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export { Sobre };