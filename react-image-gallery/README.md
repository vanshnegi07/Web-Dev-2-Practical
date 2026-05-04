# React Image Gallery

This project is a simple image gallery built with React and styled using Tailwind CSS. It fetches image data from a local JSON file and displays four images at a time, allowing users to navigate through the images using next and previous buttons.

## Project Structure

```
react-image-gallery
├── public
│   ├── index.html          # Main HTML file
│   └── api
│       └── dummy.json     # JSON file containing image data
├── src
│   ├── index.jsx          # Entry point for the React application
│   ├── App.jsx            # Main App component
│   ├── components
│   │   ├── Gallery.jsx    # Component for displaying images
│   │   └── EdgePanel.jsx  # Component for additional controls
│   ├── styles
│   │   └── index.css      # Global styles and Tailwind CSS imports
│   └── assets             # Directory for additional assets
├── package.json           # npm configuration file
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── README.md              # Project documentation
└── .gitignore             # Git ignore file
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd react-image-gallery
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the gallery.

## Usage

- The gallery displays four images at a time.
- Use the "Next" and "Previous" buttons to navigate through the images.
- The EdgePanel component can be customized to show additional information or controls.

## Customization

- You can modify the `dummy.json` file to change the images displayed in the gallery.
- Tailwind CSS can be customized in the `tailwind.config.js` file to adjust styles as needed.

## License

This project is licensed under the MIT License.