# 🎨 Portfolio Showcase Application

A modern, responsive React application for showcasing creative projects. Users can view projects, add new ones, and search through the collection.

## ✨ Features

- **View Projects** - Browse through a collection of projects
- **Add New Projects** - Dynamically add projects with titles and descriptions
- **Search Functionality** - Filter projects by title or description in real-time
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Form Validation** - Ensures all required fields are filled correctly
- **Modern UI** - Clean, gradient-based design with smooth animations

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **CSS3** - Custom styling with CSS modules
- **Jest & React Testing Library** - Unit and integration testing

## 📁 Project Structure
portfolio-platform/
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── AddProjectForm.jsx
│ │ ├── SearchBar.jsx
│ │ ├── ProjectList.jsx
│ │ └── ProjectCard.jsx
│ ├── data/
│ │ └── projects.js
│ ├── tests/
│ │ └── App.test.jsx
│ ├── App.jsx
│ ├── App.css
│ └── main.jsx
├── public/
├── index.html
├── package.json
└── README.md

text

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-platform.git
   cd portfolio-platform
Install dependencies

bash
npm install
Start the development server

bash
npm run dev
Open your browser

Navigate to http://localhost:5173

Running Tests
bash
# Run all tests
npm test

# Run tests in watch mode (auto-rerun on changes)
npm test -- --watch

# Run tests with coverage report
npm test -- --coverage
Building for Production
bash
npm run build
The built files will be in the dist folder.

# Usage Guide
Adding a New Project
Scroll to the "Add New Project" section

Enter a project title (minimum 3 characters)

Enter a project description (minimum 10 characters)

Click the "Add Project" button

Your new project will appear at the top of the list

Searching for Projects
Type in the search bar

Projects will filter automatically as you type

Search matches both titles and descriptions (case-insensitive)

Click the "✕" button to clear the search

# Testing
The application includes comprehensive tests:

Unit Tests - Individual component functionality

Integration Tests - User interactions and workflows

Form Validation - Testing error messages and submission

# Test Coverage
Component	Tests
Header	Rendering, content
AddProjectForm	Validation, submission, clearing
SearchBar	Input, clearing, filtering
App	Integration, project addition, search
🎨 Design Decisions
Gradient Background - Creates visual interest without distraction

Card Hover Effects - Provides tactile feedback for better UX

Responsive Breakpoints - 768px for tablets, 480px for mobile

Form Validation - Immediate feedback helps users correct errors

Animated Elements - Subtle animations enhance user experience

# Known Limitations
Projects are stored in memory only (refresh resets to initial data)

No image upload functionality for project thumbnails

No edit or delete features for existing projects

No persistent storage (localStorage not implemented)

# Future Enhancements
Add localStorage to persist projects between sessions

Implement edit and delete functionality

Add categories/tags for projects

Include project images and links

Add drag-and-drop reordering

Implement dark mode toggle

Add project filtering by categories

# Changelog
Version 1.0.0 (Current)
Initial release

Core CRUD operations (Create, Read)

Search functionality

Responsive design

Form validation

Unit and integration tests

# Author
Thomas Komora Buko - [tkaim88@github.com]

# License
This project is licensed under the MIT License.

# Acknowledgments
Design inspiration from provided mock-up
React Documentation
Testing Library documentation
