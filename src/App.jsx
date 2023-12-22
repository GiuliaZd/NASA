import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [explanation, setExpanation]=useState('');
  const [url, setUrl]=useState('');
  const [mediaType, setMediatype]=useState('');

  useEffect(()=>{
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then (response=>response.json())
    .then(data=>{
      setExplanation(data.explanation);
      setUrl(data.url);
      setMediatype(data.media_type)
    })
    .catch(error=>console.log(error))
  }, [])

  return (
    <>
     
    </>
  )
}

export default App
