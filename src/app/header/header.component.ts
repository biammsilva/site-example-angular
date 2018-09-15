import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = "Site de Teste";
  menu_items = [{"link":"", "texto": "Home"},
                {"link":"quem-somos", "texto": "Quem somos"},
                {"link":"loja", "texto": "Loja"},
                {"link":"blog", "texto": "Blog"},
                {"link":"contato", "texto": "Contato"}];


  constructor() { }

  ngOnInit() {
  }

}
