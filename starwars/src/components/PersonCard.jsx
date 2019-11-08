import React from "react";
import { Button, Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';


const PersonCard = props => {
    return(
    <Card>
        <CardBody key={props.index}>
          <CardTitle>{props.name}</CardTitle>
          <CardText>{props.birth}</CardText>
          <CardSubtitle>{props.gender}</CardSubtitle>
          <CardSubtitle>{props.world}</CardSubtitle>
          </CardBody>
      </Card>
    )}
    export default PersonCard;