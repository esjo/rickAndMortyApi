import { useEffect, useState } from 'react'
import './App.css'
import { CharacterList } from './components/CharacterList';

function App() {

  const [characters, setCharacters] = useState([]);
  

  return (
    
    <div className='bg-dark text-white'>
      
      <h1 className='text-center display-1 py-4'>Rick and Morty</h1> 
      <CharacterList characters={characters} setCharacters={setCharacters}/>

    </div>
  )
}

export default App
