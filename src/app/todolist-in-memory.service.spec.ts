import { TestBed } from '@angular/core/testing';

import { TodolistInMemoryService } from './todolist-in-memory.service';

describe('TodolistInMemoryService', () => {
  let service: TodolistInMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodolistInMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
