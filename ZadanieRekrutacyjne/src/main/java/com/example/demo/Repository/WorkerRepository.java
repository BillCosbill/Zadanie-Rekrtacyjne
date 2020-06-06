package com.example.demo.Repository;

import com.example.demo.Models.Worker;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkerRepository extends JpaRepository<Worker, Integer> {
}
