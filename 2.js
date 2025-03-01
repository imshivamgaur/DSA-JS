const groceries = ["milk", "bread", "egg", "flour", "sugar", "ghee"];

// O(n)  linear
const searchForItem = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`Found ${item}`);
      return;
    }
  }
};

searchForItem("ghee");