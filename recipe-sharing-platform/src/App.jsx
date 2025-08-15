import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage'
import RecipeDetail from './components/recipeDetail';
import ErrorBoundary from './components/ErrorBoundary';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path='/addrecipe' element={<AddRecipeForm />} />
        </Routes>
      </Router>
    
       
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary>
    </>
  )
}

export default App
