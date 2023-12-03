import React from 'react';
import { Card, Button } from 'react-bootstrap';
import b20 from '../images/b20.jpg';
import './card.css';

const BootstrapCard = () => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={b20} alt="Card image" width={100}/>
      <Card.Body>
      <Card.Text className='category'>
          Baby Care
        </Card.Text>
        <Card.Title className='title'>J&J Baby Lotion New 100ml</Card.Title>
        <p className='price'>Rs.175</p>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default BootstrapCard;
