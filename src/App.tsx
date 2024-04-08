import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import NotFound from "./components/NotFound";
import RecipeDetail from "./components/RecipeDitail";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="flex flex-col items-center  bg-cover bg-center bg-no-repeat h-screen">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to={"/Recipe"} />} />
          <Route path="/Recipe" element={<RecipeList />} />
          <Route path="/Recipe/Description/:id" element={<RecipeDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
