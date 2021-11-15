const linksSocialMedia = {
    // Objeto que contem os usuarios das redes sociais
    github: 'thyagojesus',
    instagram: 'thyago_jesus',
    linkedin: 'in/thyago-jesus-146a1b1ab/'
}

function changeSocialMidiaLinks() {
    // Função que altera os href da TAG <a>
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        if (social === 'api.whatsapp') {
            // IF usado porque o atributo do objeto linksSocialMedia não pode ter ponto "api.whatsapp"
            const whats = document.getElementsByClassName('api.whatsapp')
            whats.href = 'https://api.whatsapp.com/send?phone=5535999167983'
        } else {
            li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
        }
    }
}
changeSocialMidiaLinks()

function getGitProfileInfos() {
    const url = `https://api.${document
    .getElementById('github')
    .getAttribute('alt')}.com/users/${linksSocialMedia['github']}`

    fetch(url).then(response =>
            response.json().then(data => {;
                (document.getElementById('userName').textContent = data.name),
                (document.getElementById('userBio').textContent = data.bio),
                (userLink.href = data.html_url),
                (userLink = data.login),
                (userImage.src = data.avatar_url),
                (userLogin.textContent = data.login)
            })
        )
        //O fetch devolve uma promessa de que algo será retornado,precisamos fazer um tratamento, Por isso, usamos o Then
}
getGitProfileInfos()

function contarMais() {
    const input = document.getElementById('input')
    console.log(input.value)
    const label = document.getElementById('tela')
    const conteudoNovo = parseInt(input.value)
    const conteudoAtual = parseInt(label.innerText)

    label.innerHTML = conteudoAtual + conteudoNovo
}

function contarMenos() {
    const input = document.getElementById('input')
    console.log(input.value)
    const label = document.getElementById('tela')
    const conteudoNovo = parseInt(input.value)
    const conteudoAtual = parseInt(label.innerText)

    label.innerHTML = conteudoAtual - conteudoNovo
}

function scroll() {
    console.log('OI')
    var y = window.scrollY
    window.scrollY = 200
    console.log(window.scrollY)
}