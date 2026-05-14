<!-- src/views/Storia.vue -->
<template>
  <main class="storia-page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1400&q=80&fit=crop"
          alt="Interno pizzeria"
        />
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <p class="section-label">Dal 1987</p>
        <h1>LA NOSTRA<br><span>STORIA</span></h1>

        <div class="tricolore">
          <span class="verde-it"></span>
          <span class="bianco-it"></span>
          <span class="rosso-it"></span>
        </div>

        <p>
          Una tradizione tramandata nel tempo,
          fatta di passione, forno a legna
          e vera pizza napoletana.
        </p>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="content">
      <div class="content-grid">
        <div class="text">
          <p class="section-label">Tradizione Italiana</p>
          <h2 class="section-title">
            TUTTO NASCE DA<br>UNA RICETTA DI FAMIGLIA
          </h2>

          <p>
            Bella Napoli nasce nel cuore della tradizione partenopea,
            con l'obiettivo di portare l'autentica pizza napoletana
            sulle tavole di chi ama la cucina italiana.
          </p>

          <p>
            Ogni impasto viene preparato con lievitazione lenta,
            farine selezionate e ingredienti freschi provenienti
            da produttori italiani.
          </p>

          <p>
            Il nostro forno a legna cuoce ogni pizza secondo
            la tradizione, regalando profumo, leggerezza
            e sapori autentici.
          </p>
        </div>

        <div class="image-box">
          <img
            src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=900&q=80&fit=crop"
            alt="Pizza tradizionale"
          />
        </div>
      </div>
    </section>

    <!-- VALUES -->
    <section class="values">
      <div class="values-grid">
        <div class="value-card">
          <h3>QUALITÀ</h3>
          <p>Ingredienti selezionati e lavorazione artigianale.</p>
        </div>

        <div class="value-card">
          <h3>TRADIZIONE</h3>
          <p>Ricette autentiche tramandate nel tempo.</p>
        </div>

        <div class="value-card">
          <h3>PASSIONE</h3>
          <p>Ogni pizza è preparata con cura e dedizione.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 75vh;
  display: flex;
  align-items: flex-end;
  padding: 4rem 2rem;
}

.hero-bg {
  position: absolute;
  inset: 0;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.7);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 550px;
  animation: fadeInUp 1s ease both;
}

.hero-content h1 {
  font-size: clamp(3rem, 7vw, 5rem);
  line-height: 0.95;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
}

.hero-content h1 span {
  color: var(--oro);
}

.hero-content p {
  color: rgba(255,255,255,0.85);
  line-height: 1.8;
}

.content {
  padding: 6rem 2rem;
  background: var(--grigio-chiaro);
}

.content-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.text p {
  margin-bottom: 1.3rem;
  line-height: 1.9;
}

.image-box img {
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
}

.values {
  background: var(--verde);
  padding: 5rem 2rem;
}

.values-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;
}

.value-card {
  background: rgba(255,255,255,0.05);
  padding: 2rem;
  border: 1px solid rgba(255,255,255,0.08);
}

.value-card h3 {
  color: var(--oro);
  margin-bottom: 1rem;
  font-size: 0.85rem;
  letter-spacing: 0.15em;
}

.value-card p {
  color: rgba(255,255,255,0.75);
  line-height: 1.7;
}

.section-label {
  color: var(--oro);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.72rem;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.tricolore {
  display: flex;
  width: 80px;
  height: 4px;
  overflow: hidden;
  margin: 1rem 0;
}

.tricolore span {
  flex: 1;
}

.verde-it { background: var(--italia-verde); }
.bianco-it { background: white; }
.rosso-it { background: var(--italia-rosso); }

@media (max-width: 768px) {
  .content-grid,
  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>