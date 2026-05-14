<!-- src/views/Prenotazione.vue -->
<template>
  <main class="prenotazione-page">
    <section class="hero-small">
      <div class="overlay"></div>

      <div class="hero-content">
        <p class="section-label">Riserva il tuo tavolo</p>
        <h1>PRENOTAZIONE</h1>
      </div>
    </section>

    <section class="booking-section">
      <div class="booking-box">
        <div class="booking-info">
          <p class="section-label">Bella Napoli</p>
          <h2 class="section-title">
            VIVI UNA VERA<br>PIZZERIA ITALIANA
          </h2>

          <p>
            Prenota il tuo tavolo e goditi
            un'esperienza autentica tra
            pizza napoletana, ingredienti freschi
            e atmosfera accogliente.
          </p>
        </div>

        <form class="booking-form">
          <input type="text" placeholder="Nome e Cognome">
          <input type="email" placeholder="Email">
          <input type="tel" placeholder="Telefono">
          <input type="date">
          <input type="time">
          <input type="number" placeholder="Persone">

          <textarea rows="5" placeholder="Richieste speciali"></textarea>

          <button type="submit" class="btn-primary">
            PRENOTA ORA
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero-small {
  position: relative;
  height: 50vh;
  background-image:
    url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=80&fit=crop');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.65);
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

.booking-section {
  background: var(--grigio-chiaro);
  padding: 6rem 2rem;
}

.booking-box {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  gap: 4rem;
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.booking-form input,
.booking-form textarea {
  border: 1px solid #ddd;
  padding: 1rem;
  font-family: var(--font-body);
  background: #fff;
}

.booking-form input:focus,
.booking-form textarea:focus {
  outline: none;
  border-color: var(--oro);
}

.booking-info p {
  line-height: 1.9;
}

.section-label {
  color: var(--oro);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.72rem;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.4rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.btn-primary {
  background: var(--oro);
  border: none;
  padding: 1rem 2rem;
  font-weight: 700;
  letter-spacing: 0.15em;
}

@media (max-width: 768px) {
  .booking-box {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
}
</style>