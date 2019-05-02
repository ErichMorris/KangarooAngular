import { TestBed } from '@angular/core/testing';

import { MenuItemService } from './menuItems.service';

describe('MenuItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuItemService = TestBed.get(MenuItemService);
    expect(service).toBeTruthy();
  });
});
