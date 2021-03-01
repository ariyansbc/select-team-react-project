import React, { useState, useEffect } from 'react';
import Players from './components/Players/Players';
import Teamcart from './components/Teamcart/Teamcart';
import PlayersData from './components/fakeData/data.json'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  let text = '';

  const [players, setPlayers] = useState([]);
  const [teamcart, setTeamcart] = useState([]);

  useEffect(() => {
    setPlayers(PlayersData);
  }, [])

  const handleAddPlayers = (addPlayers) => {
    console.log("addPlayers", addPlayers)
    if (teamcart.indexOf(addPlayers) == -1) {
      const newTeamCart = [...teamcart, addPlayers];
      setTeamcart(newTeamCart);
    } else {
      alert(addPlayers.name + ` Already Added`)
    }

  }


  return (
    <div className="App">
      <h2 className="text-center">Make your dream team</h2>
      <div className="players">
            <div className="available-players">
              <h2>Available Players</h2>
              {
                players.map(player => <Players players={player} key={player.id} handleAddPlayers={handleAddPlayers} ></Players>)
              }
            </div>
            <div className="selected-players">
              <h2>Selected Players</h2>
              <Teamcart cart={teamcart}></Teamcart>
          </div>
      </div>
    </div>
  );
}

export default App;
