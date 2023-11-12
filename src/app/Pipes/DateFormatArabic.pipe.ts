import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatArabic'
})
export class DateFormatArabicPipe implements PipeTransform {
  regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?$/  ;
    transform(value: string): string {
    // Check if the value is in the expected format
    if (!value.match(this.regex)) {
      return 'تاريخ غير صالح';
    }

    // Define Arabic months
    const arabicMonths = [
      'يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو',
      'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ];

    // Split the input date into its components
    const parts = value.split('T');
    const datePart = parts[0];
    const timePart = parts[1];

    const dateComponents = datePart.split('-');
    const timeComponents = timePart.split(':');

    // Format the date in Arabic
    const day = +dateComponents[2];
    const month = +dateComponents[1] - 1; // Subtract 1 to match array indexing
    const year = dateComponents[0];

    let hours = +timeComponents[0];
    const minutes = +timeComponents[1];

    const ampm = hours >= 12 ? 'م' : 'ص';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be displayed as 12

    const formattedDate = `${day}/${arabicMonths[month]}/${year}, ${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    
    return formattedDate;
  }
}
