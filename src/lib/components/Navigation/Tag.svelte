<script lang="ts">
	import { cn } from "$lib/scripts/cn";
    import type { HTMLButtonAttributes } from "svelte/elements";

    interface Props {
        class: string;
        title: string;
    }

    const {
        class: className,
        title,
    }: Props = $props();
</script>
  
<div class={cn("inline w-fit border", className)}>
    {title}
</div>