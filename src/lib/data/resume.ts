export const profile = {
	name: 'Tawsif Rahman Shopnil',
	firstName: 'Tawsif',
	role: 'Full-Stack Software Engineer',
	roles: [
		'Full-Stack Software Engineer',
		'Flutter Developer',
		'React & Laravel Developer',
		'AI-Powered App Builder'
	],
	location: 'Dhaka, Bangladesh',
	email: 'tawsif.rahman.shopnil@gmail.com',
	website: 'https://tawsifrahmanshopnil.com',
	summary:
		'Full-stack software engineer with 2+ years of professional experience delivering mobile apps, web applications, and backend systems across Flutter, React, Laravel, and Node.js. Independently shipped three AI-powered apps live on the App Store and Google Play. Comfortable across the full product lifecycle — from architecture and API design to deployment and post-release support.',
	resumeUrl: '/TRSCV.pdf',
	socials: {
		github: 'https://github.com/tawsif-rahman-shopnil',
		linkedin: 'https://www.linkedin.com/in/iamtawsif',
		youtube: 'https://www.youtube.com/TawsifRahmanShopnilYT',
		facebook: 'https://www.facebook.com/tawsif.r.shopnil'
	}
};

export const stats = [
	{ value: 2, suffix: '+', label: 'Years of experience' },
	{ value: 8, suffix: '+', label: 'Apps live on App Store & Play' },
	{ value: 10, suffix: '+', label: 'Products shipped to production' },
	{ value: 10, suffix: '+', label: 'Securities firms on ZAB Prottoy' }
];

export interface ExperienceItem {
	title: string;
	company: string;
	location: string;
	period: string;
	type: string;
	highlights: string[];
	tech: string[];
}

export const experience: ExperienceItem[] = [
	{
		title: 'Junior Software Engineer',
		company: 'Orange Solutions Limited (OSL), United Group',
		location: 'Dhaka, Bangladesh',
		period: 'Mar 2024 — Present',
		type: 'On-site · Full-time',
		highlights: [
			'Contributed to UniDash, a multi-vendor restaurant ordering platform — solely built the rider delivery Flutter app, the real-time order display system for TV/kitchen screens, the React web admin panel, and the Node.js item-sync microservice.',
			'Collaborated on the KIOSK self-ordering Flutter app (live at Station by Chef’s Table), the customer Flutter app, and the Laravel REST backend.',
			'Delivered Amar Mahallah — a hyperlocal marketplace connecting neighborhood vendors with local customers via proximity matching.',
			'Built My Gazi for Gazi Group: Territory Sales Officer tracking, secondary sales reporting, payroll, leave, and attendance modules.',
			'Built the United Enterprise Bill Tracking System (Laravel + React) from scratch — procurement management tracking POs, GRNs, and SRNs for United Group.',
			'Fully developed eJOTNO end-to-end — a healthcare platform connecting users with verified doctors and caregivers.',
			'Improved backend query performance via MySQL indexing; supported Docker-based CI/CD pipelines and AWS RDS configuration.'
		],
		tech: ['Flutter', 'React', 'Laravel', 'Node.js', 'MySQL', 'Docker', 'AWS']
	},
	{
		title: 'Software Engineering Intern',
		company: 'Orange Solutions Limited (OSL), United Group',
		location: 'Dhaka, Bangladesh',
		period: 'Jan 2024 — Mar 2024',
		type: 'On-site',
		highlights: [
			'Built the complete Laravel + React admin panel for Courtside Bangladesh (United Group / United City) — venue, event, booking, and ticketing management with RBAC.',
			'Contributed to the Flutter user booking app and the Flutter Cashier POS app.',
			'Contributed to debugging, performance optimization, and backend improvements across internal products.'
		],
		tech: ['Laravel', 'React', 'Flutter', 'RBAC']
	},
	{
		title: 'Software Engineer (Contract)',
		company: 'Swinroll Network Technologies Co., Ltd.',
		location: 'Hangzhou, China',
		period: 'Jul 2023 — Jan 2024',
		type: 'Remote · Contract',
		highlights: [
			'Developed and published Flutter and native Android applications to the Google Play Store.',
			'Built React admin dashboards backed by Laravel REST APIs; integrated Firebase authentication and push notifications.',
			'Automated build and deploy workflows via Docker and GitHub Actions CI/CD.'
		],
		tech: ['Flutter', 'Android', 'React', 'Laravel', 'Firebase', 'GitHub Actions']
	}
];

