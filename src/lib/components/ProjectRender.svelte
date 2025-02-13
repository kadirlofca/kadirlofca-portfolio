<script lang="ts">
    import type { Project } from "$lib/types/project.type";

    interface Props {
        project: Project;
        onBackButtonClick: any;
    }

    const { project, onBackButtonClick }: Props = $props();
</script>

<div class="flex flex-row w-full h-20 gap-4">
    <div class="flex-1 flex h-20 p-2 bg-secondary text-secondary-foreground">
        <h1 class="text-5xl">{project.title}</h1>
    </div>

    <button onclick={onBackButtonClick} class="h-16 aspect-square p-2 text-primary-foreground border border-primary-foreground hover:bg-secondary hover:text-secondary-foreground hover:cursor-pointer">
        X
    </button>
</div>

<div class="prose max-w-full w-full p-4 bg-secondary text-secondary-foreground">
    {@html project.renderedMarkdownContent}
</div>