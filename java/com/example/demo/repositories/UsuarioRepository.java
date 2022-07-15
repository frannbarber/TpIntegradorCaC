package com.example.demo.repositories;
 
import com.example.demo.models.*;
import java.util.ArrayList;
import com.example.demo.models.UsuarioModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UsuarioRepository extends CrudRepository<UsuarioModel,Long>{
   //CrudRepository hace toda la magia de Spring
public abstract ArrayList<UsuarioModel> findByPrioridad(Integer prioridad);
}
