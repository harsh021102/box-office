import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { apiGet } from '../misc/config'
const Home = () => {
  const [input,setInput] = useState('')
  const [results,setResults] = useState(null)

  const onInputChange =(event)=>{
    setInput(event.target.value)
  }

  const onSearch = async () =>{
    apiGet(`/search/shows?q=${input}`).then(result=>setResults(result))
  }

  const onKeyDown = (event) => {
    if(event.keyCode===13)
      onSearch()
  }

  const renderResults = () => {
    if(results && results.length === 0)
    {
      return <div>no results</div>
    }
    if(results && results.length > 0)
    {
      return <div>{results.map((item)=> <div key={item.show.name}>{item.show.name}</div>)}</div>
    }
  }

  return (
    <MainPageLayout >
      <input type="text" onKeyDown={onKeyDown} onChange={onInputChange} value={input}/>
      <button type="button" onClick={onSearch}>Search</button>
      {
        renderResults()
      }
    </MainPageLayout>
  )
}

export default Home