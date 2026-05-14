<!-- src/views/Contatti.vue -->
<template>
  <main class="contatti-page">
    <section class="hero-small">
      <div class="overlay"></div>

      <div class="hero-content">
        <p class="section-label">Bella Napoli</p>
        <h1>CONTATTI</h1>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-grid">
        <div class="contact-info">
          <p class="section-label">Dove siamo</p>

          <h2 class="section-title">
            TI ASPETTIAMO<br>IN PIZZERIA
          </h2>

          <div class="info-box">
            <h3>INDIRIZZO</h3>
            <p>Via Roma 25<br>Milano, Italia</p>
          </div>

          <div class="info-box">
            <h3>TELEFONO</h3>
            <p>+39 02 12345678</p>
          </div>

          <div class="info-box">
            <h3>EMAIL</h3>
            <p>info@bellanapoli.it</p>
          </div>

          <div class="info-box">
            <h3>ORARI</h3>
            <p>
              Lun - Dom<br>
              18:30 - 23:30
            </p>
          </div>
        </div>

        <div class="map-box">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80&fit=crop"
            alt="Ristorante"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero-small {
  position: relative;
  height: 50vh;
  background-image:
    url('https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1400&q=80&fit=crop');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.7);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.hero-content h1 {
  color: white;
  font-size: clamp(2.5rem, 6vw, 4rem);
}

.contact-section {
  padding: 6rem 2rem;
  background: var(--grigio-chiaro);
}

.contact-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  gap: 3rem;
  align-items: center;
}

.contact-info {
  background: white;
  padding: 3rem;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
}

.info-box {
  margin-top: 2rem;
}

.info-box h3 {
  color: var(--oro);
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  margin-bottom: 0.6rem;
}

.info-box p {
  line-height: 1.8;
}

.map-box img {
  width: 100%;
  height: 100%;
  min-height: 500px;
  object-fit: cover;
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
  line-height: 1.1;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-info {
    padding: 2rem;
  }

  .map-box img {
    min-height: 320px;
  }
}
</style>