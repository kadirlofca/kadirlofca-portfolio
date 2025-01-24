<script lang="ts">
  import Link from "./Link.svelte";
  import Socials from "$lib/data/socials.json";
  import Personal from "$lib/data/personal.json";
  import Headshot from "$lib/images/headshot.png";
  import PercentBar from "./PercentBar.svelte";
  import getSkillDistribution from "$lib/scripts/getSkillDistribution";
</script>

<div class="flex flex-col max-w-64 w-max p-dist-0 gap-8">
  <!-- NAME -->
  <div class="p-dist-1 bg-dist-0-foreground">
    <h1 class="text-3xl text-center font-semibold text-dist-2-foreground">{Personal.fullName}</h1>
  </div>

  <!-- SOCIALS -->
  <div class="flex gap-2">
    {#each Socials.socials as social}
      <div class="flex-1 text-center bg-dist-0-foreground">
        <Link href={social.href} class="text-sm text-dist-2-foreground">{social.title}</Link>
      </div>
    {/each}
  </div>

  <!-- PICTURE -->
  <img src={Headshot} alt="Kadir Lofca." class="w-max aspect-square border border-dist-0-foreground saturate-[30%]" />

  <!-- SKILLS -->
  <div class="flex flex-col gap-4">
    {#each getSkillDistribution() as skill}
      {@render skillBar(skill, 60)}
    {/each}
  </div>
</div>

{#snippet skillBar(title: string, percentage: number)}
  <div class="relative flex flex-row">
    <div class="flex-1 border border-dist-0-foreground">
      <PercentBar {percentage} class="h-8 ml-auto bg-dist-0-foreground" />
    </div>
    <span class="absolute flex w-full h-full top-0 items-center pl-dist-1 overflow-x-clip mix-blend-difference">{title}</span>
  </div>
{/snippet}
