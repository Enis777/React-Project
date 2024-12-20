import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Movie from "../components/Movie"
import { Link } from 'react-router-dom';

function LatestMovies() {
    const [movies, setMovies] = useState()

    useEffect(() => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0';

        axios.get(proxyUrl + targetUrl)
        .then(resp => {
            if(resp.status === 200) setMovies(resp.data.results)
        })
        .catch(error => console.log(error),
        setMovies( 
            [{
        "adult": false,
        "backdrop_path": "/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg",
        "genre_ids": [16, 12, 10751, 35],
        "id": 1241982,
        "original_language": "en",
        "original_title": "Moana 2",
        "overview": "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
        "popularity": 5883.763,
        "poster_path": "/yh64qw9mgXBvlaWDi7Q9tpUBAvH.jpg",
        "release_date": "2024-11-27",
        "title": "Moana 2",
        "video": false,
        "vote_average": 6.939,
        "vote_count": 309
    }, {
        "adult": false,
        "backdrop_path": "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
        "genre_ids": [878, 28, 12],
        "id": 912649,
        "original_language": "en",
        "original_title": "Venom: The Last Dance",
        "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
        "popularity": 3523.453,
        "poster_path": "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
        "release_date": "2024-10-22",
        "title": "Venom: The Last Dance",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 985
    }, {
        "adult": false,
        "backdrop_path": "/6lE2e6j8qbtQR8aHxQNJlwxdmKV.jpg",
        "genre_ids": [28, 80, 53],
        "id": 974453,
        "original_language": "en",
        "original_title": "Absolution",
        "overview": "An aging ex-boxer gangster working as muscle for a Boston crime boss receives an upsetting diagnosis.  Despite a faltering memory, he attempts to rectify the sins of his past and reconnect with his estranged children. He is determined to leave a positive legacy for his grandson, but the criminal underworld isn’t done with him and won’t loosen their grip willingly.",
        "popularity": 1777.824,
        "poster_path": "/cNtAslrDhk1i3IOZ16vF7df6lMy.jpg",
        "release_date": "2024-10-31",
        "title": "Absolution",
        "video": false,
        "vote_average": 6.005,
        "vote_count": 101
    }, {
        "adult": false,
        "backdrop_path": "/evFChfYeD2LqobEJf8iQsrYcGTw.jpg",
        "genre_ids": [28, 80, 53],
        "id": 1182387,
        "original_language": "en",
        "original_title": "Armor",
        "overview": "Armored truck security guard James Brody is working with his son Casey transporting millions of dollars between banks when a team of thieves led by Rook orchestrate a takeover of their truck to seize the riches. Following a violent car chase, Rook soon has the armored truck surrounded and James and Casey find themselves cornered onto a decrepit bridge.",
        "popularity": 1686.649,
        "poster_path": "/pnXLFioDeftqjlCVlRmXvIdMsdP.jpg",
        "release_date": "2024-10-30",
        "title": "Armor",
        "video": false,
        "vote_average": 5.5,
        "vote_count": 42
    }, {
        "adult": false,
        "backdrop_path": "/au3o84ub27qTZiMiEc9UYzN74V3.jpg",
        "genre_ids": [28, 878, 53],
        "id": 1035048,
        "original_language": "en",
        "original_title": "Elevation",
        "overview": "A single father and two women venture from the safety of their homes to face monstrous creatures to save the life of a young boy.",
        "popularity": 2204.744,
        "poster_path": "/uQhYBxOVFU6s9agD49FnGHwJqG5.jpg",
        "release_date": "2024-11-07",
        "title": "Elevation",
        "video": false,
        "vote_average": 6.423,
        "vote_count": 84
    }, {
        "adult": false,
        "backdrop_path": "/mQZJoIhTEkNhCYAqcHrQqhENLdu.jpg",
        "genre_ids": [16, 878, 10751],
        "id": 1184918,
        "original_language": "en",
        "original_title": "The Wild Robot",
        "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
        "popularity": 1190.606,
        "poster_path": "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
        "release_date": "2024-09-12",
        "title": "The Wild Robot",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 3289
    }, {
        "adult": false,
        "backdrop_path": "/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg",
        "genre_ids": [28, 12, 36],
        "id": 558449,
        "original_language": "en",
        "original_title": "Gladiator II",
        "overview": "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
        "popularity": 1244.766,
        "poster_path": "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
        "release_date": "2024-11-13",
        "title": "Gladiator II",
        "video": false,
        "vote_average": 6.653,
        "vote_count": 920
    }, {
        "adult": false,
        "backdrop_path": "/h3fwlwHotd3JfV13HdW0mxDcxPD.jpg",
        "genre_ids": [35, 10749, 10770],
        "id": 957119,
        "original_language": "en",
        "original_title": "Sidelined: The QB and Me",
        "overview": "Dallas, a burdened but headstrong dancer, is determined to get into the best dance school in the country—her late mother’s alma mater. However, that dream is suddenly derailed when the cheeky yet secretly grieving football star, Drayton, crashes into her life with a unique story of his own. Will the two of them be able to grow into their dreams together, or will their dreams be sidelined?",
        "popularity": 1605.297,
        "poster_path": "/sIWv5HtDlUFvacsuA1fRNWZ5GFH.jpg",
        "release_date": "2024-11-29",
        "title": "Sidelined: The QB and Me",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 38
    }, {
        "adult": false,
        "backdrop_path": "/iR79ciqhtaZ9BE7YFA1HpCHQgX4.jpg",
        "genre_ids": [27, 9648],
        "id": 1100782,
        "original_language": "en",
        "original_title": "Smile 2",
        "overview": "About to embark on a new world tour, global pop sensation Skye Riley begins experiencing increasingly terrifying and inexplicable events. Overwhelmed by the escalating horrors and the pressures of fame, Skye is forced to face her dark past to regain control of her life before it spirals out of control.",
        "popularity": 1052.521,
        "poster_path": "/ht8Uv9QPv9y7K0RvUyJIaXOZTfd.jpg",
        "release_date": "2024-10-16",
        "title": "Smile 2",
        "video": false,
        "vote_average": 6.599,
        "vote_count": 821
    }, {
        "adult": false,
        "backdrop_path": "/dvBCdCohwWbsP5qAaglOXagDMtk.jpg",
        "genre_ids": [28, 35, 878],
        "id": 533535,
        "original_language": "en",
        "original_title": "Deadpool \u0026 Wolverine",
        "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
        "popularity": 893.462,
        "poster_path": "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        "release_date": "2024-07-24",
        "title": "Deadpool \u0026 Wolverine",
        "video": false,
        "vote_average": 7.679,
        "vote_count": 5765
    }, {
        "adult": false,
        "backdrop_path": "/iqvwqusm7gNP26SxbmwHXOkYFFF.jpg",
        "genre_ids": [18, 10749],
        "id": 179387,
        "original_language": "tl",
        "original_title": "Heavenly Touch",
        "overview": "Jonard is having trouble making ends meet. His mother is suffering from depression, and he and his sister are forced to quit school in order to take care of her. One day, Jonard meets up his friend Rodel, and Rodel introduces him to the world of massage parlors. Rodel teaches him massage, and brings him to Heavenly Touch, a syndicate-run massage parlor that mostly caters to homosexuals.",
        "popularity": 1067.077,
        "poster_path": "/ory8WuAqznTE7lfopTSymHpop2t.jpg",
        "release_date": "2009-05-12",
        "title": "Heavenly Touch",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 27
    }, {
        "adult": false,
        "backdrop_path": "/liuBLPXvisMRo5w2JEKHXceWq5u.jpg",
        "genre_ids": [28, 80, 18],
        "id": 1171640,
        "original_language": "fr",
        "original_title": "GTMAX",
        "overview": "When a notorious gang of bikers recruits her brother for a heist, a former motocross champion must face her deepest fears to keep her family safe.",
        "popularity": 889.427,
        "poster_path": "/bx92hl70NUhojjO3eV6LqKllj4L.jpg",
        "release_date": "2024-11-19",
        "title": "GTMAX",
        "video": false,
        "vote_average": 6.0,
        "vote_count": 65
    }, {
        "adult": false,
        "backdrop_path": "/bbNUSVOqgbJ2U5OtEeMC76qlqxH.jpg",
        "genre_ids": [18, 14, 10749],
        "id": 402431,
        "original_language": "en",
        "original_title": "Wicked",
        "overview": "In the land of Oz, ostracized and misunderstood green-skinned Elphaba is forced to share a room with the popular aristocrat Glinda at Shiz University, and the two's unlikely friendship is tested as they begin to fulfill their respective destinies as Glinda the Good and the Wicked Witch of the West.",
        "popularity": 987.814,
        "poster_path": "/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg",
        "release_date": "2024-11-20",
        "title": "Wicked",
        "video": false,
        "vote_average": 7.571,
        "vote_count": 393
    }, {
        "adult": false,
        "backdrop_path": "/18TSJF1WLA4CkymvVUcKDBwUJ9F.jpg",
        "genre_ids": [27, 53],
        "id": 1034541,
        "original_language": "en",
        "original_title": "Terrifier 3",
        "overview": "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
        "popularity": 875.785,
        "poster_path": "/63xYQj1BwRFielxsBDXvHIJyXVm.jpg",
        "release_date": "2024-10-09",
        "title": "Terrifier 3",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 1175
    }, {
        "adult": false,
        "backdrop_path": "/2fxnTXr8NwyTFkunkimJkGkhqfy.jpg",
        "genre_ids": [18, 28, 27],
        "id": 1118031,
        "original_language": "es",
        "original_title": "Apocalipsis Z: el principio del fin",
        "overview": "When a kind of rabies that transforms people into aggressive creatures spreads across the planet, Manel isolates himself at home with his cat, relying on his wits to survive; but soon they must go out in search of food, by land and by sea, dodging many dangers.",
        "popularity": 855.638,
        "poster_path": "/wIGJnIFQlESkC2rLpfA8EDHqk4g.jpg",
        "release_date": "2024-10-04",
        "title": "Apocalypse Z: The Beginning of the End",
        "video": false,
        "vote_average": 6.851,
        "vote_count": 649
    }, {
        "adult": false,
        "backdrop_path": "/6vn6K9oX82i6E86ZiHVxqVEMQqP.jpg",
        "genre_ids": [27, 878],
        "id": 945961,
        "original_language": "en",
        "original_title": "Alien: Romulus",
        "overview": "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.",
        "popularity": 767.105,
        "poster_path": "/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
        "release_date": "2024-08-13",
        "title": "Alien: Romulus",
        "video": false,
        "vote_average": 7.238,
        "vote_count": 2528
    }, {
        "adult": false,
        "backdrop_path": "/n4ycOGj2tRLfINTJQ3wl0vNYqpR.jpg",
        "genre_ids": [16, 14, 10751, 12, 35],
        "id": 592983,
        "original_language": "en",
        "original_title": "Spellbound",
        "overview": "When a powerful spell turns her parents into giant monsters, a teenage princess must journey into the wild to reverse the curse before it's too late.",
        "popularity": 638.38,
        "poster_path": "/xFSIygDiX70Esp9dheCgGX0Nj77.jpg",
        "release_date": "2024-11-22",
        "title": "Spellbound",
        "video": false,
        "vote_average": 6.776,
        "vote_count": 125
    }, {
        "adult": false,
        "backdrop_path": "/rOmUuQEZfPXglwFs5ELLLUDKodL.jpg",
        "genre_ids": [28, 35, 14],
        "id": 845781,
        "original_language": "en",
        "original_title": "Red One",
        "overview": "After Santa Claus (codename: Red One) is kidnapped, the North Pole's Head of Security must team up with the world's most infamous bounty hunter in a globe-trotting, action-packed mission to save Christmas.",
        "popularity": 743.214,
        "poster_path": "/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
        "release_date": "2024-10-31",
        "title": "Red One",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 207
    }, {
        "adult": false,
        "backdrop_path": "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg",
        "genre_ids": [27, 878, 53],
        "id": 933260,
        "original_language": "en",
        "original_title": "The Substance",
        "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
        "popularity": 781.502,
        "poster_path": "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
        "release_date": "2024-09-07",
        "title": "The Substance",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 2363
    }, {
        "adult": false,
        "backdrop_path": "/5O0mkQGfOQM4OktFOCep9YmXK79.jpg",
        "genre_ids": [28, 878, 53, 35, 27],
        "id": 995803,
        "original_language": "en",
        "original_title": "Arena Wars",
        "overview": "In 2045 convicted criminals are given the opportunity to compete on the world's #1 televised sporting event, Arena Wars. They must survive 7 rooms and 7 of the most vicious killers in the country. If they win, they regain their freedom.",
        "popularity": 682.657,
        "poster_path": "/4dRtXjk1rcsZlaMJpBn6Nh9cTfO.jpg",
        "release_date": "2024-06-25",
        "title": "Arena Wars",
        "video": false,
        "vote_average": 5.481,
        "vote_count": 26
        }]) 
    )
    }, [])

    return (
        <section className="py-5">
            <Container>
                <h2 className='mb-5 text-center'>Latest movies</h2>
                <div className="row">
                {
                    movies && movies.slice(0, 8).map(movie => <div className="col-3 mb-4" key={movie.id}>
                        <Movie {...movie} />
                    </div>)
                }
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <Link to="/shop" className="btn btn-outline-secondary">Explore more &rarr;</Link>
                </div>
            </Container>
        </section>
    )
}

export default LatestMovies