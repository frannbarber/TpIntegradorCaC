package com.example.demo.models;
import javax.persistence.*;
@Entity             // que es una entidad (tabla)
@Table(name = "usuario")    // que la tabla la llamen usuario
public class UsuarioModel {
    @Id        // que el atributo id es una clave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY)//autoincremento
    @Column(unique = true, nullable = false) //que es unique y not null
    private Long id;
 
    private String nombre;
    private String apellido;
    private String email;
    private Integer total;
    private Integer cantidad;
    private Integer prioridad;
    
    public Integer getTotal() {
        return total;
    }
    public void setTotal(Integer total) {
        this.total = total;
    }
    public void setCantidad(Integer cantidad){
        this.cantidad = cantidad;
    }
    public Integer getCantidad(){
        return cantidad;
    }
    public void setPrioridad(Integer prioridad){
        this.prioridad = prioridad;
    }
    public Integer getPrioridad(){
        return prioridad;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApellido() {
        return apellido;
    }
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
}
