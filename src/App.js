import MovieCard from "./Components/MovieCard";

function App(){
  return(
    <>
    <h1> 🎬 My Movie Collection</h1>
    <div className="card">

    < MovieCard
    name="Inception"
    image="https://i.ebayimg.com/images/g/LlUAAOSwm8VUwoRL/s-l1200.jpg"
    
    />

     < MovieCard
    name="The Dark Knight"
    image="https://m.media-amazon.com/images/I/61vhZu53gSL._AC_UF894,1000_QL80_.jpg"
    />

     < MovieCard
    name="Pulp Fiction"
    image="https://cdn.displate.com/artwork/270x380/2024-09-13/4f7969bf-f53d-4300-b093-153a1a9d85cd.jpg"
    />

    </div>

  
    

    </>

  );
}
export default App;