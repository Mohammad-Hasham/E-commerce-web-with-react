# 🛍️ Modern E-Commerce Web Application

A modern, responsive e-commerce web application built with **React.js** and designed to provide a smooth, intuitive, and realistic online shopping experience.

This project was built as a practical front-end development project to strengthen my skills in **React, JavaScript, API integration, component-based architecture, state management, responsive UI development, and Git/GitHub workflows**.

The goal was not simply to create a collection of pages, but to build an application that behaves like a real online store — from browsing products and viewing categories to managing a wishlist, adding products to a shopping cart, and reviewing individual product information.

---

## ✨ Project Overview

This e-commerce application provides users with a complete product-browsing and shopping experience through a clean and responsive interface.

Products are retrieved dynamically from the **DummyJSON Products API**, allowing the application to work with real API data rather than relying entirely on hardcoded product information.

The project follows a reusable component-based approach, where different parts of the interface are separated into logical React components. This makes the application easier to understand, maintain, debug, and extend.

### 🎯 Main Goals

* Build a realistic e-commerce interface using React
* Practice working with external REST APIs
* Create reusable React components
* Implement product browsing and product details
* Build cart and wishlist functionality
* Practice state management and data flow
* Create responsive layouts for different screen sizes
* Improve JavaScript and React problem-solving skills
* Follow a clean and organized project structure
* Gain experience building a larger front-end application from scratch

---









## 🛠️ Technologies & Tools

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
</p>

### 🌐 API

<p align="left">
  <img src="https://img.shields.io/badge/REST%20API-02569B?style=for-the-badge&logo=fastapi&logoColor=white" alt="REST API" />
  <img src="https://img.shields.io/badge/DummyJSON-000000?style=for-the-badge&logo=json&logoColor=white" alt="DummyJSON" />
</p>

### ⚛️ React Ecosystem

<p align="left">
  <img src="https://img.shields.io/badge/React%20Icons-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="ReactIcons" />
</p>





## 🚀 Features

### 🏠 Home Page

The home page provides users with an attractive introduction to the store and highlights available products.

It includes:

* Navigation bar
* Store branding
* Hero section
* Product sections
* Product cards
* Category navigation
* Wishlist interaction
* Shopping cart access
* Responsive layout

---

### 🛒 Shopping Cart

The shopping cart allows users to manage products they want to purchase.

Users can:

* Add products to the cart
* Increase product quantity
* Decrease product quantity
* Remove products
* View selected products
* Calculate cart quantities
* Review the cart before checkout

The cart was designed to behave like a real shopping cart rather than simply displaying static product information.

---

### ❤️ Wishlist

Users can save products that they are interested in by adding them to their wishlist.

The wishlist functionality includes:

* Add products to wishlist
* Prevent duplicate products
* Remove products
* Display saved products
* Maintain product information while navigating through the application

This feature helped me practice managing collections of objects and updating React state without creating duplicate entries.

---

### 📦 Product Details

Each product can be opened to view additional information.

The product details page displays information such as:

* Product title
* Product images
* Product description
* Price
* Discount information
* Rating
* Stock information
* Brand
* Category
* Product dimensions

The page uses API data dynamically instead of relying on manually written product information.

---

### 🔎 Product Categories

Products can be organized and explored through categories.

The application communicates with the API to retrieve category/product information and dynamically display the appropriate products.

This helped me practice:

* API endpoints
* Dynamic rendering
* URL-based navigation
* Filtering product data
* React component communication

---

### 📱 Responsive Design

The interface is designed to work across different screen sizes.

The layout adapts to:

* Desktop screens
* Laptops
* Tablets
* Mobile devices

Special attention was given to navigation, product cards, images, spacing, buttons, and the overall shopping experience.

---

## 🧠 Technical Highlights

One of the main purposes of this project was to move beyond simple static websites and understand how a larger React application is structured.

### Component-Based Architecture

The application is divided into reusable components instead of placing the entire interface inside a single file.

For example:

```text
src/
├── assets/
├── components/
│   ├── Navbar/
│   ├── ProductCard/
│   ├── Footer/
│   └── ...
├── pages/
│   ├── Home/
│   ├── Cart/
│   ├── Wishlist/
│   ├── ProductDetails/
│   └── ...
├── App.jsx
└── main.jsx
```

This structure makes individual parts of the application easier to develop and maintain.

---

## 🌐 API Integration

The application uses the **DummyJSON Products API** to retrieve product information.

Instead of manually creating every product, the application requests data from the API and uses the returned objects to render the interface.

The API is used for information such as:

* Product names
* Prices
* Images
* Categories
* Descriptions
* Ratings
* Stock
* Brands
* Product dimensions

I also practiced handling asynchronous operations and API errors using JavaScript's `async/await` and `try/catch`.

---

## 🛠️ Technologies Used

### Frontend

* ⚛️ **React.js**
* 🟨 **JavaScript (ES6+)**
* 🌐 **HTML5**
* 🎨 **CSS3**

### Development Tools

* ⚡ **Vite**
* 📦 **npm**
* 🔀 **Git**
* 🐙 **GitHub**
* 🎨 **Figma**

### Libraries

* **React Icons**

### API

* **DummyJSON Products API**

---

## 🎨 Design & User Experience

The interface was designed with a focus on creating a clean shopping experience rather than simply demonstrating technical functionality.

