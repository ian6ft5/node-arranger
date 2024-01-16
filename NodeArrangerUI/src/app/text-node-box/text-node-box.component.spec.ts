import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextNodeBoxComponent } from './text-node-box.component';

describe('TextNodeBoxComponent', () => {
  let component: TextNodeBoxComponent;
  let fixture: ComponentFixture<TextNodeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextNodeBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextNodeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
