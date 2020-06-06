package com.example.demo.Controllers;

import com.example.demo.Models.Address;
import com.example.demo.Models.Obtaining;
import com.example.demo.Models.Person;
import com.example.demo.Repository.ObtainingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ObtainingController {

    @Autowired
    ObtainingRepository obtainingRepository;

    @GetMapping("/obtaining")
    public List<Obtaining> findAll(){
        return obtainingRepository.findAll();
    }

    @GetMapping("/getObtaining")
    public Obtaining getObtaining(@RequestParam Integer id){
        return obtainingRepository.findById(id).get();
    }

    @PostMapping("/obtaining")
    public void addObtaining(@RequestBody Obtaining obtaining){
        obtainingRepository.save(obtaining);
    }

    @DeleteMapping("/obtaining/{id}")
    public void deleteObtaining(@PathVariable Integer id){
        System.out.println(id);
        obtainingRepository.deleteById(id);
        System.out.println("USUNIĘTO");
    }

}
