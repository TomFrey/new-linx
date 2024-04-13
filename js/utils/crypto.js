 	//https://stackoverflow.com/questions/18279141/javascript-string-encryption-and-decryption
     const decrypt = (salt, encoded) => {
		const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
		const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
		return encoded
			.match(/.{1,2}/g)
			.map((hex) => parseInt(hex, 16))
			.map(applySaltToChar)
			.map((charCode) => String.fromCharCode(charCode))
			.join("");
	};

	function decryptLinkToMessenger(salt, key) {
		const linkToWhatsApp = decrypt(salt, key);
		window.open(linkToWhatsApp, '_blank');
	}

	// https://jumk.de/nospam/stopspam.html
	function UnCryptMailto(s) {
		let n = 0;
		let r = '';
		for (let i = 0; i < s.length; i++) {
			n = s.charCodeAt(i);
			if (n >= 8364) { n = 128; }
			r += String.fromCharCode(n - (1));
		}
		return r;
	}

	// https://jumk.de/nospam/stopspam.html
	function linkToUnCryptMailto(s)	{
		window.open(UnCryptMailto(s), '_blank');
	}


export {
    linkToUnCryptMailto,
    //UnCryptMailto,
    decryptLinkToMessenger
};
