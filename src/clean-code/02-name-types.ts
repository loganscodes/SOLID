(() => {

    // arreglo de temperaturas celsius
    const arrayOfNums = [33.6, 12.34];
    const celciusTempList = [33.6, 12.34];

    // Dirección ip del servidor
    const ip = '123.123.123.123';
    const serverIp = '123.123.123.123';

    // Listado de usuarios
    const people = [
        { id: 1, email: 'fernando@google.com'},
        { id: 2, email: 'juan@google.com' }, 
        { id: 3, email: 'melissa@google.com' }
    ];
    const userList = [
        { id: 1, email: 'fernando@google.com'},
        { id: 2, email: 'juan@google.com' }, 
        { id: 3, email: 'melissa@google.com' }
    ];

    // Listado de emails de los usuarios
    const emails = people.map( u => u.email );
    const userEmails = userList.map( user => user.email );

    // Variables booleanas de un video juego
    const jump = false;
    const canJump = true;

    const run = true;
    const canRun = false;

    const noTieneItems = true;
    const hasItems = false;

    const loading = false;
    const isLoading = true;

    // Otros ejercicios
    // tiempo inicial
    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    const middleTime = new Date().getTime();
    //...
    // Tiempo al final
    const endTime = new Date().getTime() - startTime;


    // Funciones
    // Obtiene los libros
    function book() {
        throw new Error('Function not implemented.');
    }

    function getBok(){
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function BooksUrl( u: string) {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl( urlBooks: string ){
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    function areaCuadrado( s: number ) {
        throw new Error('Function not implemented.');
    }

    function getSquareArea ( side: number ){
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printJobIfJobIsActive() {
        throw new Error('Function not implemented.');
    }

    function printJob(){
        throw new Error('Function not implemented.');
    }
    

})();




