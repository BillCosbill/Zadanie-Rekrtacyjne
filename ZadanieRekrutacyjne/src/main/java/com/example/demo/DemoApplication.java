package com.example.demo;

import com.example.demo.Models.*;
import com.example.demo.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class DemoApplication {

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    FirmRepository firmRepository;

    @Autowired
    ObtainingRepository obtainingRepository;

    @Autowired
    PersonRepository personRepository;

    @Autowired
    WorkerRepository workerRepository;

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void fillDB(){
        Address a1 = new Address("Adres zamieszkania","Rzeczna","5","6","15-351","Białystok");
        Address a2 = new Address("Adres zamieszkania","Wolska","12","31","15-351","Białystok");
        Address a3 = new Address("Adres zameldowania","Lipowa","7","22","15-354","Białystok");
        Address a4 = new Address("Adres siedziby","Wiejska","5","13","15-314","Białystok");
        Address a5 = new Address("Adres magazynu","Sikorskiego","1","11","15-312","Wasilków");
        Address a6 = new Address("Adres siedziby","Pogodna","2","22","15-352","Białystok");
        Address a7 = new Address("Adres zamieszkania","Magazynowa","5","6","15-341","Białystok");
        Address a8 = new Address("Adres zamieszkania","Raginisa","7","77","15-312","Białystok");
        Address a9 = new Address("Adres zamieszkania","Kawaleryjska","3","13","15-531","Białystok");
        addressRepository.save(a1);
        addressRepository.save(a2);
        addressRepository.save(a3);
        addressRepository.save(a4);
        addressRepository.save(a5);
        addressRepository.save(a6);
        addressRepository.save(a7);
        addressRepository.save(a8);
        addressRepository.save(a9);

        Obtaining o1 = new Obtaining("Rekomendacja", "Adam Maćko");
        Obtaining o2 = new Obtaining("Media społecznościowe", "facebook");
        Obtaining o3 = new Obtaining("Strona www");
        obtainingRepository.save(o1);
        obtainingRepository.save(o2);
        obtainingRepository.save(o3);

        List<Address> l1 = new ArrayList<>();
        List<Address> l2 = new ArrayList<>();
        List<Address> l3 = new ArrayList<>();
        List<Address> l6 = new ArrayList<>();
        List<Address> l7 = new ArrayList<>();
        List<Address> l8 = new ArrayList<>();
        List<Address> l9 = new ArrayList<>();

        l1.add(a1);
        l2.add(a2);
        l3.add(a3);
        l6.add(a6);
        l7.add(a7);
        l8.add(a8);
        l9.add(a9);

        personRepository.save(new Person("Jacek","Małek","85121281231","jacek@onet.pl","123123123","Nazywam się Jacek Małek",l1,o1));
        personRepository.save(new Person("Jan","Kowalski","01010342563","jan@o2.pl","345345345","Kiedyś coś tu dodam",l2,o2));
        personRepository.save(new Person("Joanna","Klimaszewska","91012412401","asia@wp.pl","748234123","Dzień dobry!",l3,o3));
        personRepository.save(new Person("Ewa","Kasza","74812931415","ewa@onet.pl","636363636","",l7,o2));
        personRepository.save(new Person("Jan","Starosta","87512391231","jan@onet.pl","532574832","",l8,o1));
        personRepository.save(new Person("Henryk","Cieślik","68912315732","henryk@onet.pl","757371237","",l9,o3));

        Worker w1 = new Worker("Bob","Budowniczy","Murarz","535111777");
        Worker w2 = new Worker("Alicja","Liczydło","Analityk","155555666");
        Worker w3 = new Worker("Andrzej","Mieczko","Programista","777333111");

        Worker w4 = new Worker("Gabriela","Kolanko","Księgowa","374812514");
        Worker w5 = new Worker("Janusz","Mleczak","Ochroniarz","564368420");

        workerRepository.save(w1);
        workerRepository.save(w2);
        workerRepository.save(w3);
        workerRepository.save(w4);
        workerRepository.save(w5);

        List<Worker> wl1 = new ArrayList<>();
        wl1.add(w1);
        wl1.add(w2);
        wl1.add(w3);

        List<Worker> wl2 = new ArrayList<>();
        wl2.add(w4);
        wl2.add(w5);

        List<Address> l4 = new ArrayList<>();
        l4.add(a4);
        l4.add(a5);

        firmRepository.save(new Firm("Guugle","1234567890","361234738","9988776655","spółka cywilna","111222333","guugle@onet.pl","Dobra firma",l4,o3,wl1));
        firmRepository.save(new Firm("SecurityTeam","3628751923","637212732","7418293851","spółka prawna","764723412","st@gmail.com","Dobra firma",l6,o2,wl2));

    }

}
