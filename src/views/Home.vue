<script setup lang="ts">
import { ref } from 'vue'
import event from '../data/event.json'

const showQr = ref(false)
</script>

<template>
  <div class="pass-page">
    <header class="topbar pass-topbar"><span class="wordmark">SHOW<span>PASS</span></span><span class="edition">{{ event.edition }} / CREDENTIAL</span></header>
    <main class="pass-content">
      <section class="festival-heading"><p class="eyebrow">Your access is confirmed</p><h1>{{ event.festival }}</h1><p class="festival-meta">{{ event.dates.range }}<br>{{ event.venue }} · {{ event.city }}</p></section>
      <section class="credential-card">
        <div class="credential-image"><div class="image-overlay"></div><div class="credential-image-copy"><span>NLF</span><strong>26</strong></div><span class="pass-status"><v-icon icon="mdi-check-circle" /> ACTIVE</span></div>
        <div class="credential-body">
          <div class="attendee-row"><div><span class="field-label">Attendee</span><h2>{{ event.attendee.name }}</h2></div><div class="pass-type"><span class="field-label">Pass type</span><strong>{{ event.passType }}</strong></div></div>
          <div class="credential-rule"></div><div class="credential-grid"><div><span class="field-label">Entry gate</span><strong>{{ event.entryGate }}</strong></div><div><span class="field-label">Gate time</span><strong>{{ event.gateTime }}</strong></div></div>
          <button class="qr-button" @click="showQr = true"><span class="qr-mini"><v-icon icon="mdi-qrcode" /></span><span><strong>Show QR code</strong><small>Tap to expand for entry</small></span><v-icon icon="mdi-arrow-up-right" /></button><div class="ticket-id">{{ event.attendee.ticketId }}</div>
        </div>
      </section>
      <button class="details-link" @click="$router.push('/details')"><span><v-icon icon="mdi-information-outline" /> Event details</span><v-icon icon="mdi-arrow-right" /></button>
    </main>
    <footer class="pass-footer"></footer>
    <div v-if="showQr" class="qr-overlay" role="dialog" aria-modal="true"><button class="close-button" aria-label="Close QR code" @click="showQr = false"><v-icon icon="mdi-close" /></button><p class="eyebrow">Scan for entry</p><h2>{{ event.attendee.name }}</h2><div class="qr-large"><div class="qr-pattern">{{ event.qrValue }}</div></div><strong>{{ event.entryGate }}</strong><span class="qr-caption">{{ event.festival }} · {{ event.dates.short }}</span><button class="primary-button done-button" @click="showQr = false">Done</button></div>
  </div>
</template>
