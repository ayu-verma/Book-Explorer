# Book Search App

A modern and responsive web application built using React that allows users to search for books and view details using the Open Library API.

---

## 🚀 Features

* 🔍 Real-time book search
* 📸 Book cover images
* ⚡ Debounced API calls (optimized performance)
* 💎 Skeleton loading UI
* ❌ Error handling
* 📭 No results state
* 📱 Fully responsive design

---

## 🛠️ Tech Stack

* React.js
* Tailwind CSS
* JavaScript (ES6+)
* Vite

---

## 🌐 API Used

* Open Library API
  https://openlibrary.org/dev/docs/api/search

---

## ⚙️ Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/book-search-app.git
   ```

2. Navigate to project folder:

   ```bash
   cd book-search-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

---

## 🧠 Key Architectural Decisions

### 📦 Component Structure

* `Navbar` → Navigation bar
* `SearchBar` → Handles user input
* `ProductList` → Displays list of books
* `SkeletonCard` → Loading placeholder UI

---

### ⚡ State Management

* Used React hooks:

  * `useState` → Manage search, products, loading, error
  * `useEffect` → Handle API calls

---

### 🔄 API Handling

* Implemented debouncing (500ms delay)
* Prevented unnecessary API calls
* Error handling for failed requests

---

### 🎨 Styling

* Tailwind CSS for fast UI development
* Responsive grid layout
* Hover animations for better UX

---

