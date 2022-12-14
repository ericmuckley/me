<script>
    import StandardPageContent from './StandardPageContent.svelte'

    export let title = "Hardware control + process automation"

    export let intro = `
        I've been the sole or lead developer of several multi-year projects involving the 
        integration of hardware with custom software for automated process control and
        real-time machine learning and analytics.   
    `

    export let topics = [
        {
            name: "Integrated multi-functional environmental characterization system",
            link: "imes",
            github: "https://github.com/ericmuckley/IMES",
            text: 
                `
                Advances in chemical synthesis and nanoscale patterning have led to a proliferation of novel materials for sensors, 
                optoelectronics, and thin film coatings. Before they can be deployed in commercial or idustrial 
                applications, these materials must be thoroughly screened for functionality and stability 
                under a broad range of environmental conditions. This screening process is time-consuming 
                and often requires multiple experienced researchers for operating instrumentation, analyzing data,
                and planning experiments.
                <br><br>
                I was the lead developer of an integrated multifunctional characterization system  
                for rapidly screening materials and sensors, which enabled automated control of 
                environmental conditions and measurement settings using real-time feedback. 
                Material properties 
                are measured across an ultra-wide range frequency spectrum spanning electrical, 
                gravimetric/vsicoelastic, and optical functional modes. 
                The system's control software interfaces with over 
                15 different scientific instruments and performs real-time data analytics and
                machine learing for enabling autonomous experiments. 
                The system is frequently used by international researchers at the 
                <a class="dark-link" target="_blank" href="https://www.ornl.gov/facility/cnms">Center
                for Nanophase Materials Sciences</a> at 
                <a class="dark-link" target="_blank" href="https://www.ornl.gov/">Oak Ridge National Laboratory</a>.  
                `
            ,
            img: [
                {"url": "IMES_broadband.JPG", "title": "Capabilities of the autonomous characterization system"},
                {"url": "IMES_screenshot.JPG", "title": "Python-based control software"},
                {"url": "system343b.jpg", "title": "Autonomous characterization system"},
                {"url": "systemcentered.jpg", "title": "Autonomous characterization system"},
            ],
            vid: [
                {"url": "https://www.youtube.com/embed/TG-s2J7XrX8?autoplay=0&loop=1&playlist=TG-s2J7XrX8"},
            ],
        },
        {
            name: "Automated laser-processing system for synthesis and characterization of 2D materials",
            link: 'laser-triggering',
            github: "https://github.com/ericmuckley/laser_triggering",
            text: 
                `
                I was the lead developer of an integrated system for in situ spectroscopic characterization 
                of materials coupled with automated laser processing. The application controls triggering of 
                laser pulses, acquisition of Raman spectra, acquisition of traces from an oscilloscope, 
                control of motorized translational stages, and control of motorized optical 
                polarizer/analyzer systems.
                The system is in use at one of the laser processing labs for 2D materials at the 
                    <a class="dark-link" href="https://www.ornl.gov/facility/cnms">Center
                    for Nanophase Materials Sciences</a> at 
                    <a class="dark-link" href="https://www.ornl.gov/">Oak Ridge National Laboratory</a>.  
                `,
            img: [
                {"url": "laser-triggering-ui.jpg", "title": "User interface for controlling automated laser processing system"},
                {"url": "laser-triggering-diagram.jpg", "title": "Schematic diagram of laser processing system"},
                {"url": "laserlabpano.jpg", "title": "Laser processing lab"},
            ],
        },
        {
            name: "High-resolution sensing array for environmental monitoring and IoT applications",
            link: "qcm-array",
            text: 
                `
                Demand for low cost sensors has exploded with proliferation of internet of things (IoT) devices, 
                including personal wearable sensors, smart textiles, and autonomous vehicles, which often rely on the use of wireless 
                sensor networks to continuously relay data back to network nodes where data processing is performed. Rapid systematic 
                testing of new sensors and sensing materials is essential for improving the quantity and quality of environmental 
                data acquired by sensing networks. The quartz crystal microbalance (QCM) is a bulk acoustic wave sensor used for probing 
                molecular adsorption/desorption events with sub-nanogram resolution. The QCM has found use in a wide range of sensing 
                applications, including gas/vapor sensing for environmental monitoring, detection of proteins and enzymes for biomedical 
                screening, and inclusion in sensor arrays for electronic nose (e-nose) technologies. Commercially-available QCM systems are 
                often prohibitively expensive (over $2,000 per sensor) for many applications, particularly when used in arrays containing 
                multiple crystals. To circumvent this problem, I developed a low-cost QCM array using an open-source Pierce oscillator 
                circuit built by <a class="dark-link" href="http://openqcm.com/" target="_blank">openQCM</a> and powered by the versatile 
                <a class="dark-link" href="https://www.arduino.cc/" target="_blank">Arduino</a> prototyping platform.
                <br><br>
                The 6-crystal prototype can 
                be easily inserted and removed from a testing chamber where reponse of the sensor array is studied under different 
                environmental conditions. The advantage of a multi-crystal array is that each crystal can be coated with a different 
                sensing film, which allows simultaneous characterization of up to 6 sensor materials under identical environmental conditions.
                <br><br>
                The array is controlled by custom software written in Python and Arduino code and is inherently scalable, 
                where each additional crystal costs ~$100, which is ~10-20 times less expensive than most commercially-available QCM systems. 
                When compared against the $2,500 commercial QCM system manufactured by a leading QCM supplier, the custom-built system achieves 
                the same resolution and even faster response times. A published conference proceedings article describing the QCM array and 
                its associated machine learning applications  
                <a class="dark-link" href="http://proceedings.spiedigitallibrary.org/proceeding.aspx?articleid=2563458" target="_blank">is available here</a>.
                `
            ,
            img: [
                {"url": "crystals.jpg", "title": "6-crystal sensor array"},
                {"url": "crystalsinchamber.jpg", "title": "Sensor array inside controlled environmental testing chamber"},  
            ],
        },
        {
            name: "Smart beer brewing system with real-time monitoring",
            link: "brewing",
            github: "https://github.com/ericmuckley/smart_homebrewing_system",
            text: 
                `
                Using a raspberry pi computer, camera, and array of gas/vapor sensors, 
                I built a system for monitoring fermentation of home-brewed beer and wine. 
                The sensors and camera are placed over the top of the fermentation vessel and covered 
                with an air-tight seal to trap gases emitted from the fermenting liquid and ensure 
                atmospheric stability. The camera acquires images of the fermentation at constant 
                time intervals and the sensors measure tepmerature, pressure, relative humidity, and 
                alcohol concentration (measured by MQ-X gas sensors) over time. The data is 
                continuously transferred over wifi to a remote computer where it is plotted in 
                real-time to allow tracking of the fermentation progress.
                <br><br>
                An example of data streaming from the sensors can be seen in the video below. 
                The system integrates sensor data with images taken of the fermenter so that 
                the appearance of the fermented beer can be linked to chemical changes.
                `
            ,
            img: [
                {"url": "carboy.JPG", "title": "Fermentation vessel with sensors and camera"},
            ],
            vid: [
                {"url": "https://www.youtube.com/embed/_vpxnixSp3A?autoplay=0&loop=1&playlist=_vpxnixSp3A"},
            ],
        },
    ]

</script>


<StandardPageContent title={title} intro={intro} topics={topics} />
