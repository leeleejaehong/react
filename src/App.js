import Day from "./component/Day";
import DayList from "./component/DayList";
import EmptyPage from "./component/EmptyPage";
import Header from "./component/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
// json-server --watch .\src\db\data.json --port 3001
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
      <DayList />
      </Route>
      <Route path="/day/:day">
      <Day />
      </Route>
      <Route path="/create_word">
        <CreateWord/>
      </Route>
      <Route path="/create_day">
        <CreateDay/>
      </Route>
      <Route>
        <EmptyPage/>
      </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
