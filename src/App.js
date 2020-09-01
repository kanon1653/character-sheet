import React from 'react';
import './App.css';
import './SkillTable.css';
import SkillTable from './SkillTable'
import CharStatus from './CharStatus'

function App() {

  return (
    <div className="App">
      <h2>キャラクターシート</h2>
      <CharStatus />
      <SkillTable />
    </div>
  );
}

export default App;
