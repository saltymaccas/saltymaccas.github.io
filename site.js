message = `I just achieved Remote Code Execution in your Browser. ☺️ 
              Get hacked lol :D
              I'll even show you proof: 7*7 = ${7 * 7}`

document.getElementById('rce-message-area').innerText = message

async function select_saying() {
  response = await fetch("sayyings");
  text = await response.text()
  sayings = text.split("%")
  var selected_saying = await sayings[Math.floor(Math.random() * sayings.length)]
  return selected_saying
}

select_saying().then(s => document.getElementById("quote-area").innerText = s.trimStart())

