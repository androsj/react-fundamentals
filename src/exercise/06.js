// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

// LESSONS
// A. Ways to get form element value
// 1. form onSubmit: event.target.elements[inputName/index].value
// 2. Using refs: inputRef.current.value
// 3. input onChange: event.target.value

function UsernameForm({onSubmitUsername}) {
  // dom element React creates for input
  // const inputRef = React.useRef()

  // extra 2
  // const [error, setError] = React.useState('')

  const [value, setValue] = React.useState('')

  const handleInputChange = event => {
    const {value: newValue} = event.target
    // setError(
    //   value === value.toLocaleLowerCase() ? '' : 'Username must be lower case',
    // )

    // force it to lower case
    console.log(newValue)
    setValue(newValue.toLocaleLowerCase())
  }

  const handleSubmit = event => {
    event.preventDefault()
    // const username = event.target.elements.username.value
    // onSubmitUsername(username)

    // extra 1
    // console.log(inputRef.current)
    // onSubmitUsername(inputRef.current.value)

    // extra 3
    console.log('state value', value)
    onSubmitUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          // ref={inputRef}
          value={value}
          onChange={handleInputChange}
        />
      </div>

      {/* {!!error && <p style={{color: 'red'}}>{error}</p>} */}

      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
