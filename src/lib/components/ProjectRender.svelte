<script lang="ts">
    import type { Project } from "$lib/types/project.type";

    interface Props {
        project: Project;
        onBackButtonClick: any;
    }

    const { project, onBackButtonClick }: Props = $props();
</script>

<div class="flex flex-row w-full h-20 gap-4">
    <div class="flex-1 flex w-full h-20 p-2 bg-secondary text-secondary-foreground">
        <div class="prose flex w-full">
            <h1>{project.title}</h1>
        </div>
    </div>

    <button onclick={onBackButtonClick} aria-label="Go back to project gallery." class="h-16 aspect-square p-2 text-primary-foreground border border-primary-foreground hover:bg-secondary hover:text-secondary-foreground hover:cursor-pointer">
        X
    </button>
</div>

<div class="prose prose-h2:mb-0 max-w-full w-full p-2 bg-secondary">
    {@html project.renderedMarkdownContent}
</div>