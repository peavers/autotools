// import { HttpClient } from '@angular/common/http';
// import { environment } from '../../../environments/environment';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { ScheduledJobDialogComponent, ScheduledJobDialogData } from '../../shared/components/rule-dialog/scheduled-job-dialog.component';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatDialog } from '@angular/material/dialog';
// import { RuleDto } from '../domain/modules';
// import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
//
// @Injectable({
//   providedIn: 'root',
// })
// export class RuleService {
//   private readonly endpoint;
//
//   private rules$: BehaviorSubject<RuleDto[]> = new BehaviorSubject([]);
//
//   constructor(private httpClient: HttpClient, private snackbar: MatSnackBar, private dialog: MatDialog) {
//     this.endpoint = `${environment.api}/root/rules`;
//
//     this.httpClient.get<RuleDto[]>(`${this.endpoint}`).subscribe((profiles: RuleDto[]) => this.rules$.next(profiles));
//   }
//
//   findAll(): Observable<RuleDto[]> {
//     return this.rules$.asObservable();
//   }
//
//   addRule(): void {
//     const data: ScheduledJobDialogData = { scheduledJob: {} };
//
//     this.dialog
//       .open(ScheduledJobDialogComponent, { data, disableClose: true })
//       .afterClosed()
//       .subscribe((rule: RuleDto) => {
//         if (rule === undefined) { return; }
//
//         this.save(rule);
//       });
//   }
//
//   editRule(rule: RuleDto): void {
//     const data: ScheduledJobDialogData = { scheduledJob: rule };
//
//     this.dialog
//       .open(ScheduledJobDialogComponent, { data, disableClose: true })
//       .afterClosed()
//       .subscribe((rule) => {
//         if (rule === undefined) { return; }
//
//         this.save(rule);
//       });
//   }
//
//   deleteRule(rule: RuleDto): void {
//     this.dialog
//       .open(ConfirmDialogComponent)
//       .afterClosed()
//       .subscribe((shouldDelete) => {
//         if (shouldDelete) { this.delete(rule); }
//       });
//   }
//
//   save(rule: RuleDto): void {
//     this.httpClient.post<RuleDto>(`${this.endpoint}`, rule).subscribe((result: RuleDto) => {
//       if (!this.rules$.value.some((f: RuleDto) => f.id === result.id)) {
//         this.rules$.next([...this.rules$.value, result]);
//       }
//
//       this.snackbar.open('Success');
//     });
//   }
//
//   delete(rule: RuleDto): void {
//     this.rules$.next([...this.rules$.value.filter((r: RuleDto) => r.id !== rule.id)]);
//     this.httpClient.request('delete', `${this.endpoint}/delete`, {body: rule}).subscribe();
//
//     this.snackbar.open('Success');
//   }
// }
