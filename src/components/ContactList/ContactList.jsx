import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { nanoid } from 'nanoid';

const ContactList = ({ contactList, onDelete }) => {
  return (
    <ul className={css.list}>
      {contactList.map(contact => (
        <li className={css.item} key={nanoid()}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
