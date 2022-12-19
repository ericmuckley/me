<script>
    export let title = "Title"
    export let intro = "Intro"
    export let topics = [
        {
            name: "Example topic",
            link: "topic link",
            github: "https://github.com/ericmuckley/IMES",
            text: `
            This is an example with
            <a class="dark-link" target="_blank" href="https://www.ornl.gov/">
            links</a>.`
            ,
            img: [
                {"url": "systemcentered.jpg", "title": "Autonomous characterization system"},
            ],
            vid: [
                {"url": "https://www.youtube.com/embed/TG-s2J7XrX8?autoplay=0&loop=1&playlist=TG-s2J7XrX8"},
            ],
        },
    ]

</script>


<h1>{title}</h1>
<hr>
<p class="colored">{intro}</p>

{#each topics as topic}

    <h4 class="mb-0 mt-5">{topic.name}</h4>
    <hr class="mt-1 mb-3">
    <p class="colored">{@html topic.text}</p>

    {#if topic.hasOwnProperty('github')}
        <div class="text-center">
            <a href="{topic.github}" class="btn btn-lg btn-primary px-4 text-start my-2" target="_blank" rel="noreferrer">
                <i class="bi bi-github me-2"></i>View project on Github
            </a>
        </div>
    {/if}

    {#if topic.hasOwnProperty('img')}

        {#each topic.img as img}
            <div class="mt-5 w-100 mx-auto text-center">
                <div class="colored mb-2">{img.title}</div>
                <img src="me/images/{img.url}" alt={img.title} style="width: 85vw;">
            </div>
        {/each}

    {/if}

    {#if topic.hasOwnProperty('vid')}

        {#each topic.vid as vid}
            <div class="mt-5 w-100">
                <iframe title={vid.url} src={vid.url} allowfullscreen="true" style="min-height: 50vh; width: 100%">
                </iframe>
            </div>
        {/each}

    {/if}

{/each}
