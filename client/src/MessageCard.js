import React from 'react';
import { Card, Button, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap';

const MessageCard = (props) => {
  return (
    <Card body className="message-form">
      <CardTitle>Welcome to GuestM.app!</CardTitle>
      <CardText>Leave a message with your location!</CardText>
      <CardText>Thanks for stopping by!</CardText>
      {
        !props.sendingMessage && !props.sentMessage && props.haveUsersLocation ?
          <Form onSubmit={props.formSubmitted}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                onChange={props.valueChanged}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name" />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input
                onChange={props.valueChanged}
                type="textarea"
                name="message"
                id="message"
                placeholder="Enter a message" />
            </FormGroup>
            <Button type="submit" color="info" disabled={!props.formIsValid()}>Send</Button>
          </Form> :
          props.sendingMessage || !props.haveUsersLocation ? 
            <video
              autoPlay
              loop
              src="https://i.giphy.com/media/BCIRKxED2Y2JO/giphy.mp4"></video> :
            <CardText>Thanks for submitting a message!</CardText>
      }
    </Card>
  );
};

export default MessageCard;