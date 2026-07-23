import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [isRunning, setIsRunning] = useState(false)
  const [logs, setLogs] = useState([])
  const [thoughtStream, setThoughtStream] = useState(null)
  const [lastStatus, setLastStatus] = useState("Idle")
  const ws = useRef(null)
  const logsEndRef = useRef(null)

  useEffect(() => {
    // Fetch initial status
    fetch('/api/status')
      .then(r => r.json())
      .then(d => setIsRunning(d.is_running))
      .catch(e => console.error(e));

    // Connect WebSocket
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/ws/logs`;
    const finalUrl = window.location.host.includes('5173') ? 'ws://127.0.0.1:8000/ws/logs' : wsUrl;
    
    ws.current = new WebSocket(finalUrl);
    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'log') {
        setLogs(prev => [...prev.slice(-49), { id: Date.now(), text: data.message }]);
      } else if (data.type === 'thought_stream') {
        setThoughtStream(data.thought);
      } else if (data.type === 'status') {
        setLastStatus(data.last_action);
      }
    };

    return () => {
      ws.current?.close();
    }
  }, [])

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [logs])

  const toggleAgent = async () => {
    const baseUrl = window.location.host.includes('5173') ? 'http://127.0.0.1:8000' : '';
    const res = await fetch(`${baseUrl}/api/toggle`, { method: 'POST' });
    const data = await res.json();
    setIsRunning(data.is_running);
    if (!data.is_running) {
      setThoughtStream(null);
      setLastStatus("Paused");
    }
  }

  const terminateAgent = async () => {
    const baseUrl = window.location.host.includes('5173') ? 'http://127.0.0.1:8000' : '';
    await fetch(`${baseUrl}/api/terminate`, { method: 'POST' });
    setIsRunning(false);
    setLastStatus("Terminated");
    setLogs(prev => [...prev, { id: Date.now(), text: "Connection lost. Backend terminated." }]);
  }

  return (
    <>
      <div className="header">
        <div className="title">
          <h2>Autonomous Supervisor</h2>
        </div>
        <div className="status-container">
          <div className="status-label">LAST ACTION: <span className={`status-val ${lastStatus.includes('FAILED') ? 'error' : 'success'}`}>{lastStatus}</span></div>
          <div className={`status-badge ${isRunning ? 'running' : 'stopped'}`}>
            <div className={`dot ${isRunning ? 'running' : 'stopped'}`}></div>
            {isRunning ? 'Observing' : 'Idle'}
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="sidebar">
          <h3>Live Thought Stream</h3>
          {thoughtStream ? (
            <div className="thought-card">
              <div className="thought-section">
                <label>STATE:</label>
                <p>{thoughtStream.current_state}</p>
              </div>
              <div className="thought-section">
                <label>OBSTACLES:</label>
                <p>{thoughtStream.obstacles}</p>
              </div>
              <div className="thought-section">
                <label>PROPOSED STEP:</label>
                <p>{thoughtStream.proposed_step}</p>
              </div>
            </div>
          ) : (
            <div className="thought-card empty">Waiting for AI analysis...</div>
          )}
        </div>

        <div className="logs">
          {logs.length === 0 && <div className="log-entry" style={{opacity:0.5}}>Waiting for events...</div>}
          {logs.map((l) => (
            <div key={l.id} className="log-entry">
              <span style={{color: '#5c6370'}}>{new Date(l.id).toLocaleTimeString()}</span> &nbsp;
              {l.text}
            </div>
          ))}
          <div ref={logsEndRef} />
        </div>
      </div>

      <div className="controls">
        <button className="btn-toggle" onClick={toggleAgent}>
          {isRunning ? 'PAUSE AGENT' : 'START AGENT'}
        </button>
        <button className="btn-terminate" onClick={terminateAgent}>
          TERMINATE
        </button>
      </div>
    </>
  )
}

export default App
