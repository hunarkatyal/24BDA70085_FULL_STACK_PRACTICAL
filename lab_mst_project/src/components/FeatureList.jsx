import FeatureCard from './FeatureCard'

function FeatureList({ tasks, activeUser, onAdvanceStatus, onTogglePriority }) {
  return (
    <div className="feature-list">
      {tasks.map((task) => (
        <FeatureCard
          key={task.id}
          task={task}
          activeUser={activeUser}
          onAdvanceStatus={onAdvanceStatus}
          onTogglePriority={onTogglePriority}
        />
      ))}
    </div>
  )
}

export default FeatureList
