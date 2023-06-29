import os from "os";

// console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.freemem());

const cpuModel = () => {
  const model = os.cpus()[0].model;
  return model;
};

const cpuCores = () => {
  const cores = os.cpus().length;
  return cores;
};

// average of last 1 min
const cpuLoad = () => {
  const load = os.loadavg();
  return load[0];
};

console.log(cpuLoad());
