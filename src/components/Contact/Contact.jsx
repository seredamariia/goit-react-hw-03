import css from './Contact.module.css';

const Contact = ({ data: { id, number, name }, onDelete }) => {
  return (
    <div className={css.container}>
      <div>
        <h4>{name}</h4>
        <p>{number}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
