import React, { useState } from 'react';
import { Form, Row, Col, Card, Button,Accordion } from 'react-bootstrap';

const CreateOrder = () => {
    const [formData, setFormData] = useState({
        numeroPedido: '',
        nomeCliente: '',
        telefoneCliente: '',
        dataEntrada: '',
        dataEntrega: '',
        cidadeCliente: '',
        observacao: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do pedido:', formData);
        // Aqui você pode enviar os dados para sua API ou realizar outras ações
    };

    return (
        <Accordion className="mb-2 " style={{height:"370px"}}>
            <Accordion.Header as="h5">Cabeçalho do Pedido</Accordion.Header>
            <Accordion.Body>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col md={3}>
                            <Form.Group controlId="numeroPedido">
                                <Form.Label>Número do Pedido</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="numeroPedido"
                                    value={formData.numeroPedido}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>

                        <Col md={5}>
                            <Form.Group controlId="nomeCliente">
                                <Form.Label>Nome do Cliente</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nomeCliente"
                                    value={formData.nomeCliente}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group controlId="telefoneCliente">
                                <Form.Label>Telefone do Cliente</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="telefoneCliente"
                                    value={formData.telefoneCliente}
                                    onChange={handleChange}
                                    placeholder="(00) 00000-0000"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={3}>
                            <Form.Group controlId="dataEntrada">
                                <Form.Label>Data de Entrada</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="dataEntrada"
                                    value={formData.dataEntrada}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>

                        <Col md={3}>
                            <Form.Group controlId="dataEntrega">
                                <Form.Label>Data de Entrega</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="dataEntrega"
                                    value={formData.dataEntrega}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group controlId="cidadeCliente">
                                <Form.Label>Cidade do Cliente</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cidadeCliente"
                                    value={formData.cidadeCliente}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="observacao">
                                <Form.Label>Observação</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={1}
                                    cols={2}
                                    name="observacao"
                                    value={formData.observacao}
                                    onChange={handleChange}
                                    placeholder="Informações adicionais sobre o pedido..."
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Accordion.Body>

        </Accordion>
    );
};

export default CreateOrder;



// <div className="d-flex justify-content-end">
// <Button variant="secondary" className="me-2">
//     Cancelar
// </Button>
// <Button variant="primary" type="submit">
//     Salvar
// </Button>
// </div>