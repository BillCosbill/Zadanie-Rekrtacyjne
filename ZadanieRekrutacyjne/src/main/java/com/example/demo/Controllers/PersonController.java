package com.example.demo.Controllers;

import com.example.demo.Models.Address;
import com.example.demo.Models.Obtaining;
import com.example.demo.Models.Person;
import com.example.demo.Models.Worker;
import com.example.demo.Repository.AddressRepository;
import com.example.demo.Repository.ObtainingRepository;
import com.example.demo.Repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
public class PersonController {

    @Autowired
    PersonRepository personRepository;

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    ObtainingRepository obtainingRepository;

    @GetMapping("/person")
    public List<Person> findAll(){
        return personRepository.findAll();
    }

    @GetMapping("/getPerson")
    public Person getPerson(@RequestParam Integer id){
        return personRepository.findById(id).get();
    }

    @PostMapping("/person")
    public void addPerson(@RequestBody Person person){
        obtainingRepository.save(person.getObtaining());
        person.getAddresses().forEach(x -> {
            addressRepository.save(x);
        });
        personRepository.save(person);
    }

    @DeleteMapping("/person")
    public void deletePerson(@RequestParam Integer id){
        personRepository.deleteById(id);
    }

    @PutMapping("/person")
    public Person updatePerson(@RequestBody Person person, @RequestParam Integer id){

        List<Address> newAddresses = new ArrayList<>();

        person.getAddresses().forEach(add -> {
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

        obtainingRepository.save(person.getObtaining());

        return personRepository.findById(id).map(x -> {
            x.setLastName(person.getLastName());
            x.setName(person.getName());
            x.setPesel(person.getPesel());
            x.setEmail(person.getEmail());
            x.setPhoneNumber(person.getPhoneNumber());
            x.setAdditionalInformations(person.getAdditionalInformations());
            x.setAddresses(person.getAddresses());
            x.setObtaining(person.getObtaining());
            return personRepository.save(person);
        }).orElseGet(() -> personRepository.save(person));
    }
}
