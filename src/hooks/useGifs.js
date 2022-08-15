import { useEffect, useState, useContext } from "react";
import getGifs from "services/getGifs";
import GifsContext from "context/GifsContext";

const initial_page = 0

export default function useGifs( {keyword} = {keyword: 'CR7'} ) {
    const {gifs, setGifs} = useContext(GifsContext)
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);
    const [page, setPage] = useState(initial_page)
    console.log(page)

    /* Recuperamos la ultima keyword usada, que esta guardada en el localStorage */
const keywordToUse = keyword || localStorage.getItem('lastKeyword')

    useEffect(() => {
    setLoading(true)

    getGifs({ keyword: keywordToUse }).then(gifs => {
        setGifs(gifs)
        setLoading(false)
        /* Se guarda con localStorage, la ultima palabra buscada */
        localStorage.setItem('lastKeyword', keyword)
    })
    }, [keyword, keywordToUse, setGifs])

    useEffect(() => {
        if(page === initial_page) return

            setLoadingPage(true)

            getGifs({ keyword: keywordToUse, page})
            .then(nextGifs => {
                setGifs(nextGifs)
                setLoadingPage(false)
            }) 
        
    }, [page, keywordToUse, setGifs])

    return {loading, gifs, setPage, loadingPage, page}
}