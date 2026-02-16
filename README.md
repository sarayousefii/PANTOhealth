# PANTOhealth - Germany Train Stations Map

A small frontend React app that visualizes train stations in Germany on a Leaflet map. Users can filter stations by city, view the list, and interact with the map.

## 🚀 Features

- Fetch station data from the provided API
- Display stations on a Leaflet map, centered on Germany
- List of stations with name and city
- Filter stations by city (input box)
- Click on a station in the list to highlight / zoom on the map
- Loading and error handling
- Clean React code and separated logic (hooks, utils, components)
- Basic component test using React Testing Library

## 🛠 Tech Stack

- React (Functional Components + Hooks)
- Leaflet.js for map visualization
- JavaScript (ES6+)
- CSS + TailwindCSS
- State management: local component state
- Testing: Jest + React Testing Library

## 📁 Project Structure

src/
├─ components/
│ ├─ filter/CityFilter.jsx
│ ├─ map/MapView.jsx
│ └─ stations/StationList.jsx
├─ hooks/useStations.js
├─ utils/filterStations.js
├─ App.jsx
├─ index.js
└─ index.css


- `hooks/useStations.js`: Fetch and sanitize stations data  
- `components/`: Reusable UI components separated by responsibility  
- `utils/`: Helper functions (e.g., filtering)  
- `App.jsx`: Main layout with map and sidebar  

## ⚡ Setup & Run

1. Clone the repo

```bash
git clone <repo-url>
cd pantohealth
```

2. Install dependencies

```bash
npm install

```

3. Run the app

```bash
npm start

```

4. Run tests

```bash
npm test

```

Runs the component tests using Jest + React Testing Library

🔗 API

Station data is fetched from this GitHub Gist:
Train Stations JSON

📦 Deployment

App can be deployed to Vercel, Netlify, or similar static hosting services.

Made with ❤️ using React & Leaflet