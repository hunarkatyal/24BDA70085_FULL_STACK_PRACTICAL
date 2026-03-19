import FeatureList from './FeatureList'

function TeamPanel({
  squadName,
  sprintLabel,
  tasks,
  activeUser,
  onAdvanceStatus,
  onTogglePriority,
}) {
  return (
    <section className="team-panel">
      <div className="team-panel-head">
        <h2>{squadName}</h2>
        <p>
          Sprint: <strong>{sprintLabel}</strong> · Active user: <strong>{activeUser}</strong>
        </p>
      </div>

      <FeatureList
        tasks={tasks}
        activeUser={activeUser}
        onAdvanceStatus={onAdvanceStatus}
        onTogglePriority={onTogglePriority}
      />
    </section>
  )
}

export default TeamPanel
