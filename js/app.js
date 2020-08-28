window.addEventListener('load', function() {
    /**
     * Function with stopwatch logic.
    */
    function a() {
        let segundos = 0
        let minutos = 0
        setInterval(() => {
            segundos++
            let cron = document.getElementById('cron')
    
    
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
        }, 1000)
    }
    
    // Start button
    const btnStart = document.querySelector("#btnStart")
    btnStart.addEventListener('click', () => {
        a()
    })
})