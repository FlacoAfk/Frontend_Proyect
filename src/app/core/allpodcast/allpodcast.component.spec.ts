import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpodcastComponent } from './allpodcast.component';

describe('AllpodcastComponent', () => {
  let component: AllpodcastComponent;
  let fixture: ComponentFixture<AllpodcastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllpodcastComponent]
    });
    fixture = TestBed.createComponent(AllpodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
