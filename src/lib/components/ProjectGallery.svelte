<script lang="ts">
  import ProjectPreview from "./ProjectPreview.svelte";
  import ProjectFilter from "./ProjectFilter.svelte";
  import { onMount } from "svelte";

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
    <ProjectPreview title="Fox Flip" shortDescription="A really cool and fun game that you should totally play :) Totally not biased" />
    <ProjectPreview title="Bird Fishing" shortDescription="A short description of the project." />
    <ProjectPreview title="You Are Not My Cat" shortDescription="A really cool and fun game that you should totally play :) Totally not biased" />
    <ProjectPreview title="Conjurants" shortDescription="A short description of the project." />
    <ProjectPreview title="I love you <3" shortDescription="Just a reminder that your girlfriend loves you!!! - Jordin" />
    <ProjectPreview title="Fox Flip" shortDescription="A short description of the project." />
    <ProjectPreview title="Fox Flip" shortDescription="A short description of the project." />
  </div>
</div>
