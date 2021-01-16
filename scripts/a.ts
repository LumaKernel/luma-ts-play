import { wait } from "../src/utils/async";

const main = async () => {
  console.log("start");
  await wait(1000);
  console.log("done");
};

void main();
