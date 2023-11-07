import { client } from "./client"

const main = async () => {
  await client.init();
  const prompt =
    "Christmas dinner with spaghetti with family in a cozy house, we see interior details , simple blue&white illustration";
//imagine
  const Imagine = await client.Imagine(
    prompt,
    (uri: string, progress: string) => {
      console.log("loading", uri, "progress", progress);
    }
  );
  console.log(Imagine);
  if (!Imagine) {
    console.log("no message");
    return;
  }
//U1 U2 U3 U4 V1 V2 V3 V4  "Vary (Strong)" ...
//⬅️,⬆️,⬇️,➡️
  const V1CustomID = Imagine.options?.find((o) => o.label === "V1")?.custom;
  if (!V1CustomID) {
    console.log("no V1");
    return;
  }
// Varition V1
  const Varition = await client.Custom({
    msgId: <string>Imagine.id,
    flags: Imagine.flags,
    customId: V1CustomID,
    content: prompt, //remix mode require content
    loading: (uri: string, progress: string) => {
      console.log("loading", uri, "progress", progress);
    },
  });
  console.log(Varition);
  const U1CustomID = Imagine.options?.find((o) => o.label === "U1")?.custom;
  if (!U1CustomID) {
    console.log("no U1");
    return;
  }
// Upscale U1
  const Upscale = await client.Custom({
    msgId: <string>Imagine.id,
    flags: Imagine.flags,
    customId: U1CustomID,
    loading: (uri: string, progress: string) => {
      console.log("loading", uri, "progress", progress);
    },
  });
  if (!Upscale) {
    console.log("no Upscale");
    return;
  }
  console.log(Upscale);
  const zoomout = Upscale?.options?.find((o) => o.label === "Custom Zoom");
  if (!zoomout) {
    console.log("no zoomout");
    return;
  }
// Custom Zoom
  const CustomZoomout = await client.Custom({
    msgId: <string>Upscale.id,
    flags: Upscale.flags,
    content: `${prompt} --zoom 2`, // Custom Zoom  require content
    customId: zoomout.custom,
    loading: (uri: string, progress: string) => {
      console.log("loading", uri, "progress", progress);
    },
  });
  console.log(CustomZoomout);
}

main()
