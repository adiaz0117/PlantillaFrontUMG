import {Row, Col} from 'react-bootstrap'
import Formulario from './form'
import Listado from './list'
import {ContentProvider} from './context'

const Index = () => {
  return (
    <ContentProvider>
      <Formulario />
      <Row>
        <Col className='d-flex justify-content-center'>Index</Col>
      </Row>
      <Listado />
    </ContentProvider>
  )
}
export default Index