The design focuses on:

* Clear visual hierarchy
* Consistent spacing
* Easy navigation
* Product-focused layouts
* Readable typography
* Familiar e-commerce patterns
* Responsive behavior
* Clear call-to-action buttons

The color palette uses a combination of **deep neutral tones, clean white surfaces, and carefully selected accent colors** to keep the interface modern while maintaining good visual contrast.

---

## 🧩 Example Product Card

Each product card is designed to provide important information without overwhelming the user.

A typical card contains:

```text
┌─────────────────────────────┐
│                             │
│       Product Image         │
│                             │
├─────────────────────────────┤
│ Product Name                │
│ ⭐ Rating                   │
│                             │
│ $99.99                      │
│                             │
│ [ Add to Cart ]    ♡        │
└─────────────────────────────┘
```

The reusable product-card component allows the same UI pattern to be used throughout the application.

---

## 🧮 Cart Logic

The shopping cart contains logic for managing product quantities and calculating the user's current selection.

For example, the application can determine:

```text
Product Price × Quantity
```

and use the result when calculating the cart total.

The project also explores potential store rules such as:

* Free shipping above a certain order value
* Discounts for larger orders
* Quantity-based cart updates

These rules can be extended as the application develops.

---

## 📚 What I Learned

This project was an important step in my front-end development journey because it required me to solve problems that don't normally appear in small beginner projects.

While building the application, I practiced:

### React

* Components
* Props
* State
* Hooks
* Conditional rendering
* Lists and keys
* Event handling
* Component communication

### JavaScript

* Arrays
* Objects
* `map()`
* `filter()`
* `find()`
* `reduce()`
* Destructuring
* Spread syntax
* Asynchronous JavaScript
* Promises
* `async/await`
* Error handling

### API Development

* Fetching external data
* Working with JSON
* Understanding API responses
* Handling loading and error states
* Working with dynamic product data

### Git & GitHub

* Creating repositories
* Commits
* Branches
* Push/pull workflows
* Organizing project history
* Managing a real development project

---

## 🐛 Challenges I Faced

Building this project was not always straightforward.

Some of the challenges included working with nested API data, rendering product information correctly, managing cart and wishlist state, handling dynamic images, and keeping components synchronized when data changed.

One example was dealing with product objects returned by the API. A product is not simply a single value — it contains multiple properties, including images, pricing information, dimensions, category information, and other metadata.

Understanding the structure of these objects and correctly passing the required information between components helped me become more comfortable with JavaScript objects and React props.

I also encountered layout problems while developing the application. Instead of treating bugs as reasons to stop, I used them as opportunities to understand the underlying HTML, CSS, and React behavior.

---

## 🔮 Future Improvements

This project is still evolving.

Planned improvements include:

* 🔐 User authentication
* 👤 User accounts
* 💳 Checkout experience
* 📦 Order history
* 🔍 Product search
* 🏷️ Advanced filtering
* ↕️ Product sorting
* ⭐ Product reviews
* 📍 Shipping information
* 💾 Persistent cart storage
* 🌓 Dark mode
* ⚡ Performance optimization
* 📱 Further mobile improvements
* 🧪 Automated testing
* 🔄 More advanced state management

The long-term goal is to turn the project into a more complete e-commerce platform while continuing to improve the underlying architecture and user experience.

---

## 📸 Screenshots

### Home Page

*Add your homepage screenshot here.*

### Product Details

*Add your product details screenshot here.*

### Shopping Cart

*Add your cart screenshot here.*

### Wishlist

*Add your wishlist screenshot here.*

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Mohammad-Hasham/E-commerce-web-with-react.git
```

Move into the project directory:

```bash
cd E-commerce-web
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local development URL provided by Vite.

---

## 📁 Project Structure

```text
E-commerce-web-with-react/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar/
│   │   ├── ProductCard/
│   │   ├── Footer/
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Cart/
│   │   ├── Wishlist/
│   │   └── ProductDetails/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎯 Why I Built This Project

I built this project to challenge myself beyond basic HTML and CSS projects and to gain practical experience developing a complete React application.

Instead of following a simple tutorial and copying an existing application, I wanted to understand how the individual pieces of an e-commerce application connect together.

From API requests and reusable components to cart functionality and responsive layouts, every part of the project gave me an opportunity to practice solving real front-end development problems.

This project represents part of my ongoing journey toward becoming a professional **Front-End Developer**.

---

## 🚀 Current Development Focus

I'm continuing to improve this application while expanding my front-end engineering knowledge.

My current learning path includes:

```text
JavaScript
    ↓
React
    ↓
TypeScript
    ↓
Next.js
    ↓
Advanced React
    ↓
Backend Development
```

The goal is to develop from a front-end developer who can build interfaces into a software engineer who understands the complete application development process.

---

## 👨‍💻 Author

**Mohammad Hasham Hashimi**

Front-End Developer focused on building modern, responsive, and user-friendly web applications.

### Technologies I work with

`HTML` `CSS` `JavaScript` `React` `Git` `GitHub` `Vite` `REST APIs`

---

## ⭐ If You Like This Project

If you find this project useful or interesting, feel free to explore the code, provide feedback, or ⭐ the repository.

More improvements are coming as I continue developing my skills and expanding the application.

---

**Built with React ⚛️ and a lot of problem-solving.**

