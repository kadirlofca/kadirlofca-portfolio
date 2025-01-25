<script lang="ts">
  import "../app.css";
  import Profile from "$lib/components/Profile.svelte";
  import Constrict from "$lib/components/Constrict.svelte";
  let { children } = $props();
</script>

<div class="h-svh overflow-y-hidden bg-primary text-primary-foreground font-dist">
  <Constrict class="flex flex-col md:flex-row mx-auto">
    <Profile />
    {@render children()}
  </Constrict>
</div>
