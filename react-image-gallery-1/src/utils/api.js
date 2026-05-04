export const fetchProducts = async () => {
  try {
    const response = await fetch('/dummy.json/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.products; // Assuming the JSON structure has a 'products' key
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};