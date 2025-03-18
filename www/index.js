console.log("Initializing WASM...");
import init from "../pkg/chibi_world.js";

init().then(() => {
    console.log("WASM Loaded Successfully! 🎉");
}).catch(err => {
    console.error("Failed to load WASM:", err);
});