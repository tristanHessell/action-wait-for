const core = require('@actions/core');
const exec = require('@actions/exec');

async function run () {
  try {
    const TIMEOUT = getNumberOrFail('timeout', 60);
    const PORT = getNumberOrFail('port', 3000);
    const SLEEP = getNumberOrFail('sleep', 2);

    await exec.exec(`timeout ${TIMEOUT} bash -c 'until echo > /dev/tcp/localhost/${PORT}; do sleep ${SLEEP}; done`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

function getNumberOrFail (varName, defaultVal) {
  const val = core.getInput(varName);
  if (val == null) {
    return defaultVal;
  }

  const num = Number(val);

  if (Number.isNaN(num)) {
    throw new Error(`Configuration variable ${varName} is invalid`);
  }

  return num;
}

run();

