import { initializeServer } from "./app";

async function init() {
  const app = await initializeServer();
  await app.listen(8000, () => {
    console.log("Listening on port 8000");
  });
}

init();
