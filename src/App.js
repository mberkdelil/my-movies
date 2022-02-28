import { Route, Routes } from "react-router-dom";
import AddMovie from "./components/AddMovie"
import EditMovie from "./components/EditMovie";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/editmovie/:id" element={<EditMovie />} />
      </Routes>
    </div>
  );
}

export default App;
