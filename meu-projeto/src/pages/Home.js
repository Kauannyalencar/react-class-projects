import { useQuery } from "@tanstack/react-query"
import Axios from 'axios'
function Home() {
    const { data, isLoading, error, refetch } = useQuery({ // Use object format
        queryKey: ["cat"], // Query key MUST be an array
        queryFn:  async() => { // Make the query function async (best practice)
          const res =  await Axios.get("https://catfact.ninja/fact"); // Use await
          return res.data;
        },
      });
    // Então invés de criar um state que usa o set para add data de uma API, data aqui resolve

    if (isLoading) {
        return <h1> Loading...</h1>
    }
    return (
        <div>
            <h1>Home <p>{data?.fact}</p></h1>
            <button onClick={refetch}>Update</button>
        </div>
    )
}

export default Home;