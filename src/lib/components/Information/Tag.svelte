<script lang="ts">
	import { cn } from "$lib/scripts/cn";

    interface Props {
        class: string;
        title: string;
    }

    const {
        class: className,
        title,
    }: Props = $props();
</script>
  
<div class={cn("inline w-fit", className)}>
    {title}
</div>