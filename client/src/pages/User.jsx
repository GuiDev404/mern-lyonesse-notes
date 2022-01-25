import React, { useState, useEffect } from 'react'
import { Grid , Text, Loading, Spacer, Avatar } from '@geist-ui/react'
import { Link } from 'react-router-dom';

import useUser from '../hooks/useUser'
import { authInstance } from '../services'
import { localLongDate } from '../util'

const User = () => {
  const [userData, setUserData] = useState(null);
  const { id } = useUser();

  useEffect(()=> {
    if(id){
      authInstance.get(`/auth/${id}`)
       .then(res=> setUserData(res.data.body))
       .catch(console.error)
    }
  }, [id])

  const handleUploadFile = ()=> {
    console.log('si')
  }

  return (
    <Grid.Container justify='center'>
      <Grid direction='column' xs={22} > 
        {!userData 
        ? <Loading />
        : <>
            <Spacer h={1}/>
            <Text h2 margin={0}> Administrar usuario </Text>
            <Text small type='secondary'> 
              Te uniste el <Text b> {localLongDate(userData.createdAt)} </Text>
            </Text>
            <Spacer h={2}/>

            <Grid.Container direction='row'>
              <label htmlFor="change" className='label-upload'>  
                <Avatar text={userData.email.charAt(0).toUpperCase()} scale={5/1} /> 
              </label>
              <input type='file' id='change' style={{display: 'none'}} onChange={handleUploadFile}/>
              <Spacer w={.5} />
              <Grid direction='column'>
                <Text h4 margin={0} padding={0}> {userData.email} </Text>
                <Text small type='secondary' margin={0} padding={0}> {userData.username} </Text>
              </Grid>
            </Grid.Container>

            <Spacer h={1}/>
            <Link to='/change-password'> Cambiar contraseña </Link> 
          </>
        }
      </Grid>
    </Grid.Container>
  )
}

export default User
