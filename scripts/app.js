document.addEventListener('DOMContentLoaded', function() {
  var inputText = document.querySelector('#input-text');
  var outputDiv = document.querySelector('#output');

  function encrypty() {
    var text = inputText.value;
    var encryptedText = text.toLowerCase()
                            .replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    outputDiv.innerHTML = `<textarea readonly id="encrypted-text">${encryptedText}</textarea>
                           <button class="button-copiar" onclick="copiar('encrypted-text')">Copiar</button>`;
  }

  function decryptText() {
    var text = inputText.value;
    var decryptedText = text.toLowerCase()
                              .replace(/enter/g, "e")
                              .replace(/imes/g, "i")
                              .replace(/ai/g, "a")
                              .replace(/ober/g, "o")
                              .replace(/ufat/g, "u");

    outputDiv.innerHTML = `<textarea readonly id="decrypted-text">${decryptedText}</textarea>
                           <button class="button-copiar" onclick="copiar('decrypted-text')">Copiar</button>`;
  }

  function copiar(textareaId) {
    var textArea = document.querySelector(`#${textareaId}`);
    textArea.select();
    textArea.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(textArea.value).then(() => {
    }).catch(err => {
      console.error('Erro ao copiar texto: ', err);
    });
  }

  window.encrypty = encrypty;
  window.decryptText = decryptText;
  window.copiar = copiar;
});
