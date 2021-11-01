import React, {useState} from 'react';
import Input from "../components/Input";
import Button from "../components/Button";
import './login.css';

const REGEX = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/,
}
const MISTAKES = {
  email: 'input valid email',
  password: 'Password must have least 8 characters, lowercase and capital letter, number and special character => !@#$%^&*'
}
const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState({
    email: '',
    password: '',
  })

  const onChange = (e) => {
    const value = e.target.value;

    setState((prevState) => ({
      ...prevState,
      [e.target.name]: value,
    }))
    setError({
      ...error,
      [e.target.name]: '',
    });
  }

  const validate = (e) => {
    const value = e.target.value.trim();
    const name = e.target.name;
    if (!value.match(REGEX[name])) {
      setError({
        ...error,
        [name]: MISTAKES[name],
      });
    } else {
      setError({
        ...error,
        [name]: '',
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = Object.entries(error).filter(error => !!error[1]);
    if (errors.length) {
      return
    }
    console.log('you logged in')
  }

  return <div className='wrapper'>
    <h1 className='title'>Login</h1>
    <form onSubmit={onSubmit}>
      <Input
        message={error.email}
        value={state.email}
        onChange={onChange}
        name='email'
        placeholder='e-mail address'
        type='text'
        onBlur={validate}
      />
      <Input
        message={error.password}
        value={state.password}
        onChange={onChange}
        name='password'
        placeholder='password'
        onBlur={validate}
      />
      <Button text='Log in' disabled={!state.email || !state.password || error.email || error.password} />
    </form>

  </div>
}

export default Login