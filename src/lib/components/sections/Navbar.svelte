<script lang="ts">
	import { profile } from '$lib/data/resume';
	import Download from '@lucide/svelte/icons/download';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';

	const links = [
		{ label: 'About', href: '#about' },
		{ label: 'Experience', href: '#experience' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Skills', href: '#skills' },
		{ label: 'Contact', href: '#contact' }
	];

	let open = $state(false);
</script>

<header class="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4">
	<nav
		class="md:border-border/60 md:bg-background/70 flex w-full max-w-3xl items-center justify-between md:rounded-2xl md:border md:px-4 md:py-2 md:shadow-lg md:shadow-black/20 md:backdrop-blur-xl"
	>
		<ul class="hidden items-center gap-1 md:flex">
			{#each links as link (link.href)}
				<li>
					<a
						href={link.href}
						class="text-muted-foreground hover:text-foreground hover:bg-accent/60 rounded-lg px-3 py-1.5 text-sm transition-colors"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="ml-auto flex items-center gap-2">
			<a
				href={profile.resumeUrl}
				download
				class="border-border bg-secondary/50 hover:bg-secondary hidden items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors md:flex"
			>
				<Download class="size-3.5" />
				Resume
			</a>
			<button
				class="border-border/60 bg-background/70 hover:bg-accent/60 flex size-10 items-center justify-center rounded-lg border shadow-lg shadow-black/20 backdrop-blur-xl transition-colors md:hidden"
				onclick={() => (open = !open)}
				aria-label="Toggle menu"
			>
				{#if open}
					<X class="size-5" />
				{:else}
					<Menu class="size-5" />
				{/if}
			</button>
		</div>
	</nav>
</header>

{#if open}
	<div class="fixed inset-x-0 top-20 z-40 px-4 md:hidden">
		<div
			class="border-border/60 bg-background/90 rounded-2xl border p-3 shadow-xl shadow-black/30 backdrop-blur-xl"
		>
			<ul class="flex flex-col">
				{#each links as link (link.href)}
					<li>
						<a
							href={link.href}
							onclick={() => (open = false)}
							class="text-muted-foreground hover:text-foreground hover:bg-accent/60 block rounded-lg px-3 py-2.5 text-right text-sm transition-colors"
						>
							{link.label}
						</a>
					</li>
				{/each}
				<li class="border-border/60 mt-2 border-t pt-2">
					<a
						href={profile.resumeUrl}
						download
						class="text-foreground hover:bg-accent/60 flex items-center justify-end gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
					>
						<Download class="size-4" />
						Download Resume
					</a>
				</li>
			</ul>
		</div>
	</div>
{/if}
