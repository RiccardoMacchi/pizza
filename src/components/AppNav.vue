<template>
  <nav :class="['navbar', { scrolled: isScrolled, open: menuOpen }]">
    <router-link to="/" class="logo" @click="menuOpen = false">
      <svg class="logo-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 3 L28 10 L28 22 Q28 30 18 33 Q8 30 8 22 L8 10 Z" stroke="#c8a96e" stroke-width="1.5" fill="none"/>
        <path d="M13 20 Q18 14 23 20" stroke="#c8a96e" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        <circle cx="18" cy="10" r="2" fill="#c8a96e"/>
        <path d="M14 24 L22 24" stroke="#c8a96e" stroke-width="1" stroke-linecap="round"/>
      </svg>
      <div class="logo-text">
        <span class="logo-name">Bella Napoli</span>
        <span class="logo-sub">Pizzeria</span>
      </div>
    </router-link>

    <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>

    <div class="nav-menu" :class="{ open: menuOpen }">
      <router-link v-for="link in links" :key="link.path" :to="link.path" @click="menuOpen = false">
        {{ link.label }}
      </router-link>
      <router-link to="/prenotazione" class="btn-prenota" @click="menuOpen = false">
        Prenota
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const isScrolled = ref(false)

const links = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/storia', label: 'La Nostra Storia' },
  { path: '/contatti', label: 'Contatti' },
]

const onScroll = () => { isScrolled.value = window.scrollY > 60 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2rem;
  transition: background 0.4s ease, box-shadow 0.4s ease;
}
.navbar.scrolled {
  background: rgba(17,17,17,0.97);
  box-shadow: 0 2px 20px rgba(0,0,0,0.4);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.logo-text { display: flex; flex-direction: column; }
.logo-name {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--bianco-puro);
  line-height: 1;
  letter-spacing: 0.02em;
}
.logo-sub {
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  color: var(--oro);
  text-transform: uppercase;
  margin-top: 2px;
}

.hamburger {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
  z-index: 1001;
}
.hamburger span {
  display: block;
  width: 26px;
  height: 2px;
  background: var(--bianco-puro);
  border-radius: 2px;
  transition: all 0.3s ease;
}
.navbar.open .hamburger span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.navbar.open .hamburger span:nth-child(2) { opacity: 0; }
.navbar.open .hamburger span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

.nav-menu {
  position: fixed;
  top: 0; right: -100%;
  width: 75%;
  height: 100vh;
  background: var(--verde-scuro);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  transition: right 0.4s cubic-bezier(0.77,0,0.175,1);
  padding: 2rem;
}
.nav-menu.open { right: 0; }
.nav-menu a {
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--bianco-puro);
  transition: color 0.2s;
}
.nav-menu a:hover,
.nav-menu a.router-link-active { color: var(--oro); }
.btn-prenota {
  background: var(--oro) !important;
  color: var(--nero) !important;
  padding: 0.75rem 2rem;
  font-size: 0.85rem !important;
  letter-spacing: 0.15em;
  border-radius: 2px;
}
.btn-prenota:hover { background: var(--oro-chiaro) !important; }

@media (min-width: 768px) {
  .hamburger { display: none; }
  .nav-menu {
    position: static;
    width: auto;
    height: auto;
    background: transparent;
    flex-direction: row;
    gap: 2.5rem;
    padding: 0;
  }
  .nav-menu a { font-size: 0.78rem; }
}
</style>
