export const TextInput = (props) => {

  const { formData, role, handleChange } = props

  const type = {
    username: "text",
    email: "email",
    password: "password",
    confirm: "password",
  }[role]

  console.log("role:", role, type);
  

  return (
    <label
      htmlFor={role}
      key={role}
    >
      <span>{role}:</span>
      <input
        type={type}
        name={role}
        id={role}
        value={formData[role]}
        placeholder={role}
        onChange={handleChange}
      />
    </label>
  )
}

