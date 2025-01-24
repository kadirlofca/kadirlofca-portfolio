<script lang="ts">
    let className: string = "";
    export { className as class };

    import { cn } from "$lib/scripts/cn";
</script>

<div class={cn("max-w-screen-md", className)}>
    <slot />
</div>