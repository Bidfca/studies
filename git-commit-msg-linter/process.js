const cp = require("child_process");

// 0 success
// 1 failure
console.log("Terminate the process synchronously", process.exit(0));

console.log("Prints to stdout with newline", process.argv);

const exec_options = {
  cwd: null,
  env: null,
  encoding: "utf8",
  timeout: 0,
  maxBuffer: 200 * 1024,
  killSignal: "SIGTERM",
};

// Spawns a shell then executes the command within that shell, buffering any generated output
cp.exec("ls -l", exec_options, (err, stdout, stderr) => {
  console.log("#1. exec");
  console.log(stdout);
});

// Identical to exec with the exception that the method will not return until the child process has fully closed
try {
  const data = cp.execSync("ls -l", exec_options);
  console.log("#2. exec sync");
  console.log(data.toString());
} catch (err) {}

const spawn_options = {
  cwd: null,
  env: null,
  detached: false,
};

// Spawns a new process using the given command, with command-line arguments in args
const ls = cp.spawn("ls", ["-l"], spawn_options);

ls.stdout.on("data", (stdout) => {
  console.log("#3. spawn");
  console.log(stdout.toString());
});

ls.stderr.on("data", (stderr) => {
  console.log(stderr.toString());
});

ls.on("close", (code) => {
  // ended with code
});

// Identical to spawn with the exception that the function will not return until the child process has fully closed
const { stdout, stderr, pid, status } = cp.spawnSync(
  "ls",
  ["-l"],
  spawn_options
);
console.log("#4. spawn sync");
console.log(stdout.toString());
