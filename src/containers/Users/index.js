import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import Avatar from '../../assets/image-pessoas.svg';
import Arrow from '../../assets/image-seta.svg';
import Trash from '../../assets/image-lixeira.svg';

import { 
  Container, 
  H1,
  Image, 
  ContainerItens, 
  Button,
  User
 } from './styles';

function Users () {
  const [ Users, setUsers ] = useState([])
  const history = useHistory()

  useEffect(() => {

    async function fetchUsers(){
      const {data: newUsers} = await axios.get("http://localhost:3001/users")

    setUsers(newUsers)
    }
     
    fetchUsers()

 }, [])

  
  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUser = Users.filter( user => user.id !== userId )

    setUsers(newUser)
  }

  function goBackPage(){
    history.push("/")
  }

  
  return (

    <Container>
      <Image alt="logo-imagem" src={Avatar}/>
      <ContainerItens>
      <H1>Usuários</H1>

        <ul>
            {Users.map((user) => (
              <User key={user.id}>
                <p>{user.name}</p> <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}> <img alt='Lixeira' src={Trash} /> </button>
              </User>
            ))}
        </ul>

        <Button onClick={goBackPage}><img alt='seta' src={Arrow} /> Voltar </Button>

      </ContainerItens>
    </Container>
  )
}

export default Users