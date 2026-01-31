# MindMood – AI for Mental Health Patterns Detection

A React web application that uses AI-powered sentiment analysis to help users track mental health patterns through journaling.

## Features

- 📝 **Free-form journaling** - Express your thoughts and feelings freely
- 🤖 **AI sentiment analysis** - Simulated NLP analysis of journal entries
- 📊 **Mood insights** - Get personalized insights about your emotional patterns
- 📈 **Trend detection** - Track mood trends over time
- 💾 **Persistent storage** - All entries saved locally using localStorage
- 📱 **Responsive design** - Works seamlessly on mobile and desktop
- 🎨 **Calming UI** - Beautiful blue/purple gradient design

## Project Structure

```
Mindmood/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Header.jsx
    │   ├── JournalForm.jsx
    │   ├── MoodTrends.jsx
    │   └── Footer.jsx
    └── styles/
        └── App.css
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## How It Works

1. **Write a journal entry** - Enter your thoughts and feelings in the text area
2. **Click "Analyze Mood"** - The AI analyzes your entry for sentiment and patterns
3. **View insights** - Get personalized feedback about your mood and trends
4. **Track over time** - All entries are saved locally and trends are detected

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **localStorage** - Data persistence
- **CSS3** - Styling with gradients and animations

## Color Palette

- Primary Blue: `#6366f1`
- Primary Purple: `#8b5cf6`
- Gradient: Blue to Purple (`#667eea` → `#764ba2`)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 MindMood Inc. – Empowering Mental Wellness through AI



