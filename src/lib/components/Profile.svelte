<script lang="ts">
  import Link from "./Link.svelte";
  import Socials from "$lib/data/socials.json";
  import Personal from "$lib/data/personal.json";
  import Headshot from "$lib/images/headshot.png";
  import PercentBar from "./PercentBar.svelte";
  import getSkillDistribution from "$lib/scripts/getSkillDistribution";
</script>

<div class="flex flex-col max-w-64 w-max p-4 gap-4">
  <!-- NAME -->
  <div>
    <p class="mb-2 text-xs text-secondary/50">ME</p>

    <div class="h-16 border border-secondary">
      <div class="h-full text-center px-3 py-2 border-4 border-primary bg-secondary">
        <h1 class="text-3xl font-semibold text-secondary-foreground">{Personal.fullName}</h1>
      </div>
    </div>

    <!-- PICTURE -->
    <img src={Headshot} alt="Kadir Lofca." class="mt-4 w-max aspect-square border border-secondary" />
  </div>

  <!-- SOCIALS -->
  <div>
    <div class="flex flex-wrap gap-2 w-full">
      <a
        href="mailto:kadirlofca@outlook.com"
        class="w-full px-2 py-1 border border-primary-foreground text-center text-sm text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
      >
        kadirlofca@outlook.com
      </a>
      {#each Socials.socials as social}
        <Link href={social.href} class="flex-1 border border-primary-foreground text-center text-sm text-primary-foreground hover:bg-secondary hover:text-secondary-foreground">
          {social.title}
        </Link>
      {/each}
    </div>
  </div>

  <!-- SKILLS -->
  <div class="mt-2">
    <p class="mb-2 text-xs text-secondary/50">SKILL DISTRIBUTION</p>
    <div class="flex flex-col gap-2">
      {#each getSkillDistribution() as skill}
        {@render skillBar(skill, 60)}
      {/each}
    </div>
  </div>
</div>

{#snippet skillBar(title: string, percentage: number)}
  <div class="relative flex flex-row">
    <div class="flex-1 border border-secondary">
      <PercentBar {percentage} class="h-8 border-4 border-primary bg-secondary" />
    </div>
    <span class="absolute flex w-full h-full top-0 items-center pl-2 overflow-x-clip mix-blend-difference">{title}</span>
  </div>
{/snippet}
