<script lang="ts">
    import type { Project } from "$lib/types/project.type";

    interface Props {
        project: Project;
        onBackButtonClick: any;
    }

    const { project, onBackButtonClick }: Props = $props();
</script>

<button onclick={onBackButtonClick}>
    back
</button>

 {project.markdownContent}