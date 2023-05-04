import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import Avatar from '../../assets/image-pessoas.svg';
import Arrow from '../../assets/image-seta.svg';
import Trash from '../../assets/image-lixeira.svg';

import H1 from '../../components/title'
import ContainerItens from '../../components/containersItens';
import Button from '../../components/Button';

import { 
  Container, 
  Image, 
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

    const newUser = Users.filter( user => user.id != userId )

    setUsers(newUser)
  }

  function goBackPage(){
    history.goBack()
  }

  
  return (

    <Container>
      <Image alt="logo-imagem" src={Avatar}/>
      <ContainerItens isBlur={true}>
      <H1>usuarios</H1>

        <ul>
            {Users.map((user) => (
              <User key={user.id}>
                <p>{user.name}</p> <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}> <img alt='Lixeira' src={Trash} /> </button>
              </User>
            ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}><img alt='seta' src={Arrow} /> Voltar </Button>

      </ContainerItens>
    </Container>
  )
}

export default Users