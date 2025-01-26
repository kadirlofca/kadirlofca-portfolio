<script lang="ts">
  import { cn } from "$lib/scripts/cn";
  import type { Snippet } from "svelte";

  interface Props {
    percentage: number;
    class?: string;
    children?: Snippet<[]>;
  }

  let { percentage, class: className, children }: Props = $props();
</script>

<div style={`--percentage: ${percentage}%`} class={cn("max-w-[var(--percentage)] bg-gray-500", className)}>
  {@render children?.()}
</div>
