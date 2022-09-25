import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from'react-bootstrap/Container'
import CategoryList from '../categories/CategoryList'
import ProductList from '../products/ProductList'
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Container>
            <Row>
                <Col xs="3">
                    <CategoryList>

                    </CategoryList>
                </Col>
                <Col xs="9">
                    <ProductList>

                    </ProductList>
                </Col>
            </Row>
            </Container>
      </div>
    )
  }
}
