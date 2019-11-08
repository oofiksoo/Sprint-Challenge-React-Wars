import React from "react";
import { Button, Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import './StarWars.css';

const PersonCard = props => {
    return(
        <div className="CardCont">
    <Card key={props.index}>
        <CardBody >
          <CardTitle><h1>{props.name}</h1></CardTitle>
          <CardText><p>{props.birth}</p></CardText>
          <CardSubtitle><p>{props.gender}</p></CardSubtitle>
          <CardSubtitle>{props.world}</CardSubtitle>
          </CardBody>
      </Card>
      </div>
    )}
    export default PersonCard;