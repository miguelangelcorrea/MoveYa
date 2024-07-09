package com.registro.usuarios.controlador;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.registro.usuarios.modelo.PageGeneric;


@Controller
@RequestMapping("/pre")
public class precompraController {
	
	@GetMapping({"/compra", "/home"})
	public String inicio(Model model) {
		
			
		PageGeneric pagina = new PageGeneric();
		
		
		return "precompra";
	}
	
}
