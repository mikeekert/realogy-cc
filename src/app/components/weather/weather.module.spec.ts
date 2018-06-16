import { WeatherobjModule } from './weatherobj.module';

describe('WeatherobjModule', () => {
  let weatherModule: WeatherobjModule;

  beforeEach(() => {
    weatherModule = new WeatherobjModule();
  });

  it('should create an instance', () => {
    expect(weatherModule).toBeTruthy();
  });
});
