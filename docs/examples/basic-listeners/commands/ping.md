```ts
import { NaticoCommand } from '../../deps.ts';
export default class ping extends NaticoCommand {
	constructor() {
		super('ping', {
			name: 'ping',
			aliases: ['ping'],
		});
	}
	exec(message) {
		message.reply('Pong');
	}
}
```

https://github.com/naticoo/examplebot/blob/main/basic-listeners/commands/ping.ts
