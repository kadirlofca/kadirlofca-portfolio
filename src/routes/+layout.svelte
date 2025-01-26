<script lang="ts">
  import "../app.css";
  import Profile from "$lib/components/Profile.svelte";
  import Constrict from "$lib/components/Constrict.svelte";
  let { children } = $props();
</script>

<div class="max-h-screen text-primary-foreground font-dist bg-primary">
  <Constrict class="flex flex-col md:flex-row mx-auto">
    <Profile />
    {@render children()}
  </Constrict>
</div>
