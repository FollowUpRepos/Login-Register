# Register / Login

A proof-of-concept, to show a component that will display a form with different fields, depending on the array of objects that it is sent as props.

App.js shows a checkbox that allows you to show either a Register form with 4 fields or a Login form with only two fields. It passes an array containing either 4 or 2 objects to the LoginRegister component as the `template` prop.

The LoginRegister component iterates through the objects that it receives through the `template` prop and creates the appropriate number of TextInput components, wrapped in a `form` element.