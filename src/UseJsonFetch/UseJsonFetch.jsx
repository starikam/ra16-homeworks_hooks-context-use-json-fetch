import { useState, useEffect } from "react"

export const UseJsonFetch = (url, opts) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const jsonFetch = async () => {
      setLoading(true);
      try {
        const response = await fetch(url + opts)
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json();
        setData(data);
        setError(null);
      } catch (error){
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    jsonFetch()
  }, [url, opts])

  return [data, error, loading]
}
