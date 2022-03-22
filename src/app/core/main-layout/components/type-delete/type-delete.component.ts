import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    Renderer2,
    ViewChild
  } from "@angular/core";
  
  @Component({
    selector: "app-type-delete",
    templateUrl: "./type-delete.component.html",
    styleUrls: ["./type-delete.component.scss"]
  })
  export class TypeDeleteComponent implements AfterViewInit {
    @ViewChild("textElement")
      textElement!: ElementRef;
    @ViewChild("blinkElement")
      blinkElement!: ElementRef;
  
    @Input() wordArray: string[] = [
      "Web Developer",
      "Angular Developer",
      "Frontend Developer",
      "Backend Developer",
      "NodeJS Developer",
      "App Developer",
      "Full Stack Developer",
      "Mobile Developer",
      "IOS Developer",
      "Software Engineer",
      "Cloud Engineer",
    ];
    @Input() textColor = "#afafaf";
    @Input() fontSize = "30px";
    @Input() blinkWidth = "2px";
    @Input() typingSpeedMilliseconds = 100;
    @Input() deleteSpeedMilliseconds = 50;
  
    private i = 0;

    private borderRightColorActive = true;
    private borderRightColorSecondColor = 'transparent';
  
    constructor(private renderer: Renderer2) {}
  
    ngAfterViewInit(): void {
      this.initVariables();
      this.typingEffect();
      this.blinkCursor();
      setInterval(() => {
        this.blinkCursor();
      }, 500);
    }

    

    private blinkCursor() {
      const color = this.borderRightColorActive ? this.textColor : this.borderRightColorSecondColor;
      this.borderRightColorActive = !this.borderRightColorActive;
    
      return this.renderer.setStyle(
        this.blinkElement.nativeElement,
        "border-right-color",
        color,
      );
    }
  
    private initVariables(): void {
      this.renderer.setStyle(
        this.textElement.nativeElement,
        "color",
        this.textColor
      );
      this.renderer.setStyle(
        this.textElement.nativeElement,
        "font-size",
        this.fontSize
      );
      this.renderer.setStyle(this.textElement.nativeElement, "padding", "0.1em");
  
      this.renderer.setStyle(
        this.blinkElement.nativeElement,
        "border-right-width",
        "3px",
        // this.blinkWidth,
      );
      this.renderer.setStyle(
        this.blinkElement.nativeElement,
        "font-size",
        this.fontSize
      );
    }

    private removeBlinking() {
      this.borderRightColorSecondColor = this.textColor;
    }

    private addBlinking() {
      this.borderRightColorSecondColor = 'transparent';
    }
  
    private typingEffect(): void {
      const word = this.wordArray[this.i].split("");
      const loopTyping = () => {
        this.removeBlinking();
        if (word.length > 0) {
          this.textElement.nativeElement.innerHTML += word.shift();
        } else {
          this.addBlinking();
          setTimeout(() => {
            this.deletingEffect();
          }, 5000);
          return;
        }
        setTimeout(loopTyping, this.typingSpeedMilliseconds);
      };
      setTimeout(() => {
        loopTyping();
      }, 1000);
    }
  
    private deletingEffect(): void {
      const word = this.wordArray[this.i].split("");
      const loopDeleting = () => {
        this.removeBlinking();
        if (word.length > 0) {
          word.pop();
          this.textElement.nativeElement.innerHTML = word.join("");
        } else {
          if (this.wordArray.length > this.i + 1) {
            this.i++;
          } else {
            this.i = 0;
          }
          this.typingEffect();
          return false;
        }
        this.addBlinking();
        setTimeout(loopDeleting, this.deleteSpeedMilliseconds);
      };
      loopDeleting();
    }
  }
  