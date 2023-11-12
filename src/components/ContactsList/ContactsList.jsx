import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <li key={id}>
        <Contact name={name} number={number} id={id} onDelete={onDelete} />
      </li>
    ))}
  </ul>
);
