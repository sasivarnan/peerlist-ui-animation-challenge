import { createFileRoute, Link } from '@tanstack/react-router'
import logo from '../logo.svg'
import '../App.css'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Submissions for <a className="App-link" target="_blank" href="https://peerlist.io/challenges/ui-animation-challenge">Peerlist UI Animation Challenge</a> by <a href="https://sasivarnan.com">Sasivarnan R</a>
        </p>
        <Link
          className="App-link"
          to="/day-1"
        >
          Day 1 - Fluid Menu Animation
        </Link>
        <Link
          className="App-link"
          to="/day-2"
        >
          Day 2 - Dynamaic Status Indicator
        </Link>
      </header>
    </div>
  )
}
