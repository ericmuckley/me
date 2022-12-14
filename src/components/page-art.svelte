<script>
    const categories = [
        {
            name: "Watercolor",
            items: [
                {path: "baker_beach.jpg", title: "Baker Beach, San Francisco, California"},
                {path: "moonwhales.jpg", title: "Ethereum whales"},
                {path: "longlake.jpg", title: "Long lake, Sierra Nevada, California"},
                {path: "red_blue_forest.jpg", title: "Red and blue forest"},
                {path: "sdbuildings.jpg", title: "San Diego, California"},
                {path: "redsmokies.jpg", title: "Autumn in the mountains"},
                {path: "dinosaurs.jpg", title: "Prehistoric monsters"},
                {path: "milkyway.jpg", title: "Milky way"},
                {path: "yellowvolcanosmoke.jpg", title: "Prehistoric landscape 2"},
                {path: "birdrock_sunset.jpg", title: "Sunset Cliffs, San Diego, California"},
                {path: "ob_subset.jpg", title: "OB pier, San Diego, California"},
                {path: "bratislava.jpg", title: "Bratislava Castle, Slovakia"},
                {path: "hertfordbridge.JPG", title: "Hertford Bridge in Oxford, UK"},
                {path: "abstractcanoe.jpg", title: "Watercolor dream"},
                {path: "barn.jpg", title: "Barn in the snow"},
                {path: "candace.jpg", title: "Moonlit river"},
                {path: "frame.JPG", title: "Winter cabin"},
                {path: "knox.JPG", title: "Knoxville, tennessee"},
                {path: "whitney.jpg", title: "Mount Whitney, Sierra Nevada, California"},
                {path: "adams.jpg", title: "Mount Adams, Cascades, Washington"},
                {path: "virginiapass.jpg", title: "Virginia pass, Sierra Nevada, California"},
                {path: "oldtruck.jpg", title: "Old truck in Joshua Tree, California"},
                {path: "barninsnow.jpg", title: "Barn in snow"},
                {path: "lauren_wedding.jpg", title: "Lauren and Austin getting married"},
                {path: "skull.jpg", title: "Bad omens"},
                {path: "watercolorvolcano.jpg", title: "Prehistoric landscape"},
            ],
        },
        {
            name: "Acrylic, digital, and mixed media",
            items: [
                {path: "tripanelsilverlake.jpg", title: "Silver Lake, Sierra Nevada"},
                {path: "leroy.jpg", title: "Dark winter night"},
                {path: "pier.JPG", title: "Ocean Beach pier, California"},
                {path: "skulllogo.jpg", title: "Label for muckley brewing company"},
                {path: "egretsunset.jpg", title: "Egret sunset"},
                {path: "obremix.jpg", title: "Ocean Beach, San Diego, California"},
                {path: "wave_birds.jpg", title: "Birds in the sunset"},
                {path: "wavemnt.jpg", title: "Waves and mountains"},
                {path: "volcanosun.jpg", title: "Volcano with rising sun"},
                {path: "colorwaves.jpg", title: "Big Sur, California"},
                {path: "bridge_fog.jpg", title: "Fog in San Francisco, California"},
                {path: "buddha.jpg", title: "Serenity"},
                {path: "waveroad.jpg", title: "Beach town"},
                {path: "sixcrane.jpg", title: "Label for six crane IPA"},
                {path: "sunset.JPG", title: "Trees with sunset"},
                {path: "winterroad.jpg", title: "Dark road"},                
            ],
        },
        {
            name: "Pencil and Pen",
            items: [
                {path: "birdwallpic.jpg", title: "Birds drawn on the wall"},
                {path: "wavetree.jpg", title: "Tree on beach"},
                {path: "oxford_pencil.jpg", title: "Oxford, UK"}, 
                {path: "pencil_forest.jpg", title: "Sierra Nevada, california"},
                {path: "pop.JPG", title: "Pop"},
                {path: "buildingjumble.jpg", title: "Concrete jungle"},             
            ],
        },
    ]

    const musicItems = [
        {"name": "Anthem guitar", "url": "metal guitar leads.mp3"},
        {"name": "Pianos", "url": "pianos.mp3"},
        {"name": "Strings", "url": "realverse.mp3"},
        {"name": "Steel drum with bass", "url": "steel drum and bass.mp3"},
        {"name": "Dark hiphop", "url": "dark hiphop.mp3"},
    ]

    const basePath = "https://raw.githubusercontent.com/ericmuckley/ericmuckley.github.io/master/static/img/art/"
    let selectedImgTitle = "Pop"
    let selectedImgPath = "pop.JPG"

    function handleArtClick(item) {
        selectedImgTitle = item.title
        selectedImgPath = item.path
    }


</script>


{#each categories as category}

    <h4 class="mb-0">{category.name}</h4>
    <hr class="mt-1 mb-3">

    <div class="row mb-5">

        {#each category.items as item}

                <div class="col mb-3">
                    <!-- svelte-ignore missing-declaration -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <img
                        class="hover-glow"
                        width="200"
                        data-bs-toggle="modal"
                        data-bs-target="#artmodal"
                        on:click={() => {handleArtClick(item)}}
                        src="me/images/art/{item.path}"
                        alt={item.title} />
                </div>
            
        {/each}

    </div>

{/each}



<h4 class="mb-0">Original music</h4>
<hr class="mt-1 mb-3">
{#each musicItems as item}
    <div class="my-2">
        <div class="colored ms-4">{item.name}</div>
        <audio src="me/music/{item.url}" controls>
            <track kind="captions" />
        </audio>        
    </div>
{/each}


<div class="modal fade" id="artmodal" tabindex="-1">
    <div class="modal-dialog modal-lg rounded-0">
        <div class="modal-content">
            <div class="modal-header bg-dark border-0">
                <h1 class="modal-title fs-5">{selectedImgTitle}</h1>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-0">
                <img width="100%" src="me/images/art/{selectedImgPath}" alt={selectedImgTitle} />
            </div>
        </div>
    </div>
</div>
