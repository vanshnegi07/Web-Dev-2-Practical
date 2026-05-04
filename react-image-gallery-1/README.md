# React Image Gallery

This project is a simple React application that displays a gallery of images fetched from a local JSON file. It allows users to navigate through the images using next and previous buttons.

## Features

- Displays 4 images at a time.
- Next and previous buttons for navigation.
- Fetches product data from a local JSON file.

## Project Structure

```
react-image-gallery
├── public
│   ├── index.html          # Main HTML file
│   └── dummy.json         # Mock data for products
├── src
│   ├── index.jsx          # Entry point of the React application
│   ├── App.jsx            # Main App component
│   ├── components
│   │   ├── ImageGallery.jsx # Component to display the image gallery
│   │   └── ImageCard.jsx    # Component for individual image cards
│   ├── hooks
│   │   └── useFetchProducts.js # Custom hook for fetching product data
│   ├── styles
│   │   └── index.css       # CSS styles for the application
│   └── utils
│       └── api.js          # Utility functions for API calls
├── .gitignore              # Files and directories to ignore by Git
├── package.json            # npm configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/vanshnegi07/Web-Dev-2-Practical.git
   ```

2. Navigate to the project directory:
   ```
   cd react-image-gallery
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

## Usage

Once the application is running, you will see a gallery of images. Use the next and previous buttons to navigate through the images.

## License

This project is open-source and available under the MIT License.