
import Welcome from './Welcome';
import Login from './Login';
import Search from './Search';
import GetPlaylist from './Playlist';
import './App.css';



function App() {

  return (
    <div className="App">
      <Welcome />
      <Login />
      <GetPlaylist />
      <Search />
    </div>
  );
}

export default App;
