<script lang="ts">
  import ProjectPreview from "./ProjectPreview.svelte";
  import ProjectFilter from "./ProjectFilter.svelte";
  import { onMount } from "svelte";

  let scrollableDiv: HTMLDivElement;

  onMount(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollableDiv) {
        scrollableDiv.scrollTop = scrollableDiv.scrollTop + e.deltaY;
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel);
  });
</script>

<div class="w-full h-svh">
  <p class="mb-2 text-xs text-secondary/50">PROJECTS</p>
  <ProjectFilter />
  <div bind:this={scrollableDiv} class="flex flex-col gap-4 w-full h-svh mt-4 overflow-y-scroll">
    <ProjectPreview title="Fox Flip" shortDescription="A short description of the project." />
    <ProjectPreview title="Fox Flip" shortDescription="A short description of the project." />
    <ProjectPreview title="Fox Flip" shortDescription="A short description of the project." />
    <ProjectPreview title="Fox Flip" shortDescription="A short description of the project." />
    <ProjectPreview title="Fox Flip" shortDescription="A short description of the project." />
    <ProjectPreview title="Fox Flip" shortDescription="A short description of the project." />
  </div>
</div>
