<script lang="ts">
  interface Props {
    title: string,
    projectDate: string,
    description: string,
    tags: string[],
    slug: string
    onClick: any;
  }

  const { title, projectDate, description, tags, slug, onClick = null }: Props = $props();

  import Tag from "./Information/Tag.svelte";
</script>

<button onclick={onClick} class="p-1 border border-secondary hover:bg-secondary hover:cursor-pointer text-left">
  <div class="flex flex-row min-h-56">
    <div class="relative w-full">
      <!-- <p class="absolute right-0 bottom-0 p-2.5 mix-blend-difference text-xl font-semibold text-white">{projectDate}</p> -->
      {#await import(/* @vite-ignore */ `../../projects/images/thumbnails/${slug}.jpg`) then { default: src }}
        <img alt={title + " thumbnail."} src={src} class="h-full aspect-auto object-cover">
      {/await}
    </div>
    <div class="flex flex-col justify-between max-w-[50%] w-full p-2 pr-4 bg-secondary text-secondary-foreground border border-secondary">
      <div class="mb-24">
        <h1 class="text-xl font-semibold text-secondary-foreground">{title}</h1>
        <p>{description}</p>
      </div>
      <div class="flex flex-wrap gap-2">
        {#each tags as tag}
          <Tag title={tag} class="px-0.5 border-secondary-foreground text-secondary-foreground" />
        {/each}
      </div>
    </div>
  </div>
</button>
