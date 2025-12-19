// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://IndievdB.github.io',
	base: '/emerald-docs',
	integrations: [
		starlight({
			title: 'pokeemerald docs',
			description: 'Educational documentation for the Pokemon Emerald decompilation',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/pret/pokeemerald' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started' },
						{ label: 'Prerequisites', slug: 'getting-started/prerequisites' },
						{ label: 'Codebase Overview', slug: 'getting-started/codebase-overview' },
					],
				},
				{
					label: 'Game Flow',
					items: [
						{ label: 'Overview', slug: 'game-flow' },
						{ label: 'Boot Sequence', slug: 'game-flow/boot-sequence' },
						{ label: 'Main Loop', slug: 'game-flow/main-loop' },
						{ label: 'State Machine', slug: 'game-flow/state-machine' },
					],
				},
				{
					label: 'GBA Hardware',
					collapsed: true,
					items: [
						{ label: 'Overview', slug: 'gba-hardware' },
						{ label: 'Memory Map', slug: 'gba-hardware/memory-map' },
						{ label: 'I/O Registers', slug: 'gba-hardware/io-registers' },
						{ label: 'Interrupts', slug: 'gba-hardware/interrupts' },
						{ label: 'DMA', slug: 'gba-hardware/dma' },
						{
							label: 'Graphics',
							items: [
								{ label: 'Backgrounds', slug: 'gba-hardware/graphics/backgrounds' },
								{ label: 'Sprites', slug: 'gba-hardware/graphics/sprites' },
								{ label: 'Palettes', slug: 'gba-hardware/graphics/palettes' },
							],
						},
					],
				},
				{
					label: 'Overworld',
					items: [
						{ label: 'Overview', slug: 'overworld' },
						{ label: 'Maps & Layouts', slug: 'overworld/maps' },
						{ label: 'Tilesets', slug: 'overworld/tilesets' },
						{ label: 'Object Events', slug: 'overworld/object-events' },
						{ label: 'Player Movement', slug: 'overworld/player-movement' },
						{ label: 'Warps', slug: 'overworld/warps' },
						{ label: 'Field Callbacks', slug: 'overworld/field-callbacks' },
					],
				},
				{
					label: 'Battle System',
					items: [
						{ label: 'Overview', slug: 'battle' },
						{ label: 'Battle Setup', slug: 'battle/battle-setup' },
						{ label: 'Battle Main', slug: 'battle/battle-main' },
						{ label: 'Controllers', slug: 'battle/battle-controllers' },
						{ label: 'Battle Scripts', slug: 'battle/battle-scripts' },
						{ label: 'Move Execution', slug: 'battle/move-execution' },
						{ label: 'Damage Calculation', slug: 'battle/damage-calculation' },
						{ label: 'Battle AI', slug: 'battle/battle-ai' },
					],
				},
				{
					label: 'Pokemon Data',
					collapsed: true,
					items: [
						{ label: 'Overview', slug: 'pokemon' },
						{ label: 'Data Structures', slug: 'pokemon/data-structures' },
						{ label: 'Encryption', slug: 'pokemon/encryption' },
						{ label: 'Stats Calculation', slug: 'pokemon/stats-calculation' },
						{ label: 'Species Data', slug: 'pokemon/species-data' },
					],
				},
				{
					label: 'Scripting',
					collapsed: true,
					items: [
						{ label: 'Overview', slug: 'scripting' },
						{ label: 'Script VM', slug: 'scripting/script-vm' },
						{ label: 'Commands', slug: 'scripting/script-commands' },
						{ label: 'Event Scripts', slug: 'scripting/event-scripts' },
					],
				},
				{
					label: 'Save System',
					collapsed: true,
					items: [
						{ label: 'Overview', slug: 'save-system' },
						{ label: 'Save Blocks', slug: 'save-system/save-blocks' },
						{ label: 'Flash Sectors', slug: 'save-system/flash-sectors' },
						{ label: 'Validation', slug: 'save-system/save-validation' },
					],
				},
				{
					label: 'Deep Dives',
					collapsed: true,
					items: [
						{ label: 'Callback Pattern', slug: 'deep-dives/callback-pattern' },
						{ label: 'Task System', slug: 'deep-dives/task-system' },
						{ label: 'Sprite System', slug: 'deep-dives/sprite-system' },
						{ label: 'Text Rendering', slug: 'deep-dives/text-rendering' },
						{ label: 'RNG System', slug: 'deep-dives/rng-system' },
					],
				},
				{
					label: 'Build System',
					collapsed: true,
					items: [
						{ label: 'Overview', slug: 'build-system' },
						{ label: 'Makefile', slug: 'build-system/makefile' },
						{ label: 'Tools', slug: 'build-system/tools' },
					],
				},
				{
					label: 'Reference',
					collapsed: true,
					items: [
						{ label: 'Glossary', slug: 'reference/glossary' },
						{ label: 'File Index', slug: 'reference/file-index' },
						{ label: 'Memory Constants', slug: 'reference/memory-constants' },
					],
				},
			],
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js',
						defer: true,
					},
				},
			],
		}),
	],
});
