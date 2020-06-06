package com.example.demo.Controllers;

import com.example.demo.Models.Address;
import com.example.demo.Repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class AddressController {

    @Autowired
    AddressRepository addressRepository;

    @GetMapping("/address")
    public List<Address> findAll(){
        return addressRepository.findAll();
    }

    @PostMapping("/address")
    public void addAddress(@RequestBody Address address){
        addressRepository.save(address);
    }

    @DeleteMapping("/address/{id}")
    public void deleteAddress(@PathVariable Integer id){
        System.out.println(id);
        addressRepository.deleteById(id);
        System.out.println("USUNIĘTO");
    }
}
