<script lang="ts">
  export let groomName: string;
  export let brideName: string;
  export let receptionDate: string;
  export let guestName: string;
  export let onOpen: () => void;
</script>

<section
  class="flex flex-col items-center justify-center h-screen bg-rose-50 text-rose-800"
>
  <h1 class="font-display text-6xl">
    {groomName} <span class="text-4xl">&</span> {brideName}
  </h1>
  <p class="mt-4 text-xl">{receptionDate}</p>
  <p class="mt-6">Kepada Yth. <strong>{guestName}</strong></p>
  <button class="btn btn-primary mt-8" on:click={onOpen}>Buka Undangan</button>
</section>