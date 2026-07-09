<script lang="ts">
	import { profile } from '$lib/data/resume';
	import FlickeringGrid from '$lib/components/ui/FlickeringGrid.svelte';
	import AnimatedShinyText from '$lib/components/ui/AnimatedShinyText.svelte';
	import WordRotate from '$lib/components/ui/WordRotate.svelte';
	import LogoWordmark from './LogoWordmark.svelte';
	import ShimmerButton from '$lib/components/ui/ShimmerButton.svelte';
	import BlurFade from '$lib/components/ui/BlurFade.svelte';
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Youtube from '@lucide/svelte/icons/youtube';
	import Facebook from '@lucide/svelte/icons/facebook';
	import Mail from '@lucide/svelte/icons/mail';
	import Download from '@lucide/svelte/icons/download';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import MapPin from '@lucide/svelte/icons/map-pin';

	const socials = [
		{ label: 'GitHub', href: profile.socials.github, icon: Github },
		{ label: 'LinkedIn', href: profile.socials.linkedin, icon: Linkedin },
		{ label: 'YouTube', href: profile.socials.youtube, icon: Youtube },
		{ label: 'Facebook', href: profile.socials.facebook, icon: Facebook },
		{ label: 'Email', href: `mailto:${profile.email}`, icon: Mail }
	];
</script>

<section id="top" class="relative flex min-h-svh items-center justify-center overflow-hidden">
	<!-- Background: flickering binary grid masked to a soft radial glow -->
	<div
		class="absolute inset-0 -z-10 mask-[radial-gradient(ellipse_80%_70%_at_50%_40%,#000_30%,transparent_75%)]"
	>
		<FlickeringGrid
			squareSize={12}
			gridGap={10}
			color="#0ea5e9"
			maxOpacity={0.18}
			flickerChance={0.1}
		/>
	</div>
	<div
		class="from-background pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t to-transparent"
	></div>

	<div class="mx-auto flex max-w-4xl flex-col items-center px-6 pt-28 pb-20 text-center">
		<BlurFade delay={0.1}>
			<div
				class="group border-border/60 bg-secondary/30 inline-flex items-center rounded-full border px-4 py-1.5 backdrop-blur-sm transition-all hover:bg-secondary/60"
			>
				<AnimatedShinyText class="inline-flex items-center gap-2 text-sm">
					<MapPin class="size-3.5" />
					{profile.location} · Open to opportunities
				</AnimatedShinyText>
			</div>
		</BlurFade>

		<BlurFade delay={0.2}>
			<h1 class="mt-8">
				<LogoWordmark line1Class="h-10 md:h-14" line2Class="h-13 md:h-[4.25rem]" />
			</h1>
		</BlurFade>

		<BlurFade delay={0.3}>
			<WordRotate
				words={profile.roles}
				as="h2"
				class="text-muted-foreground font-mono text-lg font-medium md:text-2xl"
				duration={2800}
			/>
		</BlurFade>

		<BlurFade delay={0.4}>
			<p class="text-muted-foreground mx-auto mt-4 max-w-2xl text-base text-pretty md:text-lg">
				I build mobile apps, web platforms, and backend systems with
				<span class="text-foreground font-medium">Flutter</span>,
				<span class="text-foreground font-medium">React</span>,
				<span class="text-foreground font-medium">Laravel</span> &
				<span class="text-foreground font-medium">Node.js</span> — and I've shipped
				<span class="text-foreground font-medium">AI-powered apps</span> used in production on the App
				Store and Google Play.
			</p>
		</BlurFade>

		<BlurFade delay={0.5}>
			<div class="mt-10 flex flex-wrap items-center justify-center gap-4">
				<a href="#projects">
					<ShimmerButton shimmerColor="#22d3ee" background="rgba(9, 9, 11, 1)" class="px-8">
						<span class="text-sm font-medium">Explore my work</span>
					</ShimmerButton>
				</a>
				<a
					href={profile.resumeUrl}
					download
					class="border-border bg-secondary/30 hover:bg-secondary/70 flex items-center gap-2 rounded-full border px-7 py-3 text-sm font-medium backdrop-blur-sm transition-colors"
				>
					<Download class="size-4" />
					Download resume
				</a>
			</div>
		</BlurFade>

		<BlurFade delay={0.6}>
			<div class="mt-10 flex items-center justify-center gap-2">
				{#each socials as social (social.label)}
					<a
						href={social.href}
						target={social.href.startsWith('mailto') ? undefined : '_blank'}
						rel="noopener noreferrer"
						aria-label={social.label}
						class="text-muted-foreground hover:text-foreground border-border/60 hover:border-border hover:bg-accent/50 rounded-xl border p-2.5 transition-all hover:-translate-y-0.5"
					>
						<social.icon class="size-4.5" />
					</a>
				{/each}
			</div>
		</BlurFade>
	</div>

	<a
		href="#about"
		class="text-muted-foreground hover:text-foreground absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce transition-colors"
		aria-label="Scroll to about section"
	>
		<ChevronDown class="size-5" />
	</a>
</section>
