<script lang="ts">
	import { profile } from '$lib/data/resume';
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Youtube from '@lucide/svelte/icons/youtube';
	import Facebook from '@lucide/svelte/icons/facebook';
	import Mail from '@lucide/svelte/icons/mail';

	const socials = [
		{ label: 'GitHub', href: profile.socials.github, icon: Github },
		{ label: 'LinkedIn', href: profile.socials.linkedin, icon: Linkedin },
		{ label: 'YouTube', href: profile.socials.youtube, icon: Youtube },
		{ label: 'Facebook', href: profile.socials.facebook, icon: Facebook },
		{ label: 'Email', href: `mailto:${profile.email}`, icon: Mail }
	];

	const year = new Date().getFullYear();
</script>

<footer class="border-border/60 border-t px-6 py-10">
	<div
		class="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between"
	>
		<p class="text-muted-foreground text-center text-xs md:text-left">
			© {year} {profile.name}. All rights reserved.
		</p>

		<div class="flex items-center gap-1.5">
			{#each socials as social (social.label)}
				<a
					href={social.href}
					target={social.href.startsWith('mailto') ? undefined : '_blank'}
					rel="noopener noreferrer"
					aria-label={social.label}
					class="text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg p-2 transition-colors"
				>
					<social.icon class="size-4" />
				</a>
			{/each}
		</div>
	</div>
</footer>
