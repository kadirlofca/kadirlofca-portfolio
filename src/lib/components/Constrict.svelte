<script lang="ts">
  import { cn } from "$lib/scripts/cn";
  import type { Snippet } from "svelte";

  interface Props {
    class?: string;
    children?: Snippet<[]>;
  }

  const { class: className, children }: Props = $props();
</script>

<div class={cn("max-w-screen-lg", className)}>
  {@render children?.()}
</div>
