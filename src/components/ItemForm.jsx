

import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup'
import image1 from "../images/12.jpeg"
import { useCookies } from 'react-cookie';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <input
        {...field}
        {...props}
        className="block w-full mt-1 p-2 border rounded shadow-sm"
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div className="mb-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          {...field}
          {...props}
          className="mr-2 leading-tight"
        />
        <span className="text-sm font-medium text-gray-600">{children}</span>
      </label>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const ItemForm = () => {
  const [cookies] = useCookies(['user']); 
  const user_id =cookies.user[0].id
  return (
    <div className="flex items-center justify-center h-screen">
      <Formik
        initialValues={{
          name: '',
          email: '',
          items: '',
          text: '',
          terms: false,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, 'Not less than 3 symbols')
            .required('Name Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Email Required'),
          items: Yup.string().required('Select at least one item'),
          terms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'Required'),
        })}
        onSubmit={(values, { setSubmitting }) =>{

        
          fetch(`https://nnbackend.onrender.com/${user_id}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              amount: values.items
             
            }),
          })
          
            // Handle success
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
          })
          .catch((error) => {
            // Handle error
            console.error('API error:', error);
          })
          .finally(() => {
            setSubmitting(false);
          });
        }}
       >
        <Form className="form p-6 bg-gray-300 rounded-lg w-2/5 h-100 shadow-md flex flex-col items-center justify-center">
          <div className="mb-4">
            <img src={image1} alt="Logo" className="w-16 h-16" />
          </div>
          <h2 className="text-2xl mb-4">Send Item Donation</h2>
          <MyTextInput
            label="Your name"
            id="name"
            name="name"
            type="text"
            autoComplete="off"
          />
          <MyTextInput
            label="Your email"
            id="email"
            name="email"
            type="email"
            autoComplete="off"
          />
          <label htmlFor="items">Choose items to Donate</label>
          <Field id="items" name="items" as="select">
            <option value="" disabled>
              Select Items
            </option>
            <option value="Food">Food</option>
            <option value="Clothes">Clothes</option>
            <option value="Books">Books</option>
            <option value="Cleaning Supplies">Cleaning Supplies</option>
            <option value="Medical Supplies">Medical Supplies</option>
            <option value="Hygiene Products">Hygiene Products</option>
          </Field>
          <ErrorMessage component="div" className="text-sm text-red-500" name="items" />
          <label htmlFor="text">Your message</label>
          <Field id="text" name="text" as="textarea" />
          <ErrorMessage component="div" className="text-sm text-red-500" name="text" />
          <MyCheckbox name="terms">Agree with privacy policy</MyCheckbox>
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ItemForm;