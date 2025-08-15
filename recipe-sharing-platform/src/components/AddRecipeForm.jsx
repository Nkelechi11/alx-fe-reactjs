import { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    preparationSteps: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Check if title is empty
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    // Check if ingredients is empty
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      // Check if ingredients list has at least 2 items
      const ingredientLines = formData.ingredients.trim().split('\n').filter(line => line.trim());
      if (ingredientLines.length < 2) {
        newErrors.ingredients = 'Please include at least 2 ingredients';
      }
    }

    // Check if preparation steps is empty
    if (!formData.preparationSteps.trim()) {
      newErrors.preparationSteps = 'Preparation steps are required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsSubmitting(false);
      return;
    }

    // Clear errors and submit
    setErrors({});
    console.log('Form submitted:', formData);
    
    // Reset form after successful submission
    setFormData({
      title: '',
      ingredients: '',
      preparationSteps: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Add New Recipe</h2>
      
      <div className="space-y-6">
        {/* Recipe Title Field */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
        </div>

        {/* Ingredients Field */}
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-2">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleInputChange}
            rows={6}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="List ingredients here (one per line)"
          />
          {errors.ingredients && <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps Field */}
        <div>
          <label htmlFor="preparationSteps" className="block text-sm font-medium text-gray-700 mb-2">
            Preparation Steps
          </label>
          <textarea
            id="preparationSteps"
            name="preparationSteps"
            value={formData.preparationSteps}
            onChange={handleInputChange}
            rows={8}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical ${
              errors.preparationSteps ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Describe preparation steps in detail"
          />
          {errors.preparationSteps && <p className="mt-1 text-sm text-red-600">{errors.preparationSteps}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium ${
              isSubmitting 
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? 'Adding Recipe...' : 'Add Recipe'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;