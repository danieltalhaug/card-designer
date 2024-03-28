<script setup lang="ts">
import { ref } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import SettingsFormScene from './SettingsFormScene.vue';
import SettingsFormGeometry from './SettingsFormGeometry.vue';
import { useLocalStorage } from '@vueuse/core';

const lastUsedAccordion = ref(useLocalStorage('lastUsedAccordionIndex', 0));

const settings = [
	{ header: 'Scene', component: SettingsFormScene },
	{ header: 'Geometry', component: SettingsFormGeometry },
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