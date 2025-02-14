<script lang="ts">
  import "../app.css";
  import Profile from "$lib/components/Profile.svelte";
  import Constrict from "$lib/components/Layout/Constrict.svelte";
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
</script>

<div class="text-primary-foreground font-dist bg-primary">
  <Constrict class="flex flex-col md:flex-row mx-auto">
    <Profile skills={data.skills} career={data.career} />
    {@render children()}
  </Constrict>
</div>
