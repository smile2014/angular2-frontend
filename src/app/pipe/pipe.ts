import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'json2StringAl' })
export class Json2StrAlPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
        let keys: string[] = [];
        for (var key in value) {
            keys.push(key);
        }
        return keys;
    }
}