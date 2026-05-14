<template>
  <main class="home">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1200&q=80&fit=crop"
          alt="Pizza napoletana"
          class="hero-img"
        />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <p class="hero-pretitle">Autentica dal 1987</p>
        <h1 class="hero-title">
          LA VERA<br>
          PIZZA<br>
          <span class="hero-title-gold">NAPOLETANA</span>
        </h1>
        <div class="tricolore">
          <span class="verde-it"></span>
          <span class="bianco-it"></span>
          <span class="rosso-it"></span>
        </div>
        <p class="hero-desc">
          Ingredienti freschi, impasto<br>
          a lunga lievitazione e cottura<br>
          nel forno a legna.
        </p>
        <div class="hero-buttons">
          <router-link to="/menu" class="btn-primary">SCOPRI IL MENU</router-link>
          <router-link to="/contatti" class="btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            DOVE SIAMO
          </router-link>
        </div>
      </div>
    </section>

    <!-- STORIA -->
    <section class="storia">
      <div class="storia-content">
        <p class="section-label">La Nostra Storia</p>
        <h2 class="section-title">PASSIONE, TRADIZIONE, QUALITÀ</h2>
        <p class="storia-text">
          Bella Napoli nasce dall'amore per la vera pizza napoletana
          e dalla voglia di portare in tavola solo il meglio della tradizione.
        </p>
        <router-link to="/storia" class="link-oro">
          SCOPRI DI PIÙ
          <span class="link-line"></span>
        </router-link>
      </div>
      <div class="storia-illustration">
        <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="napoli-sketch">
          <path d="M20 160 Q50 80 80 100 Q100 110 120 80 Q150 40 180 70 Q200 85 220 60 Q250 25 280 50" stroke="#c8a96e" stroke-width="1.2" fill="none" opacity="0.7"/>
          <path d="M150 70 Q155 30 160 70" stroke="#c8a96e" stroke-width="1" fill="none" opacity="0.5"/>
          <ellipse cx="150" cy="72" rx="8" ry="4" stroke="#c8a96e" stroke-width="1" fill="none" opacity="0.5"/>
          <path d="M10 160 Q80 155 150 158 Q220 161 290 158" stroke="#c8a96e" stroke-width="0.8" fill="none" opacity="0.5"/>
          <path d="M10 165 Q80 163 290 165" stroke="#c8a96e" stroke-width="0.5" fill="none" opacity="0.3"/>
          <!-- Edifici stilizzati -->
          <rect x="30" y="130" width="18" height="30" stroke="#c8a96e" stroke-width="0.8" fill="none" opacity="0.4"/>
          <rect x="55" y="120" width="14" height="40" stroke="#c8a96e" stroke-width="0.8" fill="none" opacity="0.4"/>
          <rect x="75" y="135" width="20" height="25" stroke="#c8a96e" stroke-width="0.8" fill="none" opacity="0.4"/>
          <rect x="200" y="125" width="16" height="35" stroke="#c8a96e" stroke-width="0.8" fill="none" opacity="0.4"/>
          <rect x="222" y="118" width="12" height="42" stroke="#c8a96e" stroke-width="0.8" fill="none" opacity="0.4"/>
          <rect x="240" y="130" width="18" height="30" stroke="#c8a96e" stroke-width="0.8" fill="none" opacity="0.4"/>
          <!-- Barca -->
          <path d="M120 155 Q135 148 150 155" stroke="#c8a96e" stroke-width="0.8" fill="none" opacity="0.5"/>
          <line x1="135" y1="155" x2="135" y2="140" stroke="#c8a96e" stroke-width="0.8" opacity="0.5"/>
          <path d="M135 140 L145 148" stroke="#c8a96e" stroke-width="0.8" opacity="0.5"/>
        </svg>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="features">
      <div class="features-grid">
        <div class="feature-card" v-for="f in features" :key="f.title">
          <div class="feature-icon" v-html="f.icon"></div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </section>

    <!-- PIZZE -->
    <section class="pizze-preview">
      <div class="pizze-left">
        <p class="section-label">Le Nostre Pizze</p>
        <h2 class="section-title">SCEGLI LA TUA<br>PREFERITA</h2>
        <router-link to="/menu" class="btn-primary" style="margin-top:2rem; display:inline-block">
          VEDI IL MENU COMPLETO
        </router-link>
      </div>
      <div class="pizze-right">
        <div class="pizza-card featured">
          <div class="pizza-badge">♥ LA PIÙ AMATA</div>
          <img
            src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80&fit=crop&crop=center"
            alt="Margherita"
          />
          <div class="pizza-info">
            <div>
              <h4>MARGHERITA</h4>
              <p>Pomodoro San Marzano, mozzarella fior di latte, basilico, olio EVO</p>
            </div>
            <span class="pizza-price">7,50 €</span>
          </div>
        </div>
        <div class="pizza-card">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&fit=crop&crop=center"
            alt="Diavola"
          />
          <div class="pizza-info">
            <div>
              <h4>DIAVOLA</h4>
              <p>Pomodoro, mozzarella, salame piccante, olio EVO</p>
            </div>
            <span class="pizza-price">9,00 €</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA PRENOTAZIONE -->
    <section class="cta-section">
      <div class="cta-bg">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80&fit=crop"
          alt="Pizzeria"
        />
        <div class="cta-overlay"></div>
      </div>
      <div class="cta-content">
        <p class="section-label" style="color:var(--oro)">Vieni a trovarci</p>
        <h2 style="font-family:var(--font-display); font-size:3rem; color:#fff; font-weight:700; line-height:1.1; margin-bottom:1.5rem;">
          Prenota il tuo<br>tavolo stasera
        </h2>
        <router-link to="/prenotazione" class="btn-primary">PRENOTA ORA</router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
