<script lang="ts">
	import { profile, stats } from '$lib/data/resume';
	import SectionHeading from './SectionHeading.svelte';
	import BlurFade from '$lib/components/ui/BlurFade.svelte';
	import NumberTicker from '$lib/components/ui/NumberTicker.svelte';
	import Briefcase from '@lucide/svelte/icons/briefcase';
</script>

<section id="about" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
	<SectionHeading
		eyebrow="About"
		title="Engineer across the full product lifecycle"
		subtitle="From architecture and API design to deployment and post-release support."
	/>

	<div class="grid gap-12 md:grid-cols-2 md:gap-16">
		<div class="space-y-5">
			<BlurFade delay={0.15}>
				<p class="text-muted-foreground text-base leading-relaxed text-pretty md:text-lg">
					{profile.summary}
				</p>
			</BlurFade>
			<BlurFade delay={0.25}>
				<p class="text-muted-foreground text-base leading-relaxed text-pretty md:text-lg">
					I care about <span class="text-foreground font-medium">clean, maintainable code</span> and
					<span class="text-foreground font-medium">real-world reliability</span> — apps that hold up
					when actual riders, cashiers, doctors, and sales officers depend on them every day.
				</p>
			</BlurFade>
			<BlurFade delay={0.35}>
				<div
					class="border-border/60 bg-card/50 mt-8 inline-flex items-center gap-3 rounded-xl border px-4 py-3"
				>
					<span class="relative flex size-2.5">
						<span
							class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
						></span>
						<span class="relative inline-flex size-2.5 rounded-full bg-emerald-500"></span>
					</span>
					<span class="text-sm">
						<span class="text-muted-foreground">Currently</span>
						<span class="font-medium">Junior Software Engineer @ OSL, United Group</span>
					</span>
					<Briefcase class="text-muted-foreground size-4" />
				</div>
			</BlurFade>
		</div>

		<div class="grid grid-cols-2 gap-4">
			{#each stats as stat, i (stat.label)}
				<BlurFade class="h-full" delay={0.15 + i * 0.1}>
					<div
						class="border-border/60 bg-card/50 hover:border-border h-full rounded-2xl border p-6 transition-colors"
					>
						<NumberTicker
							value={stat.value}
							suffix={stat.suffix}
							class="font-display text-4xl font-bold md:text-5xl"
						/>
						<p class="text-muted-foreground mt-2 text-sm">{stat.label}</p>
					</div>
				</BlurFade>
			{/each}
		</div>
	</div>
</section>
