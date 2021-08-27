export default class FaseripHeroSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: "systems/faserip/templates/actor/hero-sheet.html",
      classes: ["FASERIP", "sheet", "hero"]
    });
  }


getData() {
  const data = super.getData();
  data.config = CONFIG.FASERIP;
  data.weapons = data.items.filter(function(item) {return item.type == "weapon"})
  return data;
  }

}