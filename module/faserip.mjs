import { FASERIP } from "./helpers/config.mjs"
import FaseripHeroSheet from "./sheets/FaseripActorSheet.mjs"
import FaseripItemSheet from "./sheets/FaseripItemSheet.mjs";

async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/faserip/templates/actor/parts/hero-attrib-block.html",
    ];

    return loadTemplates(templatePaths)
}


Hooks.once("init", function() {
    console.log("faserip | Initialising FASERIP Super Hero Game System");

    CONFIG.FASERIP = FASERIP;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("faserip", FaseripItemSheet, { makeDefault: true});

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("faserip", FaseripHeroSheet, { makeDefault: true});

    preloadHandlebarsTemplates();
})