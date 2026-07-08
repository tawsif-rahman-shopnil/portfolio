<script lang="ts">
	import { experience } from '$lib/data/resume';
	import SectionHeading from './SectionHeading.svelte';
	import BlurFade from '$lib/components/ui/BlurFade.svelte';
</script>

<section id="experience" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
	<SectionHeading
		eyebrow="Experience"
		title="Where I've worked"
		subtitle="2+ years shipping products used by conglomerates, restaurants, hospitals, and securities firms across Bangladesh."
	/>

	<div class="relative space-y-10 md:space-y-12">
		<div
			class="via-border absolute top-2 bottom-2 left-[7px] w-px bg-linear-to-b from-cyan-500/60 to-transparent md:left-[9px]"
		></div>

		{#each experience as job, i (job.title + job.period)}
			<BlurFade delay={0.15 + i * 0.1}>
				<article class="relative pl-10 md:pl-14">
					<span
						class="border-background absolute top-1.5 left-0 flex size-4 items-center justify-center rounded-full border-2 bg-cyan-500 md:size-5"
					>
						<span class="size-1.5 rounded-full bg-white/80"></span>
					</span>

					<p class="text-muted-foreground font-mono text-xs tracking-wider uppercase">
						{job.period} · {job.type}
					</p>
					<h3 class="font-display mt-2 text-xl font-bold md:text-2xl">
						{job.title}
						<span class="text-muted-foreground font-normal">@</span>
						<span class="text-cyan-300">{job.company}</span>
					</h3>
					<p class="text-muted-foreground mt-1 text-sm">{job.location}</p>

					<ul class="mt-4 space-y-2.5">
						{#each job.highlights as highlight (highlight)}
							<li class="text-muted-foreground flex gap-3 text-sm leading-relaxed md:text-[15px]">
								<span class="mt-2 size-1 shrink-0 rounded-full bg-cyan-400/70"></span>
								<span class="text-pretty">{highlight}</span>
							</li>
						{/each}
					</ul>

					<div class="mt-4 flex flex-wrap gap-2">
						{#each job.tech as tech (tech)}
							<span
								class="border-border/60 bg-secondary/40 text-muted-foreground rounded-full border px-3 py-1 font-mono text-xs"
							>
								{tech}
							</span>
						{/each}
					</div>
				</article>
			</BlurFade>
		{/each}
	</div>
</section>
