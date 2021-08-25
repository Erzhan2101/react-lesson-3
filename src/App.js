import GameV03 from "./Game-V-0.3";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import Data from "./users";


function App() {
    return (
        <div>
            {/*<Data/>*/}
            {/*<Todos />*/}
            {/*<GG />*/}
            {/*<GameV03 />*/}

            <BrowserRouter>
                <Header />
                <Route exact path='/'><GameV03 /></Route>
                <Route path='/todos'><Data /></Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
