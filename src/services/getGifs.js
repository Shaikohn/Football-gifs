import {API_KEY, API_URL} from './settings'
/* La multiplicacion en el offset hará que al avanzar de paginas muestre los siguientes 10 */
export default function getGifs({keyword = 'CR7', limit = 10, page = 0} = {},) {
    const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`;

    return (
        fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
        const { data = [] } = response;
        if(Array.isArray(data)) {
            const gifs = data.map(image => {
            const {images, title, id} = image;
            const { url } = images.downsized_medium;
            return {title, id, url}
        })
        return gifs
        }
    }) 
    )
}