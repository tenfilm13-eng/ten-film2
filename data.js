const CATALOG = [
   {
    id: 1,
    tipo: "filme",
    titulo: "Scream 5",
    ano: 2022,
    sinopse: "Twenty-five years after a series of brutal murders rocked the quiet town of Woodsboro, a new masked killer emerges and begins stalking a group of teenagers.",
    generos: ["horror", "Mistério"],
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
    generos: ["horror", "Mistério"],
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
    generos: ["horror", "Mistério"],
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
    generos: ["horror"],
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
    generos: ["horror"],
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
  videoUrl: "https://streamimdb.ru/embed/movie/tt1190634"
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
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0tiL200NmugsHyVpjYrjCx_-4uGB2x9XIuw&s",
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
  poster: "https://m.media-amazon.com/images/M/MV5BYWQwMGRhNGEtZTNhMy00MzVjLWJhMjItYjcwMDljMTkyNTg2XkEyXkFqcGc@._V1_.jpg",
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

{
  id: 71,
  tipo: "filme",
  titulo: "Big Hero 6",
  ano: 2014,
  sinopse: "A young robotics prodigy and his inflatable healthcare companion Baymax team up with friends to form a band of high-tech heroes.",
  generos: ["Animation", "Action", "Adventure"],
  avaliacao: 7.8,
  poster: "https://lumiere-a.akamaihd.net/v1/images/p_bighero6_19753_20bd6206.jpeg?region=0%2C0%2C540%2C810",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2245084",
  trailer: "https://youtu.be/z3biFxZIJOQ?si=0UtL7ZiLFNwvO1iu",
  duracao: "1h 42min",
  pais: "United States"
},

{
  id: 72,
  tipo: "filme",
  titulo: "The Good Dinosaur",
  ano: 2015,
  sinopse: "In a world where dinosaurs never became extinct, a young Apatosaurus named Arlo forms an unlikely friendship with a human boy.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.7,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfYcaIeloEqvS7PmWA60lCxhCtKi_e3nC3Q&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1979388",
  trailer: "https://youtu.be/O-RgquKVTPE?si=3HNcjLs-CXHTs_WW",
  duracao: "1h 33min",
  pais: "United States"
},

{
  id: 73,
  tipo: "filme",
  titulo: "Tangled",
  ano: 2010,
  sinopse: "A spirited princess with magical long hair escapes her tower with the help of a charming thief and discovers the world beyond her confinement.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 7.7,
  poster: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Tangled_poster.jpg/250px-Tangled_poster.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0398286",
  trailer: "https://youtu.be/ycoY201RTRo?si=8mX-G4FR3V9KXHKr",
  duracao: "1h 40min",
  pais: "United States"
},

{
  id: 74,
  tipo: "filme",
  titulo: "WALL·E",
  ano: 2008,
  sinopse: "A lonely waste-collecting robot on an abandoned Earth embarks on a journey across space after meeting a sleek probe robot named EVE.",
  generos: ["Animation", "Adventure", "Family"],
  avaliacao: 8.4,
  poster: "https://upload.wikimedia.org/wikipedia/en/4/4c/WALL-E_poster.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0910970",
  trailer: "https://youtu.be/CZ1CATNbXg0?si=baALLwzwGA9q6Acs",
  duracao: "1h 38min",
  pais: "United States"
},

{
  id: 75,
  tipo: "filme",
  titulo: "The Incredibles",
  ano: 2004,
  sinopse: "A family of undercover superheroes is forced back into action to save the world from a dangerous new threat.",
  generos: ["Animation", "Action", "Adventure"],
  avaliacao: 8.0,
  poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0317705",
  trailer: "https://youtu.be/-UaGUdNJdRQ?si=St3rD5za1vfETVNm",
  duracao: "1h 55min",
  pais: "United States"
},

{
  id: 76,
  tipo: "filme",
  titulo: "Incredibles 2",
  ano: 2018,
  sinopse: "While Helen is called to lead a campaign to bring superheroes back, Bob stays home to manage the challenges of family life.",
  generos: ["Animation", "Action", "Adventure"],
  avaliacao: 7.5,
  poster: "https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt3606756",
  trailer: "https://youtu.be/i5qOzqD9Rms?si=XHRIKminqLHRiHhD",
  duracao: "1h 58min",
  pais: "United States"
},

{
  id: 77,
  tipo: "filme",
  titulo: "Luck",
  ano: 2022,
  sinopse: "An unlucky young woman discovers a hidden world of magical creatures and embarks on a journey to bring good luck to her best friend.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.4,
  poster: "https://upload.wikimedia.org/wikipedia/pt/6/6e/Luck_%282022%29_poster.png",
  videoUrl: "https://streamimdb.ru/embed/movie/tt7214954",
  trailer: "https://youtu.be/xSG5UX0EQVg?si=AAP07n1OctkN0W7l",
  duracao: "1h 45min",
  pais: "United States"
},

{
  id: 78,
  tipo: "filme",
  titulo: "Minions",
  ano: 2015,
  sinopse: "The Minions embark on a journey to find a new master and end up helping the ambitious Scarlet Overkill in her quest for world domination.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.4,
  poster: "https://m.media-amazon.com/images/M/MV5BODI4NzMyNjE0MF5BMl5BanBnXkFtZTgwMTcwNzI0MzE@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2293640",
  trailer: "https://youtu.be/ZSdOwt-G49w?si=IxLabf25FQU5e9Ow",
  duracao: "1h 31min",
  pais: "United States"
},

{
  id: 79,
  tipo: "filme",
  titulo: "Minions: The Rise of Gru",
  ano: 2022,
  sinopse: "A young Gru teams up with his loyal Minions as he attempts to become the world's greatest supervillain.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.5,
  poster: "https://br.web.img3.acsta.net/pictures/20/02/03/15/22/4954456.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt5113044",
  trailer: "https://youtu.be/6DxjJzmYsXo?si=PgGM-HoqtB2vA4fQ",
  duracao: "1h 27min",
  pais: "United States"
},

{
  id: 80,
  tipo: "filme",
  titulo: "Minions & Monsters",
  ano: 2026,
  sinopse: "The Minions embark on a journey to find frightening creatures to appear in their very own monster movie, unleashing chaos along the way.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 0.0,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDdzyO9k9ZeSpuy8NiOUJyzs-TwsbeBRuew&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt32890033",
  trailer: "https://youtu.be/ZSdOwt-G49w?si=uJyUlqMGMejIOI3f",
  duracao: "1h 40min",
  pais: "United States"
},

{
  id: 81,
  tipo: "filme",
  titulo: "Rango",
  ano: 2011,
  sinopse: "A pet chameleon finds himself in a desert town and unexpectedly becomes its sheriff, facing dangerous outlaws and a growing water crisis.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 7.3,
  poster: "https://m.media-amazon.com/images/M/MV5BMTc4NjEyODE1OV5BMl5BanBnXkFtZTcwMjYzNTkxNA@@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1192628",
  trailer: "https://youtu.be/DDgoDooApwM?si=3vlENpQOMYhzkb06",
  duracao: "1h 47min",
  pais: "United States"
},

{
  id: 82,
  tipo: "filme",
  titulo: "Up",
  ano: 2009,
  sinopse: "An elderly widower fulfills his lifelong dream of adventure by tying thousands of balloons to his house and flying to South America.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 8.3,
  poster: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/03/73/20176438.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1049413",
  trailer: "https://youtu.be/ORFWdXl_zJ4?si=6dqtGtWr2XOMPPfK",
  duracao: "1h 36min",
  pais: "United States"
},

{
  id: 83,
  tipo: "filme",
  titulo: "Finding Nemo",
  ano: 2003,
  sinopse: "After his son is captured by divers, a timid clownfish embarks on an epic journey across the ocean to bring him home.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 8.2,
  poster: "https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0266543",
  trailer: "https://youtu.be/SPHfeNgogVs?si=cSWYyCbCEiYQkcxY",
  duracao: "1h 40min",
  pais: "United States"
},

{
  id: 84,
  tipo: "filme",
  titulo: "Finding Dory",
  ano: 2016,
  sinopse: "Dory, a forgetful blue tang fish, sets out on a journey to find her parents and uncover the secrets of her past.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 7.2,
  poster: "https://m.media-amazon.com/images/M/MV5BY2VlYWJjMGMtYjcwZC00MDE2LThmMDItYjVlMzNhYzBhYTk5XkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2277860",
  trailer: "https://youtu.be/NQu-153MnGQ?si=HT-LRcWPiI9pl05d",
  duracao: "1h 37min",
  pais: "United States"
},

{
  id: 85,
  tipo: "filme",
  titulo: "Ice Age",
  ano: 2002,
  sinopse: "A mammoth, a sloth, and a saber-toothed tiger embark on a journey to return a human baby to its family during the Ice Age.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 7.5,
  poster: "https://m.media-amazon.com/images/M/MV5BMDBlYzU2OGMtOGJjNi00ZGZjLWIwNjMtYzdiZjkwYWNjZDljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0268380",
  trailer: "https://youtu.be/i4noiCRJRoE?si=jJhvxCB_rNEp2Q5a",
  duracao: "1h 21min",
  pais: "United States"
},

{
  id: 86,
  tipo: "filme",
  titulo: "Ice Age: The Meltdown",
  ano: 2006,
  sinopse: "As the Ice Age comes to an end, Manny, Sid, and Diego must find a way to escape a massive flood threatening their valley.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.8,
  poster: "https://m.media-amazon.com/images/M/MV5BMjAwODg3OTAxMl5BMl5BanBnXkFtZTcwMjg2NjYyMw@@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0438097",
  trailer: "https://youtu.be/pfESEXIZ_lw?si=TakFpnv3fYcbL4SS",
  duracao: "1h 31min",
  pais: "United States"
},

{
  id: 87,
  tipo: "filme",
  titulo: "Ice Age: Dawn of the Dinosaurs",
  ano: 2009,
  sinopse: "When Sid steals dinosaur eggs, Manny, Diego, Ellie, and their friends venture into a hidden underground world to rescue him.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.9,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXi8Tl9EkPL-LcLfecDNehxa0IsVM5Rvznw&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1080016",
  trailer: "https://youtu.be/MnAi5u-k9NY?si=WgF4tfqr1y10OH6F",
  duracao: "1h 34min",
  pais: "United States"
},

{
  id: 88,
  tipo: "filme",
  titulo: "Ice Age: Continental Drift",
  ano: 2012,
  sinopse: "Manny, Diego, and Sid are separated from their herd after continental drift and embark on a dangerous sea adventure.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.5,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSxAs_YfoFQOJqt7IuLNoQes5FLMjbm7ngg&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1667889",
  trailer: "https://youtu.be/xz-KgMtU_BM?si=qL_f0HVi_r_HDisZ",
  duracao: "1h 28min",
  pais: "United States"
},

{
  id: 89,
  tipo: "filme",
  titulo: "Ice Age: Collision Course",
  ano: 2016,
  sinopse: "Scrat's cosmic adventure triggers a series of events that threaten Earth, forcing Manny and his friends to embark on a journey to save their world.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 5.7,
  poster: "https://play-lh.googleusercontent.com/4JYwbRXwa9PnWSZWwzCDkrfm_UaV83aQWR4cfMdoE8fsPxk4XoGF-1uLrFKBSJHihDI",
  videoUrl: "https://streamimdb.ru/embed/movie/tt3416828",
  trailer: "https://youtu.be/Ohq6NmKMja8?si=VtPXpAf4rMxJMg2g",
  duracao: "1h 34min",
  pais: "United States"
},

{
  id: 90,
  tipo: "filme",
  titulo: "Bolt",
  ano: 2008,
  sinopse: "A dog who believes he has superpowers sets out on a cross-country journey to rescue his owner and discovers the truth about himself.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.8,
  poster: "https://upload.wikimedia.org/wikipedia/pt/5/5c/Bolt-filme.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0397892",
  trailer: "https://youtu.be/Pj0a7GkMH3w?si=YK1-qQ7kocyyJA4B",
  duracao: "1h 36min",
  pais: "United States"
},

{
  id: 91,
  tipo: "filme",
  titulo: "The Boss Baby",
  ano: 2017,
  sinopse: "A young boy discovers that his new baby brother is actually a secret agent on a mission to protect the balance of love in the world.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.3,
  poster: "https://m.media-amazon.com/images/M/MV5BMTg5MzUxNzgxNV5BMl5BanBnXkFtZTgwMTM2NzQ3MjI@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt3874544",
  trailer: "https://youtu.be/-5DaJyxF5do?si=ofgMwWpMMaVGIQdK",
  duracao: "1h 37min",
  pais: "United States"
},

{
  id: 92,
  tipo: "filme",
  titulo: "The Boss Baby: Family Business",
  ano: 2021,
  sinopse: "The Templeton brothers reunite as adults when a new mission requires them to become babies again and save the world.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 5.9,
  poster: "https://m.media-amazon.com/images/M/MV5BM2MxZmU2ODUtZGIwMy00MjE1LThhNTAtMjRjYTE1ZDVjZTI0XkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt6932874",
  trailer: "https://youtu.be/QKyXqkf8mmc?si=pFB_SxPiNdD8zbt9",
  duracao: "1h 47min",
  pais: "United States"
},

{
  id: 93,
  tipo: "filme",
  titulo: "Hotel Transylvania",
  ano: 2012,
  sinopse: "Dracula runs a luxury hotel for monsters, but his overprotective nature is tested when a human stumbles into the resort.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 7.0,
  poster: "https://upload.wikimedia.org/wikipedia/en/f/f5/HotelTransylvania.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0837562",
  trailer: "https://youtu.be/q4RK3jY7AVk?si=IaMXnxFVh8-yOXYz",
  duracao: "1h 31min",
  pais: "United States"
},

{
  id: 94,
  tipo: "filme",
  titulo: "Hotel Transylvania 2",
  ano: 2015,
  sinopse: "Dracula worries that his half-human grandson is not showing signs of being a vampire and takes matters into his own hands.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.6,
  poster: "https://m.media-amazon.com/images/M/MV5BY2ExYWJhMDYtYjcwMy00YjA2LTk2YzQtY2FhMWYxZThiNDQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2510894",
  trailer: "https://youtu.be/T3nqmGgnJe8?si=D7f9frc67awTKTKO",
  duracao: "1h 29min",
  pais: "United States"
},

{
  id: 95,
  tipo: "filme",
  titulo: "Hotel Transylvania 3: Summer Vacation",
  ano: 2018,
  sinopse: "Dracula and his monster friends embark on a luxury cruise where he falls for the mysterious captain of the ship.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.3,
  poster: "https://br.web.img3.acsta.net/pictures/18/04/05/18/50/2899336.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt5220122",
  trailer: "https://youtu.be/Ku52zNnft8k?si=75UcFh_zvwcrv5h-",
  duracao: "1h 37min",
  pais: "United States"
},

{
  id: 96,
  tipo: "filme",
  titulo: "Hotel Transylvania: Transformania",
  ano: 2022,
  sinopse: "A mysterious invention turns Dracula and his monster friends into humans, while Johnny becomes a monster, leading to a race to reverse the transformation.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.0,
  poster: "https://m.media-amazon.com/images/M/MV5BNDRlNmQ5MGUtMWM0Mi00NjdkLTgzNzctODc3NWMwZTMxYTIxXkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt9848626",
  trailer: "https://youtu.be/7AP86CYeR30?si=Mla4LC8_YZg8uC8c",
  duracao: "1h 28min",
  pais: "United States"
},

{
  id: 97,
  tipo: "filme",
  titulo: "Cloudy with a Chance of Meatballs",
  ano: 2009,
  sinopse: "An aspiring inventor creates a machine that turns water into food, causing delicious meals to fall from the sky.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.9,
  poster: "https://upload.wikimedia.org/wikipedia/en/d/d1/Cloudy_with_a_chance_of_meatballs_theataposter.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0844471",
  trailer: "https://youtu.be/pUaKcFI4BZY?si=wBFtmdu_P3mZ7yQm",
  duracao: "1h 30min",
  pais: "United States"
},

{
  id: 98,
  tipo: "filme",
  titulo: "Cloudy with a Chance of Meatballs 2",
  ano: 2013,
  sinopse: "Flint Lockwood discovers that his food-making machine is still operating and creating living food-animal hybrids that threaten the world.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.3,
  poster: "https://m.media-amazon.com/images/M/MV5BMTYzNDM0MDI1NF5BMl5BanBnXkFtZTcwNzQ5NzYxOQ@@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1985966",
  trailer: "https://youtu.be/IzC18WEfszw?si=t0K4lL2dlKSN5BZC",
  duracao: "1h 35min",
  pais: "United States"
},

{
  id: 99,
  tipo: "filme",
  titulo: "Soul",
  ano: 2020,
  sinopse: "A middle-school music teacher dreams of becoming a jazz musician, but after an unexpected accident, his soul embarks on a journey of self-discovery.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 8.0,
  poster: "https://play-lh.googleusercontent.com/DBLnyRbxMaS7ijAYIONV-HzfIX2vgTma9_QZEIk_9CzjMNKdNXPYRr4CyTnYwAAz2PODvjfr25kWmZinSavd",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2948372",
  trailer: "https://youtu.be/xOsLIiBStEs?si=RXFNW0UP_WoNNSY2",
  duracao: "1h 40min",
  pais: "United States"
},

{
  id: 100,
  tipo: "filme",
  titulo: "Moana",
  ano: 2016,
  sinopse: "A courageous young Polynesian girl sets sail across the ocean to save her people and restore the heart of Te Fiti with the help of the demigod Maui.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 7.6,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrrjqyVsZxw_EUjgPJqWOFOAZw6WvPgJR6g&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt3521164",
  trailer: "https://youtu.be/LKFuXETZUsI?si=s5SiSvH01IJ2fxSA",
  duracao: "1h 47min",
  pais: "United States"
},

{
  id: 101,
  tipo: "filme",
  titulo: "Moana 2",
  ano: 2024,
  sinopse: "After receiving an unexpected call from her wayfinding ancestors, Moana embarks on a new voyage across dangerous and long-lost waters alongside Maui and a new crew.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.8,
  poster: "https://lumiere-a.akamaihd.net/v1/images/image_25b12a37.jpeg?region=0,0,540,810",
  videoUrl: "https://streamimdb.ru/embed/movie/tt13622970",
  trailer: "https://youtu.be/hDZ7y8RP5HE?si=zZSdht2ZIUKhyXBw",
  duracao: "1h 40min",
  pais: "United States"
},

{
  id: 102,
  tipo: "filme",
  titulo: "Frozen",
  ano: 2013,
  sinopse: "When Queen Elsa's icy powers plunge her kingdom into eternal winter, her sister Anna sets out on a journey to bring her home and save Arendelle.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 7.4,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyigtEP7shCN1Lfx6SLMc6sa_6A444sEziOQ&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2294629",
  trailer: "https://youtu.be/TbQm5doF_Uc?si=61qP_JK1M7kswvK_",
  duracao: "1h 42min",
  pais: "United States"
},

{
  id: 103,
  tipo: "filme",
  titulo: "Frozen II",
  ano: 2019,
  sinopse: "Elsa, Anna, Kristoff, Olaf, and Sven journey beyond Arendelle to uncover the origin of Elsa's powers and save their kingdom.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.8,
  poster: "https://m.media-amazon.com/images/M/MV5BZTE1YjlmZjctNjIwNi00NDQ0LTlmMzgtYWZkY2RkZTMwNTdmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt4520988",
  trailer: "https://youtu.be/Zi4LMpSDccc?si=Qur5NY47iWcMiPiP",
  duracao: "1h 43min",
  pais: "United States"
},

{
  id: 104,
  tipo: "filme",
  titulo: "Turbo",
  ano: 2013,
  sinopse: "A garden snail dreams of becoming the fastest racer in the world and gets a chance after a freak accident gives him incredible speed.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.4,
  poster: "https://play-lh.googleusercontent.com/DCH4iI3Riwu6Bpu7F6J-qmSVSuowqFHAsUjGo2JJRlGcvocaKOmqCBc9mSIEq24PqXOb",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1860353",
  trailer: "https://youtu.be/VlRtm8Gh9PQ?si=YEfoMRsC3UHLf_G_",
  duracao: "1h 36min",
  pais: "United States"
},

{
  id: 105,
  tipo: "filme",
  titulo: "Ferdinand",
  ano: 2017,
  sinopse: "A gentle bull with a big heart is mistaken for a dangerous beast and taken from his home, leading him on an adventure back to his family.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.7,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGKheW5W34CE1jfk1XFqdVMDh2jW_S0hP6A&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt3411444",
  trailer: "https://youtu.be/s-XHMNDgre8?si=g35_mjrG9IYuzHZ0",
  duracao: "1h 48min",
  pais: "United States"
},

{
  id: 106,
  tipo: "filme",
  titulo: "Shrek",
  ano: 2001,
  sinopse: "An ogre's peaceful life is disrupted when fairy-tale creatures are banished to his swamp, leading him on a quest with a talkative donkey.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 7.9,
  poster: "https://m.media-amazon.com/images/M/MV5BYzE1NjVhMjItYTE2Yy00YjE5LTg2YjctMGRhNTRiMGM1ZTFkXkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0126029",
  trailer: "https://youtu.be/CwXOrWvPBPk?si=SGqcbPMJwOupWZmH",
  duracao: "1h 30min",
  pais: "United States"
},

{
  id: 107,
  tipo: "filme",
  titulo: "Shrek 2",
  ano: 2004,
  sinopse: "After returning from their honeymoon, Shrek and Fiona visit her parents, the King and Queen of Far Far Away, leading to unexpected challenges.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 7.4,
  poster: "https://upload.wikimedia.org/wikipedia/pt/7/78/Shrek_2_Poster.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0298148",
  trailer: "https://youtu.be/xBgSfhp5Fxo?si=fBpMOF--HGgIVo1O",
  duracao: "1h 33min",
  pais: "United States"
},

{
  id: 108,
  tipo: "filme",
  titulo: "Shrek the Third",
  ano: 2007,
  sinopse: "When King Harold falls ill, Shrek sets out to find the rightful heir to the throne while Prince Charming plots revenge.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.1,
  poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c2/Shrek_the_Third_Poster.jpg/250px-Shrek_the_Third_Poster.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0413267",
  trailer: "https://youtu.be/_MoIr7811Bs?si=UraIaWKY2-21kNM2",
  duracao: "1h 33min",
  pais: "United States"
},

{
  id: 109,
  tipo: "filme",
  titulo: "Shrek Forever After",
  ano: 2010,
  sinopse: "Feeling trapped by family life, Shrek makes a deal with Rumpelstiltskin and finds himself in an alternate reality where he was never born.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.3,
  poster: "https://fr.web.img3.acsta.net/medias/nmedia/18/71/56/64/19451582.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0892791",
  trailer: "https://youtu.be/Ma9oseKpj9g?si=CQVlHXVaDaNcPaHW",
  duracao: "1h 33min",
  pais: "United States"
},

{
  id: 110,
  tipo: "filme",
  titulo: "The Angry Birds Movie",
  ano: 2016,
  sinopse: "When mysterious green pigs arrive on Bird Island, a group of unlikely heroes must uncover their true intentions and save their home.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.3,
  poster: "https://m.media-amazon.com/images/M/MV5BMTY3MjU0NDA0OF5BMl5BanBnXkFtZTgwNTc0MTU3OTE@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1985949",
  trailer: "https://youtu.be/QRmKa7vvct4?si=340DYz40KVm6TWp2",
  duracao: "1h 37min",
  pais: "United States"
},

{
  id: 111,
  tipo: "filme",
  titulo: "The Angry Birds Movie 2",
  ano: 2019,
  sinopse: "Bird Island and Piggy Island must join forces when a new threat from Eagle Island puts both of their homes in danger.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.4,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUxpAZqcegGrl9rqN8gNY1jlFQRyoCD26XPA&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt6095472",
  trailer: "https://youtu.be/RSKQ-lVsMdg?si=ZFYS_RAIFZdJwTO3",
  duracao: "1h 37min",
  pais: "United States",
},

{
  id: 112,
  tipo: "filme",
  titulo: "Onward",
  ano: 2020,
  sinopse: "Two elf brothers embark on a magical quest to spend one more day with their deceased father using an ancient spell.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 7.4,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkNJcvbZ2B-Ae2ZhEVslbwXcGj4oxyXjHT5A&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt7146812",
  trailer: "https://youtu.be/gn5QmllRCn4?si=wOxOqt1vDsYtA1im",
  duracao: "1h 42min",
  pais: "United States"
},

{
  id: 113,
  tipo: "filme",
  titulo: "Elemental",
  ano: 2023,
  sinopse: "In a city where fire, water, land, and air residents live together, a fiery young woman and a go-with-the-flow water guy discover how much they have in common.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 7.0,
  poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Elemental_final_poster.jpg/250px-Elemental_final_poster.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt15789038",
  trailer: "https://youtu.be/hXzcyx9V0xw?si=NW_5hVZdl6CkUC6Y",
  duracao: "1h 41min",
  pais: "United States"
},

{
  id: 114,
  tipo: "filme",
  titulo: "Flow",
  ano: 2024,
  sinopse: "A solitary cat is forced to leave its home after a great flood and joins other animals on a journey through a mysterious post-apocalyptic world.",
  generos: ["Animation", "Adventure", "Drama"],
  avaliacao: 7.9,
  poster: "https://m.media-amazon.com/images/M/MV5BOThiMjNlYzctZmUwYy00NjBlLThhOWEtMzUzMDQwYjAyYTMwXkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt4772188",
  trailer: "https://youtu.be/ZgZccxuj2RY?si=0-bepUtWCuLnlaW2",
  duracao: "1h 25min",
  pais: "Latvia"
},

{
  id: 115,
  tipo: "filme",
  titulo: "Surf's Up",
  ano: 2007,
  sinopse: "A young penguin enters a surfing competition in hopes of becoming a champion and discovering what it truly means to win.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.7,
  poster: "https://upload.wikimedia.org/wikipedia/en/6/6a/Surfs_upmp.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0423294",
  trailer: "https://youtu.be/7mPdQRXFiPA?si=isNjX3b7jOJ58K0w",
  duracao: "1h 25min",
  pais: "United States"
},

{
  id: 116,
  tipo: "filme",
  titulo: "Surf's Up 2: WaveMania",
  ano: 2017,
  sinopse: "Cody and his friends team up with WWE superstars to compete in a legendary surfing competition called the Hang 5.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 4.7,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIU4G0UaBt8Ull_i_WTgfCCxLnEJ5AYDOAQ&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt5515212",
  trailer: "https://youtu.be/zJarcJEmwgQ?si=eYE3GHyRkDgIgDVc",
  duracao: "1h 24min",
  pais: "United States"
},

{
  id: 117,
  tipo: "filme",
  titulo: "Coco",
  ano: 2017,
  sinopse: "A young boy dreams of becoming a musician and finds himself in the colorful Land of the Dead, where he discovers the truth about his family.",
  generos: ["Animation", "Adventure", "Family"],
  avaliacao: 8.4,
  poster: "https://upload.wikimedia.org/wikipedia/pt/a/ae/Cocofilme.png",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2380307",
  trailer: "https://youtu.be/xlnPHQ3TLX8?si=pLNzpE6sHmqiafrv",
  duracao: "1h 45min",
  pais: "United States"
},

{
  id: 118,
  tipo: "filme",
  titulo: "The Wild Robot",
  ano: 2024,
  sinopse: "A shipwrecked robot named Roz wakes up on a wild island and must learn to survive while forming bonds with the animals around her.",
  generos: ["Animation", "Adventure", "Drama"],
  avaliacao: 8.2,
  poster: "https://upload.wikimedia.org/wikipedia/pt/7/70/The_Wild_Robot_poster.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt29623480",
  trailer: "https://youtu.be/67vbA5ZJdKQ?si=wl-Rx77quoyCijcz",
  duracao: "1h 42min",
  pais: "United States"
},

{
  id: 119,
  tipo: "filme",
  titulo: "9",
  ano: 2009,
  sinopse: "In a post-apocalyptic world, small stitched-together beings fight for survival against a deadly machine that has wiped out humanity.",
  generos: ["Animation", "Action", "Adventure"],
  avaliacao: 7.0,
  poster: "https://upload.wikimedia.org/wikipedia/pt/1/16/9_P%C3%B4ster.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0472033",
  trailer: "https://youtu.be/_qApXdc1WPY?si=ItVPjR0XKh4s6nER",
  duracao: "1h 19min",
  pais: "United States"
},

{
  id: 120,
  tipo: "filme",
  titulo: "Inside Out",
  ano: 2015,
  sinopse: "A young girl’s emotions—Joy, Sadness, Fear, Anger, and Disgust—struggle to guide her through a difficult move to a new city.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 8.1,
  poster: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/250px-Inside_Out_2_poster.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2096673",
  trailer: "https://youtu.be/yRUAzGQ3nSY?si=LDVxt1Lv4r0KUMnC",
  duracao: "1h 35min",
  pais: "United States"
},

{
  id: 121,
  tipo: "filme",
  titulo: "Inside Out 2",
  ano: 2024,
  sinopse: "Riley enters puberty and new emotions arrive in her mind, shaking up Headquarters and challenging how she understands herself.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 7.5,
  poster: "https://m.media-amazon.com/images/M/MV5BYWY3MDE2Y2UtOTE3Zi00MGUzLTg2MTItZjE1ZWVkMGVlODRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt22022452",
  trailer: "https://youtu.be/LEjhY15eCx0?si=Ydwc-F_ZCnGqMA1H",
  duracao: "1h 36min",
  pais: "United States"
},

{
  id: 122,
  tipo: "filme",
  titulo: "Luca",
  ano: 2021,
  sinopse: "A young sea monster boy experiences a life-changing summer on the Italian Riviera with his new human friend, discovering friendship and acceptance.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 7.4,
  poster: "https://lumiere-a.akamaihd.net/v1/images/image_2ff75a5c.jpeg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt12801262",
  trailer: "https://youtu.be/mYfJxlgR2jw?si=NDj5h1CcDjcl8oG7",
  duracao: "1h 35min",
  pais: "United States"
},

{
  id: 123,
  tipo: "filme",
  titulo: "Elio",
  ano: 2025,
  sinopse: "A young boy named Elio is mistakenly identified as Earth's ambassador to the universe and must navigate a strange alien organization.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 0.0,
  poster: "https://m.media-amazon.com/images/M/MV5BZjRiMjYwNzQtN2MzNi00MWQyLWE5YzktYjk2ZjI0YWY4ZjA1XkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt13452446",
  trailer: "https://youtu.be/ETVi5_cnnaE?si=wRGZySxgKd3Z0uV3",
  duracao: "1h 40min",
  pais: "United States"
},

{
  id: 124,
  tipo: "filme",
  titulo: "Epic",
  ano: 2013,
  sinopse: "A teenage girl is transported into a secret forest world where a battle between good and evil determines the fate of nature and humanity.",
  generos: ["Animation", "Adventure", "Family"],
  avaliacao: 6.6,
  poster: "https://upload.wikimedia.org/wikipedia/pt/b/be/Epic_%282013_film%29_poster.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0848537",
  trailer: "https://youtu.be/BJVkoq_wK80?si=xkdmtizgtxPAf5da",
  duracao: "1h 42min",
  pais: "United States"
},

{
  id: 125,
  tipo: "filme",
  titulo: "Megamind",
  ano: 2010,
  sinopse: "A super-intelligent supervillain finally defeats his hero rival, but finds life meaningless without an opponent and creates a new hero to challenge him.",
  generos: ["Animation", "Action", "Comedy"],
  avaliacao: 7.3,
  poster: "https://m.media-amazon.com/images/M/MV5BMmY5MTViODEtYzYzNi00ZDc0LWFiY2QtZTYzMzAwOTI0YWNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1001526",
  trailer: "https://youtu.be/ead9HCX9fe4?si=42_TZjlhszxe9DdF",
  duracao: "1h 35min",
  pais: "United States"
},

{
  id: 126,
  tipo: "filme",
  titulo: "Megamind vs. The Doom Syndicate",
  ano: 2024,
  sinopse: "Megamind must face a new team of supervillains known as the Doom Syndicate while trying to protect Metro City as its unexpected hero.",
  generos: ["Animation", "Action", "Comedy"],
  avaliacao: 5.2,
  poster: "https://m.media-amazon.com/images/S/pv-target-images/aa1d7cf2de0ed0d6447b181a7ef94cea84695664791fd06f98a86028b9d79126.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt31192138",
  trailer: "https://youtu.be/UWbYnO5VRFY?si=9FjzfVtP2MvAtjje",
  duracao: "1h 25min",
  pais: "United States"
},

{
  id: 127,
  tipo: "filme",
  titulo: "The Bad Guys",
  ano: 2022,
  sinopse: "A group of notorious animal criminals are caught and forced to pretend to be model citizens, but their leader starts to question whether they can change.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.8,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWkyuxdPmFV2n2ceFJ3qhekw2F47GT6mgpQ&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt8115900",
  trailer: "https://youtu.be/m8Xt0yXaDPU?si=1RDEdNVrWoWLCfyl",
  duracao: "1h 40min",
  pais: "United States"
},

{
  id: 128,
  tipo: "filme",
  titulo: "The Bad Guys 2",
  ano: 2025,
  sinopse: "The reformed crew of animal criminals is forced back into action when a new global threat pushes them to question whether they can truly stay good.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 0.0,
  poster: "https://m.media-amazon.com/images/M/MV5BZWUzMTMwNjktY2Q1Ny00MzBkLWI0MGEtM2I4ZGI2ODdmMzcyXkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt27679622",
  trailer: "https://youtu.be/TY1lWh20VSw?si=J_EW3HOynCxzfRit",
  duracao: "1h 40min",
  pais: "United States"
},

{
  id: 129,
  tipo: "filme",
  titulo: "Zootopia",
  ano: 2016,
  sinopse: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical fox con artist must work together to uncover a conspiracy.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 8.0,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6U5P3bC4kGanMjEIyQVgi-zaOWRAiyK1AYg&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2948356",
  trailer: "https://youtu.be/Y0c3nKWhlIA?si=kWsEqjZ38BN9uCPc",
  duracao: "1h 48min",
  pais: "United States"
},

{
  id: 130,
  tipo: "filme",
  titulo: "Zootopia 2",
  ano: 2025,
  sinopse: "Judy Hopps and Nick Wilde return to investigate a new mystery that threatens the harmony of Zootopia and its diverse districts.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 0.0,
  poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Zootopia_2_%282025_film%29.jpg/250px-Zootopia_2_%282025_film%29.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt29937599",
  trailer: "https://youtu.be/BjkIOU5PhyQ?si=5H_4MU0Ow7PRF-ng",
  duracao: "1h 50min",
  pais: "United States"
},

{
  id: 131,
  tipo: "filme",
  titulo: "The Croods",
  ano: 2013,
  sinopse: "A prehistoric family embarks on a journey through a dangerous new world after their cave is destroyed.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 7.2,
  poster: "https://upload.wikimedia.org/wikipedia/en/6/63/The_Croods.png",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0481499",
  trailer: "https://youtu.be/4fVCKy69zUY?si=u1Q6d_oLi6RZQhaC",
  duracao: "1h 38min",
  pais: "United States"
},

{
  id: 132,
  tipo: "filme",
  titulo: "The Croods: A New Age",
  ano: 2020,
  sinopse: "The Croods encounter another family living in a more advanced home, leading to a clash between prehistoric and modern lifestyles.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.9,
  poster: "https://play-lh.googleusercontent.com/RvjSJ5ZbG6XzmXMA0J9JYPYCZKzMoFcLQbgudwpK6JHWUV4qRwLSy2d9FCJ7Fx8_2aByiQIYrT8eQNP_MS0=w240-h480-rw",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2850386",
  trailer: "https://youtu.be/XUN5EEDwHcI?si=EMjVzgDtmS2k82M0",
  duracao: "1h 35min",
  pais: "United States"
},

{
  id: 133,
  tipo: "filme",
  titulo: "Kung Fu Panda",
  ano: 2008,
  sinopse: "A clumsy panda who works in a noodle shop is unexpectedly chosen to fulfill an ancient prophecy and become a kung fu master.",
  generos: ["Animation", "Action", "Adventure"],
  avaliacao: 7.6,
  poster: "https://m.media-amazon.com/images/M/MV5BZDU5MDNiMGItYjVmZi00NDUxLTg2OTktNGE0NzNlNzM4NzgyXkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0441773",
  trailer: "https://youtu.be/PXi3Mv6KMzY?si=fyajDGDUdJ8XBMJg",
  duracao: "1h 32min",
  pais: "United States"
},

{
  id: 134,
  tipo: "filme",
  titulo: "Kung Fu Panda 2",
  ano: 2011,
  sinopse: "Po and the Furious Five face a powerful new enemy threatening to conquer China, while Po learns the truth about his past.",
  generos: ["Animation", "Action", "Adventure"],
  avaliacao: 7.3,
  poster: "https://m.media-amazon.com/images/M/MV5BYmIxMGYzMTUtZDQzYy00ODc4LWE1YzQtZGMwYTc0YTYyYTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1302011",
  trailer: "https://youtu.be/FQ63rqSRrEI?si=LYR96a_eEXDCPSDZ",
  duracao: "1h 30min",
  pais: "United States"
},

{
  id: 135,
  tipo: "filme",
  titulo: "Kung Fu Panda 3",
  ano: 2016,
  sinopse: "Po reunites with his biological father and travels to a secret panda village, where he must train a group of clumsy pandas to fight a supernatural villain.",
  generos: ["Animation", "Action", "Adventure"],
  avaliacao: 7.1,
  poster: "https://m.media-amazon.com/images/M/MV5BMTUyNzgxNjg2M15BMl5BanBnXkFtZTgwMTY1NDI1NjE@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2267968",
  trailer: "https://youtu.be/10r9ozshGVE?si=aq2jHDQzAD9Yh9oh",
  duracao: "1h 35min",
  pais: "United States"
},

{
  id: 136,
  tipo: "filme",
  titulo: "Kung Fu Panda 4",
  ano: 2024,
  sinopse: "Po is chosen to become the Spiritual Leader of the Valley of Peace and must train a new Dragon Warrior while facing a powerful shapeshifting villain.",
  generos: ["Animation", "Action", "Adventure"],
  avaliacao: 6.8,
  poster: "https://m.media-amazon.com/images/M/MV5BZGI1N2IxN2ItZWJmNC00ZDZjLWJlYzQtNTZhNzYzM2MwMDNhXkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt21692408",
  trailer: "https://youtu.be/_inKs4eeHiI?si=_hBXbKJwoL0sDazr",
  duracao: "1h 34min",
  pais: "United States"
},

{
  id: 137,
  tipo: "filme",
  titulo: "Puss in Boots",
  ano: 2011,
  sinopse: "Before his adventures with Shrek, Puss in Boots teams up with Humpty Dumpty and Kitty Softpaws to steal a magical goose that lays golden eggs.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.6,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWRoJBHLaUgpFB19f1bPFiJ5LSTh808foBg&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0448694",
  trailer: "https://youtu.be/1esRrwrmWzA?si=P_cRbxZkowgGGeXA",
  duracao: "1h 30min",
  pais: "United States"
},

{
  id: 138,
  tipo: "filme",
  titulo: "Puss in Boots: The Last Wish",
  ano: 2022,
  sinopse: "Puss in Boots discovers he has burned through eight of his nine lives and sets out on an epic journey to find the mythical Last Wish and restore them.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 8.2,
  poster: "https://m.media-amazon.com/images/M/MV5BMzg0MWUzMjctYjVlOS00NzVjLWIwZDMtNzg1YzNkYzdjNTMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt3915174",
  trailer: "https://youtu.be/RqrXhwS33yc?si=u9DBPtCMjVLObKy2",
  duracao: "1h 42min",
  pais: "United States"
},

{
  id: 139,
  tipo: "filme",
  titulo: "How to Train Your Dragon",
  ano: 2010,
  sinopse: "A young Viking befriends a wounded dragon, challenging his tribe’s beliefs and changing the future of humans and dragons.",
  generos: ["Animation", "Adventure", "Fantasy"],
  avaliacao: 8.1,
  poster: "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0892769",
  trailer: "https://youtu.be/2AKsAxrhqgM?si=GE9pCz6tKLsIuBpI",
  duracao: "1h 38min",
  pais: "United States"
},

{
  id:   140,
  tipo: "filme",
  titulo: "How to Train Your Dragon 2",
  ano: 2014,
  sinopse: "Hiccup and Toothless discover a secret ice cave full of wild dragons while facing a dangerous new threat.",
  generos: ["Animation", "Adventure", "Fantasy"],
  avaliacao: 7.8,
  poster: "https://m.media-amazon.com/images/I/91dGyTQRxIL._AC_UF894,1000_QL80_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1646971",
  trailer: "https://youtu.be/2BP38770KNo?si=8ZUQzV6fnwItWkWI",
  duracao: "1h 42min",
  pais: "United States"
},

{
  id:   141,
  tipo: "filme",
  titulo: "How to Train Your Dragon: The Hidden World",
  ano: 2019,
  sinopse: "Hiccup seeks a hidden dragon utopia while facing the return of a ruthless dragon hunter threatening his world.",
  generos: ["Animation", "Adventure", "Fantasy"],
  avaliacao: 7.4,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9F_tD8CIQIhH-nfka22l4io0qYlGiZ9fPvA&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2386490",
  trailer: "https://youtu.be/SkcucKDrbOI?si=E9Ho2w_4am7O_78Q",
  duracao: "1h 44min",
  pais: "United States"
},

{
  id: 142,
  tipo: "filme",
  titulo: "How to Train Your Dragon",
  ano: 2025,
  sinopse: "In a Viking world where dragons and humans are enemies, a young boy named Hiccup befriends a dragon, changing the fate of both species.",
  generos: ["Action", "Adventure", "Fantasy"],
  avaliacao: 0.0,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJHj3V8UXGBfOrRYomX9AODF80ebzoUY8e5g&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt26743210",
  trailer: "https://youtu.be/22w7z_lT6YM?si=KhrhQ4mcZ27XZdYM",
  duracao: "2h 05min",
  pais: "United States"
},

{
  id: 143,
  tipo: "filme",
  titulo: "Ratatouille",
  ano: 2007,
  sinopse: "A rat with a passion for cooking forms an unusual alliance with a young kitchen worker in a famous Paris restaurant.",
  generos: ["Animation", "Comedy", "Family"],
  avaliacao: 8.1,
  poster: "https://br.web.img2.acsta.net/medias/nmedia/18/87/85/18/19962200.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0382932",
  trailer: "https://youtu.be/PeFGdSrFTUw?si=nA_QxAxkCcGDTSch",
  duracao: "1h 51min",
  pais: "United States"
},

{
  id: 144,
  tipo: "filme",
  titulo: "Toy Story",
  ano: 1995,
  sinopse: "A cowboy doll feels threatened when a new space ranger toy joins his owner's collection, leading to an unexpected friendship and adventure.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 8.3,
  poster: "https://upload.wikimedia.org/wikipedia/pt/a/a7/Toy_Story_1995.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0114709",
  trailer: "https://youtu.be/guuITAMh2eo?si=ZmpkZLxQlCqz_mGj",
  duracao: "1h 21min",
  pais: "United States"
},

{
  id: 145,
  tipo: "filme",
  titulo: "Toy Story 2",
  ano: 1999,
  sinopse: "When Woody is stolen by a toy collector, Buzz and the gang set out on a mission to rescue him before he is sold abroad.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 7.9,
  poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/40/Movie_poster_toy_story_2.jpg/250px-Movie_poster_toy_story_2.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0120363",
  trailer: "https://youtu.be/xNWSGRD5CzU?si=2sQzv7E0kd9AwoJp",
  duracao: "1h 32min",
  pais: "United States"
},

{
  id: 146,
  tipo: "filme",
  titulo: "Toy Story 3",
  ano: 2010,
  sinopse: "Woody, Buzz, and the rest of the toys face an uncertain future when their owner Andy prepares to leave for college.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 8.3,
  poster: "https://play-lh.googleusercontent.com/U18dSyvtwZgrD9ew2RthRZEcv4PTbXwQfSzG7_hAVTifvQa38_QNMmGfFG56iiJ24ImO=w240-h480-rw",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0435761",
  trailer: "https://youtu.be/DFTIL0ciHik?si=JrHw4STGrHJkf4Lv",
  duracao: "1h 43min",
  pais: "United States"
},

{
  id: 147,
  tipo: "filme",
  titulo: "Toy Story 4",
  ano: 2019,
  sinopse: "Woody reunites with Bo Peep and embarks on a new journey that challenges his purpose as a toy in the modern world.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 7.7,
  poster: "https://br.web.img3.acsta.net/pictures/19/03/27/21/03/0464387.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1979376",
  trailer: "https://youtu.be/wmiIUN-7qhE?si=UECNqN9jlxhL1D9O",
  duracao: "1h 40min",
  pais: "United States"
},

{
  id: 148,
  tipo: "filme",
  titulo: "Cars",
  ano: 2006,
  sinopse: "A rookie race car learns that winning isn't everything when he gets stranded in a forgotten town and discovers true friendship and community.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 7.2,
  poster: "https://play-lh.googleusercontent.com/kHt8qbche40zkE6yZwA8IUe5ARINp4PjrJ5mi622GEzQFYWCaGTQDAl58rrRKRKyhnD2",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0317219",
  trailer: "https://youtu.be/W_H7_tDHFE8?si=kVUxvFISw7McDM4I",
  duracao: "1h 57min",
  pais: "United States"
},

{
  id: 149,
  tipo: "filme",
  titulo: "Cars 2",
  ano: 2011,
  sinopse: "Lightning McQueen and Mater travel abroad to compete in the first World Grand Prix, but Mater gets caught up in an international spy mission.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.2,
  poster: "https://upload.wikimedia.org/wikipedia/pt/7/7e/Carros_2_P%C3%B4ster.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1216475",
  trailer: "https://youtu.be/lg5hj2c5Nkk?si=qJscsAZIGR6p7D0X",
  duracao: "1h 46min",
  pais: "United States"
},

{
  id: 150,
  tipo: "filme",
  titulo: "Cars 3",
  ano: 2017,
  sinopse: "Lightning McQueen faces a new generation of fast racers and must prove he still belongs on the track.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.7,
  poster: "https://m.media-amazon.com/images/M/MV5BNDJmYTRkYzEtYzQ3OC00MTNhLTliNjMtODFkY2YyYmM2OGZiXkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt3606752",
  trailer: "https://youtu.be/E4K7JgPJ8-s?si=jdsqzOvF25OhL1e8",
  duracao: "1h 42min",
  pais: "United States"
},

{
  id: 151,
  tipo: "filme",
  titulo: "Rio",
  ano: 2011,
  sinopse: "A domesticated macaw from Minnesota travels to Rio de Janeiro and learns to embrace his wild side while trying to save his species.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.9,
  poster: "https://upload.wikimedia.org/wikipedia/pt/0/09/Rio_poster.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1436562",
  trailer: "https://youtu.be/P1GRO31ve5Q?si=lzoZxtCoZUzWVC3E",
  duracao: "1h 36min",
  pais: "United States"
},

{
  id: 152,
  tipo: "filme",
  titulo: "Rio 2",
  ano: 2014,
  sinopse: "Blu, Jewel, and their three kids leave the city of Rio and travel to the Amazon rainforest, where Blu tries to fit into a wild new environment.",
  generos: ["Animation", "Adventure", "Comedy"],
  avaliacao: 6.3,
  poster: "https://br.web.img2.acsta.net/pictures/14/01/24/21/36/094174.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2357291",
  trailer: "https://youtu.be/_QNrbbGpLrc?si=3tmFeIhMIUw6XPVH",
  duracao: "1h 41min",
  pais: "United States"
},

{
  id: 153,
  tipo: "filme",
  titulo: "Lucy",
  ano: 2014,
  sinopse: "A woman gains extraordinary mental abilities after a drug is absorbed into her bloodstream, unlocking the full potential of her brain.",
  generos: ["Action", "Sci-Fi", "Thriller"],
  avaliacao: 6.4,
  poster: "https://m.media-amazon.com/images/M/MV5BODcxMzY3ODY1NF5BMl5BanBnXkFtZTgwNzg1NDY4MTE@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2872732",
  trailer: "https://youtu.be/bN7ksFEVO9U?si=rABI2uH3DG4Ki94R",
  duracao: "1h 29min",
  pais: "France"
},

{
  id: 154,
  tipo: "filme",
  titulo: "Hokum",
  ano: 2026,
  sinopse: "Ohm Bauman, a writer haunted by the death of his parents, travels to an isolated hotel in Ireland to scatter their ashes. There, he uncovers stories about an ancient witch said to haunt the hotel's honeymoon suite. As strange events unfold and a staff member disappears, Ohm is forced to confront supernatural secrets and the traumas of his own past.",
  generos: ["Terror", "Sobrenatural", "Mistério"],
  avaliacao: 7.4,
  poster: "https://m.media-amazon.com/images/M/MV5BZjA1ZjFlZGItNTVjZC00NTFhLTg2YTEtODMzODRmNGFiNTdmXkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt35672862",
  trailer: "https://youtu.be/qU_i5e48KzQ?si=DKTwzX3KDTKVGhOm",
  duracao: "1h 47min",
  pais: "Irlanda"
},

{
  id: 155,
  tipo: "filme",
  titulo: "Obsession",
  ano: 2025,
  sinopse: "After using a mysterious object known as the One Wish Willow to make his childhood crush fall in love with him, Bear gets exactly what he wished for. However, the supernatural charm turns affection into a dangerous obsession, unleashing increasingly terrifying and deadly consequences.",
  generos: ["Terror", "Sobrenatural", "Psicológico"],
  avaliacao: 7.4,
  poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Obsession_theatrical_poster.jpeg/250px-Obsession_theatrical_poster.jpeg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt37287335",
  trailer: "https://youtu.be/gMC8kkwbIQQ?si=ZrXL7-ERmAJmL4jC",
  duracao: "1h 48min",
  pais: "Estados Unidos"
},

{
  id: 156,
  tipo: "filme",
  titulo: "Clifford the Big Red Dog",
  ano: 2021,
  sinopse: "When middle school student Emily Elizabeth adopts a small red puppy named Clifford, she never expects him to grow into a gigantic dog overnight. With the help of her fun-loving Uncle Casey, Emily embarks on an adventure through New York City while trying to protect Clifford from those who want to exploit his extraordinary size.",
  generos: ["Adventure", "Comedy", "Family", "Fantasy"],
  avaliacao: 5.9,
  poster: "https://m.media-amazon.com/images/M/MV5BMDBlZTI4ODEtNzEwYS00OTBmLTliMTMtYWUyZjc3Y2RhN2Y2XkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2397461",
  trailer: "https://youtu.be/4zH5iYM4wJo?si=IMw7B8KlhQ7s6Ag4",
  duracao: "1h 36min",
  pais: "United States"
},

{
  id: 157,
  tipo: "filme",
  titulo: "Challengers",
  ano: 2024,
  sinopse: "Tashi, a former tennis prodigy turned coach, has transformed her husband Art into a Grand Slam champion. When Art falls into a losing streak, she enters him in a lower-level Challenger tournament, where he must face Patrick, his former best friend and Tashi's ex-boyfriend. As old rivalries and unresolved emotions resurface, the match becomes about far more than tennis.",
  generos: ["Drama", "Romance", "Sport"],
  avaliacao: 7.0,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqcjuYQuk-DJ9NfF8r3-Ftjo8ECtyC9OyR0g&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt16426418",
  trailer: "https://youtu.be/AXEK7y1BuNQ?si=MLVDZmlRfTAqsBgk",
  duracao: "2h 11min",
  pais: "United States"
},

{
  id: 158,
  tipo: "filme",
  titulo: "47 Meters Down",
  ano: 2017,
  sinopse: "Two sisters vacationing in Mexico become trapped in a shark cage at the bottom of the ocean after an accident. With less than an hour of oxygen remaining and great white sharks circling nearby, they must fight to survive and find a way back to the surface.",
  generos: ["Horror", "Mystery", "Thriller"],
  avaliacao: 5.6,
  poster: "https://m.media-amazon.com/images/M/MV5BNGI3NmMwM2UtNjc5ZC00ZGQzLWJhNjMtOWM4Y2YzZWMwNThmXkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2932536",
  trailer: "https://youtu.be/ddYSGGJAKOk?si=cqh1r-JPIJGm_tHY",
  duracao: "1h 29min",
  pais: "United Kingdom"
},

{
  id: 159,
  tipo: "filme",
  titulo: "47 Meters Down: Uncaged",
  ano: 2019,
  sinopse: "Four teenage girls diving in a ruined underwater city quickly discover they have entered the territory of deadly sharks. As their oxygen supply dwindles, they must navigate a claustrophobic maze of submerged caves and ancient ruins in a desperate fight for survival.",
  generos: ["Horror", "Thriller", "Adventure"],
  avaliacao: 5.0,
  poster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/47MetersDownUncaged.jpg/250px-47MetersDownUncaged.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt7329656",
  trailer: "https://youtu.be/hgLsCb0iLqw?si=L8rblWZOTnN1qKn-",
  duracao: "1h 30min",
  pais: "United Kingdom"
},

{
  id: 160,
  tipo: "filme",
  titulo: "The Shallows",
  ano: 2016,
  sinopse: "While surfing alone at a secluded beach, Nancy is attacked by a great white shark and stranded on a small rock just 200 yards from shore. With the tide rising and the predator circling nearby, she must rely on her determination and resourcefulness to survive and make it back to safety.",
  generos: ["Horror", "Thriller", "Drama"],
  avaliacao: 6.3,
  poster: "https://m.media-amazon.com/images/M/MV5BMjA1MTA4MzU4Ml5BMl5BanBnXkFtZTgwNjUxNjczODE@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt4052882",
  trailer: "https://youtu.be/xwbEyyw2a34?si=9xAd0O5HDlZVqx8Q",
  duracao: "1h 26min",
  pais: "United States"
},

{
  id: 161,
  tipo: "filme",
  titulo: "127 Hours",
  ano: 2010,
  sinopse: "Based on a true story, mountain climber Aron Ralston becomes trapped by a boulder while exploring a remote canyon in Utah. With limited supplies and no hope of rescue, he reflects on his life and faces an impossible decision in order to survive.",
  generos: ["Biography", "Drama", "Adventure"],
  avaliacao: 7.5,
  poster: "https://upload.wikimedia.org/wikipedia/pt/3/38/127_Horas.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1542344",
  trailer: "https://youtu.be/OlhLOWTnVoQ?si=UMpVByCg2Q_YAX19",
  duracao: "1h 34min",
  pais: "United Kingdom"
},

{
  id: 162,
  tipo: "filme",
  titulo: "Fall",
  ano: 2022,
  sinopse: "After a climbing accident leaves them stranded at the top of a 2,000-foot abandoned radio tower, best friends Becky and Hunter must fight extreme heights, dwindling supplies, and the elements in a desperate struggle to survive and find a way down.",
  generos: ["Thriller", "Survival", "Adventure"],
  avaliacao: 6.4,
  poster: "https://m.media-amazon.com/images/M/MV5BYmZjYjAxMDEtOTE2My00MmM5LTkyYjctOWRjMjgyM2JhMDI0XkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt15325794",
  trailer: "https://youtu.be/iSspRSGc4Dk?si=KBppjpVcPxGPYRWw",
  duracao: "1h 47min",
  pais: "United Kingdom"
},

{
  id: 163,
  tipo: "filme",
  titulo: "Jungle",
  ano: 2017,
  sinopse: "Based on a true story, adventurous traveler Yossi Ghinsberg joins a guide and two friends on a trek into the Amazon rainforest in search of an undiscovered indigenous village. When the group becomes separated, Yossi finds himself alone in the wilderness, forced to battle hunger, injury, isolation, and the deadly dangers of the jungle in a desperate fight for survival.",
  generos: ["Adventure", "Biography", "Drama", "Thriller"],
  avaliacao: 6.7,
  poster: "https://m.media-amazon.com/images/M/MV5BNDE4OTk4MTk0M15BMl5BanBnXkFtZTgwODQ4MTg0MzI@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt3758172",
  trailer: "https://youtu.be/oJYJmYQ0AGw?si=zFrUG2bl_scrarBa",
  duracao: "1h 55min",
  pais: "Australia"
},

{
  id: 164,
  tipo: "filme",
  titulo: "Crawl",
  ano: 2019,
  sinopse: "When a massive hurricane hits her hometown in Florida, Haley ignores evacuation orders to search for her missing father. After finding him seriously injured beneath their family home, the two become trapped by rapidly rising floodwaters and surrounded by aggressive alligators. As the storm intensifies, they must fight to survive against both nature and deadly predators.",
  generos: ["Horror", "Thriller", "Action"],
  avaliacao: 6.1,
  poster: "https://m.media-amazon.com/images/M/MV5BNTE4NjJmZDgtMzk4MS00MmYzLWI0YjAtZWU0NTNmMDJhNzI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt8364368",
  trailer: "https://youtu.be/H6MLJG0RdDE?si=AfRtagJWguVUAoEU",
  duracao: "1h 27min",
  pais: "United States"
},

{
  id: 165,
  tipo: "filme",
  titulo: "A Quiet Place",
  ano: 2018,
  sinopse: "In a post-apocalyptic world, a family is forced to live in complete silence while hiding from deadly creatures that hunt using their extraordinary sense of hearing. Every sound could mean death, forcing them to communicate without speaking as they struggle to survive.",
  generos: ["Horror", "Drama", "Sci-Fi"],
  avaliacao: 7.5,
  poster: "https://static.wikia.nocookie.net/aquietplace/images/f/f4/A_Quiet_Place_poster_6.jpg/revision/latest/scale-to-width-down/1200?cb=20240711221952",
  videoUrl: "https://streamimdb.ru/embed/movie/tt6644200",
  trailer: "https://youtu.be/WR7cc5t7tv8?si=pgkR5j07MTq2epfV",
  duracao: "1h 30min",
  pais: "United States"
},

{
  id: 166,
  tipo: "filme",
  titulo: "A Quiet Place Part II",
  ano: 2020,
  sinopse: "Following the deadly events at home, the Abbott family must face the terrors of the outside world as they continue their fight for survival in silence. Forced to venture into the unknown, they soon discover that the creatures that hunt by sound are not the only threats lurking beyond their path.",
  generos: ["Horror", "Drama", "Sci-Fi"],
  avaliacao: 7.2,
  poster: "https://m.media-amazon.com/images/M/MV5BNjRiYjk4ZmItNGQ5NS00MmRhLTk4Y2EtMGQ1MTYxZWJhYjU0XkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt8332922",
  trailer: "https://youtu.be/BpdDN9d9Jio?si=wEVaM73dCHLWO3C_",
  duracao: "1h 37min",
  pais: "United States"
},

{
  id: 167,
  tipo: "filme",
  titulo: "Buried",
  ano: 2010,
  sinopse: "Paul Conroy, a U.S. truck driver working in Iraq, wakes up buried alive inside a wooden coffin after an attack on his convoy. With only a lighter, a cell phone, and limited oxygen, he must race against time to find a way out of his claustrophobic prison before it is too late.",
  generos: ["Drama", "Mystery", "Thriller"],
  avaliacao: 7.0,
  poster: "https://play-lh.googleusercontent.com/NzsLY5CC8EdCQ2uGSvLKjYVFJNLIH9yko4JEc_iamh09dLWYOFGysslyND8UU8bFc8i1",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1462758",
  trailer: "https://youtu.be/aRQ0oqFBoP4?si=JTB_rB2GfP78VrzL",
  duracao: "1h 35min",
  pais: "Spain"
},

{
  id: 167,
  tipo: "filme",
  titulo: "Buried",
  ano: 2010,
  sinopse: "Paul Conroy, a U.S. truck driver working in Iraq, wakes up buried alive inside a wooden coffin after an attack on his convoy. With only a lighter, a cell phone, and limited oxygen, he must race against time to find a way out of his claustrophobic prison before it is too late.",
  generos: ["Drama", "Mystery", "Thriller"],
  avaliacao: 7.0,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ022TVHFHgS-8uTZB9xDDARB_ymqWMMiZATw&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1462758",
  trailer: "https://youtu.be/qGuOZPwLayY?si=D8EymDpmHGDU6a1n",
  duracao: "1h 35min",
  pais: "Spain"
},

{
  id: 169,
  tipo: "filme",
  titulo: "Bird Box",
  ano: 2018,
  sinopse: "When a mysterious force drives people to deadly acts after they see it, Malorie must protect her two children and guide them on a dangerous journey to safety. Blindfolded and unable to look at the outside world, they face terrifying threats while struggling to survive.",
  generos: ["Horror", "Mystery", "Sci-Fi"],
  avaliacao: 6.6,
  poster: "https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2737304",
  trailer: "https://youtu.be/INJ2bPFy108?si=XQIRseSCPRjnm5_C",
  duracao: "2h 4min",
  pais: "United States"
},

{
  id: 170,
  tipo: "filme",
  titulo: "Bird Box: Barcelona",
  ano: 2023,
  sinopse: "After a mysterious force drives anyone who looks at it to take their own life, Sebastián and his daughter struggle to survive in the devastated streets of Barcelona. As they join other survivors in search of safety, they discover that an even more dangerous threat may be lurking among them.",
  generos: ["Horror", "Mystery", "Sci-Fi", "Thriller"],
  avaliacao: 5.3,
  poster: "https://m.media-amazon.com/images/M/MV5BMGY1MTg3ZTUtNTVlYS00MTFjLTgzZTMtMTViNmQ4MWY4ZTRhXkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt14400246",
  trailer: "https://youtu.be/zdDN_mflfSY?si=cSyceXB55XG96OQK",
  duracao: "1h 52min",
  pais: "Spain"
},

{
  id: 171,
  tipo: "filme",
  titulo: "The Mist",
  ano: 2007,
  sinopse: "After a violent thunderstorm, a mysterious mist envelops a small town in Maine. Trapped inside a supermarket, a group of residents must defend themselves against terrifying creatures lurking in the fog while fear, paranoia, and desperation begin to tear them apart from within.",
  generos: ["Horror", "Sci-Fi", "Thriller"],
  avaliacao: 7.1,
  poster: "https://m.media-amazon.com/images/M/MV5BMTU2NjQyNDY1Ml5BMl5BanBnXkFtZTcwMTk1MDU1MQ@@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0884328",
  trailer: "https://youtu.be/LhCKXJNGzN8?si=U0fceYwbszWIpRUr",
  duracao: "2h 6min",
  pais: "United States"
},

{
  id: 172,
  tipo: "filme",
  titulo: "Beast",
  ano: 2022,
  sinopse: "A recently widowed father takes his two daughters on a trip to a wildlife reserve in South Africa. What begins as a healing journey soon turns into a nightmare when they are hunted by a massive rogue lion driven by bloodlust. Trapped in the wilderness, the family must fight for survival against the relentless predator.",
  generos: ["Adventure", "Drama", "Thriller"],
  avaliacao: 5.6,
  poster: "https://upload.wikimedia.org/wikipedia/pt/d/da/Beast_%28filme_estadunidense_de_2022%29.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt13223398",
  trailer: "https://youtu.be/oQMc7Sq36mI?si=ui2u0aIUw6UtSafu",
  duracao: "1h 33min",
  pais: "United States"
},

{
  id: 173,
  tipo: "filme",
  titulo: "#Alive",
  ano: 2020,
  sinopse: "The rapid spread of a mysterious infection throws an entire city into chaos. Trapped alone inside his apartment, a young gamer struggles to survive as food, water, and hope begin to run out. When he discovers another survivor in a nearby building, the two must find a way to stay alive while a deadly zombie outbreak rages outside.",
  generos: ["Action", "Drama", "Horror", "Thriller"],
  avaliacao: 6.3,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DRhVJHC_tJP1xUaAyR1SozBJFAKWKH5EEg&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt10620868",
  trailer: "https://youtu.be/jQ8CCg1tOqc?si=cmuowIv_wDy3zJpB",
  duracao: "1h 38min",
  pais: "South Korea"
},

{
  id: 174,
  tipo: "filme",
  titulo: "The Grey",
  ano: 2011,
  sinopse: "After a plane crash in the Alaskan wilderness, a group of oil workers struggles to survive in one of the harshest environments on Earth. Led by a skilled hunter, the survivors must battle freezing temperatures, injuries, and a pack of relentless wolves stalking them through the snow-covered landscape.",
  generos: ["Action", "Adventure", "Drama", "Thriller"],
  avaliacao: 6.7,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbk4_CilGGobGK7lks2BuggTGTt81Cb6Zlw&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1601913",
  trailer: "https://youtu.be/ujrBaHS8UTg?si=t5bayZ5JM9l0N2VQ",
  duracao: "1h 57min",
  pais: "United States"
},

{
  id: 175,
  tipo: "filme",
  titulo: "No Escape",
  ano: 2015,
  sinopse: "An American businessman relocates his family to Southeast Asia for a new job, only to find themselves caught in the middle of a violent political uprising. With foreigners being targeted and chaos spreading through the city, they must make a desperate escape while trying to stay one step ahead of armed rebels.",
  generos: ["Action", "Thriller"],
  avaliacao: 6.7,
  poster: "https://m.media-amazon.com/images/M/MV5BMjE0MDI3NTE5NF5BMl5BanBnXkFtZTgwNzI3ODM2NjE@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1781922",
  trailer: "https://youtu.be/FsOt3sKjrh8?si=hMveLrbGvoFy5Jxq",
  duracao: "1h 43min",
  pais: "United States"
},

{
  id: 176,
  tipo: "filme",
  titulo: "Escape Room",
  ano: 2019,
  sinopse: "Six strangers receive mysterious invitations to participate in an immersive escape room with a large cash prize. What begins as a thrilling challenge quickly turns into a deadly game as they discover that each room is designed to test their darkest fears and personal traumas. To survive, they must solve a series of lethal puzzles before time runs out.",
  generos: ["Horror", "Mystery", "Thriller"],
  avaliacao: 6.4,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFKW4GGzsp20V7jhCKGHuk11uAEtW8Rm2vA&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt5886046",
  trailer: "https://youtu.be/6dSKUoV0SNI?si=GO318HZtKFMamPZU",
  duracao: "1h 39min",
  pais: "United States"
},

{
  id: 177,
  tipo: "filme",
  titulo: "Escape Room: Tournament of Champions",
  ano: 2021,
  sinopse: "Survivors of previous deadly escape rooms find themselves trapped once again in a new series of elaborate and lethal puzzles. As they are forced to work together, they discover that every participant has escaped Minos' games before. To stay alive, they must uncover the truth behind the organization before becoming its next victims.",
  generos: ["Horror", "Mystery", "Thriller"],
  avaliacao: 5.7,
  poster: "https://m.media-amazon.com/images/M/MV5BY2ZkMjFkNzItOWEzZC00NTU3LWEzYzMtM2FlM2ViYTBiOTU0XkEyXkFqcGc@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt9844522",
  trailer: "https://youtu.be/KlfUbZJVInA?si=07Lo4C88myjGx-3-",
  duracao: "1h 28min",
  pais: "United States"
},

{
  id: 178,
  tipo: "filme",
  titulo: "Deepwater Horizon",
  ano: 2016,
  sinopse: "Based on true events, the film follows the crew aboard the Deepwater Horizon oil rig in the Gulf of Mexico. When a series of critical safety failures triggers a catastrophic blowout, the workers find themselves trapped in a deadly inferno. As explosions tear through the rig, they must risk everything to save one another and escape one of the worst environmental disasters in history.",
  generos: ["Action", "Drama", "History", "Thriller"],
  avaliacao: 7.1,
  poster: "https://m.media-amazon.com/images/M/MV5BOTEzNDU0OTgxM15BMl5BanBnXkFtZTgwNjA0ODM2OTE@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt1860357",
  trailer: "https://youtu.be/8yASbM8M2vg?si=Rf4QUsicgxRkGksi",
  duracao: "1h 47min",
  pais: "United States"
},

{
  id: 179,
  tipo: "serie",
  titulo: "A Killer Paradox",
  ano: 2024,
  sinopse: "When one accidental killing leads to another, an ordinary young man finds himself trapped in an endless cat-and-mouse chase with a relentless detective. As the body count rises, he begins to discover a strange ability to identify evil people, blurring the line between justice and murder.",
  generos: ["Crime", "Drama", "Thriller", "Comedy"],
  avaliacao: 7.1,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE32L_ICRART5knxe3oTBnsYF4kxT1IfNkjQ&s",
  duracao: "1 temporada",
  trailer: "https://youtu.be/X2rXQ0rEfPI?si=8YR5J9ejAe-_nUuq",
  pais: "South Korea",
  videoUrl: "https://streamimdb.ru/embed/tv/tt28642796"
},

{
  id: 180,
  tipo: "filme",
  titulo: "The Shawshank Redemption",
  ano: 1994,
  sinopse: "Wrongfully convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life at Shawshank State Penitentiary. Over the years, he forms an unlikely friendship with fellow inmate Red and uses hope, intelligence, and determination to endure the hardships of prison life while secretly planning for a better future.",
  generos: ["Drama", "Crime"],
  avaliacao: 9.3,
  poster: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0111161",
  trailer: "https://youtu.be/PLl99DlL6b4?si=gxVhJK2IEQL2EozF",
  duracao: "2h 22min",
  pais: "United States"
},

{
  id: 181,
  tipo: "filme",
  titulo: "The Truman Show",
  ano: 1998,
  sinopse: "Truman Burbank lives an ordinary and seemingly perfect life in a peaceful seaside town. Unbeknownst to him, every aspect of his existence is broadcast live to the world as part of a massive reality television show. As strange events begin to occur, Truman starts questioning his reality and sets out to uncover the truth about the world around him.",
  generos: ["Comedy", "Drama"],
  avaliacao: 8.2,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKqcAztJza9OiFpOKpfHwV_Ygki4pIBGIWw&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0120382",
  trailer: "https://youtu.be/dlnmQbPGuls?si=fhA_Dg4Jd5VQ3AZN",
  duracao: "1h 43min",
  pais: "United States"
},

{
  id: 182,
  tipo: "filme",
  titulo: "Grave of the Fireflies",
  ano: 1988,
  sinopse: "In the final months of World War II, teenage Seita and his younger sister Setsuko struggle to survive in war-torn Japan after losing their home and family. As food becomes scarce and society collapses around them, the siblings rely on each other in a heartbreaking fight for survival and dignity.",
  generos: ["Animation", "Drama", "War"],
  avaliacao: 8.5,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPe4b4PQlpJX6f6kjMYJk7bKB5y1m1duyiaw&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0095327",
  trailer: "https://youtu.be/lhlh7JVcTt8?si=WhuLlB_O1l_t34xk",
  duracao: "1h 29min",
  pais: "Japan"
},

{
  id: 183,
  tipo: "filme",
  titulo: "Into the Wild",
  ano: 2007,
  sinopse: "After graduating from college, Christopher McCandless abandons his possessions, donates his savings to charity, and sets out on a journey across North America in search of freedom and a deeper meaning to life. Along the way, he encounters a series of unforgettable people before venturing alone into the Alaskan wilderness, where he faces the ultimate test of survival.",
  generos: ["Adventure", "Biography", "Drama"],
  avaliacao: 8.0,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVEGF2b2rZ1jWPEpQMDj0tHJLtTJvYi5a-3g&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0758758",
  trailer: "https://youtu.be/XZG1FzyB8DI?si=xyO56l5mv7O0TFIl",
  duracao: "2h 28min",
  pais: "United States"
},

{
  id: 184,
  tipo: "filme",
  titulo: "The Secret Life of Walter Mitty",
  ano: 2013,
  sinopse: "Walter Mitty, a shy and daydreaming photo editor at Life magazine, escapes his ordinary life through vivid fantasies of adventure and heroism. When a crucial negative goes missing, he embarks on a real-world journey across the globe, discovering courage, purpose, and a life far more extraordinary than he ever imagined.",
  generos: ["Adventure", "Comedy", "Drama"],
  avaliacao: 7.3,
  poster: "https://m.media-amazon.com/images/M/MV5BODYwNDYxNDk1Nl5BMl5BanBnXkFtZTgwOTAwMTk2MDE@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0359950",
  trailer: "https://youtu.be/QD6cy4PBQPI?si=10arUn65N39MDZrv",
  duracao: "1h 54min",
  pais: "United States"
},

{
  id: 185,
  tipo: "filme",
  titulo: "Whiplash",
  ano: 2014,
  sinopse: "Andrew Neiman, a talented young drummer, enrolls at a prestigious music conservatory where he comes under the mentorship of Terence Fletcher, a brilliant but ruthless instructor. As Fletcher pushes him beyond his limits in pursuit of greatness, Andrew becomes consumed by ambition, sacrifice, and the relentless pursuit of perfection.",
  generos: ["Drama", "Music"],
  avaliacao: 8.5,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa8vP_EnwZjgqOPMScTd8zUcHE3qQ3_jP9Kw&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2582802",
  trailer: "https://youtu.be/7d_jQycdQGo?si=5fTa-9yJqqCjNk67",
  duracao: "1h 46min",
  pais: "United States"
},

{
  id: 186,
  tipo: "filme",
  titulo: "Manchester by the Sea",
  ano: 2016,
  sinopse: "After the sudden death of his older brother, Lee Chandler is forced to return to his hometown of Manchester-by-the-Sea and becomes the legal guardian of his teenage nephew. As he struggles with family responsibilities, Lee must confront the painful memories and personal tragedy that drove him away years earlier.",
  generos: ["Drama"],
  avaliacao: 7.8,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1kEWfmpSUtAJ33wZF74DgxsI-shTCLhGFhg&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt4034228",
  trailer: "https://youtu.be/gsVoD0pTge0?si=6m_gJoNmkbG6-IaS",
  duracao: "2h 17min",
  pais: "United States"
},

{
  id: 187,
  tipo: "filme",
  titulo: "Green Book",
  ano: 2018,
  sinopse: "In 1962, Italian-American bouncer Tony Lip is hired to drive and protect Dr. Don Shirley, a world-class African American pianist, on a concert tour through the Deep South. Guided by 'The Green Book,' a travel guide for Black motorists, the two men navigate racism, cultural differences, and unexpected challenges, forming a powerful friendship along the way.",
  generos: ["Biography", "Comedy", "Drama"],
  avaliacao: 8.2,
  poster: "https://m.media-amazon.com/images/M/MV5BM2Y0MWNiZjktNjkxZi00NGM1LWFmMGItYjg2ZjY0NDQ1MzA1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt6966692",
  trailer: "https://youtu.be/QkZxoko_HC0?si=S2y1p9PRSrigIp4z",
  duracao: "2h 10min",
  pais: "United States"
},

{
  id: 188,
  tipo: "serie",
  titulo: "Off Campus",
  ano: 2026,
  sinopse: "A college-set romantic drama chronicling the unexpected love story between Hannah Wells, a music student, and Garrett Graham, the university's star hockey player. What begins as a tutoring arrangement and fake relationship gradually develops into a deep romance as they navigate personal struggles, friendships, and the challenges of adulthood.",
  generos: ["Drama", "Romance", "Sport"],
  avaliacao: 8.2,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYsjnFHQkgUTx4u4uyxTdD2AyfyNXmEOa1gg&s",
  duracao: "1 temporada",
  trailer: "https://youtu.be/4Vin2GSA4V0?si=soL2SBUePwtuvFnh",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt33546863"
},

{
  id: 189,
  tipo: "filme",
  titulo: "A Haunted House",
  ano: 2013,
  sinopse: "Malcolm and Kisha move into their dream home, only to discover that a demon also lives there. When Kisha becomes possessed, Malcolm turns to a priest, a psychic, and a team of ghost hunters for help, leading to a series of outrageous and supernatural events.",
  generos: ["Comedy", "Fantasy", "Horror"],
  avaliacao: 5.1,
  poster: "https://m.media-amazon.com/images/M/MV5BODYzZDcyNTEtY2ViNy00NmJlLTkyNmEtMTIwMzgyNGU4NTc1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2243537",
  trailer: "https://youtu.be/J50vA5VLR6k?si=_eN8EbNvhwUeQa0g",
  duracao: "1h 26min",
  pais: "United States"
},

{
  id: 190,
  tipo: "filme",
  titulo: "A Haunted House 2",
  ano: 2014,
  sinopse: "After exorcising his former demons, Malcolm starts over with a new girlfriend and her two children. Just as life begins to return to normal, a series of bizarre paranormal events erupts around their new home, forcing Malcolm to once again confront supernatural forces in the most ridiculous ways imaginable.",
  generos: ["Comedy", "Fantasy", "Horror"],
  avaliacao: 4.7,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fX8MnRChdPZVGSQ7SWY-S6jmmvsWLQAecw&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt2828996",
  trailer: "https://youtu.be/eDyh9YloMVk?si=3rvXpM6wOLsP_zJy",
  duracao: "1h 27min",
  pais: "United States"
},

{
  id: 191,
  tipo: "filme",
  titulo: "Little Man",
  ano: 2006,
  sinopse: "A diminutive jewel thief disguises himself as an abandoned baby to retrieve a stolen diamond hidden in a family's home. As the unsuspecting couple takes him in and begins caring for him as their own child, a series of chaotic misunderstandings and outrageous situations unfolds.",
  generos: ["Comedy", "Crime"],
  avaliacao: 4.5,
  poster: "https://m.media-amazon.com/images/M/MV5BMTI0NTA3MjI3NV5BMl5BanBnXkFtZTcwNTI1ODYzMQ@@._V1_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt0430308",
  trailer: "https://youtu.be/n6ir-qPI2PU?si=v5_mqIjZzrGEAs7Q",
  duracao: "1h 38min",
  pais: "United States"
},

{
  id: 192,
  tipo: "filme",
  titulo: "Whistle",
  ano: 2025,
  sinopse: "A group of misfit high school students stumble upon an ancient Aztec Death Whistle. After blowing it, they discover that the terrifying sound summons manifestations of their future deaths, which begin hunting them one by one. As the curse tightens its grip, they must uncover the whistle's origins and find a way to break the cycle before their fates become reality.",
  generos: ["Horror", "Mystery", "Supernatural"],
  avaliacao: 5.2,
  poster: "https://m.media-amazon.com/images/M/MV5BNWIwYzUwNmMtYTY2My00ODg2LWI3MmEtNmY0Njg3MzYwYmQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  videoUrl: "https://streamimdb.ru/embed/movie/tt29550683",
  trailer: "https://youtu.be/LfUHI8Fcn-Q?si=WsTul08rTJZN3pIT",
  duracao: "1h 40min",
  pais: "Canada"
},

{
  id: 193,
  tipo: "serie",
  titulo: "The Night Of",
  ano: 2016,
  sinopse: "After a night of partying with a woman he picked up, college student Nasir Khan wakes up to find her brutally murdered. Unable to remember exactly what happened, he becomes the prime suspect in a complex criminal case that exposes the flaws of the justice system and transforms his life forever.",
  generos: ["Crime", "Drama", "Mystery"],
  avaliacao: 8.4,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKl_IVn6NyGbWFJgS_durTJpalzrRpuPrAqQ&s",
  duracao: "1 temporada",
  trailer: "https://youtu.be/Z5uv7_ysu9M?si=Caxz7R9cLXUXMYce",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt2401256"
},

{
  id: 194,
  tipo: "serie",
  titulo: "The Haunting of Hill House",
  ano: 2018,
  sinopse: "Years after growing up in the most haunted house in America, the Crain siblings are forced to reunite when a family tragedy brings them back together. As painful memories resurface, they must confront the terrifying events that shaped their childhood and the supernatural forces that continue to haunt them in the present.",
  generos: ["Drama", "Horror", "Mystery"],
  avaliacao: 8.5,
  poster: "https://m.media-amazon.com/images/M/MV5BMTU4NzA4MDEwNF5BMl5BanBnXkFtZTgwMTQxODYzNjM@._V1_FMjpg_UX1000_.jpg",
  duracao: "1 temporada",
  trailer: "https://youtu.be/3eqxXqJDmcY?si=HrsNjtUotMeCsRAB",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt6763664"
},

{
  id: 195,
  tipo: "serie",
  titulo: "The Queen's Gambit",
  ano: 2020,
  sinopse: "Orphaned at a young age, Beth Harmon discovers an extraordinary talent for chess while living in a Kentucky orphanage. As she rises through the ranks of competitive chess, she battles addiction, loneliness, and personal demons while pursuing her dream of becoming the world's greatest player.",
  generos: ["Drama"],
  avaliacao: 8.5,
  poster: "https://m.media-amazon.com/images/M/MV5BMmRlNjQxNWQtMjk1OS00N2QxLTk0YWQtMzRhYjY5YTFhNjMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  duracao: "1 temporada",
  trailer: "https://youtu.be/oZn3qSgmLqI?si=yoDJnQnI2fC8G3QQ",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt10048342"
},

{
  id: 196,
  tipo: "serie",
  titulo: "The Penguin",
  ano: 2024,
  sinopse: "In the aftermath of Gotham City's chaos, Oz Cobb, known as the Penguin, begins his ruthless rise through the criminal underworld. As rival gangs, ambitious mobsters, and dangerous enemies compete for power, Oz uses manipulation, violence, and strategy to build his own criminal empire and seize control of the city.",
  generos: ["Crime", "Drama"],
  avaliacao: 8.7,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYgprK1-hm-jkChK_zxSqiDOhbPV7jTC0YkQ&s",
  duracao: "1 temporada",
  trailer: "https://youtu.be/sfJG6IiA_s8?si=415sxoJQ-OIxewsc",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt15435876"
},

{
  id: 197,
  tipo: "serie",
  titulo: "Watchmen",
  ano: 2019,
  sinopse: "Set in an alternate history where masked vigilantes are treated as outlaws, the series follows detective Angela Abar as she investigates a growing conspiracy linked to white supremacist groups and long-buried secrets. As the mystery unfolds, the legacy of the original Watchmen heroes collides with a new generation, threatening to reshape the world once again.",
  generos: ["Crime", "Drama", "Mystery", "Sci-Fi"],
  avaliacao: 8.2,
  poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p178016_p_v10_az.jpg",
  duracao: "1 temporada",
  trailer: "https://youtu.be/wdiHDzT6YbQ?si=ObZuS_ZGVG3_zCSa",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt7049682"
},

{
  id: 198,
  tipo: "serie",
  titulo: "True Detective",
  ano: 2014,
  sinopse: "An anthology crime series that follows different detectives and investigations across multiple seasons. Each story explores complex murder cases, psychological struggles, corruption, and the darker side of human nature as detectives become deeply affected by the crimes they are trying to solve.",
  generos: ["Crime", "Drama", "Mystery", "Thriller"],
  avaliacao: 8.9,
  poster: "https://m.media-amazon.com/images/M/MV5BYjgwYzA1NWMtNDYyZi00ZGQyLWI5NTktMDYwZjE2OTIwZWEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  duracao: "4 temporadas",
  trailer: "https://youtu.be/fVQUcaO4AvE?si=Q280gTGO5_Bc7L8y",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt2356777"
},

{
  id: 199,
  tipo: "serie",
  titulo: "Chernobyl",
  ano: 2019,
  sinopse: "In April 1986, a catastrophic explosion at the Chernobyl Nuclear Power Plant becomes one of the worst man-made disasters in history. The series follows the scientists, government officials, and ordinary citizens who risk everything to contain the catastrophe, uncover the truth, and prevent an even greater tragedy.",
  generos: ["Drama", "History", "Thriller"],
  avaliacao: 9.3,
  poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/92/PosterChernobyl.jpg/250px-PosterChernobyl.jpg",
  duracao: "1 temporada",
  trailer: "https://youtu.be/s9APLXM9Ei8?si=QA2761D2-K6i8Z_8",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt7366338"
},

{
  id: 200,
  tipo: "serie",
  titulo: "1883",
  ano: 2021,
  sinopse: "A prequel to Yellowstone, the series follows the Dutton family as they embark on a perilous journey across the Great Plains in search of a better future. Facing harsh weather, disease, bandits, and the unforgiving frontier, they endure immense hardships while traveling west toward the land that will eventually become the Yellowstone Ranch.",
  generos: ["Drama", "Western"],
  avaliacao: 8.7,
  poster: "https://m.media-amazon.com/images/M/MV5BMDBjZDQyMWMtZmI0My00MzJlLWFhMTMtNWZmOTJkNzFlZTliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  duracao: "1 temporada",
  trailer: "https://youtu.be/dbyxdYKhC7U?si=pl8xCRTzo5aX5cMV",
  pais: "United States",
  videoUrl: "https://streamimdb.ru/embed/tv/tt13991232"
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
