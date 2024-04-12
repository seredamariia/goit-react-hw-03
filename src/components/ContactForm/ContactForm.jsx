import { useId } from 'react';
import { nanoid } from 'nanoid';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const phoneNumberId = useId();

  const defaultlValues = {
    name: '',
    phoneNumber: '',
  };

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      ...values,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={defaultlValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form className={css.container}>
          <label htmlFor={nameId}>Name</label>

          <div>
            <Field
              className={`${css.input} ${errors.name && touched.name}`}
              type="text"
              name="name"
              id={nameId}
            />
          </div>
          <ErrorMessage className={css.error} name="name" component="span" />

          <label htmlFor={phoneNumberId}>Number</label>

          <div>
            <Field
              className={`${css.input} ${errors.number && touched.number}`}
              type="text"
              name="number"
              id={phoneNumberId}
            />
          </div>
          <ErrorMessage className={css.error} name="number" component="span" />

          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