export interface Project {
	name: string;
	tagline: string;
	description: string;
	tech: string[];
	appStore?: string;
	playStore?: string;
	github?: string;
	featured?: boolean;
	badge?: string;
}

export const independentApps: Project[] = [
	{
		name: 'Pocket Hishab',
		tagline: 'AI-Powered Personal Finance App',
		description:
			'Independently designed and shipped a personal finance app with Gemini AI-generated spending insights, rich transaction tracking, a gamified saving-score and badge system, biometric app lock (Face ID / fingerprint), and a backend-agnostic JSON-first architecture.',
		tech: ['Flutter', 'Supabase', 'Gemini AI'],
		appStore: 'https://apps.apple.com/us/app/pocket-hishab/id6759366572',
		playStore: 'https://play.google.com/store/apps/details?id=com.mtrs.pocket_hishab',
		featured: true,
		badge: 'Independent · Live on both stores'
	},
	{
		name: 'Serein',
		tagline: 'AI Habit Tracker',
		description:
			'Independently built and published a calm, AI-powered habit tracking app. AI-driven nudges adapting to user behavior, streak tracking, completion analytics, offline-first sync, freemium subscription, and GDPR-compliant encrypted data handling.',
		tech: ['Flutter', 'Supabase', 'AI'],
		playStore: 'https://play.google.com/store/apps/details?id=com.mtrs.habit_ai',
		featured: true,
		badge: 'Independent · Live on Google Play'
	},
	{
		name: 'Decode',
		tagline: 'Understand Why',
		description:
			'Independently built and published an AI-powered reflection app that decodes confusing everyday situations into likely reasons and common patterns — helping you understand the "why" behind what happened, without giving advice.',
		tech: ['Flutter', 'AI'],
		playStore: 'https://play.google.com/store/apps/details?id=com.mtrs.decode',
		featured: true,
		badge: 'Independent · Live on Google Play'
	}
];

export const projects: Project[] = [
	{
		name: 'WanderNest',
		tagline: 'Tour Booking Platform',
		description:
			'Complete tour booking system built end-to-end: Flutter traveler app with phone-OTP login and a Gemini-powered AI trip planner, React admin panel, and Node.js + Prisma API — packages, bookings, custom tour requests, payments (Stripe/bKash/Nagad), and realtime notifications.',
		tech: ['Flutter', 'React', 'Node.js', 'Prisma', 'MySQL'],
		appStore: 'https://apps.apple.com/us/app/wandernest/id6785061278',
		playStore: 'https://play.google.com/store/apps/details?id=com.binaryans.wandernest'
	},
	{
		name: 'UniDash',
		tagline: 'Multi-Vendor Restaurant Ordering Platform',
		description:
			'Solely built the rider delivery app, real-time order display for TV/kitchen screens, React admin panel, and Node.js menu-sync microservice. Collaborated on the KIOSK app, customer app, and Laravel backend.',
		tech: ['Flutter', 'React', 'Laravel', 'Node.js'],
		playStore: 'https://play.google.com/store/apps/details?id=com.unidash360byOSL.unidash_app'
	},
	{
		name: 'United Enterprise Bill Tracking',
		tagline: 'Procurement Management — United Group',
		description:
			'Fully built from scratch for one of Bangladesh’s largest conglomerates; tracks Purchase Orders, Goods Received Notes, and Stock Return Notes across supply chain operations.',
		tech: ['Laravel', 'React']
	},
	{
		name: 'ZAB Prottoy',
		tagline: 'Securities Trading Platform — First Capital Securities Ltd.',
		description:
			'Adopted by 10+ BSEC-registered securities firms; real-time market charts, buy/sell order submission, and portfolio tracking in a regulated financial environment.',
		tech: ['Flutter']
	},
	{
		name: 'Amar Mahallah',
		tagline: 'Hyperlocal Marketplace',
		description:
			'Neighborhood vendor discovery with proximity matching; shared API across mobile and web; full cart, auth, and order management flows.',
		tech: ['Flutter', 'Laravel', 'React'],
		appStore: 'https://apps.apple.com/ng/app/amar-mahallah/id6737305293',
		playStore: 'https://play.google.com/store/apps/details?id=com.amar_mahallah.amar_mahallah'
	},
	{
		name: 'Courtside Bangladesh',
		tagline: 'Sports & Dining Experience Zone — United Group',
		description:
			'Built the complete Laravel + React admin panel for venue, event, booking, and ticketing management with RBAC; contributed to the Flutter booking app and Cashier POS app.',
		tech: ['Flutter', 'Laravel', 'React'],
		appStore: 'https://apps.apple.com/us/app/courtside-bangladesh/id6476599293',
		playStore: 'https://play.google.com/store/apps/details?id=com.osl.courtside'
	},
	{
		name: 'My Gazi',
		tagline: 'Sales & Workforce Management — Gazi Group',
		description:
			'Territory Sales Officer tracking, secondary sales reporting, payroll, leave, and attendance across Gazi Group’s full sales ecosystem.',
		tech: ['Flutter', 'Laravel'],
		appStore: 'https://apps.apple.com/us/app/gazi-sales/id6502892439',
		playStore: 'https://play.google.com/store/apps/details?id=com.osl.gazi_sales_app'
	},
	{
		name: 'eJOTNO',
		tagline: 'Healthcare Platform',
		description:
			'Fully developed end-to-end: cross-platform Flutter app connecting users with verified doctors and caregivers; role-based secure workflows for patients, doctors, and admins.',
		tech: ['Flutter', 'Laravel'],
		appStore: 'https://apps.apple.com/us/app/ejotno/id6741751239',
		playStore: 'https://play.google.com/store/apps/details?id=com.osl.ejotno'
	},
	{
		name: 'Orange MPOS',
		tagline: 'Cloud Web POS & Android POS',
		description:
			'Web POS platform (inventory, invoicing, sales workflows) built in React with FastAPI backend and MySQL; Flutter POS client for Sunmi hardware with REST API synchronization.',
		tech: ['React', 'FastAPI', 'MySQL', 'Flutter']
	}
];

