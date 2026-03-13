// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://fmurray.github.io',
	base: '/sodide-docsite',
	integrations: [
		starlight({
			title: 'sodide',
			description: 'Spec-driven development for AI agents',
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/FMurray/sodide-docsite' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Installation', slug: 'getting-started' },
						{ label: 'Your First Spec', slug: 'getting-started/first-spec' },
					],
				},
				{
					label: 'Concepts',
					items: [
						{ label: 'How It Works', slug: 'concepts/how-it-works' },
						{ label: 'Trust Model', slug: 'concepts/trust-model' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Spec Format', slug: 'guides/spec-format' },
						{ label: 'Tiered Rigor', slug: 'guides/tiered-rigor' },
						{ label: 'Agent Integration', slug: 'guides/agent-integration' },
						{ label: 'Configuration', slug: 'guides/configuration' },
					],
				},
				{
					label: 'CLI Reference',
					items: [
						{ label: 'verify', slug: 'cli/verify' },
						{ label: 'implement', slug: 'cli/implement' },
						{ label: 'context', slug: 'cli/context' },
						{ label: 'audit', slug: 'cli/audit' },
						{ label: 'mcp-serve', slug: 'cli/mcp-serve' },
					],
				},
				{
					label: 'Examples',
					items: [
						{ label: 'All Passing', slug: 'examples/all-passing' },
						{ label: 'Mixed States', slug: 'examples/mixed-states' },
						{ label: 'Shell Commands', slug: 'examples/shell-commands' },
						{ label: 'Multiple Specs', slug: 'examples/multiple-specs' },
						{ label: 'Multi-Link', slug: 'examples/multi-link' },
					],
				},
			],
		}),
	],
});
