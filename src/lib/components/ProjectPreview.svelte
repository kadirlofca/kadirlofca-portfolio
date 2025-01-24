<script lang="ts">
    export let title: string;
    export let shortDescription: string;
    export let tags: string[] = ["Unity", "C#"];

    import Tag from "./Tag.svelte";
</script>

<div class="flex flex-row">
    <div class="max-w-[50%] p-secondary pr-primary bg-secondary text-secondary-foreground border-secondary-width border-accent rounded-l-secondary">
        <div class="mb-24">
            <h1 class="text-xl font-bold text-primary">{title}</h1>
            <p>{shortDescription}</p>
        </div>
        <div class="flex flex-wrap gap-2">
            {#each tags as tag}
                <Tag value="" class="px-tertiary border-accent-foreground text-accent-foreground text-paragraph-sm hover:bg-accent-foreground hover:text-accent hover:border-accent">{tag}</Tag>
            {/each}
        </div>
    </div>
    <div class="relative w-full border-secondary-width border-accent rounded-r-secondary">
        <p class="absolute right-0 p-2 text-accent">MAY 2025</p>
    </div>
</div>