export default class FaseripItemSheet extends ItemSheet {

  get template() {
      const path = "systems/faserip/templates/item";
      return `${path}/weapon-sheet.html`;
  }

  getData() {
      const data = super.getData();

      data.config = CONFIG.FASERIP;

      return data;
  }
  
}