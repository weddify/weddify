<!-- src/lib/ui/Cover.svelte -->
<script lang="ts">
  import { animate } from 'motion';

  export let groomName: string;
  export let brideName: string;
  export let receptionDate: string;
  export let guestName: string;
  export let onOpen: () => void;
</script>

<section
  id="cover"
  class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-rose-100 to-pink-200 p-6"
>
  <h1 class="font-serif text-4xl md:text-6xl text-center text-rose-700">
    {groomName} & {brideName}
  </h1>
  <p class="mt-3 text-lg text-rose-600">{receptionDate}</p>
  <p class="mt-6 text-md text-gray-600">
    Kepada Yth. <br />
    <strong class="text-rose-700">{guestName}</strong>
  </p>

  <button
    class="btn btn-primary mt-8"
    on:click={() =>
      animate('#cover', { opacity: [1, 0] }, { duration: 0.6 })
        .finished.then(onOpen)
    }
  >
    Buka Undangan
  </button>
</section>