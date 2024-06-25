import {Component} from 'react'
import Book from '../Book'
import './index.css'

class Home extends Component {
    state = {books: [], searchInput : ''}
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

    searchingBook = () => {
        const {books, searchInput} = this.state
        const filteredData = books.filter(oneBook => (
            oneBook.title.includes(searchInput)
        ))
        console.log(filteredData)
        this.setState({books: filteredData})
    }

    searchInput = event => {
        this.setState({searchInput: event.target.value})
    }

    render(){
        const {books, searchInput} = this.state
        return(
            <div>
                <h1>Books</h1>
                <div>
                <div>
                <input onChange={this.searchInput} value={searchInput} type='search' />
                <button onClick={this.searchingBook}>Search</button>
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