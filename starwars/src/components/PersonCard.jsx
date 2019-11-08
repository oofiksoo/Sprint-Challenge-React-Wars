import React from "react";
import { Button, Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import './StarWars.css';

const PersonCard = props => {
    return(
        <div className="CardCont">
    <Card key={props.index}>
        <CardBody >
          <CardTitle><h1>{props.name}</h1></CardTitle>
          <CardText>{props.birth}</CardText>
          <CardSubtitle><p>{props.gender}</p></CardSubtitle>
          </CardBody>
      </Card>
      </div>
    )}
    export default PersonCard;