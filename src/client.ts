import { SERVER_ID, CHANNEL_ID, SALAI_TOKEN } from "../.env.json";
import { Midjourney } from "midjourney";

export const client = new Midjourney({
  ServerId: SERVER_ID,
  ChannelId: CHANNEL_ID,
  SalaiToken: SALAI_TOKEN,
  Debug: true,
  Ws: true, //enable ws is required for remix mode (and custom zoom)
});
