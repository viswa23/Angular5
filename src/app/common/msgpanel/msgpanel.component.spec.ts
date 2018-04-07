import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MsgpanelComponent } from './msgpanel.component';


describe('MsgpanelComponent', () => {
  let component: MsgpanelComponent;
  let fixture: ComponentFixture<MsgpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgpanelComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(MsgpanelComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  });
    
  }));

  it('should create Message Panel Comp', ()=> {
    expect(component).toBeTruthy();
  });
});