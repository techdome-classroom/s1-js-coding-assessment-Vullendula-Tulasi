const decodeTheRing = function (s, p) {
  const m = s.length;
  const n = p.length;

  // Create a 2D DP array where dp[i][j] represents whether s[0..i-1] matches p[0..j-1]
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

  // Base case: empty message and empty pattern match
  dp[0][0] = true;

  // Handle the case where the pattern starts with '*' (matches empty string)
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 1]; // '*' can match an empty string
    }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === s[i - 1] || p[j - 1] === "?") {
        dp[i][j] = dp[i - 1][j - 1]; // Direct match or '?' match
      } else if (p[j - 1] === "*") {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1]; // '*' can match an empty string or more characters
      }
    }
  }

  // The answer is whether the entire message matches the entire pattern
  return dp[m][n];
};

module.exports = decodeTheRing;
