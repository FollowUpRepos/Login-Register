import { useState } from 'react'
import { LoginRegister } from './components/LoginRegister'
import { CheckBox } from './components/CheckBox'


const App = () => {
  const [ formData, setFormData ] = useState({})
  const [ isLogin, setIsLogin ] = useState(false)


  const handleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }


  const template = []
  
  if (isLogin) {
    template.push({ formData, handleChange, role: "username" })
    template.push({ formData, handleChange, role: "password" })

  } else {  
    template.push({ formData, handleChange, role: "username" })
    template.push({ formData, handleChange, role: "email" })
    template.push({ formData, handleChange, role: "password" })
    template.push({ formData, handleChange, role: "confirm" })
  }
  
  
  return (
    <>
      <h1>Register or Login</h1>
      <CheckBox
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />

      <LoginRegister
        template={template}
      />
    </>
  );
}

export default App;
