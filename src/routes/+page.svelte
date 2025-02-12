<script lang="ts">
  import ProjectGallery from "$lib/components/ProjectGallery.svelte";
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<div class="w-full h-svh p-4 pl-0 pb-2">
  <ProjectGallery publishedProjects={data.projects} />
</div>