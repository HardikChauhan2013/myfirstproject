import { TestBed } from '@angular/core/testing';

import { TodolistInDBService } from './todolist-in-db.service';

describe('TodolistInDBService', () => {
  let service: TodolistInDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodolistInDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
