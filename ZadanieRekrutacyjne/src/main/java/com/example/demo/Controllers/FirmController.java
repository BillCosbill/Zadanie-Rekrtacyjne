package com.example.demo.Controllers;

import com.example.demo.Models.Address;
import com.example.demo.Models.Firm;
import com.example.demo.Repository.AddressRepository;
import com.example.demo.Repository.FirmRepository;
import com.example.demo.Repository.ObtainingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
public class FirmController {
    @Autowired
    FirmRepository firmRepository;

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    ObtainingRepository obtainingRepository;

    @GetMapping("/firm")
    public List<Firm> findAll(){
        return firmRepository.findAll();
    }

    @GetMapping("/getFirm")
    public Firm getFirm(@RequestParam Integer id){
        return firmRepository.findById(id).get();
    }

    @PostMapping("/firm")
    public void addFirm(@RequestBody Firm firm){
        obtainingRepository.save(firm.getObtaining());
        firm.getAddresses().forEach(x -> {
            addressRepository.save(x);
        });
        firmRepository.save(firm);
    }

    @DeleteMapping("/firm")
    public void deleteFirm(@RequestParam Integer id){
        firmRepository.deleteById(id);
    }

    @PutMapping("/firm")
    public Firm updatePerson(@RequestBody Firm firm, @RequestParam Integer id){

        List<Address> newAddresses = new ArrayList<>();

        firm.getAddresses().forEach(add -> {
            Optional<Address> address = addressRepository.findById(add.getId());
            if(address.isPresent()){
                Address updatedAddres = address.get();
                updatedAddres = add;
                addressRepository.save(updatedAddres);
            } else {
                newAddresses.add(add);
                addressRepository.save(add);
            }
        });

        obtainingRepository.save(firm.getObtaining());

        return firmRepository.findById(id).map(x -> {
            x.setName(firm.getName());
            x.setNip(firm.getNip());
            x.setKrs(firm.getKrs());
            x.setRegon(firm.getRegon());
            x.setLegalForm(firm.getLegalForm());
            x.setPhoneNumber(firm.getPhoneNumber());
            x.setEmail(firm.getEmail());
            x.setAdditionalInformations(firm.getAdditionalInformations());
            x.setAddresses(firm.getAddresses());
            x.setObtaining(firm.getObtaining());
            x.setWorkers(firm.getWorkers());
            return firmRepository.save(firm);
        }).orElseGet(() -> firmRepository.save(firm));
    }
}
