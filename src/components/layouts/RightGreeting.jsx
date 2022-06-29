import {Link} from 'react-router-dom'
import '../styles/RightGreeting.css'
function RightGreeting() {
  return (
    <div className="greeting-area spacer">
        <h2 className="greet-heading special-color">Welcome to Proxima Books</h2>
        <h6 className="greet-caption special-color">Knowledge in the palm of your hands.</h6>
        <div className="button-area">
            <Link to="/books" className="btn btn-style my-3">SEE OUR BOOKS</Link>
            <a href="https://alwaysjudgeabookbyitscover.com/" className="btn btn-style mb-3">GET RECOMMENDIONS</a>
            <a href="http://localhost:4444/" className="btn btn-style mb-3">BEHIND THE SCENES</a>
        </div>
    </div>
  )
}

export default RightGreeting