<script>
    export let contactLinks = [
        {name: 'Github', url: "https://github.com/ericmuckley", icon: 'github'},
        {name: 'ORCID', url: "http://orcid.org/0000-0001-7114-5424", icon: 'upc-scan'},
        {name: 'LinkedIn', url: "https://www.linkedin.com/in/eric-muckley-5b097462", icon: "linkedin"},
        {name: 'ResearchGate', url: "https://www.researchgate.net/profile/Eric_Muckley", icon: 'person'},
        {name: 'StackOverflow', url: "https://stackoverflow.com/users/9325130/eric-m", icon: 'stack-overflow'},
        {name: 'Google scholar', url: "https://scholar.google.com/citations?user=KnSc4mMAAAAJ&hl=en&oi=ao", icon: 'book'},
    ]
</script>

<div class="row">
    <div class="col">

    </div>
    <div class="col">
        <div class="card">
            <div class="card-header text-center h4">
                Contact and other links
            </div>
            <div class="card-body">
                {#each contactLinks as item}
                    <a class="mb-2 w-100 btn btn-dark" href="{item.url}" target="_blank" rel="noreferrer">
                        <i class="bi bi-{item.icon} me-3"></i>{item.name}
                    </a>
                {/each}
            </div>
          </div>
    </div>
</div>