export const skillCategories = [
	{
		title: 'Mobile',
		skills: ['Flutter', 'Dart', 'Android', 'KIOSK apps', 'Rider/delivery apps', 'Store deployment']
	},
	{
		title: 'Frontend',
		skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Material UI']
	},
	{
		title: 'State Management',
		skills: ['Redux', 'Context API', 'React Query', 'Zustand', 'React Hook Form', 'Formik']
	},
	{
		title: 'Backend & APIs',
		skills: ['PHP', 'Laravel 9/10', 'Node.js', 'NestJS', 'Express', 'FastAPI', 'REST', 'Microservices']
	},
	{
		title: 'Databases',
		skills: ['MySQL', 'PostgreSQL', 'MSSQL', 'AWS RDS', 'Query optimization', 'Indexing']
	},
	{
		title: 'Auth & Security',
		skills: ['JWT', 'OAuth2', 'Firebase Auth', 'Supabase Auth', 'RBAC']
	},
	{
		title: 'DevOps',
		skills: ['Git', 'Docker', 'GitHub Actions CI/CD', 'AWS (Windows & Linux)', 'Server configuration']
	},
	{
		title: 'AI & Dev Tools',
		skills: ['Gemini API', 'OpenAI API', 'Claude Code', 'GitHub Copilot', 'LLM integration', 'MCP clients']
	}
];

export const education = {
	degree: 'B.Sc. in Computer Science and Engineering',
	institution: 'Bangladesh Army International University of Science and Technology (BAIUST)',
	year: '2024',
	coursework: ['Data Structures & Algorithms', 'Database Systems', 'Software Engineering', 'OOP']
};

export const certifications = [
	{ name: 'SQL (Advanced)', issuer: 'HackerRank' },
	{ name: 'SQL (Intermediate)', issuer: 'HackerRank' },
	{ name: 'SQL (Basic)', issuer: 'HackerRank' },
	{ name: 'Python (Basic)', issuer: 'HackerRank' },
	{ name: 'Foundations of User Experience (UX) Design', issuer: 'Coursera' }
];

export const leadership = [
	{ role: 'Joint Secretary', org: 'Computer Club (BAIUST)', period: '2022' },
	{ role: 'Vice President (Organizing)', org: 'Computer Club (BAIUST)', period: '2021 — 2022' }
];
