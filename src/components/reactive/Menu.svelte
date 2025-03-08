<script lang="ts">
    import { USER_SOCIALS, USER_EMAIL } from "../../data/user-contact";
    import { slide, blur } from "svelte/transition";

    let droppedDown: boolean = $state(false);

    $effect(() => {
        document.body.style["overflow"] = droppedDown ? "hidden" : "visible";
    })
</script>

<button class="ml-auto my-auto cursor-pointer hover:brightness-125 md:hidden" aria-label="Drop Down Menu" onclick={() => droppedDown = !droppedDown}>
    <svg class="w-8 h-8 stroke-accent" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 5H21 M3 12H21 M3 19H21" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
</button>

{#if droppedDown}
<div transition:blur class="fixed top-0 left-0 flex flex-row z-40 h-lvh backdrop-blur-sm">
    <div transition:slide={{axis: "x"}} class="flex w-[70svw] border-r border-accent bg-primary/95">
        <div class="flex flex-col gap-8 my-auto ml-auto p-8 text-2xl text-right">
            <a
            class="duration-200 hover:brightness-125"
            href={`mailto:${USER_EMAIL}`}>{USER_EMAIL}</a>
            {#each USER_SOCIALS as social}
                <a class="duration-200 hover:brightness-125" href={social.href}>
                    {social.title}
                </a>
            {/each}
        </div>
    </div>
    <button class="w-[30svh]" aria-label="Exit Drop Down Menu" onclick={() => droppedDown = !droppedDown}>
    </button>
</div>
{/if}