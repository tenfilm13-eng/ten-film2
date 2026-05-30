/* ===========================
   TEN FILM — App Logic
   =========================== */

document.addEventListener('DOMContentLoaded', () => {
  let currentFilter = 'all';
  let currentSearch = '';
  let adTimer = null;
  let pendingImdb = '';
  let pendingTipo = 'filme';
  let pendingSeason = 1;
  let pendingEpisode = 1;
  let pendingTitle = '';
  let pendingLegendas = {};
  const AD_DURATION = 10;

  // Ordem aleatória como a Netflix
  const localCatalog = [...CATALOG].sort(() => Math.random() - 0.5);

  const grid         = document.getElementById('cardsGrid');
  const emptyState   = document.getElementById('emptyState');
  const sectionCount = document.getElementById('sectionCount');
  const sectionTitle = document.getElementById('sectionTitle');
  const searchInput  = document.getElementById('searchInput');

  document.getElementById('footerYear').textContent = new Date().getFullYear();

  // ── Hero ──
  // ── Filtro + Pesquisa ──
  function getFiltered() {
    return localCatalog.filter(item => {
      const matchFilter = currentFilter === 'all' || item.tipo === currentFilter;
      const q = currentSearch.toLowerCase().trim();
      const matchSearch = !q ||
        item.titulo.toLowerCase().includes(q) ||
        (item.sinopse || '').toLowerCase().includes(q) ||
        (item.generos || []).some(g => g.toLowerCase().includes(q));
      return matchFilter && matchSearch;
    });
  }

  // ── Render Grid ──
  function render() {
    const items = getFiltered();
    grid.innerHTML = '';
    if (items.length === 0) {
      emptyState.classList.add('visible');
      sectionCount.textContent = '0 títulos';
    } else {
      emptyState.classList.remove('visible');
      sectionCount.textContent = `${items.length} título${items.length !== 1 ? 's' : ''}`;
      items.forEach((item, i) => grid.appendChild(buildCard(item, i)));
    }
    const titles = { all: 'Catálogo Completo', filme: 'Filmes', serie: 'Séries' };
    sectionTitle.textContent = currentSearch ? `Resultados para "${currentSearch}"` : titles[currentFilter];
  }

  // ── Build Card ──
  function buildCard(item, delay) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${delay * 0.04}s`;
    card.onclick = () => openModal(item.id);
    const badgeClass = item.tipo === 'filme' ? 'badge-filme' : 'badge-serie';
    const badgeLabel = item.tipo === 'filme' ? 'Filme' : 'Série';
    const posterHTML = item.poster
      ? `<img class="card-poster" src="${item.poster}" alt="${escHtml(item.titulo)}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'card-no-poster\\'><span>🎬</span><span>${escHtml(item.titulo)}</span></div>'">`
      : `<div class="card-no-poster"><span>🎬</span><span>${escHtml(item.titulo)}</span></div>`;
    const ratingHTML = item.avaliacao ? `<div class="rating-badge">★ ${item.avaliacao}</div>` : '';
    card.innerHTML = `
      ${posterHTML}
      <span class="badge ${badgeClass}">${badgeLabel}</span>
      ${ratingHTML}
      <div class="card-overlay">
        <div class="card-info">
          <div class="card-title-sm">${escHtml(item.titulo)}</div>
          <div class="card-meta-sm">
            <span>${item.ano}</span>
            ${item.duracao ? `<span>${item.duracao}</span>` : ''}
          </div>
        </div>
      </div>
    `;
    return card;
  }

  // ── Modal Detalhes ──
  window.openModal = function(id) {
    const item = localCatalog.find(x => x.id === id);
    if (!item) return;

    // Série com temporadas
    if (item.tipo === 'serie' && item.temporadas) {
      openEpisodesModal(item);
      return;
    }

    document.getElementById('modalType').textContent = item.tipo === 'filme' ? 'Filme' : 'Série';
    document.getElementById('modalType').className   = `modal-type ${item.tipo}`;
    document.getElementById('modalTitle').textContent    = item.titulo;
    document.getElementById('modalSynopsis').textContent = item.sinopse || 'Sem sinopse disponível.';

    const posterEl = document.getElementById('modalPoster');
    posterEl.innerHTML = item.poster
      ? `<img src="${item.poster}" alt="${escHtml(item.titulo)}" onerror="this.parentElement.innerHTML='<div class=\\'modal-poster-empty\\'>🎬</div>'">`
      : `<div class="modal-poster-empty">🎬</div>`;

    const meta = [];
    if (item.ano)       meta.push(`<strong>${item.ano}</strong>`);
    if (item.duracao)   meta.push(`<span>${item.duracao}</span>`);
    if (item.pais)      meta.push(`<span>${item.pais}</span>`);
    if (item.avaliacao) meta.push(`<span>★ ${item.avaliacao}/10</span>`);
    document.getElementById('modalMeta').innerHTML = meta.join('<span>·</span>');
    document.getElementById('modalGenres').innerHTML = (item.generos || []).map(g => `<span class="genre-tag">${g}</span>`).join('');

    // Idiomas e Qualidade
    const extraEl = document.getElementById('modalExtra');
    const extraItems = [];
    if (item.idiomas && item.idiomas.length) {
      extraItems.push(`<span class="extra-tag">🗣️ ${item.idiomas.join(' / ')}</span>`);
    }
    if (item.qualidade) {
      extraItems.push(`<span class="extra-tag">📺 ${item.qualidade}</span>`);
    }
    extraEl.innerHTML = extraItems.join('');

    // Trailer
    const trailerBtn = document.getElementById('modalTrailerBtn');
    if (item.trailer) {
      trailerBtn.style.display = 'inline-flex';
      trailerBtn.onclick = () => {
        closeModal();
        openTrailerModal(item.titulo, item.trailer);
      };
    } else {
      trailerBtn.style.display = 'none';
    }

    const watchBtn = document.getElementById('modalWatchBtn');
    if (item.videoUrl && item.videoUrl.trim() !== '') {
      watchBtn.disabled = false;
      watchBtn.className = 'btn-watch';
      watchBtn.textContent = '▶ Assistir Agora';
      watchBtn.onclick = () => { closeModal(); openAd(item.videoUrl, 'filme', 1, 1, item.titulo, item.legendas || {}); };
    } else {
      watchBtn.disabled = false;
      watchBtn.className = 'btn-watch btn-request-film';
      watchBtn.textContent = '📩 Queres assistir? Pede por email!';
      watchBtn.onclick = () => { closeModal(); openRequestModal(); };
    }

    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // ══════════════════════════════════════════════
  //  MODAL EPISÓDIOS
  // ══════════════════════════════════════════════

  function openEpisodesModal(item) {
    document.getElementById('epType').textContent = 'Série';
    document.getElementById('epTitle').textContent = item.titulo;
    document.getElementById('epSynopsis').textContent = item.sinopse || '';

    const epPoster = document.getElementById('epPoster');
    epPoster.innerHTML = item.poster
      ? `<img src="${item.poster}" alt="${escHtml(item.titulo)}" onerror="this.parentElement.innerHTML='<div class=\\'modal-poster-empty\\'>📺</div>'">`
      : `<div class="modal-poster-empty">📺</div>`;

    const meta = [];
    if (item.ano)     meta.push(`<strong>${item.ano}</strong>`);
    if (item.duracao) meta.push(`<span>${item.duracao}</span>`);
    if (item.pais)    meta.push(`<span>${item.pais}</span>`);
    document.getElementById('epMeta').innerHTML = meta.join('<span>·</span>');
    document.getElementById('epGenres').innerHTML = (item.generos || []).map(g => `<span class="genre-tag">${g}</span>`).join('');

    const list = document.getElementById('episodesList');

    function showSeasons() {
      list.innerHTML = '';
      const label = document.createElement('div');
      label.className = 'season-label';
      label.innerHTML = '🎬 Escolhe a Temporada';
      list.appendChild(label);
      item.temporadas.forEach(temp => {
        const btn = document.createElement('button');
        btn.className = 'episode-btn season-btn';
        btn.innerHTML = `<span class="ep-number">T${temp.numero}</span><span class="ep-name">${escHtml(temp.titulo)}</span><span class="ep-play">▶</span>`;
        btn.onclick = () => showEpisodes(temp);
        list.appendChild(btn);
      });
    }

    function showEpisodes(temp) {
      list.innerHTML = '';
      if (item.temporadas.length > 1) {
        const backBtn = document.createElement('button');
        backBtn.className = 'season-back-btn';
        backBtn.textContent = '← Voltar às Temporadas';
        backBtn.onclick = () => showSeasons();
        list.appendChild(backBtn);
      }
      const label = document.createElement('div');
      label.className = 'season-label';
      label.innerHTML = `📺 ${temp.titulo}`;
      list.appendChild(label);
      temp.episodios.forEach((ep, i) => {
        const btn = document.createElement('button');
        btn.className = 'episode-btn';
        const hasVideo = ep.videoUrl && ep.videoUrl.trim() !== '' && !ep.videoUrl.includes('cdn-embed.com');
        btn.innerHTML = `
          <span class="ep-number">EP ${i + 1}</span>
          <span class="ep-name">${escHtml(ep.titulo)}</span>
          <span class="ep-play">${hasVideo ? '▶' : '📩'}</span>
        `;
        if (!hasVideo) {
          btn.title = 'Não tem vídeo — clica para pedir por email';
          btn.style.opacity = '0.6';
        }
        btn.onclick = () => {
          closeEpisodesModal();
          if (hasVideo) {
            openAd(ep.videoUrl, 'serie', temp.numero, i + 1, `${item.titulo} — T${temp.numero} EP${i + 1}`, ep.legendas || {});
          } else {
            openRequestModal();
          }
        };
        list.appendChild(btn);
      });
    }

    if (item.temporadas.length === 1) {
      showEpisodes(item.temporadas[0]);
    } else {
      showSeasons();
    }

    document.getElementById('episodesOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeEpisodesModal() {
    document.getElementById('episodesOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  document.getElementById('episodesClose').addEventListener('click', closeEpisodesModal);
  document.getElementById('episodesOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeEpisodesModal();
  });

  // ══════════════════════════════════════════════
  //  SISTEMA DE ANÚNCIO (AD)
  // ══════════════════════════════════════════════

  function openAd(videoUrl, tipo, season, episode, titulo, legendas) {
    pendingImdb     = videoUrl;
    pendingTipo     = tipo;
    pendingSeason   = season;
    pendingEpisode  = episode;
    pendingTitle    = titulo;
    pendingLegendas = legendas || {};

    const skipBtn      = document.getElementById('adSkipBtn');
    const progressFill = document.getElementById('adProgressFill');
    const timerWrap    = document.getElementById('adTimerWrap');

    // Botão bloqueado no início
    skipBtn.disabled = true;
    progressFill.style.transition = 'none';
    progressFill.style.width = '0%';

    // Mensagem inicial
    timerWrap.innerHTML = `<span class="ad-timer-text" style="color:#f0eee8;">📢 Clica no anúncio, entra no site e volta aqui</span>`;

    document.getElementById('adOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';

    // Detecta quando pessoa clica na área do anúncio
    const adMedia = document.getElementById('adMedia');
    function onAdClick() {
      adMedia.removeEventListener('click', onAdClick);
      // Desbloqueia botão saltar
      skipBtn.disabled = false;
      timerWrap.innerHTML = `<span class="ad-timer-text" style="color:var(--accent)">✅ Boa! Podes assistir.</span>`;
      // Barra de progresso completa
      progressFill.style.transition = 'width .5s ease';
      progressFill.style.width = '100%';
    }
    adMedia.addEventListener('click', onAdClick);

    skipBtn.onclick = () => {
      adMedia.removeEventListener('click', onAdClick);
      clearInterval(adTimer);
      document.getElementById('adOverlay').classList.remove('open');
      timerWrap.innerHTML = `<span class="ad-timer-text">📢 Clica no anúncio, entra no site e volta aqui</span>`;
      openPlayer(pendingImdb, pendingTipo, pendingSeason, pendingEpisode, pendingTitle, pendingLegendas);
    };
  }

  // ══════════════════════════════════════════════
  //  PLAYER VIDSRC
  // ══════════════════════════════════════════════

  function openPlayer(videoUrl, tipo, season, episode, titulo, legendas) {
    document.getElementById('playerTitle').textContent = titulo || '';
    const video = document.getElementById('playerVideo');
    video.src = videoUrl;
    video.load();
    video.play().catch(() => {});
    document.getElementById('playerOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closePlayer() {
    document.getElementById('playerOverlay').classList.remove('open');
    const video = document.getElementById('playerVideo');
    video.pause();
    video.src = '';
    document.body.style.overflow = '';
  }

  // ══════════════════════════════════════════════
  //  TRAILER MODAL
  // ══════════════════════════════════════════════

  function openTrailerModal(titulo, youtubeUrl) {
    document.getElementById('trailerTitle').textContent = `🎬 Trailer — ${titulo}`;
    // Converte link YouTube para embed
    let embedUrl = youtubeUrl;
    const ytMatch = youtubeUrl.match(/(?:v=|youtu\.be\/)([^&\?]+)/);
    if (ytMatch) {
      embedUrl = `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1`;
    }
    document.getElementById('trailerFrame').src = embedUrl;
    document.getElementById('trailerOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeTrailerModal() {
    document.getElementById('trailerOverlay').classList.remove('open');
    document.getElementById('trailerFrame').src = '';
    document.body.style.overflow = '';
  }

  document.getElementById('trailerClose').addEventListener('click', closeTrailerModal);
  document.getElementById('trailerOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeTrailerModal();
  });
  // ══════════════════════════════════════════════

  let subtitleTimer = null;
  let currentSubtitles = [];
  let currentLang = 'none';
  let playerStartTime = null;

  function parseVTT(text) {
    const cues = [];
    const blocks = text.trim().split(/\n\n+/);
    for (const block of blocks) {
      const lines = block.split('\n');
      const timeLine = lines.find(l => l.includes('-->'));
      if (!timeLine) continue;
      const [start, end] = timeLine.split('-->').map(t => {
        const parts = t.trim().replace(',', '.').split(':');
        if (parts.length === 3) return parseFloat(parts[0])*3600 + parseFloat(parts[1])*60 + parseFloat(parts[2]);
        return parseFloat(parts[0])*60 + parseFloat(parts[1]);
      });
      const text = lines.slice(lines.indexOf(timeLine) + 1).join(' ').replace(/<[^>]+>/g, '');
      if (text.trim()) cues.push({ start, end, text: text.trim() });
    }
    return cues;
  }

  async function loadSubtitles(url) {
    if (!url) return [];
    try {
      const res = await fetch(url);
      const text = await res.text();
      return parseVTT(text);
    } catch {
      return [];
    }
  }

  function startSubtitleSync() {
    clearInterval(subtitleTimer);
    if (currentLang === 'none' || !currentSubtitles.length) {
      document.getElementById('subtitleOverlay').innerHTML = '';
      return;
    }
    playerStartTime = Date.now();
    subtitleTimer = setInterval(() => {
      const elapsed = (Date.now() - playerStartTime) / 1000;
      const cue = currentSubtitles.find(c => elapsed >= c.start && elapsed <= c.end);
      const overlay = document.getElementById('subtitleOverlay');
      overlay.innerHTML = cue ? `<span class="subtitle-line">${cue.text}</span>` : '';
    }, 200);
  }

  document.querySelectorAll('.sub-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      currentLang = btn.dataset.lang;
      document.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('subtitleOverlay').innerHTML = '';
      clearInterval(subtitleTimer);
      if (currentLang === 'none') return;
      const legendas = window._currentLegendas || {};
      const url = legendas[currentLang] || '';
      currentSubtitles = await loadSubtitles(url);
      if (currentSubtitles.length) {
        playerStartTime = Date.now();
        startSubtitleSync();
      } else {
        document.getElementById('subtitleOverlay').innerHTML =
          '<span class="subtitle-line" style="color:#e8b84b">Legenda não disponível para este título</span>';
        setTimeout(() => { document.getElementById('subtitleOverlay').innerHTML = ''; }, 3000);
      }
    });
  });

  document.getElementById('playerBack').addEventListener('click', closePlayer);

  // ══════════════════════════════════════════════
  //  PEDIDO DE FILME
  // ══════════════════════════════════════════════

  window.openRequestModal = function() {
    document.getElementById('requestOverlay').classList.add('open');
    document.getElementById('requestSuccess').classList.remove('show');
    document.querySelector('.request-form').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  function closeRequestModal() {
    document.getElementById('requestOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  if (document.getElementById('requestClose')) {
    document.getElementById('requestClose').addEventListener('click', closeRequestModal);
    document.getElementById('requestOverlay').addEventListener('click', e => {
      if (e.target === e.currentTarget) closeRequestModal();
    });
    document.getElementById('btnSendRequest').addEventListener('click', () => {
      const titulo  = document.getElementById('reqTitle').value.trim();
      const email   = document.getElementById('reqEmail').value.trim();
      const message = document.getElementById('reqMessage').value.trim();
      if (!titulo) { alert('Por favor escreve o nome do filme ou série!'); return; }
      if (!email)  { alert('Por favor escreve o teu email!'); return; }
      const subject = encodeURIComponent(`[Ten Film] Pedido: ${titulo}`);
      const body = encodeURIComponent(`Olá!\n\nGostaria de pedir:\n\n🎬 Título: ${titulo}\n📧 Email: ${email}\n💬 Mensagem: ${message || 'Sem mensagem.'}\n\n— Ten Film`);
      window.location.href = `mailto:doriotramos88@gmail.com?subject=${subject}&body=${body}`;
      document.querySelector('.request-form').style.display = 'none';
      document.getElementById('requestSuccess').classList.add('show');
      document.getElementById('reqTitle').value = '';
      document.getElementById('reqEmail').value = '';
      document.getElementById('reqMessage').value = '';
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closePlayer(); closeEpisodesModal(); closeTrailerModal(); }
  });

  // ── Nav filter ──
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      render();
    });
  });

  // ── Search ──
  searchInput.addEventListener('input', e => {
    currentSearch = e.target.value;
    render();
  });

  function escHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  render();
});
