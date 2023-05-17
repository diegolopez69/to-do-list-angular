import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  taskArray = [
    { taskId: 1, taskName: 'Brush teeth', isCompleted: false }
  ];
  editedTaskName: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.editingIndex === -1) {
      // Crear una nueva tarea
      this.taskArray.push({
        taskId: this.taskArray.length + 1,
        taskName: form.controls['task'].value,
        isCompleted: false
      });
    } else {
      // Editar una tarea existente
      this.taskArray[this.editingIndex].taskName = form.controls['task'].value;
      // Restablecer el índice de edición
      this.editingIndex = -1;
    }
  
    form.reset();
  }
  

  onDelete(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    console.log(this.taskArray);

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }





  editingIndex: number = -1;

onEdit(index: number) {
  this.editingIndex = index;
  const task = this.taskArray[index];
  // Actualizar el valor del campo de entrada con el nombre de la tarea seleccionada
  // Puedes usar una variable de la clase para almacenar el nombre de la tarea actualmente editada
}


}
