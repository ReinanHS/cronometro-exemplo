window.addEventListener('load', function() {
    /**
     * Function with stopwatch logic.
    */
    function watch(segundos = 0, minutos = 0) {
        const cron = document.querySelector('#cron')
        const isActive = (cron.dataset.watch == 'true')

        if(isActive){
            setTimeout(() => {
                segundos++
        
        
                if (segundos < 10) {
                    cron.innerHTML = `0${minutos}:0${segundos} `
                }
                else if (segundos < 60) {
                    cron.innerHTML = `0${minutos}:${segundos} `
                }
                else if (segundos > 60) {
                    minutos++
                    segundos = 0
                }

                watch(segundos, minutos)
            }, 1000)
        }
    }
    
    // Start button
    const btnStart = document.querySelector("#btnStart")
    const btnPause = document.querySelector("#btnPause")
    const cron = document.querySelector("#cron")

    btnStart.addEventListener('click', () => {
        cron.dataset.watch = 'false'
        cron.innerHTML = `00:00`

        setTimeout(() => {
            cron.dataset.watch = 'true'
            watch()
        }, 1000)

    })

    btnPause.addEventListener('click', () => {
        cron.dataset.watch = (cron.dataset.watch == 'false')

        if(cron.dataset.watch == 'true'){
            const time = cron.innerText.split(':')
            watch( parseInt(time[1]), parseInt(time[0]) )
        }
    })
})