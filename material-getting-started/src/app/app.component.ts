import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myControl = new FormControl();
  options: string[]  = ['One', 'Two', 'Three'];
  title = 'material-getting-started';
  myAge: number = 40;
  isMan: boolean = true;
  name: string;
  animal: string;

  constructor(public dialog: MatDialog, iconRegistry: MatIconRegistry, santitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('thumbs-up', santitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));    
  }

  openDialog(): void {
    console.log(`name: ${this.name}`);
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');
      console.log(`result: ${result}`);
      this.animal = result;
    });
    dialogRef.afterOpened().subscribe(() => {
      console.log('dialog opened');
    });
  }
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html'
})
export class DialogOverviewExampleDialog {
  constructor (public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
