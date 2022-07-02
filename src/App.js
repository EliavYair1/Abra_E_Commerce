
import Header from './components/header/Header';
import DrawerMenu from './components/Menu/DrawerMenu';
import {defaultMenuConfig} from "./components/header/Header"
function App() {
  return (
    <div className="App">
     <Header/>
     <DrawerMenu menuItems={defaultMenuConfig}></DrawerMenu>
    </div>
  );
}

export default App;
