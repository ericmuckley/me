<script>
    import { onMount } from 'svelte';
    import Nav from '../components/Nav.svelte'
    import HomePage from '../components/page-home.svelte'
    import WebPage from '../components/page-web.svelte'
    import ArtPage from '../components/page-art.svelte'
    let currentPage
	const routingMap = {
        '#art': ArtPage,
		'#web': WebPage,
	};

    onMount(populatePage)
	function populatePage() {
        currentPage = routingMap[location.hash] || HomePage;
	}

</script>

<svelte:window on:hashchange={populatePage} />

<Nav/>

<div class="p-5">
    <svelte:component this={currentPage} />
</div>
