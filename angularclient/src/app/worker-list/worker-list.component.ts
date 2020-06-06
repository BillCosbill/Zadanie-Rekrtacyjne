import { Component, OnInit } from '@angular/core';
import {Worker} from '../_models/worker';
import {FirmService} from '../_services/firm.service';
import {ActivatedRoute} from '@angular/router';
import {WorkerService} from '../_services/worker.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {

  firmId: number;
  workers: Worker[];
  workerInModal: Worker = new Worker(null, null, null, null, null, null);;


  constructor(private firmService: FirmService, private route: ActivatedRoute, private workerService: WorkerService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.firmId = +params['id'];
    });

    this.firmService.getFirm(this.firmId).subscribe(result => {
      this.workers = result.workers;
    });
  }

  statusToString(status: boolean): string{
    if (status) {
      return 'Aktywny';
    } else {
      return 'Nieaktywny';
    }
  }

  changeStatus(worker: Worker): void {
    worker.status = !worker.status;
    this.workerService.updateWorker(worker.id, worker).subscribe(() => this.ngOnInit());
  }

  editWorker(worker: Worker): void {
    this.workerService.updateWorker(worker.id, worker).subscribe(() => this.ngOnInit());
  }

  openModal(worker: Worker) {
    this.workerInModal = new Worker(null, null, null, null, null, null);
    this.workerInModal = worker;
  }

  openAddingWorkerWindow() {
    this.workerInModal = new Worker(null, null, null, null, null, null);
  }

  deleteWorker(worker: Worker) {
    this.workerService.deleteWorker(worker).subscribe(() => this.ngOnInit());
  }

  addWorker(worker: Worker) {
    this.workerService.addWorker(this.firmId, worker).subscribe(() => this.ngOnInit());
  }
}