const features = [
  {
    title: 'FORNO A LEGNA',
    desc: 'Cottura tradizionale per un sapore unico.',
    icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 32 L8 20 Q8 10 20 10 Q32 10 32 20 L32 32" stroke="#c8a96e" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
      <path d="M5 32 L35 32" stroke="#c8a96e" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M14 32 L14 24 Q14 20 20 20 Q26 20 26 24 L26 32" stroke="#c8a96e" stroke-width="1.2" fill="none"/>
      <path d="M20 10 Q18 5 20 3 Q22 5 20 10" stroke="#c8a96e" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    title: 'INGREDIENTI SELEZIONATI',
    desc: 'Solo prodotti freschi e di alta qualità.',
    icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6 Q24 12 20 18 Q16 12 20 6Z" stroke="#c8a96e" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
      <path d="M12 14 Q18 18 20 26 Q14 24 12 14Z" stroke="#c8a96e" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
      <path d="M28 14 Q22 18 20 26 Q26 24 28 14Z" stroke="#c8a96e" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
      <path d="M20 18 L20 34" stroke="#c8a96e" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`
  },
  {
    title: 'PASSIONE ITALIANA',
    desc: 'Ogni pizza è fatta con amore e dedizione.',
    icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 32 Q8 22 8 15 A8 8 0 0 1 20 11 A8 8 0 0 1 32 15 Q32 22 20 32Z" stroke="#c8a96e" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
    </svg>`
  }
]
</script>

<style scoped>
/* HERO */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  padding-bottom: 4rem;
}
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero-img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    100deg,
    rgba(0,0,0,0.85) 0%,
    rgba(0,0,0,0.5) 55%,
    rgba(0,0,0,0.1) 100%
  );
}
.hero-content {
  position: relative;
  z-index: 1;
  padding: 0 2rem;
  max-width: 520px;
  animation: fadeInUp 1s ease both;
}
.hero-pretitle {
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--oro);
  margin-bottom: 1rem;
}
.hero-title {
  font-family: var(--font-body);
  font-size: clamp(2.8rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 0.95;
  color: var(--bianco-puro);
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}
.hero-title-gold { color: var(--oro); }
.tricolore {
  display: flex;
  gap: 0;
  margin: 1rem 0;
  width: 80px;
  height: 4px;
  border-radius: 2px;
  overflow: hidden;
}
.tricolore span { flex: 1; display: block; }
.verde-it { background: var(--italia-verde); }
.bianco-it { background: #fff; }
.rosso-it { background: var(--italia-rosso); }
.hero-desc {
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.85);
  margin-bottom: 2rem;
}
.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
}

