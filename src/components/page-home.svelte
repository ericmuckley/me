<script>
    const contactLinks = [
        {name: 'Github', url: "https://github.com/ericmuckley", icon: 'github'},
        {name: 'ORCID', url: "http://orcid.org/0000-0001-7114-5424", icon: 'upc-scan'},
        {name: 'LinkedIn', url: "https://www.linkedin.com/in/eric-muckley-5b097462", icon: "linkedin"},
        {name: 'ResearchGate', url: "https://www.researchgate.net/profile/Eric_Muckley", icon: 'person'},
        {name: 'StackOverflow', url: "https://stackoverflow.com/users/9325130/eric-m", icon: 'stack-overflow'},
        {name: 'Google scholar', url: "https://scholar.google.com/citations?user=KnSc4mMAAAAJ&hl=en&oi=ao", icon: 'book'},
    ]
    const education = [
        {
            year: "2019",
            degree: "Ph.D. Energy Science and Engineering",
            location: "University of Tennessee, Knoxville, TN",
            thesis: "High-throughput materials characterization with real time analytics and feedback",
            url: "ESM_PhD_dissertation.pdf",
        
        },
        {
            year: "2013",
            degree: "M.S. Applied Physics",
            location: "California State University, Long Beach, CA",
            thesis: "Optimizing film morphology in organic photovoltaics",
            url: "ESM_MS_thesis.pdf",
        },
        {
            year: "2009",
            degree: "B.S. Physics",
            location: "California Polytechnic State University, San Luis Obispo, CA",
            thesis: "Constructing a magneto-optical trap for cold atom trapping",
            url: "ESM_MOT.pdf",
        },
    ]
    const topics = {
        "Patent applications": [
            {url: "https://patentimages.storage.googleapis.com/da/2e/22/6ebb3e19ae7536/US20220091571A1.pdf", text: "Multimodal dynamic characterization of materials under programmable environments and environment prediction"},
            {url: "https://patentimages.storage.googleapis.com/c9/ef/c3/185ebd80a502f7/US20220091083A1.pdf", text: "Chemical detection system with at least one electronic nose"},
            {url: "https://patentimages.storage.googleapis.com/7e/1d/27/9ae03499badf76/US20220088876A1.pdf", text: "Additive manufacturing system with at least one electronic nose"},
            {url: "https://patentimages.storage.googleapis.com/db/c0/53/f012135c36b06d/US20220091081A1.pdf", text: "Aroma detection systems for food and beverage and conversion of detected aromas to natural language descriptors"},
        ],
        "Selected journal articles": [
            {url: "https://www.mdpi.com/2227-9040/10/4/143", text: "Spagnolo, S., Muckley, E.S., Ivanov, I.N. and Hianik, T., 2022. Application of Multiharmonic QCM-D for Detection of Plasmin at Hydrophobic Surfaces Modified by β-Casein. Chemosensors, 10(4), p.143."},
            {url: "https://pubs.rsc.org/en/content/articlelanding/2022/AN/D1AN01800K", text: "Spagnolo, S., Muckley, E.S., Ivanov, I.N. and Hianik, T., 2022. Analysis of trypsin activity at β-casein layers formed on hydrophobic surfaces using a multiharmonic acoustic method. Analyst."},
            {url: "https://www.nature.com/articles/s41467-021-22473-w", text: "Galuska, L.A., Muckley, E.S., Cao, Z., Ehlenberg, D.F., Qian, Z., Zhang, S., Rondeau-Gagné, S., Phan, M.D., Ankner, J.F., Ivanov, I.N. and Gu, X., 2021. SMART transfer method to directly compare the mechanical response of water-supported and free-standing ultrathin polymeric films. Nature Communications, 12(1), pp.1-11."},
            {url: "https://www.sciencedirect.com/science/article/pii/S138824812100045X", text: "Bakos, I., Vass, Á., Muckley, E.S., Ivanov, I.N. and Keresztes, Z., 2021. Indirect electrochemical method for high accuracy quantification of protein adsorption on gold surfaces. Electrochemistry Communications, 124, p.106961."},
            {url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/advs.202002510", text: "Kim, D., Muckley, E.S., Creange, N., Wan, T.H., Ann, M.H., Quattrocchi, E., Vasudevan, R.K., Kim, J.H., Ciucci, F., Ivanov, I.N. and Kalinin, S.V., 2021. Exploring Transport Behavior in Hybrid Perovskites Solar Cells via Machine Learning Analysis of Environmental‐Dependent Impedance Spectroscopy. Advanced Science, p.2002510."},
            {url: "https://pubs.acs.org/doi/abs/10.1021/acsami.0c00561", text: "Collins, L., Muckley, E.S., Tsai, H., Ghosh, D., Neukirch, A.J., Tretiak, S., Kalinin, S.V., Nie, W. and Ivanov, I.N., 2020. Correlation of Spatiotemporal Dynamics of Polarization and Charge Transport in Blended Hybrid Organic–Inorganic Perovskites on Macro-and Nanoscales. ACS applied materials & interfaces, 12(13), pp.15380-15388."},
            {url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/adfm.201908010", text: "Muckley, E.S., Collins, L., Srijanto, B.R. and Ivanov, I.N., 2020. Machine learning‐enabled correlation and modeling of multimodal response of thin film to environment on macro and nanoscale using 'Lab‐on‐a‐Crystal'. Advanced Functional Materials, 30(10), p.1908010."},
            {url: "https://pubs.acs.org/doi/abs/10.1021/acsami.9b18824", text: "Muckley, E.S., Aytug, T., Mayes, R., Lupini, A.R., Carrillo, J.M.Y., Goswami, M., Sumpter, B.G. and Ivanov, I.N., 2019. Hierarchical TiO2:Cu2O nanostructures for gas/vapor sensing and CO2 sequestration. ACS applied materials & interfaces, 11(51), pp.48466-48475."},
            {url: "https://pubs.acs.org/doi/abs/10.1021/acsami.8b21112", text: "Ahmadi, M., Muckley, E.S., Ivanov, I.N., Lorenz, M., Li, X., Ovchinnikova, O.S., Lukosi, E., Tisdale, J., Blount, E., Kravchenko, I.I. and Kalinin, S.V., 2019. Environmental Gating and Galvanic Effects in Single Crystals of Organic-Inorganic Halide Perovskites. ACS applied materials & interfaces. 11, 16, pp. 14722-14733."},
            {url: "https://pubs.rsc.org/en/content/articlelanding/2018/nr/c8nr05170d/unauth#!divAbstract", text: "Muckley, E.S, Naguib, M. and Ivanov, I.N., 2018. Multi-modal, ultrasensitive, wide-range humidity sensing with Ti3 C2 film. Nanoscale, 10(46), pp.21689-21695."},
            {url: "https://pubs.acs.org/doi/10.1021/acsami.8b08072", text: "Muckley, E.S., Collins, L., Ievlev, A.V., Ye, X., Kisslinger, K., Sumpter, B.G., Lavrik, N.V., Nam, C.Y. and Ivanov, I.N., 2018. Light-activated hybrid nanocomposite film for water and oxygen sensing. ACS applied materials & interfaces, 10(37), pp.31745-31754."},
            {url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/admi.201800476", text: "Tisdale, J.T., Muckley, E. S., Ahmadi, M., Smith, T., Seal, C., Lukosi, E., Ivanov, I.N. and Hu, B., 2018. Dynamic Impact of Electrode Materials on Interface of Single‐Crystalline Methylammonium Lead Bromide Perovskite. Advanced Materials Interfaces, p.1800476."},
            {url: "https://www.sciencedirect.com/science/article/abs/pii/S0925400518310074", text: "Tatarko, M., Muckley, E.S., Subjakova, V., Goswami, M., Sumpter, B.G., Hianik, T. and Ivanov, I.N., 2018. Machine learning enabled acoustic detection of sub-nanomolar concentration of trypsin and plasmin in solution. Sensors and Actuators B: Chemical."},
            {url: "https://pubs.acs.org/doi/10.1021/acsnano.7b05264", text: "Muckley, E.S., Naguib, M., Wang, H.W., Vlcek, L., Osti, N.C., Sacci, R.L., Sang, X., Unocic, R.R., Xie, Y., Tyagi, M. and Mamontov, E., 2017. Multimodality of Structural, Electrical, and Gravimetric Responses of Intercalated MXenes to Water. ACS nano, 11(11), pp.11118-11126."},
            {url: "https://www.nature.com/articles/s41598-017-10401-2", text: "Muckley, E.S., Jacobs, C.B., Vidal, K., Lavrik, N.V., Sumpter, B.G., Ivanov, I.N., 2017. Multi-mode humidity sensing with water-soluble copper phthalocyanine for increased sensitivity and dynamic range. Scientific Reports, 7(1) 9921."},
            {url: "https://pubs.acs.org/doi/abs/10.1021/acsami.7b03128", text: "Muckley, E.S., Jacobs, C.B., Vidal, K., Mahalik, J.P., Kumar, R., Sumpter, B.G. and Ivanov, I.N., 2017. New Insights on Electro-Optical Response of Poly (3, 4-ethylenedioxythiophene): Poly (styrenesulfonate) Film to Humidity. ACS Applied Materials and Interfaces, 9(18), pp.15880-15886."},
            {url: "https://www.nature.com/articles/s41598-017-05265-5", text: "Jacobs, C.B., Maksov, A.B.,  Muckley, E.S. , Collins, L., Mahjouri-Samani, M., Ievlev, A., Rouleau, C.M., Moon, J.W., Graham, D.E., Sumpter, B.G. and Ivanov, I.N., 2017. UV-activated ZnO films on a flexible substrate for room temperature O2 and H2O sensing. Scientific Reports, 7."},
            {url: "https://www.spiedigitallibrary.org/journals/Journal-of-Photonics-for-Energy/volume-7/issue-1/014001/----Custom-HTML----Functional/10.1117/1.JPE.7.014001.short", text: "Jacobs, C.B., Wang, K., Ievlev, A.V., Collins, L., Muckley, E.S. and Ivanov, I.N., 2017. Functional two/three-dimensional assembly of monolayer WS2 and nickel oxide. Journal of Photonics for Energy, 7(1), pp.014001-014001."},
            {url: "https://www.sciencedirect.com/science/article/abs/pii/S0925400516307304", text: "Muckley, E.S., Lynch, J., Kumar, R., Sumpter, B. and Ivanov, I.N., 2016. PEDOT: PSS/QCM-based multimodal humidity and pressure sensor. Sensors and Actuators B: Chemical, 236, pp.91-98."},
            {url: "https://www.spiedigitallibrary.org/journals/journal-of-photonics-for-energy/volume-6/issue-2/025506/Multimodal-probing-of-oxygen-and-water-interaction-with-metallic-and/10.1117/1.JPE.6.025506.short", text: "Muckley, E.S., Nelson, A.J., Jacobs, C.B. and Ivanov, I.N., 2016. Multimodal probing of oxygen and water interaction with metallic and semiconducting carbon nanotube networks under ultraviolet irradiation. Journal of Photonics for Energy, 6(2), pp.025506-025506."},
            {url: "https://www.spiedigitallibrary.org/journals/journal-of-photonics-for-energy/volume-6/issue-3/038001/Imaging-of-electrical-response-of-NiOx-under-controlled-environment-with/10.1117/1.JPE.6.038001.short?sessionGUID=9d902bc9-993c-ed26-8bea-d49a28531ab0&sessionGUID=9d902bc9-993c-ed26-8bea-d49a28531ab0&webSyncID=e9e6ec7a-49da-b6a0-cbad-059329ad883c", text: "Jacobs, C.B., Ievlev, A.V., Collins, L.F., Muckley, E.S., Joshi, P.C. and Ivanov, I.N., 2016. Imaging of electrical response of NiOx under controlled environment with sub-25-nm resolution. Journal of Photonics for Energy, 6(3), pp.038001-038001."},
            {url: "https://www.osti.gov/pages/biblio/1331093", text: "Muckley, E.S., Miller, N., Jacobs, C.B., Gredig, T. and Ivanov, I.N., 2016. Morphology-defined interaction of copper phthalocyanine with O2/H2O. Journal of Photonics for Energy, 6(4), pp.045501-045501."},
        ],
        "Selected whitepapers": [
            {url: "OPVdegradation.pdf", text: "Degradation mechanisms in low bandgap polymer-fullerene photovoltaic devices"},
            {url: "solar_feasibility_study.pdf", text: "Feasibility study for photovoltaic array at Bishop Airport in Owens Valley, California"},
            {url: "water_policy_recommendation.pdf", text: "Review and recommendation for United States water policy"},
        ],
        /*
        "Conference presentations and invited talks": [
            {text: "Can adding sensor modalities lower detection limits and improve sensitivity? May 2019. FORMILK School 2019. Budapest, Hungary."},
            {text: "Computer-controlled probing of thin films and interfaces. September 2018. 1st North American Symposium on Dynamic Vapor Sorption Sciences. Philadelphia, PA."},
            {text: "Computer-controlled high-throughput functional characterization of thin films. May 2018. Department of Materials, St. Anne's College, University of Oxford. Oxford, UK."},
            {text: "Effect of humidity on electronic and ionic conduction in PEDOT:PSS. August 2017. SPIE Organic Photonics + Electronics. San Diego, CA, USA."},
            {text: "Structural, electrical, and gravimetric responses of K- and Mg-intercalated MXenes to water. August 2017. SPIE Organic Photonics + Electronics. San Diego, CA, USA."},
            {text: "Machine learning and automation for probing environmental response of sensor materials. May 2017. Comenius University. Bratislava, Slovakia."},
            {text: "Effect of film morphology on oxygen and water interaction with copper phthalocyanine. August 2016. SPIE Organic Photonics + Electronics. San Diego, CA, USA."},
            {text: "Effect of UV irradiation on adsorption/desorption of oxygen and water on carbon nanotubes. February 2016. SPIE Photonics West. San Francisco, CA, USA."},
            {text: "Low-cost scalable quartz crystal microbalance array for environmental sensing. August 2016. SPIE Organic Photonics + Electronics. San Diego, CA, USA."},
            {text: "Spatially resolved resistance of NiO nanostructures under humid environment. February 2016. SPIE Photonics West. San Francisco, CA, USA."},
            {text: "Peeking at the Mechanisms of sensor operation and environment-induced degradation of electronic devices. June 2015. Brazilian Synchrotron Light Laboratory. Campinas, Brazil."},
            {text: "Effect of morphology on performance of organic thin film solar cells. May 2014. California State University Long Beach Student Research Competition. Long Beach, CA, USA."},
        ],
        */
    }

    



</script>

<div class="row">

    <div class="col">
        <h1 style="font-weight: 300;">
            WELCOME
        </h1>
        <p class="colored">
            Browse some of my interests here or visit my other profiles at the links below.
        </p>


        <div class="my-5">
            <h4>Contact + links</h4>
            <hr>
            {#each contactLinks as item}
                <div>
                    <a class="mb-2 w-100 btn btn-primary text-start rounded-pill" href="{item.url}" target="_blank" rel="noreferrer">
                        <i class="bi bi-{item.icon} me-3"></i>{item.name}
                    </a>                
                </div>
            {/each}
        </div>


        <div class="my-5">
            <h4>Education</h4>
            <hr>
            {#each education as item}
                <div class="my-3">
                    <div class="colored">{item.degree} - {item.year}</div>
                    <div class="colored">{item.location}</div>
                    <a class="my-2 w-100 btn btn-primary text-start" href="me/papers/{item.url}" target="_blank" rel="noreferrer">
                        {item.thesis}
                    </a>
                </div>

            {/each}
        </div>



    </div>



    <div class="col">

        {#each Object.keys(topics) as topic}


            <h4>{topic} ({topics[topic].length})</h4>
            

            {#if topic.includes("journal")}
                <a href="https://scholar.google.com/citations?user=KnSc4mMAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer">
                    View full publication list on Google Scholar
                </a>
            {/if}
            
            <hr>

            {#each topics[topic] as item}

                {#if ["journal", "patent"].some(x => topic.toLowerCase().includes(x))}

                    <a class="mb-2 w-100 btn btn-primary text-start" href={item.url} target="_blank" rel="noreferrer">
                        {item.text}
                    </a>

                {:else if topic.includes("whitepapers")}

                    <a class="mb-2 w-100 btn btn-primary text-start" href="me/papers/{item.url}" target="_blank" rel="noreferrer">
                        {item.text}
                    </a>

                {:else if topic.includes("talks")}

                    <p class="colored">
                        {item.text}
                    </p>

                {/if}
            
            {/each}

            <div class="mt-5"></div>

        {/each}

    </div>

</div>