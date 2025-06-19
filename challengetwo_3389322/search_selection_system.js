class SearchSuggestionSystem {
    constructor(products) {
        this.products = [...products].sort();
    }

    getSuggestions(searchWord) {
        const suggestions = [];
        let prefix = '';

        for (const char of searchWord) {
            prefix += char;
            const idx = this.lowerBound(this.products, prefix);
            const currentSuggestions = this.products.slice(idx, idx + 3).filter(product => product.startsWith(prefix));
            suggestions.push(currentSuggestions);
        }
        return suggestions;
    }

    lowerBound(arr, target) {
        let left = 0;
        let right = arr.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
}

// Example usage
const products = ["jael","jarrod","jake","jason","james"];
const searchWord = "jael";
const system = new SearchSuggestionSystem(products);
console.log(system.getSuggestions(searchWord));
