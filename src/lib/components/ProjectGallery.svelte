<script lang="ts">
  import ProjectPreview from "./ProjectPreview.svelte";
  import ProjectFilter from "./ProjectFilter.svelte";
  import ProjectRender from "./ProjectRender.svelte";
  import { onMount } from "svelte";
  import type { Project } from "$lib/types/project.type";

  interface Props {
    publishedProjects: Project[];
  }

  const { publishedProjects }: Props = $props();
  let selectedProject: Project | undefined = $state();
  let scrollableDiv: HTMLDivElement | undefined = $state();

  const handleWheel = (e: WheelEvent) => {
      if (scrollableDiv) {
        scrollableDiv.scrollTop += e.deltaY * 0.75;
        e.preventDefault();
      }
  };
</script>

<svelte:window on:wheel={handleWheel} />

<div class="h-full">
  <p class="mb-2 text-xs text-secondary/50">PROJECTS</p>
  {#if selectedProject == undefined}
    <ProjectFilter />
    <div bind:this={scrollableDiv} class="flex flex-col gap-4 w-full h-[88%] overflow-y-scroll mt-4">
      {#each publishedProjects as project}
        <ProjectPreview onClick={() => selectedProject = project} title={project.title} description={project.description} projectDate={project.projectDate} thumbnailFileName={project.thumbnailFileName} tags={project.tags} />
      {/each}
    </div>
  {:else}
    <ProjectRender onBackButtonClick={() => selectedProject = undefined} project={selectedProject} />
  {/if}
</div>
