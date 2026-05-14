<template>
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-item">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
        </svg>
        <div>
          <strong>Orari</strong>
          <span>18:00 – 23:30</span>
          <span>Tutti i giorni</span>
        </div>
      </div>
      <div class="footer-item">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
        <div>
          <strong>Indirizzo</strong>
          <span>Via dei Tribunali, 45</span>
          <span>Napoli</span>
        </div>
      </div>
      <div class="footer-item">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.22 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <div>
          <strong>Telefono</strong>
          <span>081 123 4567</span>
        </div>
      </div>
      <div class="footer-item">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
        <div>
          <strong>Social</strong>
          <a href="#" style="color:var(--oro)">Seguici su</a>
          <a href="#" style="color:var(--oro)">Instagram</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
      bellanapolipizzeria.it
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--nero);
  color: rgba(255,255,255,0.75);
}
.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 2.5rem 2rem;
  max-width: 900px;
  margin: 0 auto;
}
.footer-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}
.footer-item svg { color: var(--oro); margin-top: 2px; flex-shrink: 0; }
.footer-item div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.footer-item strong {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--bianco-puro);
  font-weight: 700;
}
.footer-item span,
.footer-item a {
  font-size: 0.78rem;
  line-height: 1.5;
}
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 1rem 2rem;
  text-align: center;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
}
@media (max-width: 600px) {
  .footer-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
