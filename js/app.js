window.addEventListener('load', function () {
    /**
     * Function with stopwatch logic.
    */
    function watch() {
        const cron = document.querySelector('#cron')
        const timeString = cron.dataset.time.split(':')
        let time = {
            minutos: parseInt(timeString[0]),
            segundos: parseInt(timeString[1]),
        }

        const timeToString = (minutos, segundos) => {
            minutos =  `${minutos  < 10 ? '0' : ''}` + minutos
            segundos = `${segundos < 10 ? '0' : ''}` + segundos

            return `${minutos}:${segundos}`
        }

        setTimeout(() => {
            if (cron.dataset.watch == 'true') {
                time.segundos++

                if (time.segundos > 60) {
                    time.minutos++
                    time.segundos = 0
                }

                cron.dataset.time = `${time.minutos}:${time.segundos}`
                cron.innerText = timeToString(time.minutos, time.segundos)
                watch()
            }
        }, 1000)
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
            cron.dataset.time = '00:00'
            btnStart.innerText = 'Resetar'
            watch()
        }, 1000)

        btnPause.style.display = 'initial'
    })

    btnPause.addEventListener('click', () => {
        cron.dataset.watch = (cron.dataset.watch == 'false')

        if (cron.dataset.watch == 'true') {
            btnPause.innerText = 'Pausa'

            btnPause.classList.remove('btn-unpause')
            btnPause.classList.add('btn-pause')
            
            watch()
        } else {
            btnPause.innerText = 'Retomar'

            btnPause.classList.remove('btn-pause')
            btnPause.classList.add('btn-unpause')
        }
    })
})