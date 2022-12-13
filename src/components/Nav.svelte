<script>
    import { onMount } from 'svelte'
  import Page from '../routes/+page.svelte';
    export let active = "home"
    export const items = [
        {name: "home", icon: "house"},
        {name: "hardware", icon: "joystick"},
        {name: "data", icon: "cpu"},
        {name: "web", icon: "code-slash"},
        {name: "art", icon: "palette-fill"},
    ]

    function showActiveNavLink() {
        let hash = window.location.hash
        active = hash ? hash.substring(1) : "home"
    }

    onMount(() => {
       showActiveNavLink() 
        window.addEventListener('hashchange', showActiveNavLink)
    })

    function handleNavbarCollapse() {
        console.log()
        let isShown = Array.from(document.getElementById("navcontent").classList).includes("show")
        if (isShown) {
            document.getElementById("toggler-btn").click()
       }
    }
    
</script>

<nav class="navbar fixed-top navbar-expand-lg bg-dark navbar-dark py-0 shadow">
    <div class="container-fluid px-0">
        <button class="navbar-toggler mx-2 my-2 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navcontent" id="toggler-btn">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navcontent">
            <div class="navbar-nav me-auto mb-lg-0">
                {#each items as item}
                    <a href="#{item.name}" class="text-nowrap nav-link mx-0 px-3 {active === item.name ? "active" : ""}" on:click={handleNavbarCollapse}>
                        <i class="bi bi-{item.icon} me-2"></i>{item.name}
                    </a>
                {/each}
            </div>
        </div>
    </div>
</nav>