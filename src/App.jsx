import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import TeamMood from './components/Dashboard/TeamMood/TeamMood'
import Budget from './components/Budget/Budget'
import './App.css'

const App = () => {
  return (
    <div className="app">
        <Header />
        <div className="app__body">
        <Dashboard />
        <TeamMood />
        </div>
        <Budget />
    </div>
  )
}

export default App