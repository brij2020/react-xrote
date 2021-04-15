
import InternalRoute from "./Route"
import { createBrowserHistory } from 'history';
function App() {
  return (
    <div className="App">
     <InternalRoute  history={createBrowserHistory()}/>
    </div>
  );
}

export default App;
