const CATALOG = [

  {
    id: 1,
    tipo: "filme",
    titulo: "Scream 5",
    ano: 2022,
    sinopse: "Vinte e cinco anos após uma série de assassinatos brutais que abalaram a pacata cidade de Woodsboro, um novo assassino mascarado surge e começa a perseguir um grupo de adolescentes.",
    generos: ["Terror", "Mistério"],
    avaliacao: 7.0,
    poster: "https://i.pinimg.com/736x/44/3b/1f/443b1f799629085416970b1e6b199d8e.jpg",
    videoUrl: "https://ia903201.us.archive.org/12/items/scream.-2022.1080p.-webrip.-1400-mb.-dd-2.0.x-264-galaxy-rg/Scream.2022.1080p.WEBRip.1400MB.DD2.0.x264-GalaxyRG.mp4",
    duracao: "1h 54min",
    pais: "EUA"
  },

  {
    id: 2,
    tipo: "filme",
    titulo: "Scream 6",
    ano: 2023,
    sinopse: "Após os eventos de Woodsboro, os sobreviventes mudam-se para Nova Iorque. Mas o Ghostface segue-os até à cidade.",
    generos: ["Terror", "Mistério"],
    avaliacao: 7.2,
    poster: "https://m.media-amazon.com/images/M/MV5BZDZkYzk3YTEtYTQ5MS00MzQ5LTg0NjUtOTgzODA5N2EyYTQ1XkEyXkFqcGc@._V1_.jpg",
    videoUrl: "https://ia800405.us.archive.org/17/items/scream-6_202605/Scream.VI.2023.1080p.WEBRip.1400MB.DD5.1.x264-GalaxyRG.mp4",
    duracao: "2h 2min",
    pais: "EUA"
  },

  {
    id: 5,
    tipo: "filme",
    titulo: "Scream 1",
    ano: 1996,
    sinopse: "Segue Sidney Prescott, uma adolescente aterrorizada pelo assassino mascarado Ghostface.",
    generos: ["Terror", "Mistério"],
    avaliacao: 7.4,
    poster: "https://i.redd.it/xweqes0z0wcc1.jpeg",
    videoUrl: "",
    duracao: "1h 51min",
    pais: "EUA"
  },

  {
    id: 3,
    tipo: "serie",
    titulo: "IT: Bem-vindos a Derry",
    ano: 2025,
    sinopse: "Prequel da história de IT, passada nos anos 60, que revela as origens do terror em Derry e os primeiros encontros com o palhaço Pennywise.",
    generos: ["Terror"],
    avaliacao: 7.8,
    poster: "https://m.media-amazon.com/images/M/MV5BNDFmODE3NDktZGVhNS00M2NmLWI1NDAtNTgzOTA0ZGFhODFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    duracao: "1 temporada · 8 episódios",
    pais: "EUA",
    temporadas: [
      {
        numero: 1,
        titulo: "Temporada 1",
        episodios: [
          { titulo: "Episódio 1", videoUrl: "https://ia800704.us.archive.org/26/items/it-bem-vindos-a-derry-ep-1x-8/IT_Bem_Vindos_a_Derry_EP_1x1.mp4" },
          { titulo: "Episódio 2", videoUrl: "https://ia800704.us.archive.org/26/items/it-bem-vindos-a-derry-ep-1x-8/IT_Bem_Vindos_a_Derry_EP_1x2.mp4" },
          { titulo: "Episódio 3", videoUrl: "" },
          { titulo: "Episódio 4", videoUrl: "" },
          { titulo: "Episódio 5", videoUrl: "" },
          { titulo: "Episódio 6", videoUrl: "" },
          { titulo: "Episódio 7", videoUrl: "" },
          { titulo: "Episódio 8", videoUrl: "" }
        ]
      }
    ]
  },

  {
    id: 4,
    tipo: "serie",
    titulo: "Elite",
    ano: 2018,
    sinopse: "A trama acompanha o choque cultural e os conflitos explosivos que surgem quando três estudantes da classe trabalhadora são transferidos para a escola através de uma bolsa de estudos.",
    generos: ["Drama", "Thriller"],
    avaliacao: 7.1,
    poster: "https://br.web.img3.acsta.net/pictures/18/10/18/07/54/1893178.jpg",
    duracao: "1 temporada · 8 episódios",
    pais: "Espanha",
    temporadas: [
      {
        numero: 1,
        titulo: "Temporada 1",
        episodios: [
          { titulo: "Episódio 1", videoUrl: "" },
          { titulo: "Episódio 2", videoUrl: "" },
          { titulo: "Episódio 3", videoUrl: "" },
          { titulo: "Episódio 4", videoUrl: "" },
          { titulo: "Episódio 5", videoUrl: "" },
          { titulo: "Episódio 6", videoUrl: "" },
          { titulo: "Episódio 7", videoUrl: "" },
          { titulo: "Episódio 8", videoUrl: "" }
        ]
      },

      {
        numero: 2,
        titulo: "Temporada 2",
        episodios: [
          { titulo: "Episódio 1", videoUrl: "" },
          { titulo: "Episódio 2", videoUrl: "" },
          { titulo: "Episódio 3", videoUrl: "" },
          { titulo: "Episódio 4", videoUrl: "" },
          { titulo: "Episódio 5", videoUrl: "" },
          { titulo: "Episódio 6", videoUrl: "" },
          { titulo: "Episódio 7", videoUrl: "" },
          { titulo: "Episódio 8", videoUrl: "" }
        ]
      }
    ]
  },

  {
    id: 6,
    tipo: "serie",
    titulo: "Prison Break",
    ano: 2005,
    sinopse: "Gira em torno de Michael Scofield, um engenheiro brilhante que arquiteta um plano audacioso para salvar seu irmão mais velho, Lincoln Burrows, do corredor da morte. Lincoln foi falsamente condenado por assassinar o irmão da vice-presidente dos EUA",
    generos: ["Drama", "Ação"],
    avaliacao: 8.3,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52b7VZ4ZvmrukOazrje-d2Nx50yF27QDDjQ&s",
    duracao: "5 temporadas",
    pais: "EUA",
    temporadas: [
      {
        numero: 1,
        titulo: "Temporada 1",
        episodios: [
          { titulo: "Episódio 1",  videoUrl: "https://ia600509.us.archive.org/24/items/whats-app-video-2026-05-23-at-14.05.54/WhatsApp%20Video%202026-05-23%20at%2014.05.54.mp4" },
          { titulo: "Episódio 2",  videoUrl: "" },
          { titulo: "Episódio 3",  videoUrl: "" },
          { titulo: "Episódio 4",  videoUrl: "" },
          { titulo: "Episódio 5",  videoUrl: "" },
          { titulo: "Episódio 6",  videoUrl: "" },
          { titulo: "Episódio 7",  videoUrl: "" },
          { titulo: "Episódio 8",  videoUrl: "" },
          { titulo: "Episódio 9",  videoUrl: "" },
          { titulo: "Episódio 10", videoUrl: "" },
          { titulo: "Episódio 11", videoUrl: "" },
          { titulo: "Episódio 12", videoUrl: "" },
          { titulo: "Episódio 13", videoUrl: "" },
          { titulo: "Episódio 14", videoUrl: "" },
          { titulo: "Episódio 15", videoUrl: "" },
          { titulo: "Episódio 16", videoUrl: "" },
          { titulo: "Episódio 17", videoUrl: "" },
          { titulo: "Episódio 18", videoUrl: "" },
          { titulo: "Episódio 19", videoUrl: "" },
          { titulo: "Episódio 20", videoUrl: "" },
          { titulo: "Episódio 21", videoUrl: "" },
          { titulo: "Episódio 22", videoUrl: "" }
        ]
      },
      {
        numero: 2,
        titulo: "Temporada 2",
        episodios: [
          { titulo: "Episódio 1",  videoUrl: "" },
          { titulo: "Episódio 2",  videoUrl: "" },
          { titulo: "Episódio 3",  videoUrl: "" },
          { titulo: "Episódio 4",  videoUrl: "" },
          { titulo: "Episódio 5",  videoUrl: "" },
          { titulo: "Episódio 6",  videoUrl: "" },
          { titulo: "Episódio 7",  videoUrl: "" },
          { titulo: "Episódio 8",  videoUrl: "" },
          { titulo: "Episódio 9",  videoUrl: "" },
          { titulo: "Episódio 10", videoUrl: "" },
          { titulo: "Episódio 11", videoUrl: "" },
          { titulo: "Episódio 12", videoUrl: "" },
          { titulo: "Episódio 13", videoUrl: "" },
          { titulo: "Episódio 14", videoUrl: "" },
          { titulo: "Episódio 15", videoUrl: "" },
          { titulo: "Episódio 16", videoUrl: "" },
          { titulo: "Episódio 17", videoUrl: "" },
          { titulo: "Episódio 18", videoUrl: "" },
          { titulo: "Episódio 19", videoUrl: "" },
          { titulo: "Episódio 20", videoUrl: "" },
          { titulo: "Episódio 21", videoUrl: "" },
          { titulo: "Episódio 22", videoUrl: "" }
        ]
      },

       {
        numero: 3,
        titulo: "Temporada 3",
        episodios: [
          { titulo: "Episódio 1",  videoUrl: "" },
          { titulo: "Episódio 2",  videoUrl: "" },
          { titulo: "Episódio 3",  videoUrl: "" },
          { titulo: "Episódio 4",  videoUrl: "" },
          { titulo: "Episódio 5",  videoUrl: "" },
          { titulo: "Episódio 6",  videoUrl: "" },
          { titulo: "Episódio 7",  videoUrl: "" },
          { titulo: "Episódio 8",  videoUrl: "" },
          { titulo: "Episódio 9",  videoUrl: "" },
          { titulo: "Episódio 10", videoUrl: "" },
          { titulo: "Episódio 11", videoUrl: "" },
          { titulo: "Episódio 12", videoUrl: "" },
          { titulo: "Episódio 13", videoUrl: "" },
        ]
      },
      {
        numero: 4,
        titulo: "Temporada 4",
        episodios: [
          { titulo: "Episódio 1",  videoUrl: "" },
          { titulo: "Episódio 2",  videoUrl: "" },
          { titulo: "Episódio 3",  videoUrl: "" },
          { titulo: "Episódio 4",  videoUrl: "" },
          { titulo: "Episódio 5",  videoUrl: "" },
          { titulo: "Episódio 6",  videoUrl: "" },
          { titulo: "Episódio 7",  videoUrl: "" },
          { titulo: "Episódio 8",  videoUrl: "" },
          { titulo: "Episódio 9",  videoUrl: "" },
          { titulo: "Episódio 10", videoUrl: "" },
          { titulo: "Episódio 11", videoUrl: "" },
          { titulo: "Episódio 12", videoUrl: "" },
          { titulo: "Episódio 13", videoUrl: "" },
          { titulo: "Episódio 14", videoUrl: "" },
          { titulo: "Episódio 15", videoUrl: "" },
          { titulo: "Episódio 16", videoUrl: "" },
          { titulo: "Episódio 17", videoUrl: "" },
          { titulo: "Episódio 18", videoUrl: "" },
          { titulo: "Episódio 19", videoUrl: "" },
          { titulo: "Episódio 20", videoUrl: "" },
          { titulo: "Episódio 21", videoUrl: "" },
          { titulo: "Episódio 22", videoUrl: "" },
          { titulo: "Episódio 23", videoUrl: "" },
          { titulo: "Episódio 24", videoUrl: "" }
        ]
      },
      {
        numero: 5,
        titulo: "Temporada 5",
        episodios: [
          { titulo: "Episódio 1",  videoUrl: "" },
          { titulo: "Episódio 2",  videoUrl: "" },
          { titulo: "Episódio 3",  videoUrl: "" },
          { titulo: "Episódio 4",  videoUrl: "" },
          { titulo: "Episódio 5",  videoUrl: "" },
          { titulo: "Episódio 6",  videoUrl: "" },
          { titulo: "Episódio 7",  videoUrl: "" },
          { titulo: "Episódio 8",  videoUrl: "" },
          { titulo: "Episódio 9",  videoUrl: "" },
        ]
      },
    ]
  }

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
       videoUrl: "https://archive.org/download/ID/ficheiro.mp4",
       duracao: "2h 00min",
       pais: "EUA"
     }

     PARA ADICIONAR NOVA TEMPORADA A UMA SÉRIE EXISTENTE:
     Adiciona um novo bloco dentro de "temporadas":
     {
       numero: 3,
       titulo: "Temporada 3",
       episodios: [
         { titulo: "Episódio 1", videoUrl: "" },
         ...
       ]
     }
     ───────────────────────────────────────────────────────── */
];
