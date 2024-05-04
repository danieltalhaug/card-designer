<script setup lang="ts">
import { ref } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import SettingsFormScene from './SettingsFormScene.vue';
import SettingsFormHero from './SettingsFormHero.vue';
import { useLocalStorage } from '@vueuse/core';

const lastUsedAccordion = ref(useLocalStorage('lastUsedAccordionIndex', 0));

const settings = [
	{ header: 'Scene', component: SettingsFormScene },
	{ header: 'Geometry', component: SettingsFormHero },
];
</script>

<template>
	<Accordion
		:active-index="lastUsedAccordion"
		@tab-open="lastUsedAccordion = $event.index"
	>
		<AccordionTab
			v-for="setting in settings"
			:key="setting.header"
			:header="setting.header"
		>
			<Component :is="setting.component" />
		</AccordionTab>
	</Accordion>
</template>

<style scoped>

</style>