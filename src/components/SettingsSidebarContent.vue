<script setup lang="ts">
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import SettingsFormScene from './SettingsFormScene.vue';
import SettingsFormGeometry from './SettingsFormGeometry.vue';

const settings = [
	{header: 'Scene', component: SettingsFormScene},
	{header: 'Geometry', component: SettingsFormGeometry},
];

</script>

<template>
	<Accordion :active-index="0">
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