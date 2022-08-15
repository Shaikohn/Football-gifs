import Loading from "components/Loading/Loading";
import React, { useEffect, useState, useRef, Suspense } from "react";

const TrendingSearches = React.lazy(
    () => import("./TrendingSearches")
)

export default function LazyTrending() {
    const [show, setShow] = useState(false)
    const elementRef = useRef()

    useEffect(() => {

        function onChange(entries, observer) {
            const el = entries[0]
            console.log(el.isIntersecting)
            if(el.isIntersecting) {
                setShow(true)
/* Una vez que se llega al componente ya se carga y no es necesario seguir observando */
                observer.disconnect()
            }
        }
/* Cuando el usuario este a 100 pixeles del componente, se empezara a cargarlo */
        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })
/* Se debe agregar .current para acceder al valor de la referencia */
        observer.observe(elementRef.current)

        return () => observer.disconnect()
    })
    return (
        
        <div ref={elementRef} >
{/* Suspense es un componente predeterminado de React que suspende el renderizado de lo que encierre
hasta que suceda la condición que se le indique */}
            <Suspense fallback={<Loading />} >
                {show ? <TrendingSearches /> : <Loading /> }
            </Suspense>
        </div>
    )
}