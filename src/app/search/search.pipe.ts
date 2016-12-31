import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})

export class TruncateStringPipe implements PipeTransform {
    transform(value) {
        // Set the limit for the app title
        let limit = 30;
        if(value.length < limit){
            return value;
        }
        return value.substring(0, limit) + '...';
    }
}