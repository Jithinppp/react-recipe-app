import Category from "./components/Category";
import Header from "./components/Layouts/Header";
import Pages from "./components/Pages/Pages";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Category />
      <Pages />
    </div>
  );
}

export default App;
