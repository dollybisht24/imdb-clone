function MovieCard({ name, image}) {
    return(
        <div className="MovieCard">

        <img src={image}
        alt={name}
        className="Movie-Card"
      
         
      />
     
       <h1>{name}</h1>

        <button>View Detail</button>
       
       


        </div>

    );
}
export default MovieCard;