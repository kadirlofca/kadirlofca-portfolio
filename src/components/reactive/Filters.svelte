<script lang="ts">
    import { filters, removeFilter } from '../../stores/filters.store.ts';
    import { slide, blur } from 'svelte/transition';
</script>

{#snippet filter(title: string)}
    <button onclick={() => removeFilter(title)} out:blur class="group hover:cursor-pointer hover:opacity-60 duration-200">
        <div class="px-2 w-fit bg-primary border rounded-interactive border-primary-foreground group-hover:-translate-y-1/4 group-hover:-rotate-2 duration-200">
            <span class="text-primary-foreground font-semibold">{ title }</span>
        </div>    
    </button>
{/snippet}

{#if $filters.length > 0}
    <div transition:slide class="flex gap-4 p-4 pb-0">
        <svg class="w-6 h-6 my-auto stroke-edge" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5H11 M3 12H16 M3 19H21" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>

        <div class="flex gap-4 opacity-60">
            {#each $filters as title}
                {@render filter(title)}
            {/each}
        </div>
    </div>
{/if}