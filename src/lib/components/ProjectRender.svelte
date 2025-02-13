<script lang="ts">
    import type { Project } from "$lib/types/project.type";

    interface Props {
        project: Project;
        onBackButtonClick: any;
    }

    const { project, onBackButtonClick }: Props = $props();
</script>

<div class="flex flex-row w-full h-16 gap-4">
    <div class="flex-1 flex h-full p-2 bg-secondary text-secondary-foreground">
        <h1 class="text-3xl my-auto">{project.title}</h1>
    </div>

    <button onclick={onBackButtonClick} class="h-full aspect-square p-2 text-primary-foreground border border-primary-foreground hover:bg-secondary hover:text-secondary-foreground hover:cursor-pointer">
        X
    </button>
</div>
 {@html project.renderedMarkdownContent}