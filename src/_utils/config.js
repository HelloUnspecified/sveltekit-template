import { browser } from '$app/env';

function configMissing(configKey) {
	throw new Error(`Missing required environment varable: ${configKey}`);
}

export default {
	hostURL: import.meta.env.VITE_HOST_URL || 'https://site.com',
	nodeEnv: process.env.NODE_ENV,
	process: import.meta.env
};
