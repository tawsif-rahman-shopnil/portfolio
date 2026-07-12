<script lang="ts">
	import { profile } from '$lib/data/resume';
	import ScrollProgress from '$lib/components/ui/ScrollProgress.svelte';
	import Navbar from '$lib/components/sections/Navbar.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Skills from '$lib/components/sections/Skills.svelte';
	import Education from '$lib/components/sections/Education.svelte';
	import Certifications from '$lib/components/sections/Certifications.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';

	const description =
		'Tawsif Rahman Shopnil — full-stack software engineer building Flutter, React, Laravel, Node.js, and AI-powered products in Dhaka, Bangladesh.';
</script>

<svelte:head>
	<title>{profile.name} — {profile.role}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="{profile.name} — {profile.role}" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={profile.website} />
	<meta property="og:image" content="{profile.website}/og.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{profile.name} — {profile.role}" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{profile.website}/og.png" />
</svelte:head>

<ScrollProgress class="bg-linear-to-r from-cyan-400 via-sky-500 to-blue-600" />
<Navbar />

<main>
	<Hero />
	<About />
	<Experience />
	<Projects />
	<Skills />
	<Education />
	<Certifications />
	<Contact />
</main>

<Footer />
