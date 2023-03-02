import React, { useEffect, useState } from "react";
import { CharacterItem } from "./CharacterItem";





export const CharacterList = ({ characters, setCharacters}) => {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(1);


  const NavPage = ({counter,setCounter}) => {
    return(
        <header className="d-flex justify-content-between align-items-center">
            <p>Page: {counter} </p>
            <button onClick={() => setCounter(counter + 1)} className="btn btn-primary btn-sm">next</button>
        </header>
    )
    
  };

  const api = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${counter}`
      );
      const data = await response.json();

      setCharacters(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    api();
  }, [counter]);

console.log(counter)



  return (
    <div className="container">
        <NavPage counter={counter} setCounter={setCounter}/>
        {
            loading ? <p>loading</p> : 
            <div className="row">
        
            {characters.map((character) => (
              <div className="col-md-4" key={character.id}>
                <CharacterItem character={character} />
              </div>
            ))}
          </div>

        }
        
    
    </div>
  );
};
