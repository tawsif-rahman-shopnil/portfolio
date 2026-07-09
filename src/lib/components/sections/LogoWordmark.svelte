<script lang="ts">
	import { LOGO_PATH } from './logo-path';

	interface Props {
		/** Tailwind height classes for line 1 (TAWSIF RAHMAN) */
		line1Class?: string;
		/** Tailwind height classes for line 2 (SHOPNIL) */
		line2Class?: string;
		class?: string;
	}

	let {
		line1Class = 'h-10 md:h-14',
		line2Class = 'h-10 md:h-14',
		class: className = ''
	}: Props = $props();
</script>

<!--
	The source SVG stacks the wordmark on two lines in one combined path
	(viewBox 0 0 153.03 46.22). Each <svg> below windows one line via its
	viewBox (SVG clips to the viewport), so the lines can reflow:
	stacked & centered on small screens, single row on md+.
-->
<span class="flex flex-col items-center gap-2 md:flex-row md:gap-2 {className}">
	<span class="sr-only">Tawsif Rahman Shopnil</span>

	<!-- Line 1: TAWSIF RAHMAN -->
	<svg
		viewBox="-0.4 -0.4 153.8 21.9"
		class="{line1Class} w-auto [filter:drop-shadow(0_2px_0_#3f4c5e)_drop-shadow(0_5px_8px_rgba(0,0,0,0.5))]"
		aria-hidden="true"
	>
		<defs>
			<linearGradient id="trs-silver" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="21">
				<stop offset="0%" stop-color="#ffffff" />
				<stop offset="55%" stop-color="#d4dbe3" />
				<stop offset="100%" stop-color="#8f9aa8" />
			</linearGradient>
		</defs>
		<path d={LOGO_PATH} fill="url(#trs-silver)" />
	</svg>

	<!-- Line 2: SHOPNIL -->
	<svg
		viewBox="37.8 23.3 78.5 23.2"
		class="{line2Class} w-auto [filter:drop-shadow(0_2px_0_#1e40af)_drop-shadow(0_4px_10px_rgba(37,99,235,0.4))]"
		aria-hidden="true"
	>
		<defs>
			<linearGradient id="trs-blue" gradientUnits="userSpaceOnUse" x1="0" y1="23.7" x2="0" y2="46.1">
				<stop offset="0%" stop-color="#7dd3fc" />
				<stop offset="55%" stop-color="#38bdf8" />
				<stop offset="100%" stop-color="#2563eb" />
			</linearGradient>
		</defs>
		<path d={LOGO_PATH} fill="url(#trs-blue)" />
	</svg>
</span>
