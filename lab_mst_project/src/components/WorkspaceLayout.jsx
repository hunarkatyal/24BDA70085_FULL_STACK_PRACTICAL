function WorkspaceLayout({ title, subtitle, pathHint, children }) {
  return (
    <main className="workspace-layout">
      <header className="workspace-header">
        <p className="path-hint">{pathHint}</p>
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </header>
      {children}
    </main>
  )
}

export default WorkspaceLayout
