import friends from './components/FriendList/friends.json';
import {FriendList} from "./components/FriendList/FriendList.jsx";
function App() {
  return (
    <FriendList friends={friends}/>
  )
}

export default App
