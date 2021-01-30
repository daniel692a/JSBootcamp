//27) Programa una clase llamada Pelicula.

/* La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
- Todos los datos del objeto son obligatorios.
- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
7 restantes números.
- Valida que el título no rebase los 100 caracteres.
- Valida que el director no rebase los 50 caracteres.
- Valida que el año de estreno sea un número entero de 4 dígitos.
- Valida que el país o paises sea introducidos en forma de arreglo.
- Valida que los géneros sean introducidos en forma de arreglo.
- Valida que los géneros introducidos esten dentro de los géneros
aceptados*.
- Crea un método estático que devuelva los géneros aceptados*.
- Valida que la calificación sea un número entre 0 y 10 pudiendo ser
decimal de una posición.
- Crea un método que devuelva toda la ficha técnica de la película.
- Apartir de un arreglo con la información de 3 películas genera 3
instancias de la clase de forma automatizada e imprime la ficha técnica
de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */
var error = new Error('Invalid action');
const genresAccepted = ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sports', 'Talk-Show', 'Thriller', 'War', 'Western'];

class Movie {
    constructor({id, title, director, year, country, genre, grade}) {
        this.id = (/^[a-zA-Z]{2}\d{7}$/.test(id)) ? id : error;
        this.title = (/^[0-9A-Za-z!@.,;:'"?-]{1,100}\z/.test(title)) ? title : error;
        this.director = (/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]{2,50}$/.test(director)) ? director : error;
        this.year = (/^\d{4}$/.test(year)) ? year : error;
        this.country = (Array.isArray(country)) ? country : error;
        this.genre = genre;
        this.grade = (grade >= 0 && grade <=10) ? grade : error;
        this.validateGeners(genre);
    }
    validateGeners(genres) {
        for(let genre of genres) {
            if(!genresAccepted.includes(genre)){
                console.error('Invalid geners');
            }
        }
    }
    static genersMovies(){
        console.log(`Geners: ${genresAccepted.join(', ')}`);
    }
    technicalData(){
        console.log(`Id: ${this.id}\nTitle: ${this.title}\nDirectors: ${this.director}\nRelease Year: ${this.year}\nCountries: ${this.country.join(', ')}\nGener: ${this.genre}\nGrade: ${this.grade}`);
    }
}
Movie.genersMovies();

const movies = [{
        id: 'AR1234567',
        title: 'Godzilla vs Kong',
        director: 'Adam Windgard',
        year: '2021',
        country: ['US', 'Japan'],
        genre: ['Fantasy', 'Action'],
        grade: 10
    },
    {
        id: 'EA1978698',
        title: 'Star Wars',
        director: 'George Lucas',
        year: '1977',
        country: ['US'],
        genre: ['Fantasy', 'Action', 'Adventure'],
        grade: 8
    }
];

movies.forEach(e => new Movie(e).technicalData());