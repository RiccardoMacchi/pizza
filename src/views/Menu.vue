<template>
  <main class="menu-page">
    <!-- HERO -->
    <section class="page-hero">
      <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80&fit=crop" alt="Menu" />
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <p class="section-label">Bella Napoli</p>
        <h1>IL NOSTRO MENU</h1>
        <div class="tricolore"><span class="vi"></span><span class="bi"></span><span class="ri"></span></div>
      </div>
    </section>

    <!-- TABS -->
    <div class="tab-bar">
      <button
        v-for="cat in categories"
        :key="cat.id"
        :class="['tab-btn', { active: activeCategory === cat.id }]"
        @click="activeCategory = cat.id"
      >
        {{ cat.label }}
      </button>
    </div>

    <!-- GRID -->
    <section class="menu-grid">
      <div class="container">
        <TransitionGroup name="fade-list" tag="div" class="items-grid">
          <div
            v-for="item in filteredItems"
            :key="item.id"
            class="menu-item"
          >
            <div class="menu-item-img">
              <img :src="item.img" :alt="item.name" loading="lazy" />
              <span v-if="item.badge" class="item-badge">{{ item.badge }}</span>
            </div>
            <div class="menu-item-info">
              <div class="menu-item-header">
                <h3>{{ item.name }}</h3>
                <span class="item-price">{{ item.price }} €</span>
              </div>
              <p>{{ item.desc }}</p>
              <div class="item-tags">
                <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </section>

    <!-- NOTE -->
    <section class="menu-note">
      <p>Tutti i nostri impasti maturano per <strong>48 ore</strong> e vengono cotti nel nostro forno a legna a <strong>480°C</strong>.</p>
      <p>I prezzi sono IVA inclusa. Per allergie o intolleranze, parlate con il nostro staff.</p>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('classiche')

const categories = [
  { id: 'classiche', label: 'Pizze Classiche' },
  { id: 'speciali', label: 'Pizze Speciali' },
  { id: 'fritti', label: 'Fritti' },
  { id: 'dolci', label: 'Dolci' },
  { id: 'bevande', label: 'Bevande' },
]

