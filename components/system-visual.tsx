export function SystemVisual() {
  return (
    <div className="system-visual" aria-label="Products connect through backend systems to APIs and data">
      <div className="system-visual-meta">
        <span>LIVE SYSTEM MAP</span>
        <span className="status-indicator">BUILDING</span>
      </div>

      <svg
        className="system-lines"
        viewBox="0 0 560 360"
        role="img"
        aria-labelledby="system-map-title"
      >
        <title id="system-map-title">
          Diagram showing products flowing through a backend to integrations, APIs, and databases
        </title>
        <path d="M110 84 H224 Q244 84 244 104 V152" />
        <path d="M110 276 H224 Q244 276 244 256 V208" />
        <path d="M316 180 H438" />
        <path d="M474 144 V106" />
        <path d="M474 216 V254" />
        <circle className="signal signal-a" cx="0" cy="0" r="4">
          <animateMotion
            dur="5.5s"
            path="M110 84 H224 Q244 84 244 104 V152"
            repeatCount="indefinite"
          />
        </circle>
        <circle className="signal signal-b" cx="0" cy="0" r="4">
          <animateMotion
            begin="1.8s"
            dur="5.5s"
            path="M316 180 H438 Q474 180 474 144 V106"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      <div className="system-node node-products">
        <span className="node-index">INPUT 01</span>
        <strong>PRODUCTS</strong>
        <small>web · mobile</small>
      </div>
      <div className="system-node node-operations">
        <span className="node-index">INPUT 02</span>
        <strong>OPERATIONS</strong>
        <small>people · business</small>
      </div>
      <div className="system-node node-backend">
        <span className="node-index">CORE</span>
        <strong>BACKEND</strong>
        <small>rules · reliability</small>
      </div>
      <div className="system-node node-apis">
        <span className="node-index">OUTPUT 01</span>
        <strong>APIs</strong>
        <small>integrations</small>
      </div>
      <div className="system-node node-data">
        <span className="node-index">OUTPUT 02</span>
        <strong>DATA</strong>
        <small>persistence</small>
      </div>

      <div className="system-caption">
        <span>request</span>
        <span>validate</span>
        <span>connect</span>
        <span>persist</span>
      </div>
    </div>
  );
}
