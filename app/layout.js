export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Truth Foundry — VC Vulture Leaderboard</title>
        <meta name="description" content="HSS · D3S · IIS scores for the top hypocrites in venture" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔥</text></svg>" />
      </head>
      <body style={{ margin: 0, fontFamily: 'system-ui', background: '#000', color: '#fff' }}>
        {children}
      </body>
    </html>
  );
}
