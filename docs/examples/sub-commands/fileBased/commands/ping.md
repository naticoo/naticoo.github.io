```ts
import { NaticoCommand, DiscordenoMessage } from "../../../deps.ts";
export default class ping extends NaticoCommand {
  constructor() {
    super("ping", {
      name: "ping",
      aliases: ["ping"],
    });
  }
  exec(message: DiscordenoMessage) {
    message.reply("Pong");
  }
}
```

https://github.com/naticoo/examplebot/blob/main/sub-commands/fileBased/commands/ping.ts
