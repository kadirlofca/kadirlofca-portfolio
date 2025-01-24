<script lang="ts">
  import "../app.css";
  import Profile from "$lib/components/Profile.svelte";
  let { children } = $props();
</script>

<div class="flex flex-col-reverse md:flex-row h-svh  bg-dist-0 text-dist-0-foreground font-dist">
  <div class="flex-1">
    {@render children()}
  </div>
  <Profile />
</div>
