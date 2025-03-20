import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormPainel() {
    const [formData, setFormData] = useState({
        descricao: '',
        largura: '',
        altura: '',
        tecido: 'Tactel',
        acabamento: {
            overloque: false,
            elastico: false,
            ilhos: false,
        },
        observacao: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                acabamento: { ...formData.acabamento, [name]: checked },
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do formulário:', formData);
    };

    return (
        <Container className="mt-4">
            <h2>Formulário do Painel</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="descricao">
                    <Form.Label>Descrição do Painel</Form.Label>
                    <Form.Control type="text" name="descricao" value={formData.descricao} onChange={handleChange} required />
                </Form.Group>
                
                <Row>
                    <Col>
                        <Form.Group controlId="largura">
                            <Form.Label>Largura (cm)</Form.Label>
                            <Form.Control type="number" name="largura" value={formData.largura} onChange={handleChange} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="altura">
                            <Form.Label>Altura (cm)</Form.Label>
                            <Form.Control type="number" name="altura" value={formData.altura} onChange={handleChange} required />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId="tecido">
                    <Form.Label>Tecido</Form.Label>
                    <Form.Select name="tecido" value={formData.tecido} onChange={handleChange} required>
                        <option value="Tactel">Tactel</option>
                        <option value="Malha Vest Facil">Malha Vest Facil</option>
                    </Form.Select>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Acabamento</Form.Label>
                    <div>
                        <Form.Check type="checkbox" label="Overloque" name="overloque" checked={formData.acabamento.overloque} onChange={handleChange} />
                        <Form.Check type="checkbox" label="Elástico" name="elastico" checked={formData.acabamento.elastico} onChange={handleChange} />
                        <Form.Check type="checkbox" label="Ilhós" name="ilhos" checked={formData.acabamento.ilhos} onChange={handleChange} />
                    </div>
                </Form.Group>

                <Form.Group controlId="observacao">
                    <Form.Label>Observação da Costura</Form.Label>
                    <Form.Control as="textarea" rows={3} name="observacao" value={formData.observacao} onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">Salvar</Button>
            </Form>
        </Container>
    );
}

export default FormPainel;