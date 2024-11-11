const getTotalIsles = function (grid) {
  // Helper function to perform DFS traversal and mark visited land as water
  function dfs(grid, i, j) {
    // If out of bounds or the current cell is water, return
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] === "W"
    ) {
      return;
    }

    // Mark the current land ('L') as visited by turning it to water ('W')
    grid[i][j] = "W";

    // Perform DFS in all four directions (up, down, left, right)
    dfs(grid, i - 1, j); // up
    dfs(grid, i + 1, j); // down
    dfs(grid, i, j - 1); // left
    dfs(grid, i, j + 1); // right
  }

  // Initialize the number of islands
  let numIslands = 0;

  // Loop through the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // If we find an 'L', we found an unvisited island, so start DFS
      if (grid[i][j] === "L") {
        numIslands++;
        dfs(grid, i, j); // Mark the whole island
      }
    }
  }

  return numIslands;
};

// Example Test Cases
const grid1 = [
  ["L", "L", "L", "L", "W"],
  ["L", "L", "W", "L", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];

const grid2 = [
  ["L", "L", "W", "W", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "L", "W", "W"],
  ["W", "W", "W", "L", "L"],
];

console.log(getTotalIsles(grid1)); // Output: 1
console.log(getTotalIsles(grid2)); // Output: 3

module.exports = getTotalIsles;
