<script>
    import { onMount } from 'svelte';
    import Nav from '../components/Nav.svelte'
    import HomePage from '../components/page-home.svelte'
    import WebPage from '../components/page-web.svelte'
    import ArtPage from '../components/page-art.svelte'
    import HardwarePage from '../components/page-hardware.svelte'
    import DataPage from '../components/page-data.svelte'
    let currentPage
	const routingMap = {
        '#art': ArtPage,
		'#web': WebPage,
        '#data': DataPage,
        '#hardware': HardwarePage,
	};

    onMount(populatePage)
	function populatePage() {
        currentPage = routingMap[location.hash] || HomePage;
	}

</script>

<svelte:window on:hashchange={populatePage} />

<Nav/>

<div class="p-5 mt-5">

    <svelte:component this={currentPage} />
    
    <div class="mt-5 mb-3 footer-text text-center">&copy; Eric Muckley | All rights reserved</div>

</div>


