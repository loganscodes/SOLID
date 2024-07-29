(() => {

    // función para obtener información de una película por Id
    function getAllMovies( movieId: string ) {
        console.log({ movieId });
    }

    function getMovieById( id: string ){
        console.log({ id })
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllMovieActors( id: string ) {
        console.log({ id });
    }

    function getMovieActorById( id: string ){
        console.log({ id })
    }

    // funcion para obtener el bio del actor por el id
    function getUsuario( ActorId: string ) {
        console.log({ ActorId });
    }

    function getBioActorById( id: string ){
        console.log({ id })
    }
    
    // Crear una película
    function movie(title: string, description: string, rating: number, cast: string[] ) {
        console.log({ title, description, rating, cast });
    }

    interface MovieProps{
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }

    function createMovie({ title, description, rating, cast }:MovieProps){
        console.log({ title, description, rating, cast })
    }

    // Crea un nuevo actor
    function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

    interface ActorProps{
        fullName: string;
        birthDate: Date;
    }
    function createActor( { fullName, birthDate }:ActorProps ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthDate);
        return true;        

    }


    //Reglas en las funciones
    //Funcion Sucia
    const getPayAmount1 = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;
    }

    //Funcion mas legible y bonita

    interface PayAmountProps{
        isDead: false;
        isSeparated: true;
        isRetired: false
    }

    const getPayAmount = ({isDead, isSeparated, isRetired}:PayAmountProps):number => {

        if( isDead ) return 1500

        if( isSeparated ) return 2500

        return isRetired ? 3000 : 4000

    }


})();




