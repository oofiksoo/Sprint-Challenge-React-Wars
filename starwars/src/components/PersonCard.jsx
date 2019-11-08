import React from "react";
import {Card, CardTitle, CardText, CardSubtitle, CardBody, Button } from 'reactstrap';
import './StarWars.css';

const PersonCard = props => {
    return(
       
        <div className="CardCont">
        <Card key={props.index} >
        <CardBody >
          <CardTitle><h1>{props.name}</h1></CardTitle>
          <CardText>{props.birth}</CardText>
          <CardSubtitle><p>{props.gender}</p></CardSubtitle>
          
          <Button variant="primary" href={props.url}>More Info!</Button>
          </CardBody>
      </Card>
      </div>
      
    )}
    export default PersonCard;