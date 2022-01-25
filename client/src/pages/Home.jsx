import React from 'react'
import Main from '../components/organism/Main'
import Header from '../components/molecules/Header'
import Collections from '../components/organism/Collections'
import useModal from '../hooks/useModal'
import useStorage from '../hooks/useStorage';
import useUser from '../hooks/useUser';

const Home = () => {
  const { visibility, showModal, closeModal } = useModal();
  const { id:userId } = useUser();
  const uniqueKey = userId && `${userId}_collection-size`
  const { storage, addData } = useStorage(uniqueKey, false);

  const toggleable = (isToggle)=> addData(isToggle)

  return (
    <>
      <Header
        title="Lyonesse"
        subtitle="Lyonesse es un flexible y comodo administrador de notas"
      />
      <Main showModal={showModal} toggleable={toggleable}>
        <Collections
          visibility={visibility}
          showModal={showModal}
          closeModal={closeModal}
          expandContract={storage}
        />
      </Main>
    </>
  );
}

export default Home
