```ts
import { DiscordenoMessage, NaticoSubCommand } from "../../../../deps.ts";
export default class channel extends NaticoSubCommand {
  constructor() {
    super("channel", {
      name: "channel",
      subOf: "say",
      options: [
        {
          type: 3,
          name: "text",
          description: "stuff you want to say in the channel",
          required: false,
        },
      ],
    });
  }
  exec(message: DiscordenoMessage, a: { text: string }) {
    message.channel!.send(a.text || "nothing");
  }
}
```

https://github.com/naticoo/examplebot/blob/main/sub-commands/fileBased/commands/say/channel.ts
