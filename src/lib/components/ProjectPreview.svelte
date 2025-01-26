<script lang="ts">
  export let title: string;
  export let shortDescription: string;
  export let tags: string[] = ["Unity", "C#"];

  import Tag from "./Tag.svelte";
</script>

<div class="flex flex-row min-h-56">
  <div class="relative w-full border border-secondary">
    <p class="absolute right-0 p-2.5 font-semibold text-accent">MAY 2025</p>
  </div>
  <div class="flex flex-col justify-between max-w-[50%] p-2 pr-4 bg-secondary text-secondary-foreground border border-secondary">
    <div class="mb-24">
      <h1 class="text-xl font-semibold text-secondary-foreground">{title}</h1>
      <p>{shortDescription}</p>
    </div>
    <div class="flex flex-wrap gap-2">
      {#each tags as tag}
        <Tag title={tag} class="px-0.5 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" />
      {/each}
    </div>
  </div>
</div>
