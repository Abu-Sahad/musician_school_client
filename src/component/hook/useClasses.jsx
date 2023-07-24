import { useEffect, useState } from "react"

const useClasses = () => {
    const [classes, setClasses] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://musician-instrument-school.vercel.app/class')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setClasses(data)
            })
    }, [])
    return [classes, loading]
}
export default useClasses