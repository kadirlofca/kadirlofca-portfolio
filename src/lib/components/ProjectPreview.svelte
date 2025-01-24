<script lang="ts">
  export let title: string;
  export let shortDescription: string;
  export let tags: string[] = ["Unity", "C#"];

  import Tag from "./Tag.svelte";
</script>

<div class="flex flex-row">
  <div class="max-w-[50%] p-dist-1 pr-dist-0 bg-dist-1 text-dist-1-foreground border border-dist-0-foreground">
    <div class="mb-24">
      <h1 class="text-xl font-bold text-dist-1-foreground">{title}</h1>
      <p>{shortDescription}</p>
    </div>
    <div class="flex flex-wrap gap-2">
      {#each tags as tag}
        <Tag title={tag} class="px-dist-2 border-dist-0-foreground text-dist-0-foreground hover:bg-dist-1 hover:text-dist-1-foreground" />
      {/each}
    </div>
  </div>
  <div class="relative w-full border border-dist-0-foreground">
    <p class="absolute right-0 p-2 text-accent">MAY 2025</p>
  </div>
</div>
