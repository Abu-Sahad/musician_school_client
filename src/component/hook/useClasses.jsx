import { useEffect, useState } from "react"

const useClasses = () => {
    const [classes, setClasses] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setClasses(data)
            })
    }, [])
    return [classes, loading]
}
export default useClasses