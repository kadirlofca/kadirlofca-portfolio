<script lang="ts">
  import ProjectPreview from "./ProjectPreview.svelte";
  import ProjectFilter from "./ProjectFilter.svelte";
  import ProjectRender from "./ProjectRender.svelte";
  import type { Project } from "$lib/types/project.type";

  interface Props {
    publishedProjects: Project[];
  }

  const { publishedProjects }: Props = $props();
  let selectedProject: Project | undefined = $state();
  let scrollableDiv: HTMLDivElement | undefined = $state();

  const handleWheel = (e: WheelEvent) => {
      // let isSmallScreen: boolean = window.innerWidth <= 1152;

      // if (!isSmallScreen && scrollableDiv) {
      //   scrollableDiv.scrollTop += e.deltaY;
      //   e.preventDefault();
      // }
  };
</script>

<!-- <svelte:window on:wheel={handleWheel} /> -->

<div class="h-full">
  <p class="mb-2 text-xs text-secondary/50">PROJECTS</p>
  {#if selectedProject == undefined}
    <!-- <ProjectFilter /> -->
    <div bind:this={scrollableDiv} class="flex flex-col gap-4 w-full h-[95%] lg:overflow-y-scroll mt-2"> <!-- make mt-4 instead if using ProjectFilter -->
      {#each publishedProjects as project}
        <ProjectPreview onClick={() => selectedProject = project} title={project.title} description={project.description} projectDate={project.projectDate} slug={project.slug} tags={project.tags} />
      {/each}
    </div>
  {:else}
    <div bind:this={scrollableDiv} class="h-[95%] overflow-y-scroll">
      <ProjectRender onBackButtonClick={() => selectedProject = undefined} project={selectedProject} />
    </div>
  {/if}
</div>
