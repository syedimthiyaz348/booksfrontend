import dateFormat from "dateformat";
import './index.css'

const Book = props => {
    const {books} = props
    const {title, imageLink, shortDescription,longDescription, authors, pages, publishedDate, categories, id} = books
    const date = dateFormat(publishedDate, "yyyy mmm")
    const description = (shortDescription === undefined)? longDescription : shortDescription 
    return(
        <div className="book-container">
            <a href="google.com" className="view-link">View...</a>
            <img className="book-image" src={imageLink} alt={title} />
            <h1>{title}</h1>
        </div>
    )

}

export default Book