import { Button, ContactContainer, Name, Number } from './Contact.styled';

export const Contact = ({ name, number, id, onDelete }) => (
  <ContactContainer>
    <ContactContainer>
      <Name> {name}: </Name>
      <Number> {number}</Number>
    </ContactContainer>
    <Button type="button" name="Delete" onClick={onDelete} id={id}>
      Delete
    </Button>
  </ContactContainer>
);
