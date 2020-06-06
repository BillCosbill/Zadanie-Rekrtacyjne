package com.example.demo.Repository;

import com.example.demo.Models.Firm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FirmRepository extends JpaRepository<Firm, Integer> {
}
