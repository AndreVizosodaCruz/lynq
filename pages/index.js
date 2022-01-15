import styled from 'styled-components'
import { Footer, Form, Header } from '../customComponents'

export default function Home() {
  return (
    <ContainerHome>
      <Header />
      <Form />
      <Footer />
    </ContainerHome>
  )
}

const ContainerHome = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-flow: column;
`