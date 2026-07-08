<script lang="ts">
	import BlurFade from '$lib/components/ui/BlurFade.svelte';

	interface Props {
		eyebrow: string;
		title: string;
		subtitle?: string;
	}

	let { eyebrow, title, subtitle }: Props = $props();
</script>

<BlurFade delay={0.1} class="mb-12 md:mb-16">
	<p class="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase">{eyebrow}</p>
	<h2 class="font-display mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
		{title}
	</h2>
	{#if subtitle}
		<p class="text-muted-foreground mt-3 max-w-2xl text-base text-pretty">{subtitle}</p>
	{/if}
</BlurFade>
