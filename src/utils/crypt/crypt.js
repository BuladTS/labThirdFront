import CryptoJS from "crypto-js";

export const getAesKey = (key) => {
    const hash512 = CryptoJS.SHA512(key.toString())
    return CryptoJS.enc.Base64.stringify(hash512).substring(2, 34)
}

export const getIv = (key) => {
    const hash256 = CryptoJS.SHA256(key.toString())
    return CryptoJS.enc.Base64.stringify(hash256).substring(2, 18)
}


export const encrypt = (_content, _key, _iv) => {
    let content = CryptoJS.enc.Utf8.parse(_content);
    let aesKey = CryptoJS.enc.Utf8.parse(_key);
    let iv = CryptoJS.enc.Utf8.parse(_iv);

    let encrypted = CryptoJS.AES.encrypt(content, aesKey, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })

    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}

export const decrypt = (_content, _key, _iv) => {
    let content = CryptoJS.enc.Utf8.parse(_content);
    content = CryptoJS.enc.Utf8.stringify(content);
    let aesKey = CryptoJS.enc.Utf8.parse(_key);
    let iv = CryptoJS.enc.Utf8.parse(_iv);

    let decrypted = CryptoJS.AES.decrypt(content, aesKey, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })

    console.log(decrypted.toString())
    return decrypted.toString(CryptoJS.enc.Utf8)
}