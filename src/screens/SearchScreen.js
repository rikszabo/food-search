import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import SearchBar from '../components/SearchBar'
import useRestaurants from '../hooks/useRestaurants'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useRestaurants()

    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price
        })
    }

    return (
        // <View style={styles.container}>
        //     <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} onTermSubmit={() => searchApi(term)} />
        //     {/* {results ? <Text> Hello, {results.length} result </Text> : null} */}
        //     {errorMessage ? <Text>Error: {errorMessage} </Text> : null}
        //     <ScrollView>
        //         <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
        //         <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        //         <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
        //     </ScrollView>
        // </View>

        // Empty tag, without flex: 1 property
        <>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {/* {results ? <Text> Hello, {results.length} result </Text> : null} */}
            {errorMessage ? <Text>Error: {errorMessage} </Text> : null}
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')}
                    title="Cost Effective"
                />
                <ResultsList
                    results={filterResultsByPrice('$$')}
                    title="Bit Pricier"
                />
                <ResultsList
                    results={filterResultsByPrice('$$$')}
                    title="Big Spender"
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: 'visible',
        flex: 1, //Show the full screen view! IMPORTANT PROPERTY !!!!!!!!!!!!!!!!
    },
})

export default SearchScreen
