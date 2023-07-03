import SearchFilter from './Components/SearchFilter/SearchFilter';
import {Provider} from "react-redux";
import { store } from './Components/Store/Store';

function App() {
  return (
    <>
      <Provider store={store}>
        <SearchFilter />
      </Provider>
    </>
  );
}

export default App;
