import Input from '../Input/Input.hook';
import Button from '../Button/Button';
import './searchForm.scss';
import { useState } from 'react';

const SearchForm = () => {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('value :>> ', value);
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form__field'>
        <Input onChange={handleChange} value={value} />
        <Button type="submit">Search</Button>
      </div>
    </form>
  )
}

export default SearchForm;