const allItems = [
  // Classiche
  { id: 1, category: 'classiche', name: 'Margherita', desc: 'Pomodoro San Marzano, mozzarella fior di latte, basilico, olio EVO', price: '7,50', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80&fit=crop', badge: '♥ La più amata', tags: ['Classica'] },
  { id: 2, category: 'classiche', name: 'Marinara', desc: 'Pomodoro San Marzano, aglio, origano, olio EVO', price: '6,00', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80&fit=crop', tags: ['Vegana', 'Tradizione'] },
  { id: 3, category: 'classiche', name: 'Cosacca', desc: 'Pomodoro San Marzano, Parmigiano Reggiano DOP, basilico', price: '7,00', img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&q=80&fit=crop', tags: ['Classica'] },
  { id: 4, category: 'classiche', name: 'Diavola', desc: 'Pomodoro, mozzarella, salame piccante, olio EVO', price: '9,00', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80&fit=crop', tags: ['Piccante'] },
  { id: 5, category: 'classiche', name: '4 Stagioni', desc: 'Pomodoro, mozzarella, carciofi, prosciutto, funghi, olive nere', price: '10,00', img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80&fit=crop', tags: ['Classica'] },
  { id: 6, category: 'classiche', name: 'Capricciosa', desc: 'Pomodoro, mozzarella, prosciutto cotto, carciofi, funghi, olive', price: '10,50', img: 'https://images.unsplash.com/photo-1548369937-47519962c11a?w=400&q=80&fit=crop', tags: ['Classica'] },
  // Speciali
  { id: 7, category: 'speciali', name: 'Montanara', desc: 'Fritta e al forno, pomodoro, provola affumicata, basilico', price: '12,00', img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&q=80&fit=crop', badge: 'Chef\'s choice', tags: ['Speciale'] },
  { id: 8, category: 'speciali', name: 'Truffle & Mushroom', desc: 'Crema di funghi, mozzarella, tartufo nero, rucola', price: '14,50', img: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400&q=80&fit=crop', tags: ['Premium', 'Stagionale'] },
  { id: 9, category: 'speciali', name: 'Mortadella e Pistacchio', desc: 'Fior di latte, mortadella di Bologna IGP, pesto di pistacchio', price: '13,00', img: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=400&q=80&fit=crop', tags: ['Premium'] },
  { id: 10, category: 'speciali', name: 'Nduja', desc: 'Pomodoro San Marzano, fior di latte, \'nduja calabrese, cipolla di Tropea', price: '11,50', img: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&q=80&fit=crop', tags: ['Piccante', 'Speciale'] },
  // Fritti
  { id: 11, category: 'fritti', name: 'Frittatina di Pasta', desc: 'Pasta fritta con besciamella, prosciutto e piselli', price: '4,00', img: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&q=80&fit=crop', tags: ['Street food'] },
  { id: 12, category: 'fritti', name: 'Crocchè di Patate', desc: 'Crocchette di patate con provola filante', price: '3,50', img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80&fit=crop', tags: ['Street food'] },
  { id: 13, category: 'fritti', name: 'Zeppole Salate', desc: 'Pasta cresciuta fritta, acciughe e olive', price: '5,00', img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80&fit=crop', tags: ['Tradizione'] },
  // Dolci
  { id: 14, category: 'dolci', name: 'Tiramisù', desc: 'Ricetta della casa con mascarpone e savoiardi', price: '6,00', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80&fit=crop', tags: ['Dolce'] },
  { id: 15, category: 'dolci', name: 'Babà al Rum', desc: 'Il classico dolce napoletano inzuppato al rum', price: '5,50', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80&fit=crop', tags: ['Napoletano'] },
  { id: 16, category: 'dolci', name: 'Pastiera', desc: 'La torta di grano della tradizione napoletana', price: '5,00', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80&fit=crop', tags: ['Tradizione'] },
  // Bevande
  { id: 17, category: 'bevande', name: 'Birra Peroni', desc: 'Birra italiana alla spina, 33cl / 50cl', price: '3,50', img: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&q=80&fit=crop', tags: ['Birra'] },
  { id: 18, category: 'bevande', name: 'Vino della Casa', desc: 'Rosso o bianco, Campania IGT, 25cl / 50cl', price: '4,00', img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80&fit=crop', tags: ['Vino'] },
  { id: 19, category: 'bevande', name: 'Limoncello', desc: 'Limoncello artigianale della costiera amalfitana', price: '3,50', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80&fit=crop', tags: ['Digestivo'] },
]

const filteredItems = computed(() =>
  allItems.filter(i => i.category === activeCategory.value)
)
</script>

<style scoped>
.menu-page { background: var(--grigio-chiaro); padding-top: 0; min-height: 100vh; }

/* PAGE HERO */
.page-hero {
  position: relative;
  height: 40vh;
  min-height: 260px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 3rem;
}
.page-hero img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.page-hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.6); }
.page-hero-content {
  position: relative;
  z-index: 1;
  padding: 0 2rem;
}
.page-hero-content h1 {
  font-family: var(--font-body);
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 800;
  color: var(--bianco-puro);
  letter-spacing: -0.01em;
}
.tricolore { display: flex; width: 60px; height: 3px; border-radius: 2px; overflow: hidden; margin-top: 0.75rem; }
.vi { flex: 1; background: var(--italia-verde); }
.bi { flex: 1; background: #fff; }
.ri { flex: 1; background: var(--italia-rosso); }

/* TABS */
.tab-bar {
  background: var(--bianco-puro);
  display: flex;
  overflow-x: auto;
  padding: 0 1rem;
  border-bottom: 2px solid rgba(0,0,0,0.06);
  position: sticky;
  top: 64px;
  z-index: 100;
  scrollbar-width: none;
}
.tab-bar::-webkit-scrollbar { display: none; }
.tab-btn {
  background: none;
  border: none;
  padding: 1.1rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(44,44,44,0.5);
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: color 0.2s, border-color 0.2s;
}
.tab-btn.active { color: var(--oro); border-bottom-color: var(--oro); }
.tab-btn:hover { color: var(--testo); }

/* GRID */
.menu-grid { padding: 3rem 2rem; }
.container { max-width: 1000px; margin: 0 auto; }
.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
.menu-item {
  background: var(--bianco-puro);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  transition: transform 0.25s, box-shadow 0.25s;
}
.menu-item:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(0,0,0,0.12); }
.menu-item-img { position: relative; }
.menu-item-img img { width: 100%; height: 180px; object-fit: cover; }
.item-badge {
  position: absolute;
  top: 10px; right: 10px;
  background: var(--verde);
  color: #fff;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.3rem 0.65rem;
  border-radius: 20px;
}
.menu-item-info { padding: 1.1rem 1.25rem; }
.menu-item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.4rem;
}
.menu-item-header h3 {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--nero);
}
.item-price {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--oro);
  white-space: nowrap;
}
.menu-item-info p { font-size: 0.78rem; line-height: 1.55; color: rgba(44,44,44,0.65); margin-bottom: 0.75rem; }
.item-tags { display: flex; gap: 0.4rem; flex-wrap: wrap; }
.tag {
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.25rem 0.55rem;
  background: var(--grigio-chiaro);
  color: var(--verde);
  border-radius: 20px;
}

/* NOTA */
.menu-note {
  background: var(--verde);
  color: rgba(255,255,255,0.75);
  text-align: center;
  padding: 2.5rem 2rem;
  font-size: 0.85rem;
  line-height: 1.8;
}
.menu-note strong { color: var(--oro); }

/* Transitions */
.fade-list-enter-active,
.fade-list-leave-active { transition: opacity 0.3s, transform 0.3s; }
.fade-list-enter-from { opacity: 0; transform: translateY(16px); }
.fade-list-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
