<script lang="ts">
	import { skillCategories } from '$lib/data/resume';
	import SectionHeading from './SectionHeading.svelte';
	import BlurFade from '$lib/components/ui/BlurFade.svelte';
	import Marquee from '$lib/components/ui/Marquee.svelte';
	import {
		siFlutter,
		siDart,
		siReact,
		siNextdotjs,
		siTypescript,
		siJavascript,
		siTailwindcss,
		siMui,
		siRedux,
		siReactquery,
		siLaravel,
		siPhp,
		siNodedotjs,
		siNestjs,
		siExpress,
		siFastapi,
		siMysql,
		siPostgresql,
		siDocker,
		siGithubactions,
		siGit,
		siGooglegemini,
		siClaude,
		siGithubcopilot,
		siFirebase,
		siSupabase,
		siJsonwebtokens,
		siGithub,
		type SimpleIcon
	} from 'simple-icons';

	// Brand hexes that are too dark for the dark background get lifted to near-white
	function logoColor(icon: SimpleIcon): string {
		const r = parseInt(icon.hex.slice(0, 2), 16);
		const g = parseInt(icon.hex.slice(2, 4), 16);
		const b = parseInt(icon.hex.slice(4, 6), 16);
		const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
		return luminance < 0.25 ? '#e8e8e8' : `#${icon.hex}`;
	}

	const logoRow1: SimpleIcon[] = [
		siFlutter,
		siDart,
		siReact,
		siNextdotjs,
		siTypescript,
		siJavascript,
		siTailwindcss,
		siMui,
		siRedux,
		siReactquery
	];

	const logoRow2: SimpleIcon[] = [
		siLaravel,
		siPhp,
		siNodedotjs,
		siNestjs,
		siExpress,
		siFastapi,
		siMysql,
		siPostgresql,
		siDocker,
		siGithubactions,
		siGit
	];

	const logoRow3: SimpleIcon[] = [
		siGooglegemini,
		siClaude,
		siGithubcopilot,
		siFirebase,
		siSupabase,
		siJsonwebtokens,
		siGithub
	];
</script>

{#snippet logoTile(icon: SimpleIcon)}
	<div
		class="border-border/60 bg-card/60 hover:border-cyan-500/40 mx-1 flex size-14 items-center justify-center rounded-2xl border transition-colors"
		title={icon.title}
		aria-label={icon.title}
	>
		<svg role="img" viewBox="0 0 24 24" class="size-7" fill={logoColor(icon)}>
			<path d={icon.path} />
		</svg>
	</div>
{/snippet}

<section id="skills" class="scroll-mt-24 py-24 md:py-32">
	<div class="mx-auto max-w-6xl px-6">
		<SectionHeading
			eyebrow="Skills"
			title="Tools I work with every day"
			subtitle="A full-stack toolkit spanning mobile, web, backend, databases, DevOps, and AI."
		/>

		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each skillCategories as category, i (category.title)}
				<BlurFade class="h-full" delay={0.1 + (i % 4) * 0.07}>
					<div
						class="border-border/60 bg-card/50 hover:border-cyan-500/40 h-full rounded-2xl border p-5 transition-colors"
					>
						<h3 class="font-display text-sm font-bold tracking-wide text-cyan-300 uppercase">
							{category.title}
						</h3>
						<ul class="mt-3 space-y-1.5">
							{#each category.skills as skill (skill)}
								<li class="text-muted-foreground text-sm">{skill}</li>
							{/each}
						</ul>
					</div>
				</BlurFade>
			{/each}
		</div>
	</div>

	<BlurFade delay={0.2}>
		<div class="relative mt-16 flex flex-col overflow-hidden">
			<Marquee pauseOnHover class="[--duration:35s]">
				{#each logoRow1 as icon (icon.title)}
					{@render logoTile(icon)}
				{/each}
			</Marquee>
			<Marquee reverse pauseOnHover class="[--duration:40s]">
				{#each logoRow2 as icon (icon.title)}
					{@render logoTile(icon)}
				{/each}
			</Marquee>
			<Marquee pauseOnHover class="[--duration:45s]">
				{#each logoRow3 as icon (icon.title)}
					{@render logoTile(icon)}
				{/each}
			</Marquee>
			<div
				class="from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r to-transparent"
			></div>
			<div
				class="from-background pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l to-transparent"
			></div>
		</div>
	</BlurFade>
</section>
