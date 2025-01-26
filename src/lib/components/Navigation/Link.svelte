<!-- @component Link to an internal or external page. Tailwind group is "group/link". -->

<script lang="ts">
  interface Props {
    href: string;
    newTab?: boolean;
    class?: string;
    children?: any;
  }

  const { href, newTab = false, class: className, children }: Props = $props();
</script>

<a {href} rel={newTab ? "noopener noreferrer" : ""} target={newTab ? "_blank" : "_self"} class={className}>
  {@render children?.()}
</a>
