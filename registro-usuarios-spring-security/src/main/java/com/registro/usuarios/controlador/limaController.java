package com.registro.usuarios.controlador;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.registro.usuarios.modelo.PageGeneric;


@Controller
@RequestMapping("/ciudad")
public class limaController {
	
	@GetMapping({"/lima", "/home"})
	public String inicio(Model model) {
		
			
		PageGeneric pagina = new PageGeneric();
		
		pagina.setTitlePage("App Capacitaciones");
		pagina.setTitle("Mi primera aplicacion con Spring Boot");
		pagina.setMessage("Bienvenidos todos :D !!!");
		pagina.setFooter("Pie de pagina");
		
		
	
		
		return "lima";
	}
	
}
