package com.registro.usuarios.modelo;

public class PageGeneric {
	private String titlePage;
	private String title;
	private String message;	
	private String footer;
	
	
	public String getFooter() {
		return footer;
	}
	public void setFooter(String footer) {
		this.footer = footer;
	}
	public String getTitlePage() {
		return titlePage;
	}
	public void setTitlePage(String titlePage) {
		this.titlePage = titlePage;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
}
