import {FaStar} from 'react-icons/fa'

function Stars({rating}) {

    let allStar=[]

    for(let i=0;i<rating;i++){
        allStar.push((<FaStar style={{color:'orangered',fontSize:'1.6rem'}}/>));
    }

  return (
    <div>
        {allStar.map(star=>star)}
    </div>
  )
}

export default Stars