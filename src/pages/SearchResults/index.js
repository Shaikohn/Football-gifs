import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import Loading from "components/Loading/Loading";
import useGifs from "hooks/useGifs";


export default function SearchResults({ params }) {
    const { keyword } = params;
    const {loading, gifs, setPage, page} = useGifs({ keyword });

    function handleNextPage() {
        setPage(prevPage => prevPage + 1)
    }
    function handlePrevPage() {
        setPage(prevPage => prevPage - 1)
    }

    return (
    <div>
    {
        loading ? <Loading /> : <ListOfGifs gifs={gifs} />
    }
    {
        page > 0 ? <button onClick={handlePrevPage}>Prev page</button> : ''
    }
    <button onClick={handleNextPage}>Next page</button>
    </div>
    )
}