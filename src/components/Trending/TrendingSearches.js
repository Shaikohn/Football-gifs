import { useEffect, useState } from "react"
import getTrending from "services/getTrending"
import { Link } from "wouter"

export default function TrendingSearches () {

    const [trends, setTrends] = useState([])

    useEffect(() => {
    getTrending()
    .then(setTrends)
    }, [])

    return (
        <div>
            <h3>Trending GIFs</h3>
            <ul>
                {
                    trends.map((t) => (
                        <li key={t}>
                            <Link to={`/search/${t}`}> {t} </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}