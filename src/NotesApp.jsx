import { useState, useEffect } from 'react'

// Fake async API living right inside the component file.
// Simulates network latency and goes "down" ~30% of the time.
const api = {
  getNotes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.3) {
          reject(new Error('network down'))
          return
        }
        resolve([
          { id: 1, text: 'Buy milk' },
          { id: 2, text: 'Call the plumber' },
          { id: 3, text: 'Finish the report' },
        ])
      }, 800)
    })
  },

  addNote(val) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.3) {
          reject(new Error('network down'))
          return
        }
        resolve({ id: Date.now(), text: val })
      }, 900)
    })
  },

  deleteNote(x) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.3) {
          reject(new Error('network down'))
          return
        }
        resolve(x)
      }, 700)
    })
  },
}

function NotesApp() {
  const [data, setData] = useState([])
  const [val, setVal] = useState('')

  async function load() {
    const res = await api.getNotes()
    setData(res)
  }

  useEffect(() => {
    load()
  }, [data])

  async function handleAdd() {
    const res = await api.addNote(val)
    setData([...data, res])
    setVal('')
  }

  async function handleDelete(x) {
    await api.deleteNote(x)
    setData(data.filter((n) => n.id !== x))
  }

  return (
    <div className="notes">
      <h2>Notes</h2>

      <div className="notes-form">
        <input
          type="text"
          value={val}
          placeholder="Write a note..."
          onChange={(e) => setVal(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul className="notes-list">
        {data.map((n) => (
          <li key={n.id}>
            <span>{n.text}</span>
            <button onClick={() => handleDelete(n.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NotesApp