/* BUTTONS */
.btn-primary {
  display: inline-block;
  background: var(--oro);
  color: var(--nero);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 1rem 2rem;
  border: none;
  border-radius: 2px;
  transition: background 0.2s, transform 0.15s;
  min-width: 200px;
  text-align: center;
}
.btn-primary:hover { background: var(--oro-chiaro); transform: translateY(-1px); }
.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--bianco-puro);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 1rem 2rem;
  border: 1.5px solid rgba(255,255,255,0.6);
  border-radius: 2px;
  transition: border-color 0.2s, color 0.2s;
  min-width: 200px;
}
.btn-outline:hover { border-color: var(--oro); color: var(--oro); }

/* STORIA */
.storia {
  background: var(--grigio-chiaro);
  padding: 5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;
  flex-wrap: wrap;
}
.storia-content { max-width: 460px; }
.section-label {
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--oro);
  margin-bottom: 0.75rem;
}
.section-title {
  font-family: var(--font-body);
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 800;
  color: var(--nero);
  line-height: 1.1;
  margin-bottom: 1.25rem;
  letter-spacing: -0.01em;
}
.storia-text {
  font-size: 0.95rem;
  line-height: 1.75;
  color: rgba(44,44,44,0.8);
  margin-bottom: 1.5rem;
}
.link-oro {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--oro);
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  transition: gap 0.2s;
}
.link-oro:hover { gap: 6px; }
.link-line {
  display: block;
  width: 40px;
  height: 2px;
  background: var(--oro);
  transition: width 0.2s;
}
.link-oro:hover .link-line { width: 60px; }
.storia-illustration { flex-shrink: 0; }
.napoli-sketch { width: 260px; height: 180px; }

/* FEATURES */
.features {
  background: var(--verde);
  padding: 4rem 2rem;
}
.features-grid {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  text-align: center;
}
.feature-card { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; }
.feature-icon { margin-bottom: 0.25rem; }
.feature-card h3 {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--bianco-puro);
}
.feature-card p {
  font-size: 0.82rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.7);
}

/* PIZZE */
.pizze-preview {
  padding: 5rem 2rem;
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
  background: var(--grigio-chiaro);
}
.pizze-left { max-width: 280px; }
.pizze-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 280px;
}
.pizza-card {
  background: var(--bianco-puro);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  position: relative;
  transition: transform 0.25s, box-shadow 0.25s;
}
.pizza-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.14);
}
.pizza-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.pizza-card.featured img { height: 220px; }
.pizza-badge {
  position: absolute;
  top: 12px; right: 12px;
  background: var(--verde);
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.3rem 0.7rem;
  border-radius: 30px;
}
.pizza-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  gap: 1rem;
}
.pizza-info h4 {
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--nero);
  margin-bottom: 0.25rem;
}
.pizza-info p {
  font-size: 0.78rem;
  color: rgba(44,44,44,0.65);
  line-height: 1.4;
}
.pizza-price {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--oro);
  white-space: nowrap;
}

/* CTA */
.cta-section {
  position: relative;
  padding: 7rem 2rem;
  text-align: center;
}
.cta-bg {
  position: absolute;
  inset: 0;
}
.cta-bg img { width: 100%; height: 100%; object-fit: cover; }
.cta-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.65);
}
.cta-content {
  position: relative;
  z-index: 1;
}

@media (max-width: 600px) {
  .features-grid { grid-template-columns: 1fr; }
  .storia { flex-direction: column; }
  .storia-illustration { display: none; }
  .pizze-preview { flex-direction: column; }
  .pizze-left { max-width: 100%; }
}
</style>
