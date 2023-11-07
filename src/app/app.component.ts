import { Component, OnInit } from '@angular/core'; //Ciclo de vida
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //Para nuestro formulario
import { AutoresService } from './services/autores/autores.service'; //Importamos el servicio creado de "Autores"
import { EditorialesService } from './services/editoriales/editoriales.service';//Importamos el servicio creado de "Editoriales"
import { CategoriasService } from './services/categorias/categorias.service';//Importamos el servicio creado de "Categorias"
import { LibrosService } from './services/libros/libros.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //Declarando a nuestro formulario:
  librosForm: FormGroup = new FormGroup({});

  //Creando nuestro arreglos:
  autores: any;
  categorias: any;
  editoriales:any;
  libros:any;


  constructor(
    public fb: FormBuilder,
    public autoresService: AutoresService,
    public editorialesService: EditorialesService,
    public categoriasService: CategoriasService,
    public librosService: LibrosService,
  ) {

  }

  ngOnInit(): void {

    //Creando campos de nuestro formulario:
    this.librosForm = this.fb.group({
      id:[''],
      titulo: ['', Validators.required],
      fechalan: ['', Validators.required],
      idioma: ['', Validators.required],
      paginas: ['', Validators.required],
      descripcion: ['', Validators.required],
      portada:['', Validators.required],
      autor: ['', Validators.required],
      categoria: ['', Validators.required],
      editorial: ['', Validators.required],
    })




    /*---UTILIZANDO LOS SERVICIOS---- */
    this.autoresService.getallAutores().subscribe(resp=>{
      this.autores=resp;  
    },
    error=>{console.error(error)})

    this.categoriasService.getallCategorias().subscribe(resp=>{
      this.categorias=resp;  
    },
    error=>{console.error(error)})

    this.editorialesService.getallEditoriales().subscribe(resp=>{
      this.editoriales=resp;  
    },
    error=>{console.error(error)})

    this.librosService.getallLibros().subscribe(resp=>{
      this.libros=resp;  
    },
    error=>{console.error(error)})
    
  }

  /*Registrando libros:*/
  guardar(): void{
    this.librosService.guardarLibro(this.librosForm.value).subscribe(resp=>{
      this.librosForm.reset();
      this.libros=this.libros.filter((libro: any)=> resp.id != libro.id);
      this.libros.push(resp);
    },
    error=>{console.error(error)
    })
  }

  /*Eliminando Libros */
 eliminar(libro:any){
  this.librosService.eliminarLibro(libro.id).subscribe(resp=>{
    if(resp===true){
      this.libros.pop(libro);
    }
  })
 }

 editar(libro:any){
  this.librosForm.setValue({
    id:libro.id,
    titulo: libro.titulo,
    fechalan: libro.fechalan,
    idioma: libro.idioma,
    paginas: libro.paginas,
    descripcion: libro.descripcion,
    portada:libro.portada,
    autor: libro.autor,
    categoria: libro.categoria,
    editorial: libro.editorial,
  })
 }
}
