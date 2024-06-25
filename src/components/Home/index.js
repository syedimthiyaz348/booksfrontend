import {Component} from 'react'
import Book from '../Book'
import './index.css'

class Home extends Component {
    state = {books: []}
    componentDidMount() {
        this.callingApi()
    }

    callingApi = async () => {
        const url = 'https://books123-six.vercel.app/books'
        const response = await fetch(url)
        const data = await response.json()
        const fetchedData = data.map(eachBook => ({
            authors : eachBook.authors,
            isbn : eachBook.isbn,
            imageLink : eachBook.thumbnailUrl,
            categories: eachBook.categories,
            longDescription: eachBook.longDescription,
            pages: eachBook.pageCount,
            title: eachBook.title,
            publishedDate: eachBook.publishedDate,
            shortDescription: eachBook.shortDescription,
            id: eachBook._id,
        }))
        this.setState({books : fetchedData})
        
    }

    render(){
        const {books} = this.state
        return(
            <div>
                <h1>Books</h1>
                <div>
                <div>
                <input type='search' />
                <button>Search</button>
                </div>
                <div className='books-page'>
                    
                    {books.map(each => (
                        <Book books={each}/>
                    ))}
                </div>
                </div>
            </div>
        )
    }
}

export default Home