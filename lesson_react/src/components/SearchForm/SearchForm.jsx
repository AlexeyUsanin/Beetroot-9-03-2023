import React from 'react';
import Button from '../Button/Button';
import './searchForm.scss';
import { useFormik } from 'formik';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

const SearchForm = ({ onSubmit }) => {
  // const [value, setValue] = useState('')
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: values => {
      console.log('values :>> ', values);
      // alert(JSON.stringify(values, null, 2));
      onSubmit(values.search)
    },
  });

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   onSubmit(value);

  //   console.log('value :>> ', value);
  // }

  // const handleChange = (event) => {
  //   setValue(event.target.value)
  // }

  return (
    <form className='form' onSubmit={formik.handleSubmit}>
      <div className='form__field'>
        <input
          id="search"
          name="search"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.search}
        />
        {/* <Input onChange={handleChange} value={value} /> */}
        <Button type="submit">Search</Button>
      </div>
    </form>
  )
}

export default SearchForm;