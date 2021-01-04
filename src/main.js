import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		btn_Content: 'Syncfusion Button'
	}
});

export default app;