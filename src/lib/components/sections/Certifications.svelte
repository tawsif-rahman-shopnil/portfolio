<script lang="ts">
	import { certifications, profile, type Certification } from '$lib/data/resume';
	import SectionHeading from './SectionHeading.svelte';
	import BlurFade from '$lib/components/ui/BlurFade.svelte';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	import Calendar from '@lucide/svelte/icons/calendar';
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import { siHackerrank, siCoursera, siUdemy, type SimpleIcon } from 'simple-icons';

	interface PlatformStyle {
		icon: SimpleIcon;
		logoFill: string;
		text: string;
		chip: string;
		preview: string;
		hoverBorder: string;
	}

	// Brand hexes lifted where too dark for the dark background
	const platforms: Record<Certification['issuer'], PlatformStyle> = {
		HackerRank: {
			icon: siHackerrank,
			logoFill: '#00ea64',
			text: 'text-emerald-300',
			chip: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-300',
			preview: 'bg-linear-to-br from-emerald-400/15 via-transparent to-transparent',
			hoverBorder: 'hover:border-emerald-400/40'
		},
		Coursera: {
			icon: siCoursera,
			logoFill: '#4f8df9',
			text: 'text-blue-300',
			chip: 'border-blue-400/25 bg-blue-400/10 text-blue-300',
			preview: 'bg-linear-to-br from-blue-400/15 via-transparent to-transparent',
			hoverBorder: 'hover:border-blue-400/40'
		},
		Udemy: {
			icon: siUdemy,
			logoFill: '#b563f5',
			text: 'text-purple-300',
			chip: 'border-purple-400/25 bg-purple-400/10 text-purple-300',
			preview: 'bg-linear-to-br from-purple-400/15 via-transparent to-transparent',
			hoverBorder: 'hover:border-purple-400/40'
		}
	};
</script>

<section id="certifications" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
	<SectionHeading
		eyebrow="Credentials"
		title="Certifications"
		subtitle="Verified credentials from HackerRank, Coursera, and Udemy — every card opens the live certificate on the issuing platform."
	/>

	<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each certifications as cert, i (cert.url)}
			<BlurFade delay={0.1 + (i % 3) * 0.08} class="h-full">
				{@const p = platforms[cert.issuer]}
				<a
					href={cert.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="View {cert.name} credential on {cert.issuer}"
					class="group border-border/60 bg-card/50 flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 {p.hoverBorder}"
				>
					<!-- Credential preview (as it appears on the platform) -->
					<div class="border-border/60 relative border-b p-5 {p.preview}">
						<div class="flex items-center justify-between gap-3">
							<span class="inline-flex items-center gap-2">
								<svg role="img" viewBox="0 0 24 24" class="size-4.5" fill={p.logoFill}>
									<path d={p.icon.path} />
								</svg>
								<span class="text-sm font-semibold tracking-tight {p.text}">{p.icon.title}</span>
							</span>
							<span
								class="inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium {p.chip}"
							>
								<BadgeCheck class="size-3" /> Verified
							</span>
						</div>

						<div class="py-7 text-center">
							<p class="text-muted-foreground/70 font-mono text-[10px] tracking-[0.3em] uppercase">
								Certificate
							</p>
							<p
								class="font-display mx-auto mt-2 max-w-[26ch] text-lg leading-snug font-bold text-balance"
							>
								{cert.name}
							</p>
							<p class="text-muted-foreground mt-2.5 text-xs">
								Awarded to <span class="text-foreground font-medium">{profile.name}</span>
							</p>
						</div>
					</div>

					<!-- Meta -->
					<div class="flex flex-1 flex-col p-5">
						<p class="text-muted-foreground text-sm leading-relaxed text-pretty">{cert.summary}</p>
						<div class="mt-auto flex items-center justify-between gap-3 pt-4">
							<span class="text-muted-foreground/70 inline-flex items-center gap-1.5 font-mono text-xs">
								<Calendar class="size-3.5" />
								{cert.issued}
							</span>
							<span class="inline-flex items-center gap-1 text-xs font-medium {p.text}">
								View credential
								<ExternalLink
									class="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
								/>
							</span>
						</div>
					</div>
				</a>
			</BlurFade>
		{/each}
	</div>
</section>
