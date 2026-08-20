<script setup lang="ts">
import { ref } from 'vue'
import event from '../data/event.json'
import { useTheme } from '../composables/useTheme'

const openPanel = ref<string | null>(null)
const { isDark, toggleTheme } = useTheme()
const panels = [
  { id: 'parking', title: 'Parking & Rideshare', icon: 'mdi-car-outline', text: event.parkingAndRideshare },
  { id: 'bags', title: 'Bag policy', icon: 'mdi-bag-personal-outline', text: event.bagPolicy },
  { id: 'reentry', title: 'Re-entry', icon: 'mdi-exit-run', text: event.reentry },
  { id: 'accessibility', title: 'Accessibility', icon: 'mdi-wheelchair-accessibility', text: event.accessibility },
]

function togglePanel(id: string) {
  openPanel.value = openPanel.value === id ? null : id
}
</script>

<template>
  <div class="details-page">
    <header class="topbar">
      <button class="icon-button" aria-label="View pass" @click="$router.push('/')"><v-icon icon="mdi-arrow-left" /></button>
      <span class="topbar-title">Event details</span>
      <span class="topbar-actions"><button class="icon-button theme-btn" @click="toggleTheme()" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"><v-icon :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'" /></button><span class="topbar-mark">NLF</span></span>
    </header>
    <main class="details-content">
      <section class="details-hero"><p class="eyebrow">Your weekend, mapped out</p><h1>{{ event.festival }}</h1><p class="muted-copy">Everything you need for a smooth arrival at {{ event.venue }}.</p></section>
      <section class="arrival-card"><div class="section-label">Arrival essentials</div><div class="arrival-grid">
        <div><span>Venue</span><strong>{{ event.venue }}</strong><small>{{ event.city }}</small></div>
        <div><span>Entry</span><strong>{{ event.entryGate }}</strong><small>Gates open {{ event.gateTime }}</small></div>
        <div><span>First show</span><strong>{{ event.showTime }}</strong><small>{{ event.dates.openingDay }}</small></div>
        <div><span>Dates</span><strong>{{ event.dates.short }}</strong><small>All weekend access</small></div>
      </div></section>
      <section class="info-section"><div class="section-label">Good to know</div><div class="accordion-list">
        <div v-for="panel in panels" :key="panel.id" class="accordion-item" :class="{ expanded: openPanel === panel.id }">
          <button class="accordion-trigger" :aria-expanded="openPanel === panel.id" @click="togglePanel(panel.id)"><span class="accordion-icon"><v-icon :icon="panel.icon" /></span><span>{{ panel.title }}</span><v-icon class="chevron" :icon="openPanel === panel.id ? 'mdi-chevron-up' : 'mdi-chevron-down'" /></button>
          <div v-if="openPanel === panel.id" class="accordion-copy">{{ panel.text }}</div>
        </div>
      </div></section>
    </main>
    <footer class="details-footer"><button class="primary-button" @click="$router.push('/')"><span class="pass-return-mark">PASS</span> View pass</button></footer>
  </div>
</template>