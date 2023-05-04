import React, { useState, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';
import People from '../../assets/image-consulta.svg';
import Arrow from '../../assets/image-seta.svg';
import  H1  from '../../components/title'
import ContainerItens from '../../components/containersItens';
import Button from '../../components/Button';


import { 
  Container, 
  Image,  
  InputLabel, 
  Input
 } from './styles';
import styled from 'styled-components';

function App () {
  const [ Users, setUsers ] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  const history = useHistory()

  async function addNewUser() {

    const {data: newUser} = await axios.post("http://localhost:3001/users", {name:inputName.current.value, age:inputAge.current.value})

    setUsers([ ...Users, newUser])

    history.push("/usuarios")
    
  }

  return (

    <Container>
      <Image alt="logo-imagem" src={People}/>
      <ContainerItens>
      <H1>Olá</H1>

      <InputLabel>Nome :</InputLabel>
      <Input ref={inputName} placeholder='Nome'/>

      <InputLabel>Idade :</InputLabel>
      <Input ref={inputAge} placeholder='Idade'/>

      <Button onClick={addNewUser}>Cadastrar <img alt='seta' src={Arrow} /></Button>
      <Link to="/usuarios" id="StyledLink">Ir para tela de usuarios</Link>

      </ContainerItens>
    </Container>
  )
}

export default App