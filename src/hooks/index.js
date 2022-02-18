import * as Sentry from '@sentry/node';
import config, { logging } from '$utils/config';

Sentry.init({
	dsn: logging.dsn,
	release: config.version,
	debug: false,
	attachStacktrace: true
});

export async function handleError({ error, event }) {
	const thisError = error instanceof Error ? error : new Error(error);
	Sentry.captureException(new Error(thisError), { event });
}
