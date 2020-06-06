package com.example.demo.Controllers;

import com.example.demo.Models.Firm;
import com.example.demo.Models.Worker;
import com.example.demo.Repository.FirmRepository;
import com.example.demo.Repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
public class WorkerController {

    @Autowired
    WorkerRepository workerRepository;

    @Autowired
    FirmRepository firmRepository;

    @GetMapping("/worker")
    public List<Worker> findAll(){
        return workerRepository.findAll();
    }

    @GetMapping("/getWorker")
    public Worker getWorker(@RequestParam Integer id){
        return workerRepository.findById(id).get();
    }

    @PostMapping("/worker")
    public void addWorker(@RequestBody Worker worker, @RequestParam Integer id){
        Optional<Firm> firm = firmRepository.findById(id);

        if (firm.isPresent()){
            worker.setStatus(true);
            workerRepository.save(worker);
            List<Worker> newWorkersList = firm.get().getWorkers();
            newWorkersList.add(worker);
            firm.get().setWorkers(newWorkersList);

            firmRepository.save(firm.get());
        }

    }

    @DeleteMapping("/worker")
    public void deleteWorker(@RequestParam Integer id){
        firmRepository.findAll().forEach(firm -> {
            List<Worker> newWorkersList = new ArrayList<>();

            firm.getWorkers().forEach(firmWorker -> {
                if(firmWorker.getId() != id){
                    newWorkersList.add(firmWorker);
                }
            });
            firm.setWorkers(newWorkersList);
        });

        workerRepository.deleteById(id);
    }

    @PutMapping("/worker")
    public Worker updateWorker(@RequestBody Worker worker, @RequestParam Integer id){
        return workerRepository.findById(id).map(x -> {
            x.setLastName(worker.getLastName());
            x.setName(worker.getName());
            x.setPhoneNumber(worker.getPhoneNumber());
            x.setPosition(worker.getPosition());
            x.setStatus(worker.isStatus());
            return workerRepository.save(worker);
        }).orElseGet(() -> workerRepository.save(worker));
    }
}
