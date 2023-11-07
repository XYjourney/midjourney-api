
## Get started

Follow the [`.env.example.json`](./.env.example.json) file to create a ".env.json" under the root folder before start.

```bash
yarn && yarn dev
```

## How to get your discord token

Login DiscordF12 OR Ctrl + Shift + I (or Command + Option + I on Mac) to open the developer tools AND paste the following code into the console
```javascript
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  (req) => {
    for (const m of Object.keys(req.c)
      .map((x) => req.c[x].exports)
      .filter((x) => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log("%cWorked!", "font-size: 50px");
console.log(`%cYou now have your token in the clipboard!`, "font-size: 16px");
```

## Connect Midjourney to your server

[Create a server](https://discord.com/blog/starting-your-first-discord-server) and [Invite Midjourney Bot to Your Server](https://docs.midjourney.com/docs/invite-the-bot)
