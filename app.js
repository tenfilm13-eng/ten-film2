/* ===========================
   TEN FILM — App Logic
   =========================== */

document.addEventListener('DOMContentLoaded', () => {
  let localCatalog = [...CATALOG];
  let currentFilter = 'all';
  let currentSearch = '';
  let adTimer = null;
  let pendingArchiveId = '';
  let pendingTitle = '';
  const AD_DURATION = 10;

  const grid         = document.getElementById('cardsGrid');
  const emptyState   = document.getElementById('emptyState');
  const sectionCount = document.getElementById('sectionCount');
  const sectionTitle = document.getElementById('sectionTitle');
  const searchInput  = document.getElementById('searchInput');

  document.getElementById('footerYear').textContent = new Date().getFullYear();

  // ── Hero ──
  function setupHero() {
    const item = localCatalog[0];
    if (!item) return;
    document.getElementById('heroTitle').textContent = item.titulo;
    document.getElementById('heroDesc').textContent  = item.sinopse || '';
    const heroBg = document.getElementById('heroBg');
    if (item.poster) {
      heroBg.style.backgroundImage = `url('${item.poster}')`;
      heroBg.style.opacity = '0.25';
    }
    document.getElementById('heroPlayBtn').onclick = () => openModal(item.id);
  }

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
    const ratingHTML = item.avaliacao ? `<div class="rating-badge">★ ${item.avaliacao.toFixed(1)}</div>` : '';
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

  // ── Open Modal (filme ou série) ──
  window.openModal = function(id) {
    const item = localCatalog.find(x => x.id === id);
    if (!item) return;

    // Se for série com episódios ou temporadas → abre modal de episódios
    if (item.tipo === 'serie' && (item.temporadas || item.episodios)) {
      openEpisodesModal(item);
      return;
    }

    // Filme normal
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
    const watchBtn = document.getElementById('modalWatchBtn');
    if (item.videoUrl && item.videoUrl.trim() !== '') {
      watchBtn.disabled = false;
      watchBtn.className = 'btn-watch';
      watchBtn.textContent = '▶ Assistir Agora';
      watchBtn.onclick = () => { closeModal(); openAd(item.videoUrl, item.titulo); };
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
  //  MODAL DE EPISÓDIOS
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
    const temporadas = item.temporadas || [{ numero: 1, titulo: 'Temporada 1', episodios: item.episodios || [] }];

    // Função para mostrar episódios de uma temporada
    function showEpisodes(temp) {
      list.innerHTML = '';

      // Botão voltar para temporadas (só se tiver mais de 1 temporada)
      if (temporadas.length > 1) {
        const backBtn = document.createElement('button');
        backBtn.className = 'season-back-btn';
        backBtn.innerHTML = `← Voltar às Temporadas`;
        backBtn.onclick = () => showSeasons();
        list.appendChild(backBtn);
      }

      // Label da temporada
      const label = document.createElement('div');
      label.className = 'season-label';
      label.innerHTML = `📺 ${temp.titulo}`;
      list.appendChild(label);

      // Episódios
      temp.episodios.forEach((ep, i) => {
        const btn = document.createElement('button');
        btn.className = 'episode-btn';
        const hasVideo = ep.videoUrl && ep.videoUrl.trim() !== '';
        btn.innerHTML = `
          <span class="ep-number">EP ${i + 1}</span>
          <span class="ep-name">${escHtml(ep.titulo)}</span>
          <span class="ep-play">${hasVideo ? '▶' : '📩'}</span>
        `;
        if (hasVideo) {
          btn.onclick = () => {
            closeEpisodesModal();
            openAd(ep.videoUrl, `${item.titulo} — ${temp.titulo} EP ${i + 1}`);
          };
        } else {
          btn.style.opacity = '0.6';
          btn.style.cursor = 'pointer';
          btn.onclick = () => {
            closeEpisodesModal();
            openRequestModal();
          };
        }
        list.appendChild(btn);
      });
    }

    // Função para mostrar lista de temporadas
    function showSeasons() {
      list.innerHTML = '';

      const label = document.createElement('div');
      label.className = 'season-label';
      label.innerHTML = `🎬 Escolhe a Temporada`;
      list.appendChild(label);

      temporadas.forEach(temp => {
        const btn = document.createElement('button');
        btn.className = 'episode-btn season-btn';
        btn.innerHTML = `
          <span class="ep-number">T${temp.numero}</span>
          <span class="ep-name">${escHtml(temp.titulo)}</span>
          <span class="ep-play">▶</span>
        `;
        btn.onclick = () => showEpisodes(temp);
        list.appendChild(btn);
      });
    }

    // Se só tiver 1 temporada, vai directo para episódios
    if (temporadas.length === 1) {
      showEpisodes(temporadas[0]);
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

  function openAd(archiveId, titulo) {
    pendingArchiveId = archiveId;
    pendingTitle = titulo;

    const countdown    = document.getElementById('adCountdown');
    const skipBtn      = document.getElementById('adSkipBtn');
    const progressFill = document.getElementById('adProgressFill');

    countdown.textContent = AD_DURATION;
    skipBtn.disabled = true;
    progressFill.style.transition = 'none';
    progressFill.style.width = '0%';

    document.getElementById('adOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';

    void progressFill.getBoundingClientRect();
    progressFill.style.transition = `width ${AD_DURATION}s linear`;
    progressFill.style.width = '100%';

    let remaining = AD_DURATION;
    clearInterval(adTimer);
    adTimer = setInterval(() => {
      remaining--;
      countdown.textContent = remaining;
      if (remaining <= 0) {
        clearInterval(adTimer);
        skipBtn.disabled = false;
        document.getElementById('adTimerWrap').innerHTML =
          '<span class="ad-timer-text" style="color:var(--accent)">Pronto! Podes assistir.</span>';
      }
    }, 1000);

    skipBtn.onclick = () => {
      clearInterval(adTimer);
      document.getElementById('adOverlay').classList.remove('open');
      document.getElementById('adTimerWrap').innerHTML = `
        <span class="ad-timer-text">O vídeo abre em</span>
        <span class="ad-countdown" id="adCountdown">10</span>
        <span class="ad-timer-text">s</span>
      `;
      openPlayer(pendingArchiveId, pendingTitle);
    };
  }

  // ══════════════════════════════════════════════
  //  PLAYER ARCHIVE.ORG
  // ══════════════════════════════════════════════

  function openPlayer(videoUrl, titulo) {
    document.getElementById('playerTitle').textContent = titulo || '';
    const video = document.getElementById('playerVideo');
    video.src = videoUrl;
    video.load();
    video.play();
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

  document.getElementById('playerBack').addEventListener('click', closePlayer);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closePlayer(); closeEpisodesModal(); }
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

  // ══════════════════════════════════════════════
  //  SISTEMA DE PEDIDO DE FILME
  // ══════════════════════════════════════════════

  window.openRequestModal = function() {
    document.getElementById('requestOverlay').classList.add('open');
    document.getElementById('requestSuccess').classList.remove('show');
    document.getElementById('requestOverlay').querySelector('.request-form').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  function closeRequestModal() {
    document.getElementById('requestOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }

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

    // Abre o cliente de email com os dados preenchidos
    const subject = encodeURIComponent(`[Ten Film] Pedido: ${titulo}`);
    const body = encodeURIComponent(
      `Olá!\n\nGostaria de pedir o seguinte conteúdo:\n\n` +
      `🎬 Título: ${titulo}\n` +
      `📧 O meu email: ${email}\n` +
      `💬 Mensagem: ${message || 'Sem mensagem adicional.'}\n\n` +
      `Por favor avisa-me quando estiver disponível. Obrigado!\n\n` +
      `— Pedido enviado pelo site Ten Film`
    );

    window.location.href = `mailto:doriotramos88@gmail.com?subject=${subject}&body=${body}`;

    // Mostra mensagem de sucesso
    document.getElementById('requestOverlay').querySelector('.request-form').style.display = 'none';
    document.getElementById('requestSuccess').classList.add('show');

    // Limpa os campos
    document.getElementById('reqTitle').value = '';
    document.getElementById('reqEmail').value = '';
    document.getElementById('reqMessage').value = '';
  });

  setupHero();
  render();
});
