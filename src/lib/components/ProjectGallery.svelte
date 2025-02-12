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

  function viewProject(project: Project) {
    selectedProject = project;
  }

  function viewGallery(){
    selectedProject = undefined;
  }

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
  {#if selectedProject == undefined}
  <ProjectFilter />
  <div bind:this={scrollableDiv} class="flex flex-col gap-4 w-full h-[92%] overflow-y-scroll mt-4 border-t border-secondary">
    {#each publishedProjects as project}
      <ProjectPreview onClick={viewProject(project)} title={project.title} description={project.description} projectDate={project.projectDate} thumbnailFileName={project.thumbnailFileName} tags={project.tags} />
    {/each}
  </div>
  {:else}
    <ProjectRender project={selectedProject} />
  {/if}
</div>
