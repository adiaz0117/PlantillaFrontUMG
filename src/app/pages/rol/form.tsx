import {useContext, useEffect} from 'react'
import {Button, Modal, Row, Col, Form} from 'react-bootstrap'
import {ContentContext} from './context'
import {useForm} from 'react-hook-form'

type Inputs = {
  nombre: string
}

function Example() {
  const {show, handleShow, handleClose, creaetUpdate, oneData} = useContext(ContentContext)
  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm<Inputs>()

  const onSubmit = (data: Inputs) => {
    creaetUpdate({...data, id: oneData?.id || null})
  }

  useEffect(() => {
    if (oneData?.id) {
      setValue('nombre', oneData?.nombre)
    }
  }, [oneData])
  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Crear
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario Rol</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Row>
              <Form.Group as={Col} sm={12} controlId='validationFormik03'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='City'
                  {...register('nombre', {
                    required: {
                      value: true,
                      message: 'Este campo es requerido',
                    },
                  })}
                  isInvalid={!!errors.nombre}
                />

                <Form.Control.Feedback type='invalid'>
                  {errors?.nombre?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer className='d-flex justify-content-between'>
            <Button variant='secondary' onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant='primary' type='submit'>
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default Example
