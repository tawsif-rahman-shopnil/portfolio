<script lang="ts">
	import { independentApps, projects, profile } from '$lib/data/resume';
	import SectionHeading from './SectionHeading.svelte';
	import BlurFade from '$lib/components/ui/BlurFade.svelte';
	import BorderBeam from '$lib/components/ui/BorderBeam.svelte';
	import MagicCard from '$lib/components/ui/MagicCard.svelte';
	import Github from '@lucide/svelte/icons/github';
	import Sparkles from '@lucide/svelte/icons/sparkles';
</script>

<section id="projects" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
	<SectionHeading
		eyebrow="Independent Apps"
		title="Built, shipped & maintained solo"
		subtitle="AI-powered products I designed, developed, and published on my own — live on the stores right now."
	/>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each independentApps as app, i (app.name)}
			<BlurFade class="h-full" delay={0.15 + i * 0.1}>
				<div
					class="border-border/60 bg-card/50 relative h-full overflow-hidden rounded-2xl border p-7 md:p-8"
				>
					<BorderBeam size={80} duration={7} delay={i * 3.5} colorFrom="#00e5ff" colorTo="#2563eb" />

					<div class="flex items-center gap-2">
						<Sparkles class="size-4 text-cyan-400" />
						<p class="font-mono text-xs tracking-wider text-cyan-300 uppercase">{app.badge}</p>
					</div>

					<h3 class="font-display mt-4 text-2xl font-bold md:text-3xl">{app.name}</h3>
					<p class="text-muted-foreground mt-1 text-sm font-medium">{app.tagline}</p>

					<p class="text-muted-foreground mt-4 text-sm leading-relaxed text-pretty md:text-[15px]">
						{app.description}
					</p>

					<div class="mt-5 flex flex-wrap gap-2">
						{#each app.tech as tech (tech)}
							<span
								class="border-border/60 bg-secondary/40 text-muted-foreground rounded-full border px-3 py-1 font-mono text-xs"
							>
								{tech}
							</span>
						{/each}
					</div>

					<div class="mt-6 flex flex-wrap items-center gap-2.5">
						{#if app.appStore}
							<a
								href={app.appStore}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Download {app.name} on the App Store"
								class="transition-all hover:-translate-y-0.5 hover:opacity-90"
							>
								<img src="/images/app-store.svg" alt="Download on the App Store" class="h-9 w-auto" />
							</a>
						{/if}
						{#if app.playStore}
							<a
								href={app.playStore}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Get {app.name} on Google Play"
								class="transition-all hover:-translate-y-0.5 hover:opacity-90"
							>
								<img src="/images/google-play.svg" alt="Get it on Google Play" class="h-9 w-auto" />
							</a>
						{/if}
					</div>
				</div>
			</BlurFade>
		{/each}
	</div>

	<div class="mt-24 md:mt-32">
		<SectionHeading
			eyebrow="Selected Work"
			title="Projects I've shipped professionally"
			subtitle="Platforms and apps built for United Group, Gazi Group, First Capital Securities, and more."
		/>

		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project, i (project.name)}
				<BlurFade class="h-full" delay={0.1 + (i % 3) * 0.08}>
					<MagicCard
						class="h-full rounded-2xl border border-border/60"
						gradientColor="#0c1e2e"
						gradientFrom="#0ea5e9"
						gradientTo="#22d3ee"
					>
						<div class="flex h-full flex-col p-6">
							<h3 class="font-display text-lg font-bold">{project.name}</h3>
							<p class="mt-0.5 text-xs font-medium tracking-wide text-cyan-300/90 uppercase">
								{project.tagline}
							</p>
							<p class="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed text-pretty">
								{project.description}
							</p>

							<div class="mt-4 flex flex-wrap gap-1.5">
								{#each project.tech as tech (tech)}
									<span
										class="bg-secondary/50 text-muted-foreground rounded-md px-2 py-0.5 font-mono text-[11px]"
									>
										{tech}
									</span>
								{/each}
							</div>

							{#if project.appStore || project.playStore}
								<div class="border-border/60 mt-4 flex items-center gap-2.5 border-t pt-3.5">
									{#if project.appStore}
										<a
											href={project.appStore}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Download {project.name} on the App Store"
											class="transition-all hover:-translate-y-0.5 hover:opacity-90"
										>
											<img src="/images/app-store.svg" alt="Download on the App Store" class="h-8 w-auto" />
										</a>
									{/if}
									{#if project.playStore}
										<a
											href={project.playStore}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Get {project.name} on Google Play"
											class="transition-all hover:-translate-y-0.5 hover:opacity-90"
										>
											<img src="/images/google-play.svg" alt="Get it on Google Play" class="h-8 w-auto" />
										</a>
									{/if}
								</div>
							{/if}
						</div>
					</MagicCard>
				</BlurFade>
			{/each}
		</div>

		<BlurFade delay={0.2}>
			<p class="text-muted-foreground mt-10 text-center text-sm">
				More on
				<a
					href={profile.socials.github}
					target="_blank"
					rel="noopener noreferrer"
					class="text-foreground inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline"
				>
					<Github class="size-3.5" /> GitHub
				</a>
			</p>
		</BlurFade>
	</div>
</section>
