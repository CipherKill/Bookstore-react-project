import RightGreeting from '../layouts/RightGreeting'
import Books from '../layouts/Books'

function Home() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-4 col-sm-12">
                <RightGreeting/>
            </div>
            <div className="col-md-8 col-sm-12">
                <Books forPath='home'/>    
            </div>
        </div>
    </div>
  )
}

export default Home