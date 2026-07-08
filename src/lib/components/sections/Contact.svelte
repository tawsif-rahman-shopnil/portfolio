<script lang="ts">
	import { profile } from '$lib/data/resume';
	import BlurFade from '$lib/components/ui/BlurFade.svelte';
	import Meteors from '$lib/components/ui/Meteors.svelte';
	import ShimmerButton from '$lib/components/ui/ShimmerButton.svelte';
	import AuroraText from '$lib/components/ui/AuroraText.svelte';
	import Mail from '@lucide/svelte/icons/mail';
	import Linkedin from '@lucide/svelte/icons/linkedin';
</script>

<section id="contact" class="scroll-mt-24 px-6 py-24 md:py-32">
	<BlurFade delay={0.1}>
		<div
			class="border-border/60 bg-card/40 relative mx-auto max-w-5xl overflow-hidden rounded-3xl border px-6 py-20 text-center md:py-28"
		>
			<Meteors number={25} />

			<p class="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase">Contact</p>
			<h2
				class="font-display mx-auto mt-4 max-w-2xl text-4xl font-bold tracking-tight text-balance md:text-5xl"
			>
				Let's build something <AuroraText colors={['#00d4ff', '#38bdf8', '#2563eb', '#22d3ee']}
					>great</AuroraText
				> together
			</h2>
			<p class="text-muted-foreground mx-auto mt-5 max-w-xl text-base text-pretty md:text-lg">
				Have a product idea, a role that fits, or just want to talk Flutter, React, or AI apps? My
				inbox is always open.
			</p>

			<div class="mt-10 flex flex-wrap items-center justify-center gap-4">
				<a href="mailto:{profile.email}">
					<ShimmerButton shimmerColor="#22d3ee" background="rgba(9, 9, 11, 1)" class="px-8">
						<span class="flex items-center gap-2 text-sm font-medium">
							<Mail class="size-4" />
							{profile.email}
						</span>
					</ShimmerButton>
				</a>
				<a
					href={profile.socials.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="border-border bg-secondary/30 hover:bg-secondary/70 flex items-center gap-2 rounded-full border px-7 py-3 text-sm font-medium transition-colors"
				>
					<Linkedin class="size-4" />
					Connect on LinkedIn
				</a>
			</div>
		</div>
	</BlurFade>
</section>
