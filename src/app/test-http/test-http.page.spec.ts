import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestHttpPage } from './test-http.page';

describe('TestHttpPage', () => {
  let component: TestHttpPage;
  let fixture: ComponentFixture<TestHttpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHttpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHttpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
