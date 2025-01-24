<!-- @component Link to an internal or external page. Tailwind group is "group/link". -->

<script lang="ts">
    interface Props {
        href: string,
        newTab?: boolean,
        class?: string
        children?: any
    }

    const { href, newTab = false, class: className, children }: Props = $props();
</script>

<a href={href} rel={newTab ? "noopener noreferrer" : ""} class={className}>
    {@render children?.()}
</a>