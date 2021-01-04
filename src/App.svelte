<script>
	export let name;
	export let btn_Content;
	const initializeRemarkable = () => {
		let button = new ej.buttons.Button();

    // Render initialized button.
    button.appendTo('#element')
	}
	
</script>
<svelte:head>
	<script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" on:load={initializeRemarkable}></script>
</svelte:head>
<main>
	<h1>Hello {name}!</h1>
	<button id="element">{btn_Content}!</button>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>