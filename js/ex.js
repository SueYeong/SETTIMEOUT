(function(){

    const btn = document.querySelector('button')
    const messageBox = document.querySelector('.message_box')

    const handleClick = () => {
        messageBox.classList.add('active')

        setTimeout(() => {
            messageBox.classList.remove('active')
        }, 1000)
    }


    btn.addEventListener('click', handleClick)
})()