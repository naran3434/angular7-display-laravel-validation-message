# Angular 7 Directive to Display Laravel Validation Message

Display error message from laravel validation.

# Install
1. Generate new directive
2. Import directive to app.module / parent.module

# Usage

``` html
<p appServerValidationError [label]="'key'" [errors]="messageArray"></p>

```
