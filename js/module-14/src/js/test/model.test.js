import Model from '../model';

describe('Model class', () => {
    it('Should add item to grid', () => {
      const model = new Model();
  
      model.addItem('Url 1');
        
      expect(model.items).toEqual({ id: Date.now(), text: 'Url 1' });
    });
  
    it('Should remove item from grid', () => {
      const model = new Cart({ id: 12548774514, text: 'Url 1' });
  
      model.removeItem(12548774514);
  
      expect(model.items).toEqual({ });
    });
});