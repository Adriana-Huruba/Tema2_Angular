import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'rating'})
export class RatingPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 0 || value > 10) {
      return 'Invalid rating';
    }
    return '★'.repeat(Math.round(value)) + '☆'.repeat(10 - Math.round(value));
  }
}