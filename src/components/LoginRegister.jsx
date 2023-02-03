import { TextInput } from './TextInput'


export const LoginRegister = (props) => {
  const { template } = props

  const inputs = template.map( templateObject => {
    return (
      <TextInput {...templateObject} />
    )
  })


  return (
    <form
    >
      {inputs}
    </form>
  )
}