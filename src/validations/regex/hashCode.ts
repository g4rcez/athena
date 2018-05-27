const commonHash = '^[a-f0-9]';
export default {
	md5: RegExp(`${commonHash}{32}$`),
	sha1: RegExp(`${commonHash}{40}$`),
	sha224: RegExp(`${commonHash}{56}$`),
	sha256: RegExp(`${commonHash}{64}$`),
	sha384: RegExp(`${commonHash}{96}$`),
	sha512: RegExp(`${commonHash}{128}$`),
	uuid: /^[a-f0-9]{8}(-[a-f0-9]{4}){3}-[a-f0-9]{12}$/,
	base64: /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/,
	base32: /^(?:[A-Z2-7]{8})*(?:[A-Z2-7]{2}={6}|[A-Z2-7]{4}={4}|[A-Z2-7]{5}={3}|[A-Z2-7]{7}=)?$/,
};
