const STATUS_FLOW = ['Todo', 'In Progress', 'Done']

function FeatureCard({ task, activeUser, onAdvanceStatus, onTogglePriority }) {
  const nextStatus = STATUS_FLOW[(STATUS_FLOW.indexOf(task.status) + 1) % STATUS_FLOW.length]

  return (
    <article className="feature-card">
      <div className="feature-card-head">
        <p className="chip">{task.status}</p>
        <p className="chip chip-priority">{task.priority ? 'Priority' : 'Normal'}</p>
      </div>

      <h3>{task.title}</h3>
      <p className="task-note">Assigned by: {activeUser}</p>

      <div className="card-actions">
        <button onClick={() => onAdvanceStatus(task.id)}>
          Move to {nextStatus}
        </button>
        <button className="ghost" onClick={() => onTogglePriority(task.id)}>
          {task.priority ? 'Remove priority' : 'Mark priority'}
        </button>
      </div>
    </article>
  )
}

export default FeatureCard
