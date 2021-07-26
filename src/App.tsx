import React, { useState } from 'react'
import axios from 'axios'
import { Button, TextField } from '@material-ui/core'

const App: React.FC = () => {
  const [textValue, setTextValue] = useState('')
  const analizeUrl = () => {
    axios
      .get(`https://lf-exam-v2.web.app/api/analyze?imageUrl=${textValue}`)
      .then((res) => {
        console.log(res)
      })
  }
  return (
    <div style={{ marginLeft: 20 }}>
      <div style={{ marginTop: 16, marginBottom: 16 }}>
        Enter Image URL to analysis below.
      </div>
      <form noValidate autoComplete='off'>
        <TextField
          style={{ width: '400px' }}
          id='standard-basic'
          fullWidth
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <Button color='primary' onClick={analizeUrl}>
          click here to Analyze image.{' '}
        </Button>
      </form>
    </div>
  )
}

export default App
