import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-dialog-create-new',
    template: `<h1 mat-dialog-title>Add file</h1>
      <mat-dialog-content>
      <h1>Create New</h1>
      </mat-dialog-content>
      <mat-dialog-actions>
        <button mat-button type="submit">Add</button>
        <button mat-button type="button" (click)="dialogRef.close()">Cancel</button>
      </mat-dialog-actions>`
})
export class CreateNewDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<CreateNewDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        // this.dialogRef.close();
    }
}
