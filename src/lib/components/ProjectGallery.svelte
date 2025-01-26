<script lang="ts">
  import ProjectPreview from "./ProjectPreview.svelte";
  import ProjectFilter from "./ProjectFilter.svelte";
  import { onMount } from "svelte";

  let scrollableDiv: HTMLDivElement;

  function makeProjectGalleryScrollableFromAnywhere() {
    const handleWheel = (e: WheelEvent) => {
      if (scrollableDiv) {
        scrollableDiv.scrollTop += e.deltaY * 0.2;
        console.log(scrollableDiv.scrollTop);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
  }

  onMount(() => {
    makeProjectGalleryScrollableFromAnywhere();
  });
</script>

<div class="h-full">
  <p class="mb-2 text-xs text-secondary/50">PROJECTS</p>
  <ProjectFilter />
  <div bind:this={scrollableDiv} class="flex flex-col gap-4 w-full h-[90%] overflow-y-scroll mt-4 border-t border-secondary">
    <ProjectPreview title="Fox Flip" shortDescription="A short description of the project." />
    <ProjectPreview title="Fox Flip" shortDescription="A short description of the project." />
    <ProjectPreview title="Fox Flip" shortDescription="A short description of the project." />
    <ProjectPreview title="Fox Flip" shortDescription="A short description of the project." />
    <ProjectPreview title="Fox Flip" shortDescription="A short description of the project." />
    <ProjectPreview title="Fox Flip" shortDescription="A short description of the project." />
    <ProjectPreview title="Fox Flip" shortDescription="A short description of the project." />
  </div>
</div>
