import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  // Arreglo de tareas
  taskArray = [
    { taskId: 1, taskName: 'Tarea de ejemplo', isCompleted: false }
  ];
  
  // Variable para almacenar el nombre de la tarea actualmente editada
  editedTaskName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // Método para manejar el envío del formulario
  onSubmit(form: NgForm) {
    if (this.editingIndex === -1) {
      // Crear una nueva tarea si no se está editando ninguna
      this.taskArray.push({
        taskId: this.taskArray.length + 1,
        taskName: form.controls['task'].value,
        isCompleted: false
      });
    } else {
      // Editar una tarea existente si se está en modo de edición
      this.taskArray[this.editingIndex].taskName = form.controls['task'].value;
      // Restablecer el índice de edición
      this.editingIndex = -1;
    }
  
    form.reset();
  }

  // Método para eliminar una tarea según su índice en el arreglo
  onDelete(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1);
  }

  // Método para marcar o desmarcar una tarea como completada según su índice en el arreglo
  onCheck(index: number) {
    console.log(this.taskArray);

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  // Índice de la tarea que se está editando (-1 si no hay ninguna tarea en edición)
  editingIndex: number = -1;

  // Método para activar el modo de edición de una tarea según su índice en el arreglo
  onEdit(index: number) {
    this.editingIndex = index;
    const task = this.taskArray[index];
    // Actualizar el valor del campo de entrada con el nombre de la tarea seleccionada
    // Puedes usar una variable de la clase para almacenar el nombre de la tarea actualmente editada
  }
}
