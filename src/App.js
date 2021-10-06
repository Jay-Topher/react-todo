import "./App.css";
import Theme from "./context/ThemeContext";
import TodoProvider from "./context/TodoContext";
import Home from "./pages/Home";

function App() {
  return (
    <Theme>
      <TodoProvider>
        <Home />
      </TodoProvider>
    </Theme>
  );
}

export default App;
