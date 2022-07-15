import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {
  const [input,setInput] = useState('')

  const onInputChange =(event)=>{
    setInput(event.target.value)
    // console.log(event.target.value)
  }
  const onSearch = async () =>{
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    const data  = await response.json()
    // console.log(data)
  }
  const onKeyDown = (event) => {
    if(event.keyCode===13)
      onSearch()
  }
  return (
    <MainPageLayout >
      <input type="text" onKeyDown={onKeyDown} onChange={onInputChange} value={input}/>
      <button type="button" onClick={onSearch}>Search</button>
    </MainPageLayout>
  )
}

export default Home