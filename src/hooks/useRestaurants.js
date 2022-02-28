import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
    // Run the arrow function every time the component is rendered
    // useState(()=> {}, [ ]) Run the arrow function only when the component is first rendered
    // useState(( => {}, [value])) Run the arrow function only when the component is first rendered, and when the 'value' changes
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const res = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose',
                },
            })
            setResults(res.data.businesses) // Array type
        } catch (e) {
            console.log('error', e)
            setErrorMessage(e)
        }
    }

    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage]
}
