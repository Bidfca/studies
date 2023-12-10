let suffix: string | null = "doe";

if (suffix != null) {
  const suffixLocal = suffix;
  ["jane", "john"].forEach((name) => {
    // name + suffix.toUpperCase();
    name + suffixLocal.toUpperCase();
  });
}
