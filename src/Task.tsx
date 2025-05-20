import {useState} from 'react'
import './App.css'
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

// type getCharacters = async (): Promise<unknown>
// import {sdk} from "./sdk";

export function Task() {
  const [count, setCount] = useState(0)

  return (
      <>
      <h1>Vite + React</h1>
      <div className="card">
        <Button endIcon={<SendIcon />} onClick={() => setCount((count) => count + 1)} variant="outlined">
          count is {count}
        </Button>
      </div>
      </>
  )
}