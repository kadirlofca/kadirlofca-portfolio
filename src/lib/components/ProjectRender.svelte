<script lang="ts">
    import type { Project } from "$lib/types/project.type";

    interface Props {
        project: Project;
    }

    const { project }: Props = $props();
</script>

 {project.markdownContent}