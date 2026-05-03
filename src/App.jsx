import MapPanel from "./MapPanel"

function App() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column"}}>
      <header style={{ padding: "10px", background: "#222", color: "white"}}>
        <h1>FieldCommand</h1>
      </header>

      <main style={{ flex: 1, background: "#f4f4f4", display: "flex"}}>
        <MapPanel />
      </main>
    </div>
  )
}

export default App


