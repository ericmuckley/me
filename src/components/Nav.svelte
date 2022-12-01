<script>
    /*
    import { onMount } from 'svelte';

    onMount(() => {
        const navLinks = document.querySelectorAll('.nav-item')
        const menuToggle = document.getElementById('navcontent')
        const bsCollapse = new bootstrap.Collapse(menuToggle)
        navLinks.forEach((l) => {
            l.addEventListener('click', () => { bsCollapse.toggle() })
        })
    })
    */
    export const items = [
        {name: "web", icon: "code-slash"},
        {name: "art", icon: "palette-fill"},
    ]

    function handleCollapse() {
       let coll = document.querySelector('.navbar')
       console.log(coll.classList)
    }
    
</script>

<nav class="navbar navbar-expand-lg bg-secondary">
    <div class="container-fluid">
        <a class="navbar-brand nav-link" href="#home">
            e
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navcontent">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navcontent">
            <div class="navbar-nav me-auto mb-2 mb-lg-0">
                {#each items as item}
                    <a href="#{item.name}" class="text-nowrap nav-link navbar-collapse" on:click={handleCollapse}>
                        <i class="bi bi-{item.icon} me-2"></i>{item.name}
                    </a>
                {/each}
            </div>
        </div>
    </div>
</nav>