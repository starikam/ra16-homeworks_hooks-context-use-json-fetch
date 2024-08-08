import { UseJsonFetch } from "../UseJsonFetch/UseJsonFetch"


export const Data = ( { opts } ) => {
    const url = 'http://localhost:7070/'
    
    const [data, error, loading] = UseJsonFetch(url, opts)
    return (
        <div>
            {data && <div>Успешное получение данных: {data.status}</div>}
            {error && <div>Получение 500 ошибки {error.message}</div>}
            {loading && <div>Загрузка...</div>}
        </div>
  )
}
