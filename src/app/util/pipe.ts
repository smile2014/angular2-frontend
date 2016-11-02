import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
        let keys: string[] = [];
        for (var key in value) {
            keys.push(key);
        }
        return keys;
    }
}