import {useContext} from 'react'
import {Row, Col, Table, Button} from 'react-bootstrap'
import {ContentContext} from './context'

const Index = () => {
  const {allData, one, state} = useContext(ContentContext)
  return (
    <>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className='fw-bolder'>#</th>
                <th className='fw-bolder'>Nombre</th>
                <th className='fw-bolder'>Código</th>
                <th className='fw-bolder'>Estado</th>
                <th className='fw-bolder'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {allData.map((item: any, index: number) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.nombre}</td>
                  <td>{item.codigo}</td>
                  <td>{item.estado}</td>
                  <td>
                    <Button
                      variant={item.estado === 0 ? 'success' : 'danger'}
                      className='btn-sm btn-icon'
                      onClick={() => state(item)}
                    >
                      {item.estado === 1 ? (
                        <i className='bi bi-trash' />
                      ) : (
                        <i className='bi bi-check' />
                      )}
                    </Button>
                    <Button
                      variant='warning'
                      className='ms-3 btn-sm btn-icon'
                      onClick={() => one(item)}
                    >
                      <i className='bi bi-pencil' />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  )
}
export default Index
