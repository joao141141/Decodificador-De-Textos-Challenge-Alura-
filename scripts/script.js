document.addEventListener("DOMContentLoaded", function() {
    const encryptButton = document.querySelector('.btn-encrip');
    const decryptButton = document.querySelector('.btn-desencrip');
    const copyButton = document.querySelector('.btn-copiar');
    const textArea = document.querySelector('.text-area');
    const messageArea = document.querySelector('.Mensagem');

    function encrypt(text) {
        let encryptedText = text.replace(/e/g, 'enter')
                                .replace(/i/g, 'imes')
                                .replace(/a/g, 'ai')
                                .replace(/o/g, 'ober')
                                .replace(/u/g, 'ufat');
        return encryptedText;
    }

    function decrypt(text) {
        let decryptedText = text.replace(/enter/g, 'e')
                                .replace(/imes/g, 'i')
                                .replace(/ai/g, 'a')
                                .replace(/ober/g, 'o')
                                .replace(/ufat/g, 'u');
        return decryptedText;
    }

    encryptButton.addEventListener('click', function() {
        const text = textArea.value;
        messageArea.value = encrypt(text);
    });

    decryptButton.addEventListener('click', function() {
        const text = textArea.value;
        messageArea.value = decrypt(text);
    });

    copyButton.addEventListener('click', function() {
        messageArea.select();
        document.execCommand('copy');
    });
});
