import {ComponentFixture,TestBed} from "@angular/core/testing";
import {Errore404Component} from "./errore404.component";

describe("Errore404Component", () => {
  let component: Errore404Component;
  let fixture: ComponentFixture<Errore404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Errore404Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Errore404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
