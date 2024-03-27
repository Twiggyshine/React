import { useState } from 'react'
import './App.css'

const title = 'Sign Up';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // деструктуризация, чтобы взять значения свойств name и value из объекта 
    setFormData({
      ...formData,  
      // создали новый объект formData с помощью spread
      [name]: value
      // обновляем форму с помощью ключ,значение
    });
  };

// второй вариант 

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
    
//     const updatedFormData = { ...formData, [name]: value };
//     setFormData(updatedFormData);
// };

  const handleSubmit= () => {
    console.log(formData); 
    // данные введенные в форму -> на сервер
  };

  return (
    <div className="wrapper">
    <h1>{title}</h1>
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className='btn'>Sign Up</button>
    </form>
    </div>
  );
};

export default RegistrationForm;