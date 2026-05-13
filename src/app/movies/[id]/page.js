

const MOVIES_ENDPOINT = 
  "https://tp2backend-a5aqduchhdfrdffm.brazilsouth-01.azurewebsites.net/api/movies";

  async function getMovie(id){
    const res = await fetch(`${MOVIES_ENDPOINT}/${id}`, { next: { revalidate: 60 } });
    if (!res.ok) {
      throw new Error("No se pudo obtener la película");
    }
    return res.json();
  }

  export default async function MovieDetailPage({param}){
    const {id} = await param;
    const movie = await getMovie(id);

   if(!movie){
    return <div className="text-center text-zinc-400">
            <b>no encontrada</b>
            <link href= "/movies">volver </link>"
            </div>
   }


   return (
    <div>
        <table>
            
            <tbody>
                <tr>
                    <td><b>Nombre:</b></td>
                    <td>{movie.name}</td>
                </tr>
                <tr>
                    <td><b>Descripción:</b></td>
                    <td>{movie.description}</td>
                </tr>
                <tr>
                    <td><b>Año:</b></td>
                    <td>{movie.year}</td>
                </tr>
                <tr>
                    <td>
                        <img src="movie.poster" alt="imagen no encontrada"></img>
                    </td>
                    
                </tr>
            </tbody>
        </table>
    </div>
   )



  }