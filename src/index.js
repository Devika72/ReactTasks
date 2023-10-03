import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import { Exercise as CharacterCount } from "./pages/CharacterCount/Exercise";
import  Counter from "./pages/Counter/Exercise";
import  ElementList from "./pages/SearchArray/Exercise";
import FilterableList from "./pages/FilterObject/Exercise";
import RandomQuote from "./pages/RandomQuoteGen/Exercise";
import DropdownForm from "./pages/DependableDropdown/Exercise";
import ResetPasswordForm from "./pages/ResetPassword/Exercise";
import Todo from "./pages/ToDoList/Exercise";
import { UseToggle } from "./pages/DarkAndLight/Exercise";
import AddToCart from './pages/AddToCart/Exercise';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Exercise" element={<CharacterCount />} />
          <Route path="Counter" element={<Counter />} />
          <Route path="ElementList" element={<ElementList />} />
          <Route path="FilterableList" element={<FilterableList />} />
          <Route path="RandomQuote" element={<RandomQuote />} />
          <Route path="DropdownForm" element={<DropdownForm />} />
          <Route path="ResetPasswordForm" element={<ResetPasswordForm />} />
          <Route path="Todo" element={<Todo />} />
          <Route path="toggle" element={<UseToggle />} />
          <Route path="AddToCart" element={<AddToCart />} />

          {/* Other routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// ReactDOM rendering code
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
