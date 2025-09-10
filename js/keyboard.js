const resultInput = document.querySelector("#screen__second-input")
let keysPress = new Set()

const clickKey = (key) => {
  const addKey = () => {
    resultInput.value += key
    // if (typeof key === 'string') {
    //   return console.log(key)
    //   // return key
    // } else if (typeof key === 'object') {
    //   return console.log(key)
    //   // return key.Array.from(keysPress).pop()
    // }
    
    const index = document.querySelector(`.${key}`)
    index.classList.add("key-active")
    window.setTimeout(() => {
      index.classList.remove("key-active")
    }, 500)
  }
  if (resultInput.value.length < 4) {
    addKey()
  } else {
    resultInput.value = resultInput.value.slice(1)
    addKey()
  }
  console.log(resultInput.value.length)
}

const keyMapLower = {
  KeyQ: "q",
  KeyW: "w",
  KeyE: "e",
  KeyR: "r",
  KeyT: "t",
  KeyY: "y",
  KeyU: "u",
  KeyI: "i",
  KeyO: "o",
  KeyP: "p",
  KeyA: "a",
  KeyS: "s",
  KeyD: "d",
  KeyF: "f",
  KeyG: "g",
  KeyH: "h",
  KeyJ: "j",
  KeyK: "k",
  KeyL: "l",
  KeyZ: "z",
  KeyX: "x",
  KeyC: "c",
  KeyV: "v",
  KeyB: "b",
  KeyN: "n",
  KeyM: "m",
}

const keyMapTitle = {
  KeyQ: "Q",
  KeyW: "W",
  KeyE: "E",
  KeyR: "R",
  KeyT: "T",
  KeyY: "Y",
  KeyU: "U",
  KeyI: "I",
  KeyO: "O",
  KeyP: "P",
  KeyA: "A",
  KeyS: "S",
  KeyD: "D",
  KeyF: "F",
  KeyG: "G",
  KeyH: "H",
  KeyJ: "J",
  KeyK: "K",
  KeyL: "L",
  KeyZ: "Z",
  KeyX: "X",
  KeyC: "C",
  KeyV: "V",
  KeyB: "B",
  KeyN: "N",
  KeyM: "M",
}

window.addEventListener("keydown", (event) => {
  if (!keysPress.has(event.code)) {
    keysPress.add(event.code)

    let key
    if (keysPress.has("ShiftLeft") || keysPress.has("ShiftRight")) {
      key = keyMapTitle[event.code]
    } else {
      key = keyMapLower[event.code]
    }

    if (key) {
      console.log(keysPress)
      clickKey(key)
    }
  }
})

window.addEventListener("keyup", (event) => {
  keysPress.delete(event.code)
})

// window.addEventListener("keyup", (event) => {
//   switch (event.code) {
//     case "KeyQ":
//       clickKey('q')
//       break
//     case 'KeyW':
//       clickKey('w')
//       break
//     case 'KeyE':
//       clickKey('e')
//       break
//     case 'KeyR':
//       clickKey('r')
//       break
//     case 'KeyT':
//       clickKey('t')
//       break
//     case 'KeyY':
//       clickKey('y')
//       break
//     case 'KeyU':
//       clickKey('u')
//       break
//     case 'KeyI':
//       clickKey('i')
//       break
//     case 'KeyO':
//       clickKey('o')
//       break
//     case 'KeyP':
//       clickKey('p')
//       break
//     case 'KeyA':
//       clickKey('a')
//       break
//     case 'KeyS':
//       clickKey('s')
//       break
//     case 'KeyD':
//       clickKey('d')
//       break
//     case 'KeyF':
//       clickKey('f')
//       break
//     case 'KeyG':
//       clickKey('g')
//       break
//     case 'KeyH':
//       clickKey('h')
//       break
//     case 'KeyJ':
//       clickKey('j')
//       break
//     case 'KeyK':
//       clickKey('k')
//       break
//     case 'KeyL':
//       clickKey('l')
//       break
//     case 'KeyZ':
//       clickKey('z')
//       break
//     case 'KeyX':
//       clickKey('x')
//       break
//     case 'KeyC':
//       clickKey('c')
//       break
//     case 'KeyV':
//       clickKey('v')
//       break
//     case 'KeyB':
//       clickKey('b')
//       break
//     case 'KeyN':
//       clickKey('n')
//       break
//     case 'KeyM':
//       clickKey('m')
//       break
//   }

//   console.log(event.code)
// })
