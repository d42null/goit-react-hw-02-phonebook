import { Label } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </Label>
);
