import './App.css'
import NotesApp from './NotesApp'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>view</h1>
      </header>

      <main className="app-main">
        <NotesApp />
      </main>

      <footer className="app-footer">
        <p>Built with React + Vite</p>
      </footer>
    </div>
  )
}

export default App
