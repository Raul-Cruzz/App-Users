import React, { useState, useRef} from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import People from '../../assets/image-consulta.svg';
import Arrow from '../../assets/image-seta.svg';


import { 
  Container, 
  H1,
  Image, 
  ContainerItens, 
  InputLabel, 
  Input, 
  Button
 } from './styles';

function App () {
  const [ Users, setUsers ] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const history = useHistory()

  async function addNewUser() {

    const {data: newUser} = await axios.post("http://localhost:3001/users", {name:inputName.current.value, age:inputAge.current.value})
    
    setUsers([...Users, {id: Math.random(), name:inputName.current.value, age:inputAge.current.value}])
    
    setUsers([ ...Users, newUser])

  }

  history.push("./usuarios")
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

      </ContainerItens>
    </Container>
  )
}

export default App