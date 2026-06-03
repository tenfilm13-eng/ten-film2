const CATALOG = [
   {
    id: 1,
    tipo: "filme",
    titulo: "Scream 5",
    ano: 2022,
    sinopse: "Twenty-five years after a series of brutal murders rocked the quiet town of Woodsboro, a new masked killer emerges and begins stalking a group of teenagers.",
    generos: ["Terror", "Mistério"],
    avaliacao: 7.0,
    poster: "https://i.pinimg.com/736x/44/3b/1f/443b1f799629085416970b1e6b199d8e.jpg",
    videoUrl: "https://streamimdb.ru/embed/movie/tt11245972",
    trailer: "https://youtu.be/beToTslH17s?si=6WlY1dlbp2U7U1et",
    duracao: "1h 54min",
    pais: "EUA"
  },

  {
    id: 2,
    tipo: "filme",
    titulo: "Scream 6",
    ano: 2023,
    sinopse: "Following the events in Woodsboro, the survivors move to New York City. But Ghostface follows them to the city.",
    generos: ["Terror", "Mistério"],
    avaliacao: 7.2,
    poster: "https://m.media-amazon.com/images/M/MV5BZDZkYzk3YTEtYTQ5MS00MzQ5LTg0NjUtOTgzODA5N2EyYTQ1XkEyXkFqcGc@._V1_.jpg",
    videoUrl: "https://streamimdb.ru/embed/movie/tt17663992",
    trailer: "https://youtu.be/h74AXqw4Opc?si=t-6sSpJYAsQ4Ib3L",
    duracao: "2h 2min",
    pais: "EUA"
  },

  {
    id: 3,
    tipo: "filme",
    titulo: "Scream 1",
    ano: 1996,
    sinopse: "It follows Sidney Prescott, a teenage girl terrorized by the masked killer Ghostface.",
    generos: ["Terror", "Mistério"],
    avaliacao: 7.4,
    poster: "https://i.redd.it/xweqes0z0wcc1.jpeg",
    videoUrl: "https://streamimdb.ru/embed/movie/tt0117571",
    trailer: "https://youtu.be/U0LETmDvuXc?si=tkrlpesZMXebtIVg",
    duracao: "1h 51min",
    pais: "EUA"
  },

  {
    id: 4,
    tipo: "serie",
    titulo: "IT: Bem-vindos a Derry",
    ano: 2025,
    sinopse: "Prequel da história de IT, passada nos anos 60, que revela as origens do terror em Derry e os primeiros encontros com o palhaço Pennywise.",
    generos: ["Terror"],
    avaliacao: 7.8,
    poster: "https://m.media-amazon.com/images/M/MV5BNDFmODE3NDktZGVhNS00M2NmLWI1NDAtNTgzOTA0ZGFhODFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    duracao: "1 temporada",
    trailer: "https://youtu.be/K8BgHgL_pr8?si=ahbY_mMnjShHSg2s",
    pais: "EUA",
    videoUrl:"https://streamimdb.ru/embed/tv/tt19244304"
  },

  {
    id: 5,
    tipo: "serie",
    titulo: "Elite",
    ano: 2018,
    sinopse: "The plot follows the culture clash and explosive conflicts that arise when three working-class students transfer to the school on scholarships.",
    generos: ["Drama", "Thriller"],
    avaliacao: 7.1,
    poster: "https://br.web.img3.acsta.net/pictures/18/10/18/07/54/1893178.jpg",
    duracao: "8 temporadas",
    trailer: "https://youtu.be/Oqv81BdRs7w?si=nKoXtGhtRT5JYZtw",
    pais: "Espanha",
    videoUrl: "https://streamimdb.ru/embed/tv/tt7134908"
  },

  {
    id: 6,
    tipo: "serie",
    titulo: "Prison Break",
    ano: 2005,
    sinopse: "It revolves around Michael Scofield, a brilliant engineer who devises a daring plan to save his older brother, Lincoln Burrows, from death row.",
    generos: ["Drama", "Ação"],
    trailer: "https://youtu.be/C2ssQOyVJqQ?si=ltpRRHHM8PG6a6hM",
    avaliacao: 8.3,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52b7VZ4ZvmrukOazrje-d2Nx50yF27QDDjQ&s",
    duracao: "5 temporadas",
    pais: "EUA",
    videoUrl: "https://streamimdb.ru/embed/tv/tt0455275"
  },

  {
    id: 7,
    tipo: "filme",
    titulo: "3096 Days",
    ano: 2011,
    sinopse: "The film is based on the true story of Natascha Kampusch, a 10-year-old Austrian girl who was kidnapped in 1998 by Wolfgang Priklopil. She remained in captivity for over eight years (3,096 days), suffering isolation and psychological control, until she managed to escape in 2006. The film portrays her struggle for survival during her captivity.",
    generos: [" Ficção policial", "Drama"],
    avaliacao: 7.3,
    poster: "https://m.media-amazon.com/images/M/MV5BMjE2NjI0ZDUtNWZhMy00OWMxLTllMzAtZWZlM2Q4YmEyNGIxXkEyXkFqcGc@._V1_.jpg",
    videoUrl: "https://streamimdb.ru/embed/movie/tt1667355",
    trailer: "https://youtu.be/XwO1a306dwg?si=Ntd6EXnwk18KCGsE",
    duracao: "1h 51min",
    pais: "Alemanha"
  },

  {
    id: 8,
    tipo: "filme",
    titulo: " Penguins of Madagascar",
    ano: 2014,
    sinopse: "They are a famous spy group made up of four birds — Skipper, Kowalski, Rico, and Private.",
    generos: ["Infantil/", "Aventura "],
    avaliacao: 6.7,
    poster: "https://play-lh.googleusercontent.com/vwhjRgQiVtokPOiYM11XCOVHSRuUBeTtir35DTshjPqrTFUzXEZazao01f-0EtkrZDw",
    videoUrl: "https://streamimdb.ru/embed/movie/tt1911658",
    trailer: "https://youtu.be/i6ZYyAa03p0?si=N_jq6voNUXIEuBCJ",
    duracao: "1h 32min",
    pais: "EUA"
  },

  {
    id: 9,
    tipo: "filme",
    titulo: "Madagascar",
    ano: 2005,
    sinopse: "The film follows four pampered animals from the New York Zoo — Alex (lion), Marty (zebra), Melman (giraffe), and Gloria (hippopotamus). After an escape attempt, they are captured and sent to a reserve in Africa. The ship suffers an accident, and they end up shipwrecked on the island of Madagascar.",
    generos: ["Infantil/", "Comédia "],
    avaliacao: 6.9,
    poster: "https://br.web.img2.acsta.net/medias/nmedia/18/91/54/02/20150796.jpg",
    videoUrl: "https://streamimdb.ru/embed/movie/tt0351283",
    trailer: "https://youtu.be/orAqhC-Hp_o?si=9d2MPtR9l59YdBLW",
    duracao: "1h 26min",
    pais: "EUA"
  },

   {
    id: 10,
    tipo: "filme",
    titulo: "Nowhere",
    ano: 2023,
    sinopse: "The plot follows Mia (Anna Castillo), a young pregnant woman who flees a totalitarian country at war with her husband, Nico. To escape, they hide inside shipping containers on a cargo ship.",
    generos: ["Thriller/", " Drama "],
    avaliacao: 6.3,
    poster: "https://m.media-amazon.com/images/M/MV5BZmQwODM5NTctYzRkMi00MmIwLWFjODAtMTFiMWY2OWE3MGQyXkEyXkFqcGc@._V1_.jpg",
    videoUrl: "https://streamimdb.ru/embed/movie/tt15789472",
    trailer: "https://youtu.be/KDUtdcU10YA?si=ItxHLZeotTd4vqG5",
    duracao: " 1h 49min",
    pais: "EUA"
  },

  {
    id: 11,
    tipo: "serie",
    titulo: "La Casa de Papel",
    ano: 2017,
    sinopse: "It follows a group of criminals led by a genius known as The Professor. They plan and execute meticulous heists at the Royal Mint and the Bank of Spain, focusing on printing their own money and destabilizing the financial system with a rebellious edge.",
    generos: ["Thriller"],
    trailer: "https://youtu.be/jkzl8ZAppqE?si=fMdPri9VhVUPfE45",
    avaliacao: 8.3,
    poster: "https://static.wikia.nocookie.net/dublagem/images/c/ca/La_Casa_de_Papel.jpg/revision/latest?cb=20210906003054&path-prefix=pt-br",
    duracao: "5 temporadas",
    pais: "EUA",
    videoUrl: "https://streamimdb.ru/embed/tv/tt6468322"
  },

  {
    id: 12,
    tipo: "serie",
    titulo: "Fear the Walking Dead.",
    ano: 2015,
    sinopse: "Focused on depicting the collapse of society and the beginning of the zombie apocalypse from the perspective of a dysfunctional family in Los Angeles.",
    generos: ["Terror"],
    trailer: "https://youtu.be/yzXglr5bc3w?si=26Y8qH9w2VvvM-Z3",
    avaliacao: 6.8,
    poster: "https://br.web.img2.acsta.net/c_310_420/pictures/19/10/15/00/15/4502728.jpg",
    duracao: "8 temporadas",
    pais: "EUA",
    videoUrl: "https://streamimdb.ru/embed/tv/tt3743822"
  },

   {
    id: 13,
    tipo: "filme",
    titulo: "Goat: The Greatest of All",
    ano: 2026,
    sinopse: "Sony Pictures' animated film about Will, a little goat who dreams of becoming the greatest roarball player.",
    generos: [" Esporte/Comédia"],
    avaliacao: 6.7,
    poster: "https://m.media-amazon.com/images/M/MV5BODI4NGRlODgtZGMwMi00ZmE5LWExNWItZjYzYTkyYWVkNDdiXkEyXkFqcGc@._V1_.jpg",
    videoUrl: "https://streamimdb.ru/embed/movie/tt27613895",
    trailer: "https://youtu.be/WzSsj2ULbbE?si=9wXu3EfGJrtxwLmQ",
    duracao: " 1h 40min",
    pais: "EUA"
  },

  {
    id: 14,
    tipo: "filme",
    titulo: "War Machine",
    ano: 2026,
    sinopse: "The plot follows Mia (Anna Castillo), a young pregnant woman who flees a totalitarian country at war with her husband, Nico. To escape, they hide inside shipping containers on a cargo ship.",
    generos: [" Ação/Ficção científica"],
    avaliacao: 6.7,
    poster: "https://m.media-amazon.com/images/M/MV5BMmM1ZTc5ZTYtOTM2My00MjBmLWE5NzktYzkyYzdlYWE3ZDAzXkEyXkFqcGc@._V1_.jpg",
    videoUrl: "https://streamimdb.ru/embed/movie/tt15940132",
    trailer: "https://youtu.be/mBenb7O8Hnc?si=2GmeDdTZU0NfTxIP",
    duracao: " 1h 47min",
    pais: "EUA"
  },

  {
  id: 15,
  tipo: "filme",
  titulo: "Apex",
  ano: 2026,
  sinopse: "When an adrenaline junkie sets out to conquer a dangerous river, she discovers that nature is not the only thing out for blood.",
  generos: ["Action", "Thriller", "Psychological Thriller"],
  avaliacao: 6.1,
  poster: "https://m.media-amazon.com/images/M/MV5BNjUzODE2ZWYtMDdiMS00ZTA0LWI4MzEtNDkyODNiNmIwMWY1XkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt16431404",
  trailer: "https://youtu.be/kgv8jf_8dm0?si=i67i5vRLJxLTVnt1",
  duracao: "1h 35min",
  pais: "Australia"
},

{
  id: 16,
  tipo: "filme",
  titulo: "Until Dawn",
  ano: 2025,
  sinopse: "A group of friends trapped in a time loop must survive relentless horrors and deadly killers until dawn in order to escape.",
  generos: ["Terror", "Suspense"],
  avaliacao: 5.7,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnClp75SKoKN5R_lntDarDeMO6zTW0wpccFw&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt30955489",
  trailer: "https://youtu.be/W--kUNMg1-E?si=b9VQ9fodaMKvJiNE",
  duracao: "1h 43min",
  pais: "Estados Unidos"
},

{
  id: 17,
  tipo: "filme",
  titulo: "The Babysitter",
  ano: 2017,
  sinopse: "A boy discovers that his seemingly perfect babysitter is part of a deadly satanic cult and must fight to survive the night.",
  generos: ["Comedy", "Horror", "Thriller"],
  avaliacao: 6.4,
  poster: "https://m.media-amazon.com/images/M/MV5BMTY0MDUwNzg5OV5BMl5BanBnXkFtZTgwNTY4NjU3MzI@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt4225622",
  trailer: "https://youtu.be/8WzUYkzRgBE?si=ZVOkMiNrDBYkqfqH",
  duracao: "1h 25min",
  pais: "United States"
},

{
  id: 18,
  tipo: "serie",
  titulo: "Chucky",
  ano: 2021,
  sinopse: "After a vintage Chucky doll turns up at a suburban yard sale, a series of horrifying murders begins to expose the town’s dark secrets.",
  generos: ["Horror", "Thriller", "Comedy"],
  avaliacao: 7.2,
  poster: "https://cinepop.com.br/wp-content/uploads/2017/09/cultodechucky_10.jpg",
  duracao: "3 temporadas",
  trailer: "https://youtu.be/BDSa0JhIUMI?si=Y_mdVKleHQJbudl7",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt8388390"
},

{
  id: 19,
  tipo: "serie",
  titulo: "Breaking Bad",
  ano: 2008,
  sinopse: "A high school chemistry teacher diagnosed with cancer turns to manufacturing methamphetamine in order to secure his family's future.",
  generos: ["Crime", "Drama", "Thriller"],
  avaliacao: 9.5,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqhGRPHbiT9WRbp4Mc7kKgT6LHSPHrDiWfEg&s",
  duracao: "5 temporadas",
  trailer: "https://youtu.be/HhesaQXLuRY?si=LAQrNX2S1Fw8DrB9",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt0903747"
},

{
  id: 20,
  tipo: "filme",
  titulo: "The Platform",
  ano: 2019,
  sinopse: "In a vertical prison where food is distributed from the top down, a man tries to change a brutal system that leaves those below starving.",
  generos: ["Sci-Fi", "Thriller", "Horror"],
  avaliacao: 7.0,
  poster: "https://resizing.flixster.com/XwTNbjwSHIWCpRygYzSgcGgxivE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzUzMzNmMjRjLTc2YzgtNGRhMS1hMDJkLTM1MjZmYzQ4OGFjZi53ZWJw",
  videoUrl: "https://streamimdb.ru/embed/movie/tt8228288",
  trailer: "https://youtu.be/RlfooqeZcdY?si=TU1Ld_ROcRC9fjHh",
  duracao: "1h 34min",
  pais: "Spain"
},

{
  id:21,
  tipo: "serie",
  titulo: "The 100",
  ano: 2014,
  sinopse: "Ninety-seven years after a nuclear apocalypse, one hundred juvenile delinquents are sent back to Earth to determine whether the planet is habitable.",
  generos: ["Sci-Fi", "Drama", "Mystery"],
  avaliacao: 7.5,
  poster: "https://m.media-amazon.com/images/M/MV5BNDdmZGYwOWEtN2FkZC00Y2ExLWJkY2UtNzFlODVlNzc3MGIzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  duracao: "7 temporadas",
  trailer: "https://youtu.be/aDrsItJ_HU4?si=otXrCzspotiCFe-S",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt2661044"
},

{
  id:22,
  tipo: "filme",
  titulo: "Split",
  ano: 2016,
  sinopse: "Three teenage girls are kidnapped by a man with twenty-three distinct personalities, while a terrifying new personality begins to emerge.",
  generos: ["Thriller", "Horror", "Drama"],
  avaliacao: 7.3,
  poster: "https://m.media-amazon.com/images/M/MV5BMTJjYjAxZGYtYTUxNy00YzllLThjNzUtNTQzNzhmNGU3NTZjXkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt4972582",
  trailer: "https://youtu.be/7l4SzfMstLE?si=_HqTd8hQc3MlGrGG",
  duracao: "1h 57min",
  pais: "United States"
},

{
  id:23,
  tipo: "serie",
  titulo: "The Boys",
  ano: 2019,
  sinopse: "A group of vigilantes sets out to take down corrupt superheroes who abuse their powers and influence.",
  generos: ["Action", "Crime", "Drama"],
  avaliacao: 8.6,
  poster: "https://m.media-amazon.com/images/M/MV5BZjU4OWNiYzQtMzc1NS00NjZlLTgyYTctZWY4ZmEzMTkxYjA4XkEyXkFqcGc@._V1_.jpg",
  duracao: "4 temporadas",
  trailer: "https://youtu.be/PXXPpFCxnkQ?si=FE0jPRIAgTVkwbAB",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt1190634"
},

{
  id:24,
  tipo: "filme",
  titulo: "Scream 2",
  ano: 1997,
  sinopse: "Two years after the Woodsboro murders, Sidney Prescott faces a new Ghostface killer targeting students at her college.",
  generos: ["Horror", "Mystery", "Thriller"],
  avaliacao: 6.3,
  poster: "https://m.media-amazon.com/images/M/MV5BODE5YWJkMDMtN2ZiNC00MjI5LTkxYTgtOTkyZjUwMjU0YThiXkEyXkFqcGc@._V1_QL75_UY281_CR0,0,190,281_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0120082",
  trailer: "https://youtu.be/Eng1njONZ-Q?si=78b48QUlmfGxhIYa",
  duracao: "2h 00min",
  pais: "United States"
},

{
  id: 25,
  tipo: "filme",
  titulo: "Scream 3",
  ano: 2000,
  sinopse: "While the cast of a horror movie based on the Woodsboro murders is being targeted by a new Ghostface killer, Sidney Prescott is drawn back into the nightmare.",
  generos: ["Horror", "Mystery", "Thriller"],
  avaliacao: 5.6,
  poster: "https://m.media-amazon.com/images/M/MV5BMTI0NmIwZDUtNzkxMS00OTNmLTg0N2UtZmJkNzJmNDAwZmQwXkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0134084",
  trailer: "https://youtu.be/WFyhTIqJgis?si=wqL_GSZRsXfrx2TE",
  duracao: "1h 56min",
  pais: "United States"
},

{
  id: 26,
  tipo: "filme",
  titulo: "Scream 4",
  ano: 2011,
  sinopse: "Sidney Prescott returns to Woodsboro on the anniversary of the original murders, only to find herself targeted by a new Ghostface killer.",
  generos: ["Horror", "Mystery", "Thriller"],
  avaliacao: 6.2,
  poster: "https://m.media-amazon.com/images/I/61nQR9fZltL._AC_UF1000,1000_QL80_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1262416",
  trailer: "https://youtu.be/JKRtyVLWV-E?si=xnneyPCuB8cdResx",
  duracao: "1h 51min",
  pais: "United States"
},

{
  id: 27,
  tipo: "filme",
  titulo: "Scream 7",
  ano: 2026,
  sinopse: "When a new Ghostface killer emerges in the town where Sidney Prescott has built a new life, her darkest fears are realized as her daughter becomes the next target.",
  generos: ["Horror", "Mystery", "Thriller"],
  avaliacao: 5.6,
  poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Scream_7_%28poster%29.jpg/250px-Scream_7_%28poster%29.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt27047903",
  trailer: "https://youtu.be/UJrghaPJ0RY?si=4PRP43gppyIP_ykv",
  duracao: "1h 54min",
  pais: "United States"
},

{
  id: 28,
  tipo: "filme",
  titulo: "The Fast and the Furious",
  ano: 2001,
  sinopse: "An undercover police officer infiltrates a street racing crew suspected of hijacking high-value trucks in Los Angeles.",
  generos: ["Action", "Crime", "Thriller"],
  avaliacao: 6.8,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT-430AbxL6QGtJdysHKk5wsGFWKDdT35Dwg&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0232500",
  trailer: "https://youtu.be/DXc8tiB8TBI?si=QOXBQXIsdY3OvyYq",
  duracao: "1h 46min",
  pais: "United States"
},

{
  id: 29,
  tipo: "filme",
  titulo: "2 Fast 2 Furious",
  ano: 2003,
  sinopse: "Former cop Brian O'Conner teams up with his childhood friend to bring down a powerful drug lord while clearing his criminal record.",
  generos: ["Action", "Crime", "Thriller"],
  avaliacao: 5.9,
  poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/20/2_Fast_2_Furious_2003.jpg/250px-2_Fast_2_Furious_2003.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0322259",
  trailer: "https://youtu.be/Hc6lgMQVKQg?si=R_vUsKeqms1I4c6c",
  duracao: "1h 47min",
  pais: "United States"
},

{
  id: 30,
  tipo: "filme",
  titulo: "The Fast and the Furious: Tokyo Drift",
  ano: 2006,
  sinopse: "A rebellious teenager is sent to live in Tokyo, where he discovers the world of drift racing and becomes involved with dangerous rivals.",
  generos: ["Action", "Crime", "Thriller"],
  avaliacao: 6.0,
  poster: "https://upload.wikimedia.org/wikipedia/pt/f/f1/TFF-TokyoDrift-p%C3%B4ster.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0463985",
  trailer: "https://youtu.be/p8HQ2JLlc4E?si=CVUyiwypFdhvg2yk",
  duracao: "1h 44min",
  pais: "United States"
},

{
  id: 31,
  tipo: "filme",
  titulo: "Fast & Furious",
  ano: 2009,
  sinopse: "Brian O'Conner and Dominic Toretto reunite to bring down a heroin importer while seeking justice for a personal loss.",
  generos: ["Action", "Crime", "Thriller"],
  avaliacao: 6.5,
  poster: "https://m.media-amazon.com/images/M/MV5BYWFhNmM0ZTEtYmU2ZC00ZWYwLWFhMGYtMDUwZDU2YTNmNzVjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1013752",
  trailer: "https://youtu.be/3j3Mre4MsX4?si=Wa3DucxHgbCXVdEb",
  duracao: "1h 47min",
  pais: "United States"
},

{
  id: 32,
  tipo: "filme",
  titulo: "Fast Five",
  ano: 2011,
  sinopse: "Dominic Toretto and his crew plan a massive heist in Rio de Janeiro while being pursued by a relentless federal agent.",
  generos: ["Action", "Crime", "Thriller"],
  avaliacao: 7.3,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ89Wa9bdPGajKTFRxe3RoZFsLlQLGKxgtRaA&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1596343",
  trailer: "https://youtu.be/E1owNxw0cz0?si=h-EeYWalmGw3FzXV",
  duracao: "2h 10min",
  pais: "United States"
},

{
  id: 33,
  tipo: "filme",
  titulo: "Fast & Furious 6",
  ano: 2013,
  sinopse: "Hobbs asks Dominic Toretto and his team to help take down a skilled mercenary organization in exchange for full pardons.",
  generos: ["Action", "Crime", "Thriller"],
  avaliacao: 7.0,
  poster: "https://m.media-amazon.com/images/M/MV5BZjg0NzBjMjEtMzRmNi00NzNjLWIzM2QtZTE0NDM4NzBmYjQwXkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1905041",
  trailer: "https://youtu.be/G2hscSRaTm8?si=66Ry1FZgdltgO4TS",
  duracao: "2h 10min",
  pais: "United States"
},

{
  id: 34,
  tipo: "filme",
  titulo: "Furious 7",
  ano: 2015,
  sinopse: "Dominic Toretto and his crew face a deadly assassin seeking revenge against them while securing a powerful surveillance program.",
  generos: ["Action", "Crime", "Thriller"],
  avaliacao: 7.1,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvOwuEakTXawv8nVPMlgE1MpjVlGsGEZpvbg&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2820852",
  trailer: "https://youtu.be/3wGDiIT-rO0?si=C1EqspXBlC3f0aUY",
  duracao: "2h 17min",
  pais: "United States"
},

{
  id: 35,
  tipo: "filme",
  titulo: "The Fate of the Furious",
  ano: 2017,
  sinopse: "When a mysterious cyberterrorist forces Dom to betray his team, the crew must reunite to stop a global threat and bring him home.",
  generos: ["Action", "Crime", "Thriller"],
  avaliacao: 6.6,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNp4agmZEAXF9KyLeTyDNbY9b6rrAZX8e-Q&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt4630562",
  trailer: "https://youtu.be/Uem6VTKNnhc?si=fXCGyLv58FnXtzPi",
  duracao: "2h 16min",
  pais: "United States"
},

{
  id: 36,
  tipo: "filme",
  titulo: "F9: The Fast Saga",
  ano: 2021,
  sinopse: "Dom Toretto and his team must confront a dangerous plot led by his estranged brother, a highly skilled assassin and driver.",
  generos: ["Action", "Adventure", "Crime"],
  avaliacao: 5.2,
  poster: "https://br.web.img3.acsta.net/pictures/21/04/14/19/06/3385237.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt5433138",
  trailer: "https://youtu.be/jP1ASkk6cJc?si=e-JdCpfsTtQRlPsz",
  duracao: "2h 23min",
  pais: "United States"
},

{
  id: 37,
  tipo: "filme",
  titulo: "Fast X",
  ano: 2023,
  sinopse: "Dom Toretto and his family become the targets of a vengeful enemy seeking revenge for the events of the Rio heist years earlier.",
  generos: ["Action", "Adventure", "Crime"],
  avaliacao: 5.7,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD7LRaBxVcnUDtN_6maXWOeWG04-3OyilTOw&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt5433140",
  trailer: "https://youtu.be/N-3_SkgrfSY?si=aSEf1kk-JOrIXJyN",
  duracao: "2h 21min",
  pais: "United States"
},

{
  id: 38,
  tipo: "filme",
  titulo: "The Nun",
  ano: 2018,
  sinopse: "A priest and a novice are sent to investigate the mysterious death of a nun at a remote abbey, where they encounter a demonic force.",
  generos: ["Horror", "Mystery", "Thriller"],
  avaliacao: 5.3,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhDzGtU45I69_d7WAwZ4MujSoz_OcCEfyPQQ&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt5814060",
  trailer: "https://youtu.be/pzD9zGcUNrw?si=L8PY6mBHW1BvVGQe",
  duracao: "1h 36min",
  pais: "United States"
},

{
  id: 39,
  tipo: "filme",
  titulo: "The Nun II",
  ano: 2023,
  sinopse: "When a priest is murdered and evil begins to spread, Sister Irene once again comes face to face with the demonic force Valak.",
  generos: ["Horror", "Mystery", "Thriller"],
  avaliacao: 5.6,
  poster: "https://m.media-amazon.com/images/M/MV5BZmNhODU5Y2YtYTNmYi00YTRiLWE5MjUtMmQzMGM5YjliZjRhXkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt10160976",
  trailer: "https://youtu.be/QF-oyCwaArU?si=vS3I-Up8zSm91SE1",
  duracao: "1h 50min",
  pais: "United States"
},

{
  id: 40,
  tipo: "filme",
  titulo: "Annabelle",
  ano: 2014,
  sinopse: "A couple begins to experience terrifying supernatural events involving a vintage doll after their home is invaded by cultists.",
  generos: ["Horror", "Mystery", "Thriller"],
  avaliacao: 5.4,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKVzciRLKmmUNYTuhuSdsKkVeWy0WrXtmNVQ&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt3322940",
  trailer: "https://youtu.be/paFgQNPGlsg?si=dDthmLe2iIp1DgfK",
  duracao: "1h 39min",
  pais: "United States"
},

{
  id: 41,
  tipo: "filme",
  titulo: "Annabelle: Creation",
  ano: 2017,
  sinopse: "A dollmaker and his wife welcome a group of orphan girls into their home, where a sinister doll becomes the center of terrifying events.",
  generos: ["Horror", "Mystery", "Thriller"],
  avaliacao: 6.5,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaokHGlPLdRnSEhVTOQbT0YrY-sprcgA1cQ&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt5140878",
  trailer: "https://youtu.be/EjZkJa6Z-SY?si=kvQsG3AKuv2J4UG9",
  duracao: "1h 49min",
  pais: "United States"
},

{
  id: 42,
  tipo: "filme",
  titulo: "Annabelle Comes Home",
  ano: 2019,
  sinopse: "While the Warrens are away, the possessed Annabelle doll awakens evil spirits in their artifact room, putting their daughter and her friends in danger.",
  generos: ["Horror", "Mystery", "Thriller"],
  avaliacao: 5.9,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpZJmbtpZ9oK889b5uFQ7fF5IQRFhB4RJpg&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt8350360",
  trailer: "https://youtu.be/bCxm7cTpBAs?si=iRrxazhYK-TyRNFy",
  duracao: "1h 46min",
  pais: "United States"
},

{
  id: 43,
  tipo: "filme",
  titulo: "The Conjuring",
  ano: 2013,
  sinopse: "Paranormal investigators Ed and Lorraine Warren help a family terrorized by a dark presence in their farmhouse.",
  generos: ["Horror", "Mystery", "Thriller"],
  avaliacao: 7.5,
  poster: "https://br.web.img2.acsta.net/pictures/210/166/21016629_2013062820083878.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1457767",
  trailer: "https://youtu.be/k10ETZ41q5o?si=iIVNuTWlLBU-vTZw",
  duracao: "1h 52min",
  pais: "United States"
},

{
  id: 44,
  tipo: "filme",
  titulo: "The Conjuring 2",
  ano: 2016,
  sinopse: "Ed and Lorraine Warren travel to England to help a single mother and her children who are being haunted by a malicious supernatural entity.",
  generos: ["Horror", "Mystery", "Thriller"],
  avaliacao: 7.3,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIm6ZrG_TLc7NIAR8stb1Hg9wrft7BR8m46w&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt3065204",
  trailer: "https://youtu.be/VFsmuRPClr4?si=KdrBBUJQHgG1e3rK",
  duracao: "2h 14min",
  pais: "United States"
},

{
  id: 45,
  tipo: "filme",
  titulo: "The Conjuring: The Devil Made Me Do It",
  ano: 2021,
  sinopse: "Ed and Lorraine Warren investigate a shocking murder case linked to a demonic possession, uncovering one of the most sensational cases of their careers.",
  generos: ["Horror", "Mystery", "Thriller"],
  avaliacao: 6.3,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCJfcXO5u5wP0_MbRizRd4-EcH5AveeOQug&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt7069210",
  trailer: "https://youtu.be/h9Q4zZS2v1k?si=pNoUdxDBB8JVlcj2",
  duracao: "1h 52min",
  pais: "United States"
},

{
  id: 46,
  tipo: "filme",
  titulo: "The Conjuring: Last Rites",
  ano: 2025,
  sinopse: "Paranormal investigators Ed and Lorraine Warren take on one last terrifying case involving mysterious entities they must confront.",
  generos: ["Horror", "Mystery", "Thriller"],
  avaliacao: 6.2,
  poster: "https://br.web.img3.acsta.net/img/28/7d/287dbd3c843903f3519952c0af589baf.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt22898462",
  trailer: "https://youtu.be/bMgfsdYoEEo?si=C9Niv7uKvRthguU9",
  duracao: "2h 15min",
  pais: "United States"
},

{
  id: 47,
  tipo: "filme",
  titulo: "Sahara",
  ano: 2005,
  sinopse: "Explorer Dirk Pitt and his team travel to West Africa in search of a lost Civil War battleship while investigating a deadly epidemic.",
  generos: ["Action", "Adventure", "Comedy"],
  avaliacao: 6.1,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Sk0I5apBaRWE_FUtSB6uxvIp_EAQ8DpTFQ&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0318649",
  trailer: "https://youtu.be/2Z9zVJ6zgXc?si=zvV7uQLWPqfQOC3Q",
  duracao: "2h 04min",
  pais: "United States"
},

{
  id:48 ,
  tipo: "filme",
  titulo: "Ghost Rider",
  ano: 2007,
  sinopse: "A motorcycle stunt performer makes a deal with the Devil and becomes the Ghost Rider, a supernatural bounty hunter with a fiery skull.",
  generos: ["Action", "Fantasy", "Thriller"],
  avaliacao: 5.3,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rXqNzHhNqjG0FqY1NNXKoEtafu2aXuaS9A&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0259324",
  trailer: "https://youtu.be/nu6R7ypaz5g?si=b3Wd3fhfEf3F7x0T",
  duracao: "1h 50min",
  pais: "United States"
},

{
  id: 49,
  tipo: "filme",
  titulo: "Ghost Rider: Spirit of Vengeance",
  ano: 2011,
  sinopse: "Johnny Blaze struggles with his curse as the Ghost Rider while trying to protect a young boy from the forces of the Devil.",
  generos: ["Action", "Fantasy", "Thriller"],
  avaliacao: 4.3,
  poster: "https://preview.redd.it/what-are-your-thoughts-on-the-ghost-rider-movies-v0-kll26um2navc1.png?width=1400&format=png&auto=webp&s=b9998a3b05e53b493ef6cd025adc9a1807094327",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1071875",
  trailer: "https://youtu.be/UUObgxCoUgA?si=0nXfMuUDM1pYUHC_",
  duracao: "1h 36min",
  pais: "United States"
},

{
  id:50,
  tipo: "filme",
  titulo: "Kick-Ass",
  ano: 2010,
  sinopse: "An ordinary teenager decides to become a real-life superhero despite having no powers, training, or experience.",
  generos: ["Action", "Comedy", "Crime"],
  avaliacao: 7.6,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDm3nzZIdGOx4aZ942RsGXE_0Liyw9LuhMg&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1250777",
  trailer: "https://youtu.be/2rpXHqnGDXo?si=zLSqlSsyN3ilI7Ki",
  duracao: "1h 57min",
  pais: "United Kingdom"
},

{
  id: 51,
  tipo: "filme",
  titulo: "Kick-Ass 2",
  ano: 2013,
  sinopse: "As Kick-Ass joins a team of amateur superheroes, a vengeful enemy known as The Motherfucker assembles his own league of villains.",
  generos: ["Action", "Comedy", "Crime"],
  avaliacao: 6.5,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6jtl1_rYoJ0sbMuO9cP5xebPhiCxcuYfk1A&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1650554",
  trailer: "https://youtu.be/Td921lYSBIA?si=eo5f08e54xB5pniQ",
  duracao: "1h 43min",
  pais: "United Kingdom"
},

{
  id: 52,
  tipo: "filme",
  titulo: "The Flash",
  ano: 2023,
  sinopse: "Barry Allen uses his super speed to travel back in time, but altering the past creates unexpected consequences that threaten the future.",
  generos: ["Action", "Adventure", "Sci-Fi"],
  avaliacao: 6.6,
  poster: "https://pt.wikipedia.org/wiki/Ficheiro:The_Flash_%28filme%29_capa.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0439572",
  trailer: "https://youtu.be/hebWYacbdvc?si=00cbcnU9a0sLO7t1",
  duracao: "2h 24min",
  pais: "United States"
},

{
  id: 53,
  tipo: "serie",
  titulo: "Spider-Noir",
  ano: 2026,
  sinopse: "An aging private investigator in 1930s New York is forced to confront his past as the city's only superhero when old threats resurface.",
  generos: ["Action", "Adventure", "Crime"],
  avaliacao: 8.2,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_stmna8_UKNYPWmWyVr1EZArRhm7a4YzGJA&s",
  duracao: "1 temporada",
  trailer: "https://youtu.be/HgMbkitzhEM?si=kXjXBZ4euJGn8Mci",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt30460310"
},

{
  id: 54,
  tipo: "serie",
  titulo: "Game of Thrones",
  ano: 2011,
  sinopse: "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros while an ancient enemy returns.",
  generos: ["Action", "Adventure", "Drama"],
  avaliacao: 9.2,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCtTwp9bSRc7VltVNvfhXkbJCS0Kc8b3jtA&s",
  duracao: "8 temporadas",
  trailer: "https://youtu.be/bjqEWgDVPe0?si=7HvjRVeS6Tr0Caeb",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt0944947"
},

{
  id: 55,
  tipo: "serie",
  titulo: "Lost",
  ano: 2004,
  sinopse: "The survivors of a plane crash find themselves stranded on a mysterious island filled with secrets, dangers, and supernatural phenomena.",
  generos: ["Adventure", "Drama", "Mystery"],
  avaliacao: 8.3,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8b8zHS5f4KtIN8vFW36ytm1BYcUHG_uUIA&s",
  duracao: "6 temporadas",
  trailer: "https://youtu.be/oOCaBPbm7KE?si=w6npi0FsFowwuP5A",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt0411008"
},

{
  id: 56,
  tipo: "serie",
  titulo: "The Walking Dead",
  ano: 2010,
  sinopse: "A sheriff's deputy awakens from a coma to find the world overrun by zombies and must lead a group of survivors through a dangerous new reality.",
  generos: ["Drama", "Horror", "Thriller"],
  avaliacao: 8.1,
  poster: "",
  duracao: "11 temporadas",
  trailer: "https://youtu.be/cu2ApTImBKc?si=O5hGbGt3BUoC9zeQ",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt1520211"
},

{
  id: 57,
  tipo: "serie",
  titulo: "Stranger Things",
  ano: 2016,
  sinopse: "When a young boy vanishes, a group of friends uncovers secret experiments, supernatural forces, and a mysterious girl with extraordinary powers.",
  generos: ["Drama", "Fantasy", "Horror"],
  avaliacao: 8.6,
  poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/29/Stranger_Things_Temporada_1_Poster.jpg/250px-Stranger_Things_Temporada_1_Poster.jpg",
  duracao: "5 temporadas",
  trailer: "https://youtu.be/RMmGQNNl164?si=TOnErMuUeIjSMCo2",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt4574334"
},

{
  id: 58,
  tipo: "serie",
  titulo: "The Punisher",
  ano: 2017,
  sinopse: "After the murder of his family, Frank Castle uncovers a conspiracy that reaches far beyond New York's criminal underworld and becomes a ruthless vigilante.",
  generos: ["Action", "Crime", "Drama"],
  avaliacao: 8.4,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfJiOQfNBwHYZZhts9-n_ty4zCNAmX8NXKjw&s",
  duracao: "2 temporadas",
  trailer: "https://youtu.be/THB2nAJUFC8?si=P4cv8XPX0MFYGOw3",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt5675620"
},

{
  id: 59,
  tipo: "serie",
  titulo: "The Last Kingdom",
  ano: 2015,
  sinopse: "Born a Saxon but raised by Vikings, Uhtred of Bebbanburg seeks to reclaim his ancestral home while navigating the conflict between the two worlds.",
  generos: ["Action", "Drama", "History"],
  avaliacao: 8.5,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabnAnQUlzY8TVFxSDVt9oaw40OuF0NCZDmA&s",
  duracao: "5 temporadas",
  trailer: "https://youtu.be/WxPApTGWwas?si=ge4nnOg-vqOOmBr2",
  pais: "United Kingdom",
  videoUrl: "https://streamimdb.ru/embed/tv/tt4179452"
},

{
  id: 60,
  tipo: "serie",
  titulo: "Vikings",
  ano: 2013,
  sinopse: "The legendary Norse hero Ragnar Lothbrok rises from farmer to king as he leads daring raids and explores new lands.",
  generos: ["Action", "Adventure", "Drama"],
  avaliacao: 8.5,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRldnzKpV-OjHLnWvEDB-SI_lVofRLFpCXAXA&s",
  duracao: "6 temporadas",
  trailer: "https://youtu.be/9GgxinPwAGc?si=_4SdBOMhwwSzm5NR",
  pais: "Canada",
  videoUrl: "https://streamimdb.ru/embed/tv/tt2306299"
},

{
  id: 61,
  tipo: "serie",
  titulo: "Squid Game",
  ano: 2021,
  sinopse: "Hundreds of financially desperate players accept an invitation to compete in deadly children's games for a massive cash prize.",
  generos: ["Action", "Drama", "Thriller"],
  avaliacao: 8.0,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8KSEsS_J8Ml3Gu3s8z-eaMeB5mr1tWmbhQ&s",
  duracao: "3 temporadas",
  trailer: "https://youtu.be/oqxAJKy0ii4?si=3NY0v-TjQf1XvECA",
  pais: "South Korea",
  videoUrl: "https://streamimdb.ru/embed/tv/tt10919420"
},

{
  id: 62,
  tipo: "serie",
  titulo: "Outer Banks",
  ano: 2020,
  sinopse: "A group of teenagers from the Outer Banks embarks on a dangerous treasure hunt linked to the disappearance of their leader's father.",
  generos: ["Action", "Adventure", "Drama"],
  avaliacao: 7.5,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hNsfam-qR5Gs23iFF0bz121SsUhNqoyU0g&s",
  duracao: "4 temporadas",
  trailer: "https://youtu.be/pfY3j-3uQhk?si=P9VLdAJskoIP9Sfi",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt10293938"
},

{
  id: 63,
  tipo: "serie",
  titulo: "Peaky Blinders",
  ano: 2013,
  sinopse: "A notorious gang led by the ambitious Tommy Shelby rises to power in post-World War I Birmingham through crime, politics, and strategy.",
  generos: ["Crime", "Drama"],
  avaliacao: 8.7,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJHhlgnygBMBQHi9y6UfMcjoUg4Lz1yUaFXg&s",
  duracao: "6 temporadas",
  trailer: "https://youtu.be/lcvUGs3xaDM?si=OwO1pfbQYjZuckJ3",
  pais: "United Kingdom",
  videoUrl: "https://streamimdb.ru/embed/tv/tt2442560"
},

{
  id: 64,
  tipo: "serie",
  titulo: "House of the Dragon",
  ano: 2022,
  sinopse: "The Targaryen dynasty is at the height of its power, but a brutal civil war begins when rival factions fight for the Iron Throne.",
  generos: ["Action", "Adventure", "Drama"],
  avaliacao: 8.3,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNMFIdfKxeR3eqLvBNVL0na5Hz7xjoAQpTg&s",
  duracao: "2 temporadas",
  trailer: "https://youtu.be/DotnJ7tTA34?si=HzBwtia54Yja8A3R",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt11198330"
},

{
  id: 65,
  tipo: "serie",
  titulo: "Better Call Saul",
  ano: 2015,
  sinopse: "The story follows Jimmy McGill, a struggling lawyer who gradually transforms into the morally flexible attorney Saul Goodman.",
  generos: ["Crime", "Drama"],
  avaliacao: 9.0,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimEHbz4Blzqgcu0-qbS9jHLEKoeuxb7VwXg&s",
  duracao: "6 temporadas",
  trailer: "https://youtu.be/HN4oydykJFc?si=KL-KsyNW3fhVGpzN",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt3032476"
},

{
  id: 66,
  tipo: "serie",
  titulo: "Mr. Robot",
  ano: 2015,
  sinopse: "A cybersecurity engineer and hacker suffering from social anxiety is recruited by a mysterious anarchist to help bring down powerful corporations.",
  generos: ["Crime", "Drama", "Thriller"],
  avaliacao: 8.5,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0o3rx7pHe_U0cmxSqA4r9YKGqsytUJTA4nw&s",
  duracao: "4 temporadas",
  trailer: "https://youtu.be/xIBiJ_SzJTA?si=jhSw8FSUARaiEGDJ",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt4158110"
},

{
  id: 67,
  tipo: "serie",
  titulo: "Dark",
  ano: 2017,
  sinopse: "When two children disappear in a small German town, four families uncover a mystery involving time travel, secrets, and interconnected destinies.",
  generos: ["Crime", "Drama", "Mystery"],
  avaliacao: 8.7,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_bENpN8S0GenzWI2aZU62ZYzJKUwg2NAEg&s",
  duracao: "3 temporadas",
  trailer: "https://youtu.be/YBNbXiYc8-s?si=mxZgPA20lIvbWqwF",
  pais: "Germany",
  videoUrl: "https://streamimdb.ru/embed/tv/tt5753856"
},

{
  id: 68,
  tipo: "serie",
  titulo: "The Sopranos",
  ano: 1999,
  sinopse: "New Jersey mob boss Tony Soprano struggles to balance the demands of his crime family with the challenges of his personal life.",
  generos: ["Crime", "Drama"],
  avaliacao: 9.2,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7twwYO2p3-f0txUFn9ZgUPCCX5--12gUdLQ&s",
  duracao: "6 temporadas",
  trailer: "https://youtu.be/KMx4iFcozK0?si=X73GFMI89NBEb0iu",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt0141842"
},

{
  id: 69,
  tipo: "serie",
  titulo: "Friends",
  ano: 1994,
  sinopse: "Follows the personal and professional lives of six friends living in New York City as they navigate relationships, careers, and everyday challenges.",
  generos: ["Comedy", "Romance"],
  avaliacao: 8.9,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6gIu9FC5mW5oJaTmEwdN3DN0vaFuwuxV1HG2uF2j1nPJLvDo5jp6X_8gwO71me4kD5IrTk1yLgOmtDS-wIanzv1tcISK-OUU6jU6O7hY&s=10",
  duracao: "10 temporadas",
  trailer: "https://youtu.be/Zg2LCD5QOJs?si=m9kjPMBW85nWPbwY",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt0108778"
},

{
  id: 70,
  tipo: "serie",
  titulo: "Teen Wolf",
  ano: 2011,
  sinopse: "A high school student’s life changes forever after he is bitten by a werewolf and becomes involved in a world of supernatural creatures.",
  generos: ["Action", "Drama", "Fantasy"],
  avaliacao: 7.7,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcjOlFfZ7ofbVBveLIh9gyjJ66-0IGek1rw&s",
  duracao: "6 temporadas",
  trailer: "https://youtu.be/20lbPxwKR6Q?si=-6jrp9WxNTSpuFlD",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt1567432"
},
  /* ─────────────────────────────────────────────────────────
     PARA ADICIONAR NOVO FILME:
     ,{
       id: 7,
       tipo: "filme",
       titulo: "Nome do Filme",
       ano: 2024,
       sinopse: "Descrição...",
       generos: ["Ação"],
       avaliacao: 8.0,
       poster: "https://...",
       videoUrl: "https://cdn-embed.com/filme/ttXXXXXXX",
       duracao: "2h 00min",
       pais: "EUA"
     }

     PARA SÉRIE:
     videoUrl episódio: "https://cdn-embed.com/serie/ttXXXXXXX/TEMPORADA/EPISODIO"
     ───────────────────────────────────────────────────────── */
];
