<script setup lang="ts">
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import SettingsFormScene from './SettingsFormScene.vue';

</script>

<template>
	<Accordion :active-index="0">
		<AccordionTab header="Scene">
			<SettingsFormScene />
		</AccordionTab>
	</Accordion>
</template>


<style scoped>

</style>