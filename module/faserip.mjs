import { FASERIP } from "./helpers/config.mjs"
import FaseripItemSheet from "./sheets/FaseripItemSheet.mjs";


Hooks.once("init", function() {
    console.log("faserip | Initialising FASERIP Super Hero Game System");

    CONFIG.FASERIP = FASERIP;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("faserip", FaseripItemSheet, { makeDefault: true});
})