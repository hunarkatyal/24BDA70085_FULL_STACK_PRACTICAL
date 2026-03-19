import { useMemo, useState } from 'react'
import './App.css'
import TeamPanel from './components/TeamPanel'
import WorkspaceLayout from './components/WorkspaceLayout'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Design pricing section', status: 'Todo', priority: false },
    { id: 2, title: 'Connect auth endpoint', status: 'In Progress', priority: true },
    { id: 3, title: 'Refine onboarding copy', status: 'Done', priority: false },
  ])

  const activeUser = 'Ava'
  const sprintLabel = 'Sprint 12'

  const advanceStatus = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) => {
        if (task.id !== taskId) {
          return task
        }

        if (task.status === 'Todo') {
          return { ...task, status: 'In Progress' }
        }

        if (task.status === 'In Progress') {
          return { ...task, status: 'Done' }
        }

        return { ...task, status: 'Todo' }
      }),
    )
  }

  const togglePriority = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId ? { ...task, priority: !task.priority } : task,
      ),
    )
  }

  const doneCount = useMemo(
    () => tasks.filter((task) => task.status === 'Done').length,
    [tasks],
  )

  return (
    <WorkspaceLayout
      title="Modern React Prop Drilling Demo"
      subtitle="App-level state and handlers are drilled through multiple components and consumed in deep child cards."
      pathHint="Flow: App → WorkspaceLayout → TeamPanel → FeatureList → FeatureCard"
    >
      <section className="stats">
        <div>
          <h4>Total Tasks</h4>
          <p>{tasks.length}</p>
        </div>
        <div>
          <h4>Completed</h4>
          <p>{doneCount}</p>
        </div>
      </section>

      <TeamPanel
        squadName="Web Platform Squad"
        sprintLabel={sprintLabel}
        tasks={tasks}
        activeUser={activeUser}
        onAdvanceStatus={advanceStatus}
        onTogglePriority={togglePriority}
      />
    </WorkspaceLayout>
  )
}

export default App
