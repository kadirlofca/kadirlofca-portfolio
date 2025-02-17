<script lang="ts">
  import Link from "./Navigation/Link.svelte";
  import Socials from "$lib/data/kadirlofca-socials.json";
  import Headshot from "$lib/images/headshot.png";
  import PercentBar from "./Information/PercentBar.svelte";
  import Credits from "./Information/Credits.svelte";
  import type { Skill } from "$lib/types/skill.type";

  interface Props {
    career: any,
    skills: Skill[]
  }

  const { career, skills }: Props = $props();
</script>

<div class="flex flex-row md:flex-col p-4 gap-4">
  <!-- ABOUT ME -->
  <div class="max-w-72 w-max">
    <p class="mb-2 text-xs text-secondary/50">ABOUT ME</p>

    <div class="flex flex-col gap-4">
      <div class="flex h-16 bg-secondary">
        <h1 class="m-auto text-3xl font-semibold text-secondary-foreground">{career.fullName}</h1>
      </div>

      <!-- PICTURE -->
      <img src={Headshot} alt="Kadir Lofca." class="w-max aspect-square border border-secondary" />

      <!-- DESCRIPTION -->
      <div class="p-2 bg-secondary text-sm text-pretty font-medium text-secondary-foreground">
        <p>{career.description}</p>
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
            <Link
              newTab
              href={social.href}
              class="flex-1 border border-primary-foreground text-center text-sm text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
            >
              {social.title}
            </Link>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <!-- SKILL DISTRIBUTION -->
  <div class="md:mt-2 w-full">
    <p class="mb-2 text-xs text-secondary/50">SKILLS</p>
    <!-- <div class="flex flex-col gap-2">
      {#each skills as skill}
        {@render skillBar(skill.title, skill.percentage)}
      {/each} -->
    <div class="flex flex-wrap max-w-72 gap-2">
      {#each skills as skill}
        <p style={`--percentage: ${skill.percentage}%`} class="flex-[var(--percentage)] p-1 text-nowrap text-sm text-center font-medium text-secondary-foreground bg-secondary">{skill.title}</p>
      {/each}
    </div>
    <div class="mt-2 text-center">
      <Credits />
    </div>
  </div>
</div>

<!-- {#snippet skillBar(title: string, percentage: number)}
  <div class="group relative flex flex-row">
    <div class="flex-1 border border-secondary group-hover:bg-secondary">
      <PercentBar {percentage} class="h-8 border-4 border-primary bg-secondary group-hover:border-0" />
    </div>
    <span class="absolute flex w-full h-full top-0 items-center pl-2 overflow-x-clip text-sm mix-blend-difference">{title}</span>
  </div>
{/snippet} -->
