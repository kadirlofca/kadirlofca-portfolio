<script lang="ts">
  import ProjectPreview from "./ProjectPreview.svelte";
  import ProjectFilter from "./ProjectFilter.svelte";
  import { onMount } from "svelte";
  import type { Project } from "$lib/types/project.type";

  interface Props {
    publishedProjects: Project[];
  }

  const { publishedProjects }: Props = $props();

  let scrollableDiv: HTMLDivElement;

  function makeProjectGalleryScrollableFromAnywhere() {
    const handleWheel = (e: WheelEvent) => {
      if (scrollableDiv) {
        scrollableDiv.scrollTop += e.deltaY * 0.75;
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
  }

  onMount(() => {
    makeProjectGalleryScrollableFromAnywhere();
  });
</script>

<div class="h-full">
  <p class="mb-2 text-xs text-secondary/50">PROJECTS</p>
  <ProjectFilter />
  <div bind:this={scrollableDiv} class="flex flex-col gap-4 w-full h-[92%] overflow-y-scroll mt-4 border-t border-secondary">
    {#each publishedProjects as project}
      <ProjectPreview title={project.title} description={project.description} projectDate={project.projectDate} tags={project.tags} />
    {/each}
  </div>
</div>
