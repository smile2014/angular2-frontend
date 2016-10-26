import { Component } from '@angular/core';

@Component({
  selector: 'json-pipe',
  template: `
  <h1>JSON PIPE</h1>
  <div>
    <p>Without JSON pipe: "object"</p>
    <pre>{{object}}</pre>
    <p>With JSON pipe: "object | json"</p>
    <pre>{{object | json}}</pre>
  </div>`
})
export class JsonPipeComponent {
  object: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
}