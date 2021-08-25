import { FASERIP } from "./helpers/config.mjs"
import { FaseripActorSheet } from "./sheets/actor-sheet.mjs";
import FaseripItemSheet from "./sheets/FaseripItemSheet.mjs";
import FaseripActorSheet from "./sheets/actor-sheet.mjs"


Hooks.once("init", function() {
    console.log("faserip | Initialising FASERIP Super Hero Game System");

    CONFIG.FASERIP = FASERIP;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("faserip", FaseripItemSheet, { makeDefault: true});

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("faserip", FaseripActorSheet, { makeDefault: true});
})