export const CheckBox = ({ isLogin, setIsLogin }) => {

  const toggle = event => {
    setIsLogin(!isLogin)
  }


  return (
    <label
      htmlFor="checkbox"
    >
      <span>Show Login:</span>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        value={true}
        onChange={toggle}
      />
    </label>
  )
}