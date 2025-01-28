import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMessagesItemComponent } from './list-messages-item.component';

describe('ListMessagesItemComponent', () => {
  let component: ListMessagesItemComponent;
  let fixture: ComponentFixture<ListMessagesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMessagesItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMessagesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
