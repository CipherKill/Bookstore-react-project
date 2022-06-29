import Stars from './Stars'
import '../styles/BookCard.css'
function BookCard({cover,name,author,rating,genre}) {
  return (
    <div className="main-area shadow">
        <img className="image-style" src={cover} alt="problem" style={{borderRadius:'10px'}}/>
        <div className="information-area">
            <h1 className='title-style'>{name}</h1>
            <h5 className='author-style'><span className="highlight">By</span> {author}</h5>
            <h6 className="genre-style"><span className="highlight">Genre:</span> {genre}</h6>
            {/* <h6 className="rating-style"><span className="highlight">Rating:</span> {rating}</h6> */}
            <Stars rating={rating}/>
        </div>
    </div>
  )
}

export default BookCard