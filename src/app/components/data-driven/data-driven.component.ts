import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

	myFormList!: FormGroup;
	myForm!: FormGroup;
	constructor(
		private formBuilder: FormBuilder
	) { }

	states = [
		{name: "São Paulo", sigla:"SP"},
		{name: "Ceará", sigla:"CE"},
		{name: "Jaraguá do Sul", sigla:"SC"}
	]

	ngOnInit(): void {
		this.myForm = this.formBuilder.group({
			name: [null, [Validators.required, Validators.minLength(5)], [/* Validaçõe assincronas(métodos etc...) */]],
			email: [],
			states: [],
			empregado: []
		});
		this.myForm.get('name')?.valueChanges.subscribe(data => {console.log(data)})
	}

}
