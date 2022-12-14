<script>

    import StandardPageContent from './StandardPageContent.svelte'

    export let title = "Data science + machine learning"

    export let intro =  `
        I have years of experience leading machine learning projects for automated experimentation,
        experiment planning, process control, and materials design.
    `

    export let topics = [
        {
            name: "Real-time machine learning",
            link: "rt-ml",
            text: 
                `
                Machine learning is commonly used to create predictive models
                from static datasets. To reap the benefits of predictive analytics
                in real-time, its often necessary to stream data directly from acquisition
                sources into model training workflows. This enables dynamic models which improve
                as training data evolves and helps to avoid model drift.
                <br><br>
                Examples of real-time machine learning classification and regression are shown below.
                The classification model is trained to distinguish between three types of adsorption
                isotherms using real-time acquisition of isotherm data.
                As more data is added to the training set, classification boundaries evolve to
                accomodate the new samples. The three panels compare classification boundaries between
                three common classification models: support vector machines (SVMs) with linear and radial
                basis function (RBF) kernels, and a decision tree.
                In the regression problem, four panels from bottom to top correpond to relative humidity,
                response of a humidity sensor, the regression model and future prediction,
                and the residual errors between predicted/modeled response and actual sensor response.
                The model and prediction evolve as new data is acquired and added to the training set.
                `
            ,
            img: [],
            vid: [
                {"url": "https://www.youtube.com/embed/iIOD1UxuxVo?autoplay=0&loop=1&playlist=iIOD1UxuxVo"},
                {"url": "https://www.youtube.com/embed/qShslUHae9w?autoplay=0&loop=1&playlist=qShslUHae9w"},
            ],
        },

        {
            name: "Model performance diagnostics",
            link: "modeldiagnostics",
            //github: "https://github.com/ericmuckley/IMES",
            text: 
                `
                Neural networks (NNs) and other machine learning algorithms
                are powerful tools for creating predictive models, but tuning of model
                parameters is often difficult due to the large number of degrees of
                freedom in the model. One of the primary challenges associated with
                the use of NNs is optimization of the network design, as NNs may contain many
                hidden neuron layers, each containing large numbers of neurons. 
                Furthermore, learning rate and quality and quantity of data used for
                training/testing/validating the model may significantly impact model performance.
                Shown below are examples of results from diagnostic software for assessing
                performance of machine learning models based on average residual,
                number of training samples, and training time.
                Performance of NNs based on the number of neurons in the first and
                second hidden layers in the model is also shown.
                Model diagnostics enable the end user to select the desired balance
                between accuracy and training time for a specific application and
                assess whether a model has been over/under-fitted.
                An example of machine learning classification of adsorption isotherms based on their
                derivatives is shown in the video below. The three panels compare classification
                boundaries of underfit, balanced, and overfit models as data is acquired in real time.
                `
            ,
            img: [
                {"url": "ANNsamplesplot.jpg", "title": "Effects of training set size on performance and training time"},
                {"url": "nnmaps.jpg", "title": "Effects of hidden layer neurons on performance and training time"},
            ],
            vid: [
                {"url": "https://www.youtube.com/embed/b6TPW9VnTuk?autoplay=0&loop=1&playlist=b6TPW9VnTuk"},
            ],
        },      

        {
            name: "Peak detection and spectral deconvolution",
            link: "peakfinding",
            //github: "https://github.com/ericmuckley/IMES",
            text: 
                `
                Reliable tools for automated peak detection and spectral deconvolution are critical
                in many areas of science and engineering. I have spent years developing
                software for peak detection, deconvolutiion, modeling, and simulation. Shown below is an example
                of automatic peak detection in complex spectra, deconvolution of the signal
                by simulation of Gaussian-shaped peaks, and reconstruction of the fitted signal by convolution
                of the fitted peaks. The video below shows real-time fitting of multi-peak spectra of an acoustic
                resonator (left). Peak positions are tracked over time to more easily enable prediction of future peak positions.
                The positions, widths, and equivalent circuit model parameters are extracted from each peak automatically
                and tracked over time (center and right panels).
                `
            ,
            img: [
                {"url": "peakfinder.png", "title": "Automated peak detection in complex spectra"},
                {"url": "caseinpeaks.png", "title": "Spectral deconvolution by simulation of constituent peaks"},
                {"url": "caseinpeakfits.png", "title": "Spectral resconstruction by simulatde peaks"},
            ],
            vid: [
                {"url": "https://www.youtube.com/embed/G8a7ou1wLBw?autoplay=0&loop=1&playlist=G8a7ou1wLBw"},
            ],
        },
    



            {
            name: "Batch sensor analytics",
            link: "batchanalytics",
            //github: "https://github.com/ericmuckley/IMES",
            text: 
                `
                For rapid processing of multi-sensor data streams, I created software
                which models sensor response by batch fitting raw signals to different
                time-series models in real time. In the example shown below, sensing material
                is exposed to a pulsed stimulus, which may correspond to any environmental change
                (temperature fluctuation, pressure spike, humidity shift, etc).
                Response of the sensor during exposure to the environmental stimulus is
                automatically divided into regions of interest (ROIs) where the interesting
                dynamics occur. Signals in each ROI are then normalized and background
                is subtracted so that kinetics can be compared across each ROI.
                A mathematical model is selected (either automatically or manually, based on the application)
                and the signal in each ROI is fit to the model. Full fits, fitting parameters and fit
                quality metrics are extracted for comprehensive characterization of the sensor dynamics
                and response. The algorithm is designed to handle data types emanating
                from diverse sources (i.e. gravimetic, electrical, optical, etc.) so that
                complex data streams from multi-modal sensor arrays may be processed rapidly without manual human effort.
                `
            ,
            img: [
                {"url": "batchprocessing.jpg", "title": "Automated batch processing of multi-sensor response"},
            ],
            vid: [
                //{"url": "https://www.youtube.com/embed/G8a7ou1wLBw?autoplay=0&loop=1&playlist=G8a7ou1wLBw"},
            ],
        },
            
        {
            name: "QCM-D modeling application",
            link: "qcmdapp",
            github: "https://github.com/ericmuckley/QCMD_calculator",
            text: 
                `
                The quartz crystal microbalance with energy dissipation monitoring (QCM-D) is an advanced
                tool for measuring miniscule changes in the mass (down to 0.1 nanogram sensitivity) and viscoelastic
                properties of thin films coated on top of the crystal surface. Modeling QCM-D response to
                extract dynamic film properties requires specialized numerical solvers. I created an application
                for estimating modeling parameters that can be used to initialize algorithms such as Newton's method
                for convereting raw QCM-D data into estimates of film thickness, density, shear modulus, and bulk modulus.
                `
            ,
            img: [
                {"url": "QCMD-app-UI.JPG", "title": "QCM-D modeling application"},
                {"url": "QCMD-app-df-surface.JPG", "title": "Calculated surface for solutions in fequency shift space"},
                {"url": "QCMD-app-dD-surface.JPG", "title": "Calculated surface for solutinos in eneergy dissipation space"},
                {"url": "QCMD-app-solution.JPG", "title": "Estimation of point at which different solution spaces converge"},
            ],
            vid: [
                //{"url": "https://www.youtube.com/embed/TG-s2J7XrX8?autoplay=0&loop=1&playlist=TG-s2J7XrX8"},
            ],
        },

    ]

</script>


<StandardPageContent title={title} intro={intro} topics={topics} />