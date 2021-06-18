```ts
import { NaticoClient, NaticoCommandHandler, NaticoClientOptions } from "../../deps.ts";
class BotClient extends NaticoClient {
  constructor(public options?: NaticoClientOptions) {
    super(options);
  }
  commandHandler: NaticoCommandHandler = new NaticoCommandHandler(this, {
    directory: "./commands",
    prefix: "!",
    owners: ["336465356304678913"],
    guildonly: false,
    subType: "single",
  });
  async start() {
    await this.commandHandler.loadALL();
    return this.login();
  }
}
const botClient = new BotClient({
  intents: ["Guilds", "GuildMessages", "GuildVoiceStates"],
  token: "Your token",
});
botClient.start();
```

https://github.com/naticoo/examplebot/blob/main/sub-commands/fileBased/mod.ts
