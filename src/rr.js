import './App.css';
import React ,{useState ,useRef} from 'react';
import styled from 'styled-components'
const Container = styled.div`
    padding: 15px;
`;

const Name=styled.div;
function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    Email:"",
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
        />
      
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="Email"
      />
    </form>
  );
}

function App() {
  return <Form />;
}

export default App;