<script lang="ts">
	import { education, certifications, leadership } from '$lib/data/resume';
	import SectionHeading from './SectionHeading.svelte';
	import BlurFade from '$lib/components/ui/BlurFade.svelte';
	import GraduationCap from '@lucide/svelte/icons/graduation-cap';
	import Award from '@lucide/svelte/icons/award';
	import Users from '@lucide/svelte/icons/users';
</script>

<section id="education" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
	<SectionHeading
		eyebrow="Background"
		title="Education, certifications & leadership"
	/>

	<div class="grid gap-5 md:grid-cols-3">
		<BlurFade delay={0.1}>
			<div class="border-border/60 bg-card/50 h-full rounded-2xl border p-6">
				<div
					class="flex size-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300"
				>
					<GraduationCap class="size-5" />
				</div>
				<h3 class="font-display mt-4 text-lg font-bold">{education.degree}</h3>
				<p class="text-muted-foreground mt-2 text-sm leading-relaxed">
					{education.institution}
				</p>
				<p class="mt-2 font-mono text-xs tracking-wider text-cyan-300">Class of {education.year}</p>
				<div class="mt-4 flex flex-wrap gap-1.5">
					{#each education.coursework as course (course)}
						<span
							class="bg-secondary/50 text-muted-foreground rounded-md px-2 py-0.5 font-mono text-[11px]"
						>
							{course}
						</span>
					{/each}
				</div>
			</div>
		</BlurFade>

		<BlurFade delay={0.2}>
			<div class="border-border/60 bg-card/50 h-full rounded-2xl border p-6">
				<div
					class="flex size-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300"
				>
					<Award class="size-5" />
				</div>
				<h3 class="font-display mt-4 text-lg font-bold">Certifications</h3>
				<ul class="mt-3 space-y-2.5">
					{#each certifications as cert (cert.name)}
						<li class="flex items-baseline justify-between gap-3 text-sm">
							<span class="text-muted-foreground">{cert.name}</span>
							<span class="text-muted-foreground/70 shrink-0 font-mono text-xs">{cert.issuer}</span>
						</li>
					{/each}
				</ul>
			</div>
		</BlurFade>

		<BlurFade delay={0.3}>
			<div class="border-border/60 bg-card/50 h-full rounded-2xl border p-6">
				<div
					class="flex size-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300"
				>
					<Users class="size-5" />
				</div>
				<h3 class="font-display mt-4 text-lg font-bold">Leadership</h3>
				<ul class="mt-3 space-y-4">
					{#each leadership as item (item.role)}
						<li>
							<p class="text-sm font-medium">{item.role}</p>
							<p class="text-muted-foreground mt-0.5 text-sm">{item.org}</p>
							<p class="text-muted-foreground/70 mt-0.5 font-mono text-xs">{item.period}</p>
						</li>
					{/each}
				</ul>
			</div>
		</BlurFade>
	</div>
</section>
