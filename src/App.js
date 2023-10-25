import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import TodoListPage from "./pages/TodoListPage";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" exact element={<NotesListPage />} />
          <Route path="/note/:id" element={<NotePage />} />
          <Route path="/todo" exact element={<TodoListPage />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
