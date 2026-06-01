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
    titulo: "3096 dias de cativeiro",
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
    titulo: " Os Pinguins de Madagáscar 5",
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
    titulo: "Goat: O Maior de Todos",
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
    titulo: "Máquina de Guerra",
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
  titulo: "The Predator's Game",
  ano: 2026,
  sinopse: "When an adrenaline junkie sets out to conquer a dangerous river, she discovers that nature is not the only thing out for blood.",
  generos: ["Action", "Thriller", "Psychological Thriller"],
  avaliacao: 6.1,
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7w0wacTCJaxLbO0ysv1iKMDe8n_MZHvV_IA&s",
  videoUrl: "https://streamimdb.ru/embed/movie/tt16431404",
  trailer: "https://youtu.be/W6OJhuH7PD0?si=7O_DjcCJVfIgFJfE",
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
