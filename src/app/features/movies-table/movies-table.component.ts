import { Component, inject, OnInit } from '@angular/core';
import { Movie } from '../../core/interfaces/movie.interface';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import {CommonModule} from '@angular/common';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzFormModule} from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { MovieService } from '../../core/services/movie.service';
import { RatingPipe } from "../../core/pipes/rating.pipe";

@Component({
  selector: 'app-movies-table',
  standalone: true,
  imports: [NzTableModule, NzDividerModule, CommonModule, NzButtonModule, NzFormModule, NzInputModule, NzModalModule, FormsModule, ReactiveFormsModule, NzPaginationModule, RatingPipe],
  templateUrl: './movies-table.component.html',
  styleUrl: './movies-table.component.scss'
})

export class MoviesTableComponent implements OnInit {
openWindow() {
throw new Error('Method not implemented.');
}
  movieService = inject(MovieService);
  
  form!: FormGroup;;
  displayData: Movie[]=[];
  selectedMovie: Movie | null = null;
  isEditMode = false;
  isVisible = false;
  pageIndex = 1;
  total = 0;
  pageSize = 8;

  ngOnInit() 
  {
    console.log("initializare");
    this.initializeForm();
    console.log("form initialized", this.form);
    this.loadMovies();
  }

  initializeForm() {
    this.form = new FormGroup({
      title: new FormControl('', {validators: [Validators.required]}),
      year: new FormControl('', {validators: [Validators.required]}),
      genre: new FormControl('', {validators: [Validators.required]}),
      director: new FormControl('', {validators: [Validators.required]}),
      rating: new FormControl('', {validators: [Validators.required]}),
      description: new FormControl('', {validators: [Validators.required]})
    });
  }

  private loadMovies() {
    const movies = this.movieService.getMovies();
    this.total = movies.length;
    this.updateDisplayData();
  }

  handleOk() {
    const movieData: Movie = {
      id: this.isEditMode && this.selectedMovie ? this.selectedMovie.id : this.generateNewId(),
      title: this.form.controls['title'].value,
      year: this.form.controls['year'].value,
      genre: this.form.controls['genre'].value,
      director: this.form.controls['director'].value,
      rating: this.form.controls['rating'].value,
      description: this.form.controls['description'].value
    };

    if(this.isEditMode){
      this.movieService.updateMovie(movieData);
    }
    else {
      this.movieService.addMovie(movieData);
    }
    //this.updateDisplayData();
    this.loadMovies();
    this.isVisible = false;
    this.form.reset();
    this.selectedMovie = null;
    this.isEditMode = false;
  }
  generateNewId(): number {
    return this.movieService.getMovies().length + 1;
  }

  handleCancel() {
    this.isVisible = false;
    this.form.reset();
    this.selectedMovie = null;
    this.isEditMode = false;
  }

  onPageChange(page: number):void {
    this.pageIndex = page;
    this.updateDisplayData();
  }

  updateDisplayData() 
  {
    const movies = this.movieService.getMovies();
    this.displayData = movies.slice((this.pageIndex - 1) * this.pageSize, this.pageIndex * this.pageSize);
    this.total = movies.length;
  }

  editMovie(movie: Movie) {
    console.log("editMovie called", movie);
    this.isEditMode = true;
    this.selectedMovie = movie;
    this.form.patchValue(movie);
    console.log("form patched with", this.form.value);
    this.isVisible = true;
  }

  addMovie() {
    console.log("addMovie called");
    this.isEditMode = false;
    this.selectedMovie = null;
    this.form.reset();
    this.isVisible = true;
  }

}
