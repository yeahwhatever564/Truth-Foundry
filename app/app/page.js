// Fallback if data.json missing—prevents build crash
const fallbackData = [
  {
    "firm": "a16z Crypto",
    "d3s": 84,
    "iis": 28,
    "worst": "Cluely ($15M, cheating AI)",
    "roast": "Preaches responsible innovation while funding literal exam-cheating tools. Peak hypocrisy."
  }
];

let data = fallbackData;

try {
  data = require('./data.json');
} catch (e) {
  console.log('data.json missing—using fallback');
}

export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '1rem' }}>
        🔥 Truth Foundry
      </h1>
      <p style={{ textAlign: 'center', fontSize: '1.4rem', marginBottom: '3rem', opacity: 0.8 }}>
        Real-time Hypocrisy, Diligence & Impact scores for the VC industry
      </p>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#111' }}>
              <th style={th}>Rank</th>
              <th style={th}>Firm</th>
              <th style={th}>Avg D3S</th>
              <th style={th}>IIS</th>
              <th style={th}>Worst Bet</th>
              <th style={th}>Roast</th>
            </tr>
          </thead>
          <tbody>
            {data.map((vc, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#111' : '#222' }}>
                <td style={td}>{i + 1}</td>
                <td style={td}><strong>{vc.firm}</strong></td>
                <td style={td}>
                  <span style={{ color: vc.d3s >= 70 ? '#ff4444' : vc.d3s >= 50 ? '#ffaa00' : '#44ff44' }}>
                    {vc.d3s}
                  </span>
                </td>
                <td style={td}>
                  <span style={{ color: vc.iis >= 20 ? '#ff0000' : vc.iis >= 10 ? '#ff8800' : '#00ff00' }}>
                    {vc.iis}
                  </span>
                </td>
                <td style={td}>{vc.worst}</td>
                <td style={{ ...td, fontStyle: 'italic', opacity: 0.9 }}>{vc.roast}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <a href="https://github.com/yeahwhatever564/Truth-Foundry" style={{ color: '#ff4444', textDecoration: 'underline' }}>
          Fork this repo • Add more scores • Break more things
        </a>
      </div>
    </main>
  );
}

const th = { padding: '1rem', textAlign: 'left', borderBottom: '2px solid #444' };
const td = { padding: '1rem', borderBottom: '1px solid #333' };
