<script lang="ts">
  import { fade } from 'svelte/transition';
  import { animate } from 'motion/mini';

  import { page } from '$app/state';
  import { templateMap } from '$lib/templates';
  import type { PageData } from './$types';
  import MusicPlayer from '$lib/ui/MusicPlayer.svelte';

  export let data: PageData;

  let showCover = true;
  const guestName = page.url.searchParams.get('guest') || 'Tamu Undangan';
  const template  = data.couple.template ?? 'classic';
  const { Cover } = templateMap[template] ?? templateMap.classic;

  // meta awal
  const title = data.couple.meta_title || `${data.couple.groom_name} & ${data.couple.bride_name}`;
  const desc  = data.couple.meta_description;

  // Referensi ke elemen cover
  let coverRef: HTMLElement;

  function handleOpen() {
    if (!coverRef) {
      showCover = false;
      return;
    }

    // jalankan animasi lalu sembunyikan
    animate(
      coverRef,
      {
        y: [0, -window.innerHeight],
        opacity: [1, 0]
      },
      {
        duration: 0.6,
        ease: 'easeInOut',
      }
    ).finished.then(() => {
      showCover = false;
    });
  }
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />
</svelte:head>

{#if showCover}
  <div
    bind:this={coverRef}
    in:fade={{ duration: 0 }}
    out:fade={{ duration: 1 }}
    on:introend={() => (showCover = false)}
  >
    <svelte:component
      this={Cover}
      groomName={data.couple.groom_name}
      brideName={data.couple.bride_name}
      receptionDate={data.couple.resepsi_date ?? ''}
      guestName={guestName}
      onOpen={handleOpen}
    />
  </div>
{:else}
  {#await import(`$lib/templates/${template}/+page.svelte`) then mod}
    <mod.default data={{ couple: data.couple }} />
  {/await}
  <MusicPlayer src={data.couple.music_url ?? ''} />
{/if}

