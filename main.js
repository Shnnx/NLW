const links = {
  github: 'Shnnx',
  youtube: 'channel/UCy_-C6rHD3hfBvOvMbSJxfg',
  instagram: 'albert_shan',
  facebook: 'mindpensante',
  twitter: 'albertjtk'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links[social]}`

    // #ImaginarConstruirTransformar
  }
}

changeSocialMediaLinks()

function getInfoByGitHub() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(answer => answer.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitHub.href = data.html_url
      userPhoto.src = data.avatar_url
      userLink.textContent = data.login
    })
}

getInfoByGitHub()
