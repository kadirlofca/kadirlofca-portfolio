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
        ...rest
    }: HTMLButtonAttributes & Props = $props();
</script>
  
<button {...rest} class={cn("inline w-fit border", className)}>
    {title}
</button>