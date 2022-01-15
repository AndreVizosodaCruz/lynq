import styled from 'styled-components'
import { Footer, Form, Header } from '../components'


export default function Home() {
  return (
    <Container>
      <Header />
      <Form />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-flow: column;